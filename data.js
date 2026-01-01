const SCHEDULE_DATA = [
  {
    "directionId": "czarna_ndm",
    "directionName": "Czarna → Nowy Dwór Mazowiecki",
    "stops": [
      {
        "name": "Czarna",
        "workdays": [
          "04:05",
          "06:30",
          "09:30",
          "13:40",
          "15:50",
          "18:12"
        ],
        "saturdays": [
          "06:30",
          "13:40"
        ],
        "sundays": [
          "06:30",
          "13:40"
        ]
      },
      {
        "name": "Zareby pętla",
        "workdays": [
          "04:06",
          "06:31",
          "09:31",
          "13:41",
          "15:51",
          "18:13"
        ],
        "saturdays": [
          "06:31",
          "13:41"
        ],
        "sundays": [
          "06:31",
          "13:41"
        ]
      },
      {
        "name": "Smoty staw",
        "workdays": [
          "04:09",
          "06:33",
          "09:33",
          "13:43",
          "15:53",
          "18:15"
        ],
        "saturdays": [
          "06:33",
          "13:43"
        ],
        "sundays": [
          "06:33",
          "13:43"
        ]
      },
      {
        "name": "Wojszczyce OSP 01",
        "workdays": [
          "04:12",
          "06:35",
          "09:35",
          "13:45",
          "15:55",
          "18:17"
        ],
        "saturdays": [
          "06:35",
          "13:45"
        ],
        "sundays": [
          "06:35",
          "13:45"
        ]
      },
      {
        "name": "Janowo skrzyżowanie",
        "workdays": [
          "04:13",
          "06:36",
          "09:36",
          "13:46",
          "15:56",
          "18:18"
        ],
        "saturdays": [
          "06:36",
          "13:46"
        ],
        "sundays": [
          "06:36",
          "13:46"
        ]
      },
      {
        "name": "Błogosławie staw",
        "workdays": [
          "04:15",
          "06:37",
          "09:37",
          "13:47",
          "15:57",
          "18:19"
        ],
        "saturdays": [
          "06:37",
          "13:47"
        ],
        "sundays": [
          "06:37",
          "13:47"
        ]
      },
      {
        "name": "Śniadowo pętla",
        "workdays": [
          "04:17",
          "06:39",
          "09:39",
          "13:49",
          "15:59",
          "18:21"
        ],
        "saturdays": [
          "06:39",
          "13:49"
        ],
        "sundays": [
          "06:39",
          "13:49"
        ]
      },
      {
        "name": "Śniadowo kapliczka",
        "workdays": [
          "04:18",
          "06:40",
          "09:40",
          "13:50",
          "16:00",
          "18:22"
        ],
        "saturdays": [
          "06:40",
          "13:50"
        ],
        "sundays": [
          "06:40",
          "13:50"
        ]
      },
      {
        "name": "Błogosławie staw",
        "workdays": [
          "04:20",
          "06:41",
          "09:41",
          "13:51",
          "16:01",
          "18:23"
        ],
        "saturdays": [
          "06:41",
          "13:51"
        ],
        "sundays": [
          "06:41",
          "13:51"
        ]
      },
      {
        "name": "Janowo skrzyżowanie",
        "workdays": [
          "04:22",
          "06:43",
          "09:43",
          "13:53",
          "16:03",
          "18:25"
        ],
        "saturdays": [
          "06:43",
          "13:53"
        ],
        "sundays": [
          "06:43",
          "13:53"
        ]
      },
      {
        "name": "Swobodnia 01",
        "workdays": [
          "04:23",
          "06:44",
          "09:44",
          "13:54",
          "16:04",
          "18:26"
        ],
        "saturdays": [
          "06:44",
          "13:54"
        ],
        "sundays": [
          "06:44",
          "13:54"
        ]
      },
      {
        "name": "Zakroczym ul. Pieczogu",
        "workdays": [
          "04:26",
          "06:47",
          "09:47",
          "13:57",
          "16:07",
          "18:29"
        ],
        "saturdays": [
          "06:47",
          "13:57"
        ],
        "sundays": [
          "06:47",
          "13:57"
        ]
      },
      {
        "name": "Zakroczym Słubiny przy S7",
        "workdays": [
          "04:31",
          "06:52",
          "09:52",
          "14:02",
          "16:12",
          "18:34"
        ],
        "saturdays": [
          "06:52",
          "14:02"
        ],
        "sundays": [
          "06:52",
          "14:02"
        ]
      },
      {
        "name": "Zakroczym ul. Logistyczna (Action)",
        "workdays": [
          "04:34",
          "06:55",
          "09:55",
          "14:05",
          "16:15",
          "18:37"
        ],
        "saturdays": [
          "06:55",
          "14:05"
        ],
        "sundays": [
          "06:55",
          "14:05"
        ]
      },
      {
        "name": "Zakroczym Doranta",
        "workdays": [
          "04:36",
          "06:57",
          "09:57",
          "14:07",
          "16:17",
          "18:39"
        ],
        "saturdays": [
          "06:57",
          "14:07"
        ],
        "sundays": [
          "06:57",
          "14:07"
        ]
      },
      {
        "name": "Zakroczym ul. O.H. Kozmińskiego - Bank",
        "workdays": [
          "04:38",
          "06:59",
          "09:59",
          "14:09",
          "16:19",
          "18:41"
        ],
        "saturdays": [
          "06:59",
          "14:09"
        ],
        "sundays": [
          "06:59",
          "14:09"
        ]
      },
      {
        "name": "Zakroczym Urząd Miejski",
        "workdays": [
          "04:40",
          "07:01",
          "10:01",
          "14:11",
          "16:21",
          "18:43"
        ],
        "saturdays": [
          "07:01",
          "14:11"
        ],
        "sundays": [
          "07:01",
          "14:11"
        ]
      },
      {
        "name": "Zakroczym ul. Gałachy",
        "workdays": [
          "04:42",
          "07:04",
          "10:04",
          "14:14",
          "16:21",
          "18:43"
        ],
        "saturdays": [
          "07:04",
          "14:14"
        ],
        "sundays": [
          "07:04",
          "14:14"
        ]
      },
      {
        "name": "Zakroczym ul. Utrata",
        "workdays": [
          "04:43",
          "07:05",
          "10:05",
          "14:15",
          "16:21",
          "18:43"
        ],
        "saturdays": [
          "07:05",
          "14:15"
        ],
        "sundays": [
          "07:05",
          "14:15"
        ]
      },
      {
        "name": "Zakroczym ul. Modlińska Ogrodki Działkowe (granica gminy)",
        "workdays": [
          "04:45",
          "07:08",
          "10:08",
          "14:18",
          "16:21",
          "18:43"
        ],
        "saturdays": [
          "07:08",
          "14:18"
        ],
        "sundays": [
          "07:08",
          "14:18"
        ]
      },
      {
        "name": "Modlin-Twierdza Chrzanowskiego",
        "workdays": [
          "04:46",
          "07:09",
          "10:09",
          "14:19",
          "16:21",
          "18:43"
        ],
        "saturdays": [
          "07:09",
          "14:19"
        ],
        "sundays": [
          "07:09",
          "14:19"
        ]
      },
      {
        "name": "Modlin-Twierdza Ledóchowskiego",
        "workdays": [
          "04:47",
          "07:10",
          "10:10",
          "14:20",
          "16:22",
          "18:43"
        ],
        "saturdays": [
          "07:10",
          "14:20"
        ],
        "sundays": [
          "07:10",
          "14:20"
        ]
      },
      {
        "name": "Chodna",
        "workdays": [
          "04:49",
          "07:12",
          "10:12",
          "14:22",
          "16:22",
          "18:43"
        ],
        "saturdays": [
          "07:12",
          "14:22"
        ],
        "sundays": [
          "07:12",
          "14:22"
        ]
      },
      {
        "name": "NDM Warszawska HIT",
        "workdays": [
          "04:51",
          "07:17",
          "10:17",
          "14:27",
          "16:27",
          "18:43"
        ],
        "saturdays": [
          "07:17",
          "14:27"
        ],
        "sundays": [
          "07:17",
          "14:27"
        ]
      },
      {
        "name": "NDM UM 01",
        "workdays": [
          "04:53",
          "07:21",
          "10:21",
          "14:31",
          "16:31",
          "18:43"
        ],
        "saturdays": [
          "07:21",
          "14:31"
        ],
        "sundays": [
          "07:21",
          "14:31"
        ]
      },
      {
        "name": "NDM Paderewskiego 01",
        "workdays": [
          "04:55",
          "07:24",
          "10:24",
          "14:34",
          "16:34",
          "18:43"
        ],
        "saturdays": [
          "07:24",
          "14:34"
        ],
        "sundays": [
          "07:24",
          "14:34"
        ]
      },
      {
        "name": "NDM Akacjowa 01",
        "workdays": [
          "04:56",
          "07:26",
          "10:26",
          "14:36",
          "16:36",
          "18:43"
        ],
        "saturdays": [
          "07:26",
          "14:36"
        ],
        "sundays": [
          "07:26",
          "14:36"
        ]
      }
    ]
  },
  {
    "directionId": "ndm_czarna",
    "directionName": "Nowy Dwór Mazowiecki → Czarna",
    "stops": [
      {
        "name": "NDM Akacjowa 02",
        "workdays": [
          "05:30",
          "08:25",
          "14:57"
        ],
        "saturdays": [
          "12:42",
          "17:20"
        ],
        "sundays": [
          "12:42",
          "17:20"
        ]
      },
      {
        "name": "NDM Paderewskiego 02",
        "workdays": [
          "05:32",
          "08:27",
          "14:59"
        ],
        "saturdays": [
          "12:44",
          "17:22"
        ],
        "sundays": [
          "12:44",
          "17:22"
        ]
      },
      {
        "name": "NDM UM 02",
        "workdays": [
          "05:36",
          "08:31",
          "15:03"
        ],
        "saturdays": [
          "12:48",
          "17:26"
        ],
        "sundays": [
          "12:48",
          "17:26"
        ]
      },
      {
        "name": "Chodna",
        "workdays": [
          "05:41",
          "08:36",
          "15:08"
        ],
        "saturdays": [
          "12:53",
          "17:31"
        ],
        "sundays": [
          "12:53",
          "17:31"
        ]
      },
      {
        "name": "Modlin-Twierdza Ledóchowskiego",
        "workdays": [
          "05:42",
          "08:37",
          "15:09"
        ],
        "saturdays": [
          "12:54",
          "17:32"
        ],
        "sundays": [
          "12:54",
          "17:32"
        ]
      },
      {
        "name": "Modlin-Twierdza Chrzanowskiego",
        "workdays": [
          "05:43",
          "08:38",
          "15:10"
        ],
        "saturdays": [
          "12:55",
          "17:33"
        ],
        "sundays": [
          "12:55",
          "17:33"
        ]
      },
      {
        "name": "Zakroczym ul. Modlińska Ogródki",
        "workdays": [
          "05:44",
          "08:39",
          "15:11"
        ],
        "saturdays": [
          "12:56",
          "17:34"
        ],
        "sundays": [
          "12:56",
          "17:34"
        ]
      },
      {
        "name": "Działkowe (granica gminy)",
        "workdays": [
          "05:44",
          "08:39",
          "15:11"
        ],
        "saturdays": [
          "12:56",
          "17:34"
        ],
        "sundays": [
          "12:56",
          "17:34"
        ]
      },
      {
        "name": "Zakroczym ul. Urata",
        "workdays": [
          "05:46",
          "08:41",
          "15:13"
        ],
        "saturdays": [
          "12:58",
          "17:36"
        ],
        "sundays": [
          "12:58",
          "17:36"
        ]
      },
      {
        "name": "Zakroczym ul. Galachy",
        "workdays": [
          "05:47",
          "08:42",
          "15:14"
        ],
        "saturdays": [
          "12:59",
          "17:37"
        ],
        "sundays": [
          "12:59",
          "17:37"
        ]
      },
      {
        "name": "Zakroczym Warszawska Osiedle",
        "workdays": [
          "05:49",
          "08:44",
          "15:16"
        ],
        "saturdays": [
          "13:01",
          "17:39"
        ],
        "sundays": [
          "13:01",
          "17:39"
        ]
      },
      {
        "name": "Zakroczym Urząd Miejski",
        "workdays": [
          "05:50",
          "08:45",
          "13:07",
          "15:17",
          "17:45"
        ],
        "saturdays": [
          "13:02",
          "18:45"
        ],
        "sundays": [
          "13:02",
          "18:45"
        ]
      },
      {
        "name": "Zakroczym ul. Logistyczna (Action)",
        "workdays": [
          "05:54",
          "08:49",
          "13:11",
          "15:21",
          "17:49"
        ],
        "saturdays": [
          "13:06",
          "18:49"
        ],
        "sundays": [
          "13:06",
          "18:49"
        ]
      },
      {
        "name": "Zakroczym ul. Pieczugi",
        "workdays": [
          "05:55",
          "08:51",
          "13:13",
          "15:23",
          "17:51"
        ],
        "saturdays": [
          "13:08",
          "18:51"
        ],
        "sundays": [
          "13:08",
          "18:51"
        ]
      },
      {
        "name": "Zakroczym skrzyżowanie Strubiny",
        "workdays": [
          "05:56",
          "08:52",
          "13:14",
          "15:24",
          "17:52"
        ],
        "saturdays": [
          "13:09",
          "18:52"
        ],
        "sundays": [
          "13:09",
          "18:52"
        ]
      },
      {
        "name": "Zakroczym Strubiny przy S7",
        "workdays": [
          "05:58",
          "08:54",
          "13:16",
          "15:26",
          "17:54"
        ],
        "saturdays": [
          "13:11",
          "18:54"
        ],
        "sundays": [
          "13:11",
          "18:54"
        ]
      },
      {
        "name": "Zakroczym Doranta",
        "workdays": [
          "06:01",
          "08:57",
          "13:19",
          "15:29",
          "17:57"
        ],
        "saturdays": [
          "13:14",
          "18:57"
        ],
        "sundays": [
          "13:14",
          "18:57"
        ]
      },
      {
        "name": "Swobodnia S02",
        "workdays": [
          "06:03",
          "08:59",
          "13:21",
          "15:31",
          "17:59"
        ],
        "saturdays": [
          "13:16",
          "18:59"
        ],
        "sundays": [
          "13:16",
          "18:59"
        ]
      },
      {
        "name": "Janowo skrzyżowanie",
        "workdays": [
          "06:04",
          "09:00",
          "13:23",
          "15:32",
          "18:00"
        ],
        "saturdays": [
          "13:17",
          "19:00"
        ],
        "sundays": [
          "13:17",
          "19:00"
        ]
      },
      {
        "name": "Błogosławie staw",
        "workdays": [
          "06:05",
          "09:01",
          "13:25",
          "15:33",
          "18:01"
        ],
        "saturdays": [
          "13:18",
          "19:01"
        ],
        "sundays": [
          "13:18",
          "19:01"
        ]
      },
      {
        "name": "Śniadowo pętla",
        "workdays": [
          "06:07",
          "09:03",
          "13:27",
          "15:35",
          "18:03"
        ],
        "saturdays": [
          "13:20",
          "19:03"
        ],
        "sundays": [
          "13:20",
          "19:03"
        ]
      },
      {
        "name": "Śniadowo kapliczka",
        "workdays": [
          "06:08",
          "09:04",
          "13:29",
          "15:36",
          "18:04"
        ],
        "saturdays": [
          "13:21",
          "19:04"
        ],
        "sundays": [
          "13:21",
          "19:04"
        ]
      },
      {
        "name": "Błogosławie staw",
        "workdays": [
          "06:09",
          "09:05",
          "13:31",
          "15:37",
          "18:05"
        ],
        "saturdays": [
          "13:22",
          "19:05"
        ],
        "sundays": [
          "13:22",
          "19:05"
        ]
      },
      {
        "name": "Janowo",
        "workdays": [
          "06:10",
          "09:06",
          "13:32",
          "15:38",
          "18:06"
        ],
        "saturdays": [
          "13:23",
          "19:06"
        ],
        "sundays": [
          "13:23",
          "19:06"
        ]
      },
      {
        "name": "Wojszczyce OSP 02",
        "workdays": [
          "06:12",
          "09:08",
          "13:34",
          "15:40",
          "18:08"
        ],
        "saturdays": [
          "13:25",
          "19:08"
        ],
        "sundays": [
          "13:25",
          "19:08"
        ]
      },
      {
        "name": "Smoty staw",
        "workdays": [
          "06:14",
          "09:10",
          "13:36",
          "15:42",
          "18:10"
        ],
        "saturdays": [
          "13:27",
          "19:10"
        ],
        "sundays": [
          "13:27",
          "19:10"
        ]
      },
      {
        "name": "Zareby pętla",
        "workdays": [
          "06:16",
          "09:12",
          "13:38",
          "15:44",
          "18:12"
        ],
        "saturdays": [
          "13:29",
          "19:12"
        ],
        "sundays": [
          "13:29",
          "19:12"
        ]
      },
      {
        "name": "Czarna",
        "workdays": [
          "06:17",
          "09:13",
          "13:39",
          "15:45",
          "18:13"
        ],
        "saturdays": [
          "13:30",
          "19:13"
        ],
        "sundays": [
          "13:30",
          "19:13"
        ]
      }
    ]
  }
];