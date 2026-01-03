import pandas as pd
import json
import datetime
import os

def parse_time(val):
    if isinstance(val, datetime.time):
        return f"{val.hour:02d}:{val.minute:02d}"
    if isinstance(val, str):
        val = val.strip()
        try:
            # Handle "18:51" or "18.51"
            val = val.replace('.', ':')
            parts = val.split(':')
            if len(parts) == 2:
                h = int(parts[0])
                m = int(parts[1])
                return f"{h:02d}:{m:02d}"
        except:
            pass
    return None

def time_to_minutes(t_str):
    h, m = map(int, t_str.split(':'))
    return h * 60 + m

def parse_czarna(file_path):
    print(f"Parsing {file_path} (Drop Detection Mode)...")
    df = pd.read_excel(file_path, header=None)
    stops = []
    
    # Iterate rows
    for index, row in df.iterrows():
        # Skip header rows or empty rows
        first_col = str(row[0]).strip()
        if not first_col or first_col.lower().startswith('przystanek') or first_col == 'nan':
            continue
            
        stop_name = first_col
        
        # Collect all valid times with column index
        valid_times = []
        for col_idx, val in enumerate(row):
            if col_idx == 0: continue
            t_str = parse_time(val)
            if t_str:
                valid_times.append({
                    'col': col_idx,
                    'time': t_str,
                    'mins': time_to_minutes(t_str)
                })
        
        if not valid_times:
            continue
            
        # Detect Drop
        drop_index = -1
        for i in range(len(valid_times) - 1):
            if valid_times[i]['mins'] > valid_times[i+1]['mins']:
                drop_index = i
                break
        
        workdays = []
        weekends = []
        
        if drop_index != -1:
            # Split at drop
            # 0 to drop_index -> Workdays
            # drop_index+1 to end -> Weekends
            for i in range(drop_index + 1):
                workdays.append(valid_times[i]['time'])
            for i in range(drop_index + 1, len(valid_times)):
                weekends.append(valid_times[i]['time'])
        else:
            # No drop. Check header/logic?
            # If strictly increasing, maybe it's all Workdays?
            # Or maybe verify against known columns?
            # For now, assume all Workdays if no drop (safer for this specific file structure)
            # Unless we check column indices? 
            # In analyze_columns, we saw drops for almost all rows.
            for item in valid_times:
                workdays.append(item['time'])
                
        stops.append({
            'name': stop_name,
            'workdays': workdays,
            'saturdays': weekends,
            'sundays': weekends # Assuming Sat/Sun same for Czarna
        })
        
    return stops

def parse_ndm(file_path):
    print(f"Parsing {file_path} (Header Code Mode)...")
    df = pd.read_excel(file_path, header=None)
    
    # Extract header codes from Row 0
    header_codes = {}
    for col_idx, val in enumerate(df.iloc[0]):
        if col_idx == 0: continue
        code = str(val).strip()
        header_codes[col_idx] = code
        
    stops = []
    
    # Iterate rows starting from 1
    for index, row in df.iterrows():
        if index == 0: continue # Skip header
        
        first_col = str(row[0]).strip()
        if not first_col or first_col.lower().startswith('przystanek') or first_col == 'nan':
            continue
            
        stop_name = first_col
        workdays = []
        weekends = []
        
        for col_idx, val in enumerate(row):
            if col_idx == 0: continue
            
            t_str = parse_time(val)
            if not t_str: continue
            
            code = header_codes.get(col_idx, '')
            
            # Logic for NDM codes
            if 'D' in code:
                workdays.append(t_str)
            elif 'E+' in code:
                workdays.append(t_str)
                weekends.append(t_str)
            elif 'C' in code:
                weekends.append(t_str)
            else:
                # Fallback: Add to Workdays?
                workdays.append(t_str)
                
        # Sort times
        workdays.sort(key=time_to_minutes)
        weekends.sort(key=time_to_minutes)
        
        stops.append({
            'name': stop_name,
            'workdays': workdays,
            'saturdays': weekends,
            'sundays': weekends
        })
        
    return stops

def main():
    data = []
    
    # Process Czarna
    czarna_stops = parse_czarna('L1_Do_Czarna.xlsx')
    data.append({
        'directionId': 'ndm_czarna',
        'directionName': 'Nowy Dwór Mazowiecki → Czarna',
        'stops': czarna_stops
    })
    
    # Process NDM
    ndm_stops = parse_ndm('L1_Do_NDM.xlsx')
    data.append({
        'directionId': 'czarna_ndm', # Assuming file name implies destination?
        # L1_Do_NDM.xlsx -> To NDM. So direction is Czarna -> NDM?
        # Let's verify start/end stops.
        # NDM file starts with "Czarna". So it is Czarna -> NDM.
        # Czarna file starts with "NDM Akacjowa". So it is NDM -> Czarna.
        'directionName': 'Czarna → Nowy Dwór Mazowiecki',
        'stops': ndm_stops
    })
    
    # Swap order if needed to match previous data.js
    # Previous data.js had 'czarna_ndm' first.
    data.reverse()
    
    # Save to data.json
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    # Save to data.js
    js_content = f"const SCHEDULE_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};"
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("Conversion complete. data.js and data.json updated.")

if __name__ == '__main__':
    main()
