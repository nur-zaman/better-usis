

export type FacultyInfoType = {
    initial: string;
    faculty: string;
    designation: string;
    status: string;
    room: string;
    email: string;
  };

  type facultyDataType = {
    [department: string]: FacultyInfoType[];
  };

export const facultyData: facultyDataType = {
    "CSE": [
      {
        "initial": "AAR",
        "faculty": "Mr. Annajiat Alim Rasel",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G20",
        "email": "annajiat@bracu.ac.bd"
      },
      {
        "initial": "ABW",
        "faculty": "Mr. Avijit Biswas",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M125",
        "email": "avijit.biswas@bracu.ac.bd"
      },
      {
        "initial": "ABY",
        "faculty": "Mr. Md Asif Hossain Bhuiyan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N141",
        "email": "asif.hossain@bracu.ac.bd"
      },
      {
        "initial": "ACH",
        "faculty": "Dr. Amitabha Chakrabarty",
        "designation": "Professor",
        "status": "Full Time",
        "room": "4G25",
        "email": "amitabha@bracu.ac.bd"
      },
      {
        "initial": "ADHN",
        "faculty": "Ms. Adrita Hossain Nakshi",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K70",
        "email": "adrita.hossain@bracu.ac.bd"
      },
      {
        "initial": "AFI",
        "faculty": "Ms. Afia Mubassira Islam",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N150",
        "email": "afia.islam@bracu.ac.bd"
      },
      {
        "initial": "AGS",
        "faculty": "Ms. Aroni Ghosh",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N146",
        "email": "aroni.ghosh@bracu.ac.bd"
      },
      {
        "initial": "AHU",
        "faculty": "Mr. Md. Ahasanul Alam",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M133",
        "email": "ahasanul.alam@bracu.ac.bd"
      },
      {
        "initial": "AJA",
        "faculty": "Mr. Abid Jahan Apon",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M102",
        "email": "abid.jahan@bracu.ac.bd"
      },
      {
        "initial": "AJB",
        "faculty": "Mr. Abdullah Jubair Bin Iqbal",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N137",
        "email": "jubair.iqbal@bracu.ac.bd"
      },
      {
        "initial": "AMK",
        "faculty": "Dr. Abu Mohammad Khan",
        "designation": "Associate Professor",
        "status": "Full Time",
        "room": "4G14",
        "email": "abu.khan@bracu.ac.bd"
      },
      {
        "initial": "ANL",
        "faculty": "Mr. Ahashan Habib Niloy",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M114",
        "email": "ahashan.niloy@bracu.ac.bd"
      },
      {
        "initial": "AQU",
        "faculty": "Mr. Md. Aquib Azmain",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M104",
        "email": "aquib.azmain@bracu.ac.bd"
      },
      {
        "initial": "AQZ",
        "faculty": "Dr. Aniqua Nusrat Zereen",
        "designation": "Assistant Professor",
        "status": "Full Time",
        "room": "4G16",
        "email": "aniqua@bracu.ac.bd"
      },
      {
        "initial": "ARD",
        "faculty": "Mr. Ayman Rasheed",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M129",
        "email": "ayman.rasheed@bracu.ac.bd"
      },
      {
        "initial": "ARF",
        "faculty": "Mr. Arif Shakil",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4G03",
        "email": "arif.shakil@bracu.ac.bd"
      },
      {
        "initial": "ASA",
        "faculty": "Dr. Md. Ashraful Alam",
        "designation": "Associate Professor",
        "status": "Full Time",
        "room": "4G24",
        "email": "ashraful.alam@bracu.ac.bd"
      },
      {
        "initial": "BRH",
        "faculty": "Mr. Beig Rajibul Hasan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N142",
        "email": "rajib.hasan@bracu.ac.bd"
      },
      {
        "initial": "DFD",
        "faculty": "Mr. Dibyo Fabian Dofadar",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M106",
        "email": "fabian.dofadar@bracu.ac.bd"
      },
      {
        "initial": "DPU",
        "faculty": "Mr. Shoaib Ahmed Dipu",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J56",
        "email": "shoaib.ahmed@bracu.ac.bd"
      },
      {
        "initial": "DZK",
        "faculty": "Mr. Dewan Ziaul Karim",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4G05",
        "email": "ziaul.karim@bracu.ac.bd"
      },
      {
        "initial": "FDC",
        "faculty": "Dr. Farida Chowdhury",
        "designation": "Professor",
        "status": "Full Time",
        "room": "4G09",
        "email": "farida.chowdhury@bracu.ac.bd"
      },
      {
        "initial": "FGZ",
        "faculty": "Mr. Md. Fakhruddin Gazzali",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M103",
        "email": "fakhruddin.gazzali@bracu.ac.bd"
      },
      {
        "initial": "FHZ",
        "faculty": "Mr. Farhan Feroz",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J65",
        "email": "farhan.feroz@bracu.ac.bd"
      },
      {
        "initial": "FLA",
        "faculty": "Mr. Md Faisal Ahmed",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J62",
        "email": "faisal.ahmed@bracu.ac.bd"
      },
      {
        "initial": "FYS",
        "faculty": "Dr. Farig Yousuf Sadeque",
        "designation": "Assistant Professor",
        "status": "Full Time",
        "room": "4G29",
        "email": "farig.sadeque@bracu.ac.bd"
      },
      {
        "initial": "GRA",
        "faculty": "Dr. Md. Golam Rabiul Alam",
        "designation": "Professor",
        "status": "Full Time",
        "room": "4G23",
        "email": "rabiul.alam@bracu.ac.bd"
      },
      {
        "initial": "HRY",
        "faculty": "Mr. Himaddri Roy",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N149",
        "email": "himaddri.roy@bracu.ac.bd"
      },
      {
        "initial": "JMA",
        "faculty": "Ms. Jawaril Munshad Abedin",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K84",
        "email": "jawaril.munshad@bracu.ac.bd"
      },
      {
        "initial": "JMD",
        "faculty": "Mr. Jishnu Mahmud",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N147",
        "email": "jishnu.mahmud@bracu.ac.bd"
      },
      {
        "initial": "JNM",
        "faculty": "Dr. Jannatun Noor Mukta",
        "designation": "Assistant Professor",
        "status": "Full Time",
        "room": "4G17",
        "email": "jannatun.noor@bracu.ac.bd"
      },
      {
        "initial": "JYS",
        "faculty": "Mr. Joy Saha",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M120",
        "email": "joy.saha@bracu.ac.bd"
      },
      {
        "initial": "KHR",
        "faculty": "Dr. Md. Khalilur Rahman",
        "designation": "Professor",
        "status": "Full Time",
        "room": "4G08",
        "email": "khalilur@bracu.ac.bd"
      },
      {
        "initial": "KKP",
        "faculty": "Mr. Kabbya Kantam Patwary",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J57",
        "email": "kabbya.kantam@bracu.ac.bd"
      },
      {
        "initial": "KYK",
        "faculty": "Dr. Mohammad Kaykobad",
        "designation": "Distinguished Professor",
        "status": "Full Time",
        "room": "4G11",
        "email": "kaykobad@bracu.ac.bd"
      },
      {
        "initial": "MAM",
        "faculty": "Dr. Mahbubul Alam Majumdar [Dean]",
        "designation": "Professor; Dean",
        "status": "Full Time",
        "room": "4G33",
        "email": "majumdar@bracu.ac.bd"
      },
      {
        "initial": "MFSQ",
        "faculty": "Mr. Md. Farhan Shadiq",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N139",
        "email": "farhan.shadiq@bracu.ac.bd"
      },
      {
        "initial": "MIBA",
        "faculty": "Mr. Md. Imran Bin Azad",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G02",
        "email": "imran.azad@bracu.ac.bd"
      },
      {
        "initial": "MIH",
        "faculty": "Dr. Muhammad Iqbal Hossain",
        "designation": "Associate Professor",
        "status": "Full Time",
        "room": "4G22",
        "email": "iqbal.hossain@bracu.ac.bd"
      },
      {
        "initial": "MIT",
        "faculty": "Mr. Mirza Md. Tausif Shorif Snigdho",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J67",
        "email": "mirza.tausif@bracu.ac.bd"
      },
      {
        "initial": "MJA",
        "faculty": "Mr. Md. Jahin Alam",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N136",
        "email": "jahin.alam@bracu.ac.bd"
      },
      {
        "initial": "MMM",
        "faculty": "Mr. Moin Mostakim",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G02",
        "email": "mostakim@bracu.ac.bd"
      },
      {
        "initial": "MNY",
        "faculty": "Dr. Muhammad Nur Yanhaona",
        "designation": "Associate Professor",
        "status": "Full Time",
        "room": "4G06",
        "email": "nur.yanhaona@bracu.ac.bd"
      },
      {
        "initial": "MSA",
        "faculty": "Dr. Matin Saad Abdullah",
        "designation": "Professor",
        "status": "Full Time",
        "room": "4G04",
        "email": "mabdullah@bracu.ac.bd"
      },
      {
        "initial": "MSI",
        "faculty": "Mr. Md. Saiful Islam",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G12",
        "email": "md.saiful.islam@bracu.ac.bd"
      },
      {
        "initial": "MTD",
        "faculty": "Ms. Mushtari Sadia",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K73",
        "email": "mushtari.sadia@bracu.ac.bd"
      },
      {
        "initial": "MTT",
        "faculty": "Mr. Md. Tanvir Arafat",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M134",
        "email": "tanvir.arafat@bracu.ac.bd"
      },
      {
        "initial": "MZU",
        "faculty": "Mr. A.T.M Mizanur Rahman",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M123",
        "email": "atm.mizanur@bracu.ac.bd"
      },
      {
        "initial": "NAD",
        "faculty": "Mr. Naeem Ahmed",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M128",
        "email": "naeem.ahmed@bracu.ac.bd"
      },
      {
        "initial": "NFP",
        "faculty": "Ms. Nishat Farhana Purbasha",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K72",
        "email": "nishat.farhana@bracu.ac.bd"
      },
      {
        "initial": "NLY",
        "faculty": "Mr. Niloy Irtisam",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M121",
        "email": "niloy.irtisam@bracu.ac.bd"
      },
      {
        "initial": "NNC",
        "faculty": "Ms. Najeefa Nikhat Choudhury",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K78",
        "email": "najeefa.chy@bracu.ac.bd"
      },
      {
        "initial": "NSB",
        "faculty": "Ms. Nahian Salsabil",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K71",
        "email": "nahian.salsabil@bracu.ac.bd"
      },
      {
        "initial": "NTR",
        "faculty": "Ms. Narzu Tarannum",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4G21",
        "email": "narzu.tarannum@bracu.ac.bd"
      },
      {
        "initial": "NZF",
        "faculty": "Ms. Nazia Afreen",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K75",
        "email": "nazia.afreen@bracu.ac.bd"
      },
      {
        "initial": "PDS",
        "faculty": "Mr. Purbayan Das",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N140",
        "email": "purbayan.das@bracu.ac.bd"
      },
      {
        "initial": "PNP",
        "faculty": "Mr. Prantik Paul",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M119",
        "email": "prantik.paul@bracu.ac.bd"
      },
      {
        "initial": "PRN",
        "faculty": "Ms. Priata Nowshin",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K83",
        "email": "priata.nowshin@bracu.ac.bd"
      },
      {
        "initial": "QSH",
        "faculty": "Mr. Quazi Shafayat Hossain",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N138",
        "email": "quazi.shafayat@bracu.ac.bd"
      },
      {
        "initial": "RAD",
        "faculty": "Mr. Riad Ahmed",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M132",
        "email": "riad.ahmed@bracu.ac.bd"
      },
      {
        "initial": "RAK",
        "faculty": "Mr. Rubayat Ahmed Khan",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G12",
        "email": "rubayat.ahmed@bracu.ac.bd"
      },
      {
        "initial": "RIM",
        "faculty": "Mr. Ruhan Islam",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M111",
        "email": "ruhan.islam@bracu.ac.bd"
      },
      {
        "initial": "RMT",
        "faculty": "Ms. Raisa Mashtura",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N145",
        "email": "raisa.mashtura@bracu.ac.bd"
      },
      {
        "initial": "RRH",
        "faculty": "Mr. Rafeed Rahman",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J60",
        "email": "rahman.rafeed@bracu.ac.bd"
      },
      {
        "initial": "SAD",
        "faculty": "Mr. Salman Sayeed Khan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4G05",
        "email": "salman.sayeed@bracu.ac.bd"
      },
      {
        "initial": "SBB",
        "faculty": "Mr. Md. Sabbir Ahmed",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M107",
        "email": "sabbir.ahmed@bracu.ac.bd"
      },
      {
        "initial": "SBLM",
        "faculty": "Mr. Shayekh Bin Islam",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M127",
        "email": "shayekh.bin.islam@bracu.ac.bd"
      },
      {
        "initial": "SCD",
        "faculty": "Ms. Simantika Bhattacharjee Dristi",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K69",
        "email": "simantika.dristi@bracu.ac.bd"
      },
      {
        "initial": "SDF",
        "faculty": "Dr. Md Sadek Ferdous",
        "designation": "Associate Professor",
        "status": "Full Time",
        "room": "4G10",
        "email": "sadek.ferdous@bracu.ac.bd"
      },
      {
        "initial": "SDQ",
        "faculty": "Mr. Md. Saiful Bari Siddiqui",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N152",
        "email": "saiful.bari@bracu.ac.bd"
      },
      {
        "initial": "SDS",
        "faculty": "Mr. Shadman Shahriar",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N143",
        "email": "shadman.shahriar@bracu.ac.bd"
      },
      {
        "initial": "SFF",
        "faculty": "Mr. S. M. FARAH AL FAHIM",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M113",
        "email": "farah.fahim@bracu.ac.bd"
      },
      {
        "initial": "SFQ",
        "faculty": "Mr. Shafqat Hasan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M105",
        "email": "shafqat.hasan@bracu.ac.bd"
      },
      {
        "initial": "SHRR",
        "faculty": "Mr. Shahriar Rahman Rana",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M115",
        "email": "shahriar.rahman@bracu.ac.bd"
      },
      {
        "initial": "SKE",
        "faculty": "Mr. Ayon Sarker",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N148",
        "email": "ayon.sarker@bracu.ac.bd"
      },
      {
        "initial": "SKZ",
        "faculty": "Dr. Sadia Hamid Kazi",
        "designation": "Associate Professor; Chairperson",
        "status": "Full Time",
        "room": "4G32",
        "email": "skazi@bracu.ac.bd"
      },
      {
        "initial": "SRF",
        "faculty": "Ms. Syeda Ramisa Fariha",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K74",
        "email": "ramisa.fariha@bracu.ac.bd"
      },
      {
        "initial": "SRJ",
        "faculty": "Ms. Mehnaz Seraj",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G21",
        "email": "seraj.mehnaz@bracu.ac.bd"
      },
      {
        "initial": "STF",
        "faculty": "Mr. Sihat Afnan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M131",
        "email": "sihat.afnan@bracu.ac.bd"
      },
      {
        "initial": "TAW",
        "faculty": "Mr. Md. Tawhid Anwar",
        "designation": "Senior Lecturer",
        "status": "Full Time",
        "room": "4G03",
        "email": "tawhid.anwar@bracu.ac.bd"
      },
      {
        "initial": "TIK",
        "faculty": "Mr. Taufiqul Islam Khan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M112",
        "email": "taufiqul.islam@bracu.ac.bd"
      },
      {
        "initial": "TLQ",
        "faculty": "Dr. Taiabul Haque",
        "designation": "Associate Professor",
        "status": "Full Time",
        "room": "4G01",
        "email": "taiabul.haque@bracu.ac.bd"
      },
      {
        "initial": "TMD",
        "faculty": "Mr. Tamkin Mahmud Tan",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M116",
        "email": "tamkin.mahmud@bracu.ac.bd"
      },
      {
        "initial": "TNMF",
        "faculty": "Ms. Tasnim Ferdous",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4N151",
        "email": "tasnim.ferdous@bracu.ac.bd"
      },
      {
        "initial": "TRZ",
        "faculty": "Mr. Md. Tanzim Reza",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J64",
        "email": "tanzim.reza@bracu.ac.bd"
      },
      {
        "initial": "TSD",
        "faculty": "Mr. Md. Tawsif Shahriar Dipto",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4M130",
        "email": "tawsif.shahriar@bracu.ac.bd"
      },
      {
        "initial": "TSM",
        "faculty": "Mr. Mirza Md. Tanjim Shorif Mugdho",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J66",
        "email": "mirza.mugdho@bracu.ac.bd"
      },
      {
        "initial": "WRA",
        "faculty": "Ms. Warida Rashid",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K82",
        "email": "warida.rashid@bracu.ac.bd"
      },
      {
        "initial": "ZAD",
        "faculty": "Ms. Zahin Ahmed",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K80",
        "email": "zahin.ahmed@bracu.ac.bd"
      },
      {
        "initial": "ZHS",
        "faculty": "Mr. Syed Zamil Hasan Shoumo",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J68",
        "email": "shoumo.hasan@bracu.ac.bd"
      },
      {
        "initial": "ZMD",
        "faculty": "Mr. Zaber Mohammad",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4J61",
        "email": "zaber.mohammad@bracu.ac.bd"
      },
      {
        "initial": "ZTB",
        "faculty": "Ms. Zarin Tasnim Biash",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K85",
        "email": "zarin.tasnim.biash@bracu.ac.bd"
      },
      {
        "initial": "ZWB",
        "faculty": "Ms. Zahin Wahab",
        "designation": "Lecturer",
        "status": "Full Time",
        "room": "4K76",
        "email": "zahin.wahab@bracu.ac.bd"
      },
      {
        "initial": "AAD",
        "faculty": "Mr. AHMAD AL ASAD",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ahmad.asad@bracu.ac.bd"
      },
      {
        "initial": "ADR",
        "faculty": "Mr. Md. Abdur Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "abdur.rahman@bracu.ac.bd"
      },
      {
        "initial": "ADU",
        "faculty": "Mr. Ahmed Mahir Ruhan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ahmed.ruhan@bracu.ac.bd"
      },
      {
        "initial": "AFA",
        "faculty": "Afroza Akther",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.afroza.akther@bracu.ac.bd"
      },
      {
        "initial": "AHC",
        "faculty": "Asif Hasan Chowdhury",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.asif.hasan@bracu.ac.bd"
      },
      {
        "initial": "AIB",
        "faculty": "Mr. Md. Abu Ibrahim",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.abu.ibrahim@bracu.ac.bd"
      },
      {
        "initial": "AJD",
        "faculty": "Adittya Ranjan Das",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.adittya.ranjan@bracu.ac.bd"
      },
      {
        "initial": "AJK",
        "faculty": "Ahmed Akib Jawad Karim",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.akib.jawad@bracu.ac.bd"
      },
      {
        "initial": "AJR",
        "faculty": "Ms. Aiman Jabeen Ramisa",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.aiman.ramisa@bracu.ac.bd"
      },
      {
        "initial": "AKJ",
        "faculty": "Akib Anjum",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.akib.anjum@bracu.ac.bd"
      },
      {
        "initial": "ALB",
        "faculty": "Anindita Labonno",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.anindita.labonno@bracu.ac.bd"
      },
      {
        "initial": "ALD",
        "faculty": "Azwaad Labiba Mohiuddin",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.azwaad.labiba@bracu.ac.bd"
      },
      {
        "initial": "ANK",
        "faculty": "Mr. Abdullah Al Nakib",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.abdullah.alnakib@bracu.ac.bd"
      },
      {
        "initial": "ANT",
        "faculty": "Ms. Anika Tasnim",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.anika.tasnim@bracu.ac.bd"
      },
      {
        "initial": "APM",
        "faculty": "Anika Priodorshinee Mrittika",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.anika.mrittika@bracu.ac.bd"
      },
      {
        "initial": "ART",
        "faculty": "Atanu Roy",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.atanu.roy@bracu.ac.bd"
      },
      {
        "initial": "ASD",
        "faculty": "Abrar Shahriar Abeed",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.abrar.shahriar@bracu.ac.bd"
      },
      {
        "initial": "ATY",
        "faculty": "Ateya Ahmed Subarna",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ateya.ahmed@bracu.ac.bd"
      },
      {
        "initial": "AVB",
        "faculty": "Mr. Avinandan Banerjee",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.avinandan@bracu.ac.bd"
      },
      {
        "initial": "AYD",
        "faculty": "Ayesha Siddika",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ayesha.siddika@bracu.ac.bd"
      },
      {
        "initial": "BDH",
        "faculty": "Mr. Mohammad Badrul Hossain",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.badrul.hossain@bracu.ac.bd"
      },
      {
        "initial": "EHQ",
        "faculty": "Ehtashamul Haque",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ehtashamul.haque@bracu.ac.bd"
      },
      {
        "initial": "ERD",
        "faculty": "Elin Ranjan Das",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.elin.ranjan@bracu.ac.bd"
      },
      {
        "initial": "FEK",
        "faculty": "Farden Ehsan Khan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.farden.khan@bracu.ac.bd"
      },
      {
        "initial": "FFR",
        "faculty": "Md. Fatin Ishraq Faruqui",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.fatin@bracu.ac.bd"
      },
      {
        "initial": "FHL",
        "faculty": "Fahim Faisal",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.faisal.fahim@bracu.ac.bd"
      },
      {
        "initial": "FIC",
        "faculty": "Fatiha Ishrar Chowdhury",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.fatiha.ishrar@bracu.ac.bd"
      },
      {
        "initial": "FZN",
        "faculty": "Kh.Fardin Zubair Nafis",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.fardin.zubair@bracu.ac.bd"
      },
      {
        "initial": "GMS",
        "faculty": "Golam Mahmud Samdani",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.golam.samdani@bracu.ac.bd"
      },
      {
        "initial": "HAD",
        "faculty": "Shadman Shahid",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.shadman.shahid@bracu.ac.bd"
      },
      {
        "initial": "HAS",
        "faculty": "Md. Mahadi Hasan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.mahadi@bracu.ac.bd"
      },
      {
        "initial": "HFN",
        "faculty": "Mr. Sheikh Araf Noshin",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sheikh.araf@bracu.ac.bd"
      },
      {
        "initial": "IBR",
        "faculty": "Mr. Rabeeb Ibrat",
        "designation": "Lecturer",
        "status": "Contractual",
        "room": "4M124",
        "email": "rabeeb.ibrat@bracu.ac.bd"
      },
      {
        "initial": "IMZ",
        "faculty": "Mr. Imam Mohammad Zulkarnain",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.imam.mohammad@bracu.ac.bd"
      },
      {
        "initial": "JOY",
        "faculty": "Joya Akter",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.joya.akter@bracu.ac.bd"
      },
      {
        "initial": "KFP",
        "faculty": "Kaniz Fatema Supti",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.kaniz.fatema@bracu.ac.bd"
      },
      {
        "initial": "KKS",
        "faculty": "Md. Khaliduzzaman Khan Samrat",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.khaliduzzaman@bracu.ac.bd"
      },
      {
        "initial": "KNI",
        "faculty": "Ms. Khondoker Nazia Iqbal",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.nazia.iqbal@bracu.ac.bd"
      },
      {
        "initial": "LHK",
        "faculty": "Labib Hasan Khan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.labib.hasan@bracu.ac.bd"
      },
      {
        "initial": "LMI",
        "faculty": "Ms. Lamiah Israt",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "lamiah.israt@bracu.ac.bd"
      },
      {
        "initial": "MAO",
        "faculty": "Mirza Abdullah Al Noman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mirza.abdullah@bracu.ac.bd"
      },
      {
        "initial": "MAU",
        "faculty": "Ms. Marshia Nujhat",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.marshia.nujhat@bracu.ac.bd"
      },
      {
        "initial": "MBE",
        "faculty": "Mobashra Abeer",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mobashra.abeer@bracu.ac.bd"
      },
      {
        "initial": "MDF",
        "faculty": "Mr. Mohammad Fahim",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mohammad.fahim@bracu.ac.bd"
      },
      {
        "initial": "MFR",
        "faculty": "Arifur Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.arifur@bracu.ac.bd"
      },
      {
        "initial": "MHC",
        "faculty": "Mohammed Aminul Haque",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.muhammad.aminul@bracu.ac.bd"
      },
      {
        "initial": "MHY",
        "faculty": "Abu Musa Al Ashary",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.abu.musa@bracu.ac.bd"
      },
      {
        "initial": "MLH",
        "faculty": "Mr. Monirul Haque",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.monirul.haque@bracu.ac.bd"
      },
      {
        "initial": "MMN",
        "faculty": "Mohammad Nuwaisir Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.nuwaisir.rahman@bracu.ac.bd"
      },
      {
        "initial": "MNH",
        "faculty": "Mr. Mehran Hossain",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mehran.hossain@bracu.ac.bd"
      },
      {
        "initial": "MNP",
        "faculty": "Mushfique Nasir Probor",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mushfique.nasir@bracu.ac.bd"
      },
      {
        "initial": "MOM",
        "faculty": "Md. Moynul Asik Moni",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.moynul.moni@bracu.ac.bd"
      },
      {
        "initial": "MRM",
        "faculty": "Mohammad Rakibul Hasan Mahin",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mohammad.rakibul@bracu.ac.bd"
      },
      {
        "initial": "MSDH",
        "faculty": "Mohammad Sayeem Sadat Hossain",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mohammad.sayeem@bracu.ac.bd"
      },
      {
        "initial": "MSMA",
        "faculty": "Mr. Md. Shamim Mia",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "shamim.mia@bracu.ac.bd"
      },
      {
        "initial": "MSQ",
        "faculty": "MOHAMMED ASHFAQUL HAQUE",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ashfaqul.haque@bracu.ac.bd"
      },
      {
        "initial": "MSR",
        "faculty": "Munshi Sanowar Raihan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.munshi.sanowar@bracu.ac.bd"
      },
      {
        "initial": "MTR",
        "faculty": "Md Toufiqur Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.toufiqur.rahman@bracu.ac.bd"
      },
      {
        "initial": "MUNR",
        "faculty": "A.B.M. Muntasir Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.abm.muntasir@bracu.ac.bd"
      },
      {
        "initial": "MUSA",
        "faculty": "Md. Mustakin Alam",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.mustakin@bracu.ac.bd"
      },
      {
        "initial": "MVH",
        "faculty": "Mohammad Naveed Hossain",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.mohammad.naveed@bracu.ac.bd"
      },
      {
        "initial": "MZG",
        "faculty": "Ahmed Mayeesha Reza Agomoni",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ahmed.mayeesha@bracu.ac.bd"
      },
      {
        "initial": "NBN",
        "faculty": "Nawshad Binta Nizam",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.nawshad.nizam@bracu.ac.bd"
      },
      {
        "initial": "NFH",
        "faculty": "Niloy Farhan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.niloy.farhan@bracu.ac.bd"
      },
      {
        "initial": "NIQ",
        "faculty": "Md Nafiz Ishtiaque Mahee",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.nafiz.ishtiaque@bracu.ac.bd"
      },
      {
        "initial": "NLM",
        "faculty": "Nazmul Islam",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.nazmul@bracu.ac.bd"
      },
      {
        "initial": "NNY",
        "faculty": "Ms. Nishat Nayla",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.nishat.nayla@bracu.ac.bd"
      },
      {
        "initial": "NTS",
        "faculty": "Noshin Tabassum",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.noshin.tabassum@bracu.ac.bd"
      },
      {
        "initial": "NWT",
        "faculty": "Nowshin Tabassum",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.nowshin.tabassum@bracu.ac.bd"
      },
      {
        "initial": "OBR",
        "faculty": "Md Obaidur Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.obaidur@bracu.ac.bd"
      },
      {
        "initial": "PBK",
        "faculty": "Mr. Partha Bhoumik",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.partha.bhoumik@bracu.ac.bd"
      },
      {
        "initial": "PLN",
        "faculty": "Pollock Nag",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.pollock.nag@bracu.ac.bd"
      },
      {
        "initial": "PMD",
        "faculty": "Prithu Mahmud",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.prithu.mahmud@bracu.ac.bd"
      },
      {
        "initial": "PML",
        "faculty": "Mr. MD Rifat Alam Pomil",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.rifat.pomil@bracu.ac.bd"
      },
      {
        "initial": "QAR",
        "faculty": "Mr. Quazi Ashikur Rahman",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ashikur.rahman@bracu.ac.bd"
      },
      {
        "initial": "RAR",
        "faculty": "Redowanul Akbar",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.redowanul.akbar@bracu.ac.bd"
      },
      {
        "initial": "RAS",
        "faculty": "Md. Rasel Mia",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.rasel.mia@bracu.ac.bd"
      },
      {
        "initial": "RBR",
        "faculty": "Mr. Rakin Bin Rabbani",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.rakin.rabbani@bracu.ac.bd"
      },
      {
        "initial": "RFJ",
        "faculty": "Ramisa Fariha Joyee",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.ramisa.joyee@bracu.ac.bd"
      },
      {
        "initial": "RIK",
        "faculty": "Md. Rabiul Islam Khan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.rabiul.khan@bracu.ac.bd"
      },
      {
        "initial": "RKN",
        "faculty": "Md.Raisul Kabir News",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.raisul.kabir@bracu.ac.bd"
      },
      {
        "initial": "RSS",
        "faculty": "Rafiad Sadat Shahir",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.rafiad.shahir@bracu.ac.bd"
      },
      {
        "initial": "RTI",
        "faculty": "Ms. Rifah Tasmiah Islam",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.rifah.tasmiah@bracu.ac.bd"
      },
      {
        "initial": "RZR",
        "faculty": "Riazul Islam Rifat",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.riazul.islam@bracu.ac.bd"
      },
      {
        "initial": "SAK",
        "faculty": "Mr. Shoummo Ahsan Khandoker",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.shoummo.ahsan@bracu.ac.bd"
      },
      {
        "initial": "SBHN",
        "faculty": "Mr. Md Sabbir Hossain",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sabbir.hossain@bracu.ac.bd"
      },
      {
        "initial": "SFA",
        "faculty": "M. Shafiul Alam",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.shafiul.alam@bracu.ac.bd"
      },
      {
        "initial": "SKW",
        "faculty": "Sahib Kowsar",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sahib.kowsar@bracu.ac.bd"
      },
      {
        "initial": "SMR",
        "faculty": "Shabab Murshed",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.shabab.murshed@bracu.ac.bd"
      },
      {
        "initial": "SMY",
        "faculty": "Ms. Sumaiya Akter",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sumaiya.akter@bracu.ac.bd"
      },
      {
        "initial": "SRU",
        "faculty": "Mr. Shakir Rouf",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.shakir.rouf@bracu.ac.bd"
      },
      {
        "initial": "STKH",
        "faculty": "Ms. Sumaiya Tanjil Khan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sumaiya.tanjil@bracu.ac.bd"
      },
      {
        "initial": "STV",
        "faculty": "Mr. Sifat Tanvir",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sifat.tanvir@bracu.ac.bd"
      },
      {
        "initial": "SUE",
        "faculty": "Sukarna Sarker",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sukarna.sarker@bracu.ac.bd"
      },
      {
        "initial": "SUM",
        "faculty": "Ms. Syeda Umme Salma",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.umme.salma@bracu.ac.bd"
      },
      {
        "initial": "SWG",
        "faculty": "Mr. Swattic Ghose",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.swattic.ghose@bracu.ac.bd"
      },
      {
        "initial": "SYA",
        "faculty": "Sumaiya",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sumaiya@bracu.ac.bd"
      },
      {
        "initial": "SYK",
        "faculty": "Ms. Sumiaya Azad Katha",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.sumiaya.azad@bracu.ac.bd"
      },
      {
        "initial": "SZD",
        "faculty": "Mr. Md. Shazid Bin Mahbub",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.shazid.mahbub@bracu.ac.bd"
      },
      {
        "initial": "TAP",
        "faculty": "Ms. Tasnim Ahsan Prome",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.tasnim.ahsan@bracu.ac.bd"
      },
      {
        "initial": "TAT",
        "faculty": "Towshik Anam Taj",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.towshik.anam@bracu.ac.bd"
      },
      {
        "initial": "TJW",
        "faculty": "Mr. SK. ATIK TAJWAR SIHAN",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.atik.tajwar@bracu.ac.bd"
      },
      {
        "initial": "TMY",
        "faculty": "Tanvir Muntakim Tonoy",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.tanvir.muntakim@bracu.ac.bd"
      },
      {
        "initial": "TPC",
        "faculty": "Tirthendu Prosad Chakravorty",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.tirthendu.prosad@bracu.ac.bd"
      },
      {
        "initial": "TSZ",
        "faculty": "Md. Tasnim Azad",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.md.tasnim@bracu.ac.bd"
      },
      {
        "initial": "UJT",
        "faculty": "Umme Jannat Taposhi",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.jannat.taposhi@bracu.ac.bd"
      },
      {
        "initial": "UTS",
        "faculty": "Utsab Saha",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.utsab.saha@bracu.ac.bd"
      },
      {
        "initial": "WBH",
        "faculty": "Waleed Bin Habib Khan",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.waleed.bin@bracu.ac.bd"
      },
      {
        "initial": "YAR",
        "faculty": "YEASIN ARAFAT PRITOM",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.yeasin.arafat.pritom@bracu.ac.bd"
      },
      {
        "initial": "YND",
        "faculty": "Yasmin Nadia",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.yasmin.nadia@bracu.ac.bd"
      },
      {
        "initial": "ZHY",
        "faculty": "Zayed Humayun",
        "designation": "C. Lecturer",
        "status": "Contractual",
        "room": "4N153-170, 4P",
        "email": "ext.zayed.humayun@bracu.ac.bd"
      }
    ]
  }

