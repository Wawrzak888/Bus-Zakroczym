document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    const state = {
        directionId: null, // 'czarna_ndm' or 'ndm_czarna'
        dayType: 'workdays', // 'workdays', 'saturdays', 'sundays'
        currentStop: null
    };

    // --- DOM Elements ---
    const dirBtn = document.getElementById('dir-btn');
    const dirText = document.getElementById('dir-text');
    const dayBtns = document.querySelectorAll('.day-btn');
    const stopSelect = document.getElementById('stop-select');
    const btnHome = document.getElementById('btn-home');
    const btnWork = document.getElementById('btn-work');
    const departureInfo = document.getElementById('departure-info');
    const nextDepartureTime = document.getElementById('next-departure-time');
    const timeRemaining = document.getElementById('time-remaining');
    const laterDepartures = document.getElementById('later-departures');
    const scheduleSection = document.getElementById('full-schedule');
    const scheduleList = document.getElementById('schedule-list');
    const scheduleHeader = scheduleSection.querySelector('.card-header');
    const refreshBtn = document.getElementById('refresh-btn');
    
    const homeLabel = document.getElementById('home-stop-name');
    const workLabel = document.getElementById('work-stop-name');
    const setHomeBtn = document.getElementById('set-home-btn');
    const setWorkBtn = document.getElementById('set-work-btn');
    const liveClock = document.getElementById('live-clock');

    // --- Initialization ---
    function init() {
        // Auto-detect day
        detectDay();
        
        // Load saved state
        const savedDir = Storage.getLastDirection();
        if (savedDir && getDirectionData(savedDir)) {
            state.directionId = savedDir;
        } else {
            state.directionId = SCHEDULE_DATA[0].directionId;
        }

        const savedStop = Storage.getLastStop();
        state.currentStop = savedStop; // Might be invalid for current direction, checked later

        renderDirection();
        populateStops();
        
        // If saved stop exists in current direction, select it
        if (state.currentStop && isStopInDirection(state.currentStop, state.directionId)) {
            stopSelect.value = state.currentStop;
        } else {
            // Default to first stop
            const dirData = getDirectionData(state.directionId);
            if (dirData && dirData.stops.length > 0) {
                state.currentStop = dirData.stops[0].name;
                stopSelect.value = state.currentStop;
            }
        }

        updateUI();
        updateFavoritesUI();
        
        // Timer for real-time updates
        setInterval(updateTimeDisplay, 30000); // Every 30s
        setInterval(updateClock, 1000); // Every 1s
        updateClock(); // Initial call
    }

    // --- Helpers ---
    function getDirectionData(id) {
        return SCHEDULE_DATA.find(d => d.directionId === id);
    }

    function isStopInDirection(stopName, dirId) {
        const dirData = getDirectionData(dirId);
        return dirData.stops.some(s => s.name === stopName);
    }

    function getEaster(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31);
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    }

    const FIXED_HOLIDAYS_MAP = {
        '1.1': 'Nowy Rok',
        '6.1': 'Trzech Króli',
        '1.5': 'Święto Pracy',
        '3.5': 'Święto Konstytucji 3 Maja',
        '15.8': 'Wniebowzięcie NMP',
        '1.11': 'Wszystkich Świętych',
        '11.11': 'Święto Niepodległości',
        '25.12': 'Boże Narodzenie (1. dzień)',
        '26.12': 'Boże Narodzenie (2. dzień)'
    };

    function detectDay() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth(); // 0-11
        const date = now.getDate();
        const dayOfWeek = now.getDay(); // 0 = Sun, 6 = Sat
        
        // Format: "D.M"
        const dateStr = `${date}.${month + 1}`;
        
        // Movable holidays
        const easter = getEaster(year);
        
        // Easter Monday (Poniedziałek Wielkanocny) = Easter + 1 day
        const easterMonday = new Date(easter);
        easterMonday.setDate(easter.getDate() + 1);
        
        // Corpus Christi (Boże Ciało) = Easter + 60 days
        const corpusChristi = new Date(easter);
        corpusChristi.setDate(easter.getDate() + 60);

        const isEasterMonday = (easterMonday.getDate() === date && easterMonday.getMonth() === month);
        const isCorpusChristi = (corpusChristi.getDate() === date && corpusChristi.getMonth() === month);
        const fixedHolidayName = FIXED_HOLIDAYS_MAP[dateStr];

        let type = 'workdays';
        // We won't log here anymore, but updateClock will use similar logic if needed,
        // or we store the holiday name in state if we want to show it.
        
        if (dayOfWeek === 0) {
            type = 'sundays';
        } else if (fixedHolidayName) {
            type = 'sundays';
        } else if (isEasterMonday) {
            type = 'sundays';
        } else if (isCorpusChristi) {
            type = 'sundays';
        } else if (dayOfWeek === 6) {
            type = 'saturdays';
        }

        state.dayType = type;
        updateDayButtons();
    }

    function getDayInfo(now) {
        const year = now.getFullYear();
        const month = now.getMonth();
        const date = now.getDate();
        const dayOfWeek = now.getDay();
        const dateStr = `${date}.${month + 1}`;

        const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        const dayName = days[dayOfWeek];

        // Check holidays for name
        if (FIXED_HOLIDAYS_MAP[dateStr]) return FIXED_HOLIDAYS_MAP[dateStr];
        
        const easter = getEaster(year);
        const easterMonday = new Date(easter);
        easterMonday.setDate(easter.getDate() + 1);
        const corpusChristi = new Date(easter);
        corpusChristi.setDate(easter.getDate() + 60);

        if (easterMonday.getDate() === date && easterMonday.getMonth() === month) return 'Pon. Wielkanocny';
        if (corpusChristi.getDate() === date && corpusChristi.getMonth() === month) return 'Boże Ciało';
        if (easter.getDate() === date && easter.getMonth() === month) return 'Wielkanoc'; // Easter itself is Sunday

        return dayName;
    }

    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        
        const dayInfo = getDayInfo(now);
        const dateStr = now.toLocaleDateString('pl-PL', { day: 'numeric', month: 'numeric', year: 'numeric' });

        if (liveClock) {
            liveClock.textContent = `${h}:${m}:${s} | ${dayInfo}, ${dateStr}`;
        }
    }

    // --- Rendering ---
    function renderDirection() {
        const dirData = getDirectionData(state.directionId);
        if (dirData) {
            dirText.textContent = dirData.directionName.replace(' → ', ' ⮕ ');
        }
    }

    function populateStops() {
        const dirData = getDirectionData(state.directionId);
        stopSelect.innerHTML = '';
        
        dirData.stops.forEach(stop => {
            const option = document.createElement('option');
            option.value = stop.name;
            option.textContent = stop.name;
            stopSelect.appendChild(option);
        });
    }

    function updateDayButtons() {
        dayBtns.forEach(btn => {
            if (btn.dataset.day === state.dayType) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function updateUI() {
        // Save state
        Storage.setLastDirection(state.directionId);
        Storage.setLastStop(state.currentStop);

        const dirData = getDirectionData(state.directionId);
        const stopData = dirData.stops.find(s => s.name === state.currentStop);
        
        if (!stopData) return;

        // Get times for current day type
        const times = stopData[state.dayType] || [];
        
        renderScheduleList(times);
        updateTimeDisplay(times);
    }

    function renderScheduleList(times) {
        scheduleList.innerHTML = '';
        if (times.length === 0) {
            scheduleList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Brak kursów w tym dniu.</p>';
            return;
        }

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        times.forEach(time => {
            const div = document.createElement('div');
            div.className = 'time-slot';
            div.textContent = time;
            
            const [h, m] = time.split(':').map(Number);
            const timeMinutes = h * 60 + m;
            
            if (timeMinutes < currentMinutes) {
                div.classList.add('past');
            }
            
            scheduleList.appendChild(div);
        });
        
        // Highlight next
        const slots = scheduleList.querySelectorAll('.time-slot:not(.past)');
        if (slots.length > 0) {
            slots[0].classList.add('next');
        }
    }

    function updateTimeDisplay(times) {
        // If times not provided, fetch them
        if (!times) {
            const dirData = getDirectionData(state.directionId);
            const stopData = dirData.stops.find(s => s.name === state.currentStop);
            if (!stopData) return;
            times = stopData[state.dayType] || [];
        }

        if (times.length === 0) {
            departureInfo.classList.remove('hidden');
            nextDepartureTime.textContent = "--:--";
            timeRemaining.textContent = "Brak kursów";
            laterDepartures.textContent = "";
            return;
        }

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        // Find next departures
        const upcoming = times.filter(t => {
            const [h, m] = t.split(':').map(Number);
            return (h * 60 + m) >= currentMinutes;
        });

        if (upcoming.length > 0) {
            const next = upcoming[0];
            const [h, m] = next.split(':').map(Number);
            const nextMinutes = h * 60 + m;
            const diff = nextMinutes - currentMinutes;
            
            let diffText = "";
            if (diff === 0) diffText = "Teraz";
            else if (diff < 60) diffText = `${diff} min`;
            else {
                const dh = Math.floor(diff / 60);
                const dm = diff % 60;
                diffText = `${dh}h ${dm}m`;
            }

            nextDepartureTime.textContent = next;
            timeRemaining.textContent = diffText;
            
            const nextFew = upcoming.slice(1, 3).join(', ');
            laterDepartures.textContent = nextFew || "Koniec kursów";
        } else {
            // No more today, show first of tomorrow (or just --)
            nextDepartureTime.textContent = "--:--";
            timeRemaining.textContent = "Koniec na dziś";
            laterDepartures.textContent = `Pierwszy jutro: ${times[0]}`;
        }
        
        departureInfo.classList.remove('hidden');
    }

    function updateFavoritesUI() {
        const home = Storage.getHome();
        const work = Storage.getWork();
        
        homeLabel.textContent = home || "Nie ustawiono";
        workLabel.textContent = work || "Nie ustawiono";
    }

    function switchDirection() {
        // Find the other direction
        const currentIdx = SCHEDULE_DATA.findIndex(d => d.directionId === state.directionId);
        const nextIdx = (currentIdx + 1) % SCHEDULE_DATA.length;
        state.directionId = SCHEDULE_DATA[nextIdx].directionId;
        
        renderDirection();
        populateStops();
        
        // Try to keep same stop name if exists, else first
        if (!isStopInDirection(state.currentStop, state.directionId)) {
            const dirData = getDirectionData(state.directionId);
            state.currentStop = dirData.stops[0].name;
        }
        stopSelect.value = state.currentStop;
        
        updateUI();
    }

    // --- Event Listeners ---
    
    // Auto-update day on visibility change (e.g. unlock phone)
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            detectDay();
            updateUI();
        }
    });

    dirBtn.addEventListener('click', switchDirection);

    dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.dayType = btn.dataset.day;
            updateDayButtons();
            updateUI();
        });
    });

    stopSelect.addEventListener('change', (e) => {
        state.currentStop = e.target.value;
        updateUI();
    });

    scheduleHeader.addEventListener('click', () => {
        scheduleList.classList.toggle('hidden');
        const icon = scheduleHeader.querySelector('.toggle-icon');
        icon.textContent = scheduleList.classList.contains('hidden') ? '▼' : '▲';
    });

    refreshBtn.addEventListener('click', () => {
        window.location.reload();
    });

    // Favorites Logic
    setHomeBtn.addEventListener('click', () => {
        if (state.currentStop) {
            Storage.setHome(state.currentStop);
            updateFavoritesUI();
            alert(`Ustawiono "${state.currentStop}" jako DOM.`);
        }
    });

    setWorkBtn.addEventListener('click', () => {
        if (state.currentStop) {
            Storage.setWork(state.currentStop);
            updateFavoritesUI();
            alert(`Ustawiono "${state.currentStop}" jako PRACA.`);
        }
    });

    btnHome.addEventListener('click', () => {
        const home = Storage.getHome();
        if (home) {
             // Logic for "Do Domu" (To Home) -> Start from WORK?
             // As analyzed before: "Z pracy do domu" -> Start: Work.
             const workStop = Storage.getWork();
             if (workStop) {
                 changeStop(workStop);
             } else {
                 // Fallback: if no Work set, maybe just show Home?
                 // But the button says "Z pracy do domu".
                 alert('Ustaw najpierw przystanek PRACA.');
             }
        } else {
            alert('Ustaw najpierw przystanek DOM.');
        }
    });

    btnWork.addEventListener('click', () => {
        // "Do Pracy" (Z domu do pracy) -> Start: Home.
        const homeStop = Storage.getHome();
        if (homeStop) {
            changeStop(homeStop);
        } else {
            alert('Ustaw najpierw przystanek DOM.');
        }
    });

    function changeStop(stopName) {
        if (isStopInDirection(stopName, state.directionId)) {
            state.currentStop = stopName;
            stopSelect.value = stopName;
            updateUI();
        } else {
            switchDirection(); 
            if (isStopInDirection(stopName, state.directionId)) {
                state.currentStop = stopName;
                stopSelect.value = stopName;
                updateUI();
            } else {
                alert('Przystanek nie znaleziony w żadnym kierunku.');
            }
        }
    }

    // Init
    init();
});
