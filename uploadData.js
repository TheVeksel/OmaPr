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
      imgURL: "https://i.media.fi/incoming/ded5c9/9383513.jpg/alternates/OG_IMAGE_ITA_SAVO/9383513.jpg"
    },
    {
      id: 3,
      title: "Pörssisähkön hinta pyörii nyt nollan molemmin puolin",
      subTitle: "Sähköpörssi Nord Poolin hinnat ovat käyneet sunnuntaina miinuksen puolella. Samaa on luvassa myös maanantaina.",
      newsText: "Pörssisähkön tuntihinnat ovat laskeneet viikonvaihteeseen hyvin mataliksi. Sähköpörssi Nord Poolin tuntihinnat ovat olleet sunnuntaina miinuksella niin pitkään, että koko päivän keskihinta on lopulta -0,01 senttiä kilowattitunti. Kalleimmillaan hinta oli vuorokauden alussa, mikä sekin oli vain 0,51 senttiä kilowattitunnilta. Tämän jälkeen hinnat painuivat negatiivisiksi kello 3 yöllä ja pysyttelivät siellä aina kello 16 asti. Hinnat ovat myös maanantaina miinuksella vuorokauden aluksi aina kello 7 saakka. Päivän keskihinta on 0,42 snt/kWh. Hintapiikki nähdään kello 18, kun sähkö maksaa 1,88 snt/kWh. Alhaisia sähkönhintoja selittävät usein suotuisat tuuliolosuhteet. Kantaverkkoyhtiö Fingridin mukaan tuulivoimantuotanto onkin ollut kasvussa sunnuntain aikana.",
      timestamp: "10:00",
      newsGivenBy: "Energiatiedote",
      imgURL: "https://images.cdn.yle.fi/image/upload/ar_1.5633587786259542,c_fill,g_faces,h_406,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1728890070/39-1363217670cc46293278"
    },
      {
        "id": 4,
        "title": "Sähkön hinta laskee Suomessa tänä marraskuussa sääolojen vuoksi",
        "subTitle": "Sateiset syksyn päivät tuovat helpotusta energiakustannuksiin.",
        "newsText": "Marraskuun alussa sähkön hinta on laskenut merkittävästi Suomessa kiitos runsaille sateille, jotka ovat lisänneet vesivarantoja. Tämä kehitys tarkoittaa huomattavia säästöjä sekä kotitalouksille että yrityksille, jotka kamppailivat viime vuoden korkean energian hinnan kanssa. \n Energiateollisuus on kiittänyt suotuisia sääolosuhteita, mutta muistuttaa, että ilmastonmuutos voi tehdä talvista entistä arvaamattomampia, jolloin hinta voi vaihdella. \n Sähköyhtiöt ovat valmiita tarvittaessa sopeutumaan nopeasti muuttuviin sääolosuhteisiin, ja monet perheet ovat nyt jo tunteneet eron sähkölaskuissaan.",
        "timestamp": "9:00",
        "newsGivenBy": "Energiatiedote",
        "imgURL": "https://im.mtvuutiset.fi/image/8498928/landscape16_9/1024/576/301494721960ef9bb90bfc51005a73bf/II/sahko-2.jpg",
        "about": "Sähkö"
      },
      {
        "id": 5,
        "title": "Helsingin uudet raitiovaunut otetaan käyttöön ympäristöystävällisempinä",
        "subTitle": "Kaupungin uudet vaunut parantavat liikenteen sujuvuutta.",
        "newsText": "Helsingin kaupungin uusimmat raitiovaunut on suunniteltu vähentämään energiankulutusta ja siten pienentämään hiilijalanjälkeä. Näissä vaunuissa on enemmän tilaa matkustajille ja ne on varustettu uusimmalla teknologialla, joka tekee niistä tehokkaita ja hiljaisempia. \n Uudistus on osa laajempaa kaupunginliikenteen modernisointia, jonka tavoitteena on vähentää riippuvuutta fossiilisista polttoaineista. \n Liikennelaitoksen mukaan uudet raitiovaunut voivat vähentää liikenteen päästöjä jopa 20 prosenttia tulevina vuosina.",
        "timestamp": "10:30",
        "newsGivenBy": "HSL",
        "imgURL": "https://ym.fi/documents/1410903/39510183/_11A5262.jpg/eef138d1-97c6-9c59-7a56-7a53b69fcaf6?t=1681909643256",
        "about":"Helsinki"
      },
      {
        "id": 6,
        "title": "Koronatilanne paranee Suomessa syksyn aikana, tartunnat vähenevät",
        "subTitle": "Suomessa koronavirustapaukset ovat laskusuunnassa.",
        "newsText": "Terveyden ja hyvinvoinnin laitos on ilmoittanut, että koronatilanne on parantunut huomattavasti viimeisten viikkojen aikana. Tartuntamäärien lasku johtuu osittain korkeasta rokotekattavuudesta ja varotoimien noudattamisesta. \n Vaikka tilanne näyttää hyvältä, terveysviranomaiset suosittelevat edelleen varovaisuutta, erityisesti sisätiloissa järjestettävissä suurissa tapahtumissa. \n Terveydenhuollon asiantuntijat seuraavat tilannetta tarkasti ja ovat valmiina ryhtymään toimenpiteisiin, jos uusia virusmuunnoksia ilmestyy.",
        "timestamp": "11:00",
        "newsGivenBy": "THL",
        "imgURL": "https://img.ilcdn.fi/62IYhYIqAwb7oIlBaGWz_fZ18P0=/full-fit-in/920x0/img-s3.ilcdn.fi/b8716bebb343d6e6215765d8144833c12b5295fe683e91d4c6c2387d96ae1320.jpg",
        "about":"Koronatilanne"
      },
      {
        "id": 7,
        "title": "Ensimmäinen ensilumi satoi Lappiin ja aiheuttaa talvirengaskauden",
        "subTitle": "Talvirenkaat suositellaan vaihtamaan ajoissa liukkauden vuoksi.",
        "newsText": "Lapissa talven ensimmäiset lumihiutaleet ovat saaneet autoilijat vaihtamaan talvirenkaisiin, mikä on paikoin lisännyt kysyntää rengaspalveluissa. Liikenneturva kehottaa kaikkia Lapin alueella liikkuvia vaihtamaan talvirenkaat ajoissa liukastumisten ja kolareiden välttämiseksi. \n Etelä-Suomessa odotetaan talvirengaskauden alkavan lähiviikkoina, mutta turvallisuuden vuoksi monet ovat jo päättäneet hankkia talvirenkaat ennakkoon. \n Paikalliset poliisiviranomaiset ovat myös tehostaneet liikenteen valvontaa varmistamaan, että kaikki noudattavat turvallisuusmääräyksiä.",
        "timestamp": "12:00",
        "newsGivenBy": "Liikenneturva",
        "imgURL": "https://arcticguesthouseandigloos.com/wp-content/uploads/2021/09/Lapland-first-snow.jpg"
      },
      {
        "id": 8,
        "title": "Suomi parantaa elokuvatuotantotukeaan houkutellakseen ulkomaisia tuotantoja",
        "subTitle": "Uudet tukipaketit tekevät Suomesta elokuvatuotantojen houkuttelevamman.",
        "newsText": "Suomen hallitus on korottanut elokuvatuotantotukeaan osana kansainvälisen markkinoinnin strategiaa. Tämä avaa uusia mahdollisuuksia kansainvälisille tuotannoille tulla kuvaamaan elokuviaan Suomen kauniisiin ja monipuolisiin maisemiin. \n Suomen elokuvateollisuus on viime vuosina kasvanut, ja uusi tuki tekee maasta entistä kilpailukykyisemmän muiden Euroopan maiden joukossa. \n Tämä päätös tuo mahdollisuuksia myös kotimaisille tuotantoyhtiöille ja edistää kulttuurialan työpaikkojen luomista.",
        "timestamp": "13:15",
        "newsGivenBy": "Suomen Elokuvasäätiö",
        "imgURL": "https://images.unsplash.com/photo-1503264116251-35a269479413"
      },    
    {
      id: 9,
      title: "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle: "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText: "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. \n Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. \n Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "19:00",
      imgURL: "https://im.mtvuutiset.fi/image/8992464/landscape16_9/1600/900/bd5ef40c92434b7849ddc8d3bd5e59c/ZW/SomeSharing/aop-tel-aviv-rajahdys.jpg",
      "about":"Lähi-itä"
    },
    {
      "id": 10,
      "title": "Suomen matkailualan kasvu kiihtyy – ulkomaiset turistit palaavat pohjoiseen",
      "subTitle": "Lappi houkuttelee matkailijoita ainutlaatuisilla elämyksillään.",
      "newsText": "Suomen matkailuala on kokenut ennennäkemätöntä kasvua viime kuukausina, kun ulkomaiset turistit ovat jälleen löytäneet tiensä pohjoiseen. Lapin talvikausi näyttää tänä vuonna lupaavalta, sillä majoitusvaraukset ja retkipalvelut ovat kasvaneet yli 30 prosenttia viime vuoteen verrattuna. \n Alueen matkailutoimijat ovat valmistautuneet vilkkaaseen kauteen ja laajentaneet palveluitaan kattaakseen kysyntää. Esimerkiksi uusilla revontulien katseluretkillä on tarjolla ainutlaatuisia mahdollisuuksia, joissa vierailijat voivat nauttia suomalaisesta luonnosta sekä paikallisista ruoista. \n Paikalliset yrittäjät ovat kiittäneet Suomen hallitusta matkailualan tukitoimista, jotka ovat auttaneet matkailijoita löytämään maahan palaamisensa jälkeen helposti turvallisia vaihtoehtoja.",
      "timestamp": "08:45",
      "newsGivenBy": "Matkailu-uutiset",
      "imgURL": "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg"
    },
    {
      "id": 11,
      "title": "Suomalaiset opiskelijat kehittävät uudenlaista teknologiaa kaupunkiliikenteen sujuvoittamiseen",
      "subTitle": "Innovatiivinen ratkaisu kerää jo kiinnostusta suurilta kaupungeilta.",
      "newsText": "Ryhmä suomalaisia opiskelijoita on kehittänyt uudenlaisen mobiilisovelluksen, joka helpottaa kaupunkilaisten liikkumista ja vähentää liikenteen ruuhkautumista. Sovellus hyödyntää reaaliaikaista tietoa ja koneoppimista optimoidakseen kaupunkiliikenteen ohjausta, mikä voi merkittävästi lyhentää työmatkoihin kuluvaa aikaa. \n Tämän lisäksi sovellus auttaa paikallisia viranomaisia suunnittelemaan liikenteenohjausta, mikä on erityisen tärkeää suurkaupungeissa, joissa liikenteen sujuvuudella on huomattava vaikutus ilmastonmuutoksen torjunnassa. \n Projektin vetäjä, Helsingin yliopiston tutkijatohtori, uskoo, että innovaatio voisi laajentua tulevina vuosina useisiin Euroopan maihin.",
      "timestamp": "10:15",
      "newsGivenBy": "Tiede ja teknologia",
      "imgURL": "https://cdn.pixabay.com/photo/2016/01/19/17/48/traffic-1149940_960_720.jpg"
    },
    {
      "id": 12,
      "title": "Ympäristöaktivistit kehottavat Suomea lisäämään metsien suojelupinta-alaa",
      "subTitle": "Luonnon monimuotoisuuden säilyttäminen on keskeinen tavoite.",
      "newsText": "Useat ympäristöjärjestöt ovat vedonneet Suomen hallitukseen, jotta se lisäisi suojeltujen metsien määrää merkittävästi. Aktivistien mukaan nykyiset suojelutoimet eivät riitä turvaamaan arvokkaita ekosysteemejä ja lajien monimuotoisuutta. \n Metsien käyttö on ollut pitkään kiivaan keskustelun aiheena Suomessa, ja hallitus on saanut painostusta useilta kansainvälisiltä tahoilta. \n Suunnitteilla on uusia ohjelmia, jotka tukisivat sekä metsien suojelua että metsätalouden kestävyyttä. Suomen luonnonperintösäätiön mukaan kestävät suojelutoimet ovat tärkeä osa ilmastotavoitteiden saavuttamista ja kansainvälistä yhteistyötä ympäristön suojelussa.",
      "timestamp": "11:30",
      "newsGivenBy": "Ympäristötiedote",
      "imgURL": "https://cdn.pixabay.com/photo/2016/11/21/15/16/nature-1845637_960_720.jpg"
    },
    {
      "id": 13,
      "title": "Koulutuksen digitalisaatio Suomessa – uudet mahdollisuudet ja haasteet",
      "subTitle": "Opetuksen digitalisointi avaa uusia ovia oppimiselle.",
      "newsText": "Suomessa on otettu suuria harppauksia opetuksen digitalisaatiossa, ja monet koulut ovat ottaneet käyttöön virtuaalisia oppimisympäristöjä ja digitaalisia resursseja. Uusien teknologioiden käyttöönotto on auttanut erityisesti etäopetuksessa, mutta myös tuonut mukanaan uusia haasteita. \n Opettajat ja oppilaat ovat joutuneet sopeutumaan nopeasti muuttuneeseen oppimisympäristöön. Monet opettajat kokevat tarvetta lisäkoulutukselle, jotta voivat tehokkaasti hyödyntää digitaalisia resursseja oppimisprosessissa. \n Suomen opetusministeriö suunnittelee lisäämään resursseja digitaalisen opetuksen kehittämiseen ja tukemaan opettajia uusien opetusmenetelmien omaksumisessa.",
      "timestamp": "12:45",
      "newsGivenBy": "Koulutus ja kehitys",
      "imgURL": "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849828_960_720.jpg"
    },
    {
      "id": 14,
      "title": "Suomen start-up -yritykset kasvavat vauhdilla teknologia-alan kehittyessä",
      "subTitle": "Kansainvälinen kiinnostus suomalaista innovointia kohtaan lisääntyy.",
      "newsText": "Suomen start-up -sektori on kokenut viime vuosina kasvua teknologian ja innovoinnin kehittyessä, ja monet suomalaiset yritykset ovat saaneet kansainvälistä huomiota uusista ratkaisuistaan. Tähän kasvuun on vaikuttanut myös valtion tuki yrityksille, jotka tähtäävät globaalien ongelmien ratkaisuun. \n Useat suomalaiset teknologiayritykset ovat erikoistuneet erityisesti tekoälyyn ja data-analytiikkaan, mikä on houkutellut sijoittajia ympäri maailman. \n Kansainvälisen rahoituksen myötä suomalaisilla yrityksillä on mahdollisuus laajentaa markkinoitaan entisestään, ja monet ovat asettaneet tavoitteekseen uusien työpaikkojen luomisen tulevien vuosien aikana.",
      "timestamp": "14:20",
      "newsGivenBy": "Teknologia ja yritys",
      "imgURL": "https://cdn.pixabay.com/photo/2016/01/19/15/05/student-1149669_960_720.jpg"
    },
    {
      "id": 15,
      "title": "Liverpool löylytti Leverkusenia, Milan Real Madridia – Hradeckyn huikea sarja päättyi",
      "subTitle": "Lukas Hradeckyn edustama Leverkusen kärsi rökäletappion Anfieldillä. Hattutemppuihin pystyivät Sportingin Viktor Gyökeres ja Liverpoolin Luis Diaz.",
      "newsText": "Liverpool pelasi vaatimattoman avauspuoliskon jalkapallon Mestarien liigassa, mutta oli liikkeellä toisella jaksolla uudella ilmeellä ja lopulta liian kova Lukas Hradeckyn edustamalle Leverkusenille.\n\nHattutempun koonnut Luis Diaz ja Cody Gakpo sinetöivät Liverpoolin 4–0-kotivoiton. Hradecky oli täysin voimaton takaiskumaalien edessä. Liverpool johtaa Mestarien liigaa täydellä 12 pisteellä.\n\nTappio oli Hradeckylle ensimmäinen Leverkusenin paidassa sitten toukokuun 2023. Huuhkajavahdin tappiottomien Leverkusenin pelien sarja päättyi 45 otteluun.\n\nEntiselle Liverpoolin keskikenttäpelaajalle, Leverkusenin nykyiselle valmentajalle Xabi Alonsolle, 42, paluu Anfieldille oli ankea. Hän edusti pelaajaurallaan Liverpoolia vuosina 2004–09.\n\nReal Madrid alamaissa\n\nMilan jatkoi Real Madridin nöyryytyksiä ja päihitti heikkovireisen kotijoukkueen Santiago Bernabeulla maalein 3–1. Edellisessä kotipelissä Real oli ottanut pataan La Ligan jättiläisten kohtaamisessa Barcelonalta 0–4.",
      "timestamp": "15:20",
      "newsGivenBy": "Timo Uusitalo",
      "imgURL": "https://tmssl.akamaized.net//images/foto/galerie/lukas-hradecky-bayer-04-leverkusen-2024-1714970486-135794.jpg?lm=1714970496",
      "about":"Jalkapallo"
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
  const ref = db.ref("news"); 

  try {
    await ref.set(data);
    console.log("Данные успешно загружены в Firebase!");
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

uploadData();
