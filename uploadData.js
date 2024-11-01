const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/"
});

const data = {
  headerMainThemes: [
    {
      id: 1,
      theme: "Venäjän hyökkäys",
      headImgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apu.fi%2Fartikkelit%2Fvenajan-armeija-kompastui-todellisuuteen-hyva-uutinen-suomelle&psig=AOvVaw3wCAIKTzHrvYD9_oIJeG3Y&ust=1730191692293000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDC573YsIkDFQAAAAAdAAAAABAE"
    },
    {
      id: 2,
      theme: "Lähi-itä",
      headImgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flahi-itanyt.fi%2Fnyt%2Fsyyrialaiset-karsastavat-assadin-hallintoa-ja-kannattavat-demokraattista-prosessia-vastine-ari-kerkkasen-tekemaan-kirja-arvosteluun%2F&psig=AOvVaw0Pib2dq5Co2eoVU0e42Tok&ust=1730191626085000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDcupzYsIkDFQAAAAAdAAAAABAE"
    },
    {
      id: 3,
      theme: "Yhdysvaltain presidentinvaalit",
      headImgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-photo%2F3d-united-states-usa-flag-background-american-national-symbol-waved-wind-world-flags-concept_18029648.htm&psig=AOvVaw3QvaL57yAJqFsGqXI4Uuy_&ust=1730191552797000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjzifrXsIkDFQAAAAAdAAAAABAK"
    }
  ],
  allNews: [
    {
      id: 1,
      title: "Liettua äänestää parlamenttivaaleissa – maata hallitseville konservatiiveille ennakoidaan tappiota",
      subTitle: "Kaksi viikkoa sitten vaalien ensimmäisen kierroksen voitti sosiaalidemokraattinen puolue.",
      newsText: "Liettualaiset ovat äänestäneet sunnuntaina parlamenttivaalien toisella kierroksella. Vaalien ennakoitiin johtavan maata hallitsevien konservatiivien korvautumiseen keskustavasemmistolaisella koalitiolla. Vaalien kynnyskysymykset koskevat lähes täysin sisäpolitiikkaa, sillä ulkopolitiikassa kaikki puolueet ovat yhtä mieltä muun muassa Ukrainan tuen jatkamisesta ja puolustusmenojen säilyttämisestä vähintään nykyisellä tasolla. \n Kaksi viikkoa sitten vaalien ensimmäisen kierroksen voitti sosiaalidemokraattinen puolue. Toiseksi ylsi nykyinen pääministeripuolue, kristillisdemokraattinen Kotimaan liitto. Liettuan parlamenttiin eli seimasiin valitaan 141 kansanedustajaa neljäksi vuodeksi. 70 edustajaa valitaan suhteellisella vaalitavalla yhdestä valtakunnallisesta vaalipiiristä ja 71 edustajaa suoralla vaalitavalla yhden edustajan vaalipiireistä. Puolueiden on ylitettävä viiden prosentin äänikynnys saadakseen edustajia seimasiin.",
      timestamp: "8:00",
      newsGivenBy: "Joukkoviestin",
      imgURL: "https://mospraz.ru/image/catalog/new-image-flag/%D0%9B%D0%B8%D1%82%D0%B2%D0%B0.jpg"
    },
    {
      id: 2,
      title: "Zelenskyi tapaa Pohjoismaiden johtajia Islannissa",
      subTitle: "Ukrainan presidentti Volodymyr Zelenskyi tapaa Pohjoismaiden johtajia tiistaina Islannin Reykjavikissa, kertoo Pohjoismaiden neuvosto tiedotteessaan.",
      newsText: "Ukrainan presidentti Volodymyr Zelenskyi tapaa Pohjoismaiden johtajia tiistaina Islannin Reykjavikissa, kertoo Pohjoismaiden neuvosto tiedotteessaan. Zelenskyi osallistuu vieraspuhujana Pohjoismaiden neuvoston istuntoon. \n Lisäksi hän tapaa Pohjoismaiden pääministerit. Zelenskyi ja pääministerit pitävät kahdenvälisiä kokouksia ja yhteisen lehdistötilaisuuden. Suomesta Pohjoismaiden neuvoston kokoukseen osallistuvat pääministeri Petteri Orpo (kok.), pohjoismaisesta yhteistyöstä vastaava opetusministeri Anders Adlercreutz (r.) sekä tiede- ja kulttuuriministeri Sari Multala (kok.). Pohjoismaiden neuvoston istunto pidetään Reykjavikissa 28.–31.10.",
      timestamp: "9:00",
      newsGivenBy: "Joukkoviestin",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.503006012024048,c_fill,g_faces,h_423,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1706785954/39-123671365bb7c667decc"
    },
    {
      id: 3,
      title: "Pörssisähkön hinta pyörii nyt nollan molemmin puolin",
      subTitle: "Sähköpörssi Nord Poolin hinnat ovat käyneet sunnuntaina miinuksen puolella. Samaa on luvassa myös maanantaina.",
      newsText: "Pörssisähkön tuntihinnat ovat laskeneet viikonvaihteeseen hyvin mataliksi. Sähköpörssi Nord Poolin tuntihinnat ovat olleet sunnuntaina miinuksella niin pitkään, että koko päivän keskihinta on lopulta -0,01 senttiä kilowattitunti. Kalleimmillaan hinta oli vuorokauden alussa, mikä sekin oli vain 0,51 senttiä kilowattitunnilta. Tämän jälkeen hinnat painuivat negatiivisiksi kello 3 yöllä ja pysyttelivät siellä aina kello 16 asti. Hinnat ovat myös maanantaina miinuksella vuorokauden aluksi aina kello 7 saakka. Päivän keskihinta on 0,42 snt/kWh. Hintapiikki nähdään kello 18, kun sähkö maksaa 1,88 snt/kWh. Alhaisia sähkönhintoja selittävät usein suotuisat tuuliolosuhteet. Kantaverkkoyhtiö Fingridin mukaan tuulivoimantuotanto onkin ollut kasvussa sunnuntain aikana.",
      timestamp: "10:00",
      newsGivenBy: "",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5633587786259542,c_fill,g_faces,h_406,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1728890070/39-1363217670cc46293278"
    },
    {
      id: 4,
      title: "Bolivian entinen presidentti sanoo joutuneensa aseellisen hyökkäyksen kohteeksi",
      subTitle: "Evo Moralesin mukaan hänen autonkuljettajansa haavoittui ammuskelussa.",
      newsText: "Boliviassa maan entinen presidentti Evo Morales kertoo joutuneensa sunnuntaina aseellisen hyökkäyksen kohteeksi. Moralesin mukaan hyökkäys kohdistui hänen ajoneuvoonsa Cochabamban kaupungissa, kun hän oli matkalla radiohaastatteluun. Entinen presidentti on julkaissut Facebook-tilillään videon, joka on kuvattu liikkuvasta autosta. Videolla hän istuu etumatkustajan paikalla, ja tuulilasissa näkyy ainakin kaksi luodinreikää. Asiasta raportoiva uutistoimisto Reuters eikä Yle ole kyennyt itsenäisesti varmistamaan videon aitoutta. Moralesin mukaan autonkuljettaja haavoittui ammuskelussa. –Autossa, jolla saavuin, on 14 luodinreikää, entinen presidentti kertoo. Hän lisäsi ukovansa, että isku oli suunniteltu ja sen tarkoituksena oli hänen tappamisensa. Talouskriisin vaivaamassa Boliviassa poliittiset jännitteet ovat viime aikoina lisääntyneet maan entisen johtajan kannattajien, sekä nykyisen presidentin Luis Arcen hallituksen välillä.",
      timestamp: "11:00",
      newsGivenBy: "Joukkoviestin",
      imgURL: ""
    },
    {
      id: 5,
      title: "Bolivian entinen presidentti sanoo joutuneensa aseellisen hyökkäyksen kohteeksi",
      subTitle: "Evo Moralesin mukaan hänen autonkuljettajansa haavoittui ammuskelussa.",
      newsText: "Boliviassa maan entinen presidentti Evo Morales kertoo joutuneensa sunnuntaina aseellisen hyökkäyksen kohteeksi. Moralesin mukaan hyökkäys kohdistui hänen ajoneuvoonsa Cochabamban kaupungissa, kun hän oli matkalla radiohaastatteluun. Entinen presidentti on julkaissut Facebook-tilillään videon, joka on kuvattu liikkuvasta autosta. Videolla hän istuu etumatkustajan paikalla, ja tuulilasissa näkyy ainakin kaksi luodinreikää. Asiasta raportoiva uutistoimisto Reuters eikä Yle ole kyennyt itsenäisesti varmistamaan videon aitoutta. Moralesin mukaan autonkuljettaja haavoittui ammuskelussa. –Autossa, jolla saavuin, on 14 luodinreikää, entinen presidentti kertoo. Hän lisäsi ukovansa, että isku oli suunniteltu ja sen tarkoituksena oli hänen tappamisensa. Talouskriisin vaivaamassa Boliviassa poliittiset jännitteet ovat viime aikoina lisääntyneet maan entisen johtajan kannattajien, sekä nykyisen presidentin Luis Arcen hallituksen välillä.",
      timestamp: "12:00",
      newsGivenBy: "Joukkoviestin",
      imgURL: ""
    },
    {
      id: 6,
      title: "Bolivian entinen presidentti sanoo joutuneensa aseellisen hyökkäyksen kohteeksi",
      subTitle: "Evo Moralesin mukaan hänen autonkuljettajansa haavoittui ammuskelussa.",
      newsText: "Boliviassa maan entinen presidentti Evo Morales kertoo joutuneensa sunnuntaina aseellisen hyökkäyksen kohteeksi. Moralesin mukaan hyökkäys kohdistui hänen ajoneuvoonsa Cochabamban kaupungissa, kun hän oli matkalla radiohaastatteluun. Entinen presidentti on julkaissut Facebook-tilillään videon, joka on kuvattu liikkuvasta autosta. Videolla hän istuu etumatkustajan paikalla, ja tuulilasissa näkyy ainakin kaksi luodinreikää. Asiasta raportoiva uutistoimisto Reuters eikä Yle ole kyennyt itsenäisesti varmistamaan videon aitoutta. Moralesin mukaan autonkuljettaja haavoittui ammuskelussa. –Autossa, jolla saavuin, on 14 luodinreikää, entinen presidentti kertoo. Hän lisäsi ukovansa, että isku oli suunniteltu ja sen tarkoituksena oli hänen tappamisensa. Talouskriisin vaivaamassa Boliviassa poliittiset jännitteet ovat viime aikoina lisääntyneet maan entisen johtajan kannattajien, sekä nykyisen presidentin Luis Arcen hallituksen välillä.",
      timestamp: "13:00",
      newsGivenBy: "Joukkoviestin",
      imgURL: ""
    },
    {
      id: 7,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "14:00",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5,c_fill,g_faces,h_424,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1730020850/39-1370034671e057b2ad9e"
    },
    {
      id: 8,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "15:00",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5,c_fill,g_faces,h_424,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1730020850/39-1370034671e057b2ad9e"
    },
    {
      id: 9,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "16:00",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5,c_fill,g_faces,h_424,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1730020850/39-1370034671e057b2ad9e"
    },
    {
      id: 10,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "17:00",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5,c_fill,g_faces,h_424,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1730020850/39-1370034671e057b2ad9e"
    },
    {
      id: 11,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "18:00",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5,c_fill,g_faces,h_424,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1730020850/39-1370034671e057b2ad9e"
    },
    {
      id: 12,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "19:00",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5,c_fill,g_faces,h_424,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1730020850/39-1370034671e057b2ad9e"
    }
  ],
  russiaWarNews: [
    {
      id: 1,
      title: "",
      subTitle: "",
      timeStamp: ""
    }
  ],
  americaPresidentialElectionNews: [
    {
      id: 1,
      title: "",
      subTitle: "",
      timeStamp: ""
    }
  ],
  nearEastWarNews: [
    {
      id: 1,
      title: "",
      subTitle: "",
      timeStamp: ""
    }
  ]
};

const uploadData = async () => {
  const db = admin.database();
  const ref = db.ref("news"); // название пути, куда вы хотите загрузить данные

  try {
    await ref.set(data);
    console.log("Данные успешно загружены в Firebase!");
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

uploadData();
