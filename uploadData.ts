const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/",
});

const data = {
  headerMainThemes: [
    {
      id: 0,
      theme: "Venäjän hyökkäys",
      headerPicture:
        "https://c.files.bbci.co.uk/12767/production/_133532657_ukraine-russia-promo.png",
    },
    {
      id: 1,
      theme: "Lähi-itä",
      headerPicture:
        "https://www.stimson.org/wp-content/uploads/2024/07/Middle-East-Soldiers-on-Map.jpg",
    },
    {
      id: 2,
      theme: "Yhdysvaltain presidentinvaalit 2024",
      headerPicture:
        "https://www.lynxbroker.fi/app/uploads/sites/5/2024/08/yhdysvaltain-vaalit-2024.jpg",
    },
  ],
  allNews: [
    {
      id: 0,
      title: "Zelenskyi tapaa Pohjoismaiden johtajia Islannissa",
      subTitle:
        "Ukrainan presidentti Volodymyr Zelenskyi tapaa Pohjoismaiden johtajia tiistaina Islannin Reykjavikissa, kertoo Pohjoismaiden neuvosto tiedotteessaan.",
      newsText:
        "Ukrainan presidentti Volodymyr Zelenskyi tapaa Pohjoismaiden johtajia tiistaina Islannin Reykjavikissa, kertoo Pohjoismaiden neuvosto tiedotteessaan. Zelenskyi osallistuu vieraspuhujana Pohjoismaiden neuvoston istuntoon. \n Lisäksi hän tapaa Pohjoismaiden pääministerit. Zelenskyi ja pääministerit pitävät kahdenvälisiä kokouksia ja yhteisen lehdistötilaisuuden. Suomesta Pohjoismaiden neuvoston kokoukseen osallistuvat pääministeri Petteri Orpo (kok.), pohjoismaisesta yhteistyöstä vastaava opetusministeri Anders Adlercreutz (r.) sekä tiede- ja kulttuuriministeri Sari Multala (kok.). Pohjoismaiden neuvoston istunto pidetään Reykjavikissa 28.–31.10.",
      timestamp: "9:00",
      newsGivenBy: "Joukkoviestin",
      imgURL:
        "https://i.media.fi/incoming/ded5c9/9383513.jpg/alternates/OG_IMAGE_ITA_SAVO/9383513.jpg",
      theme: "Politiikkaa",
    },
    {
      id: 1,
      title:
        "Liettua äänestää parlamenttivaaleissa – maata hallitseville konservatiiveille ennakoidaan tappiota",
      subTitle:
        "Kaksi viikkoa sitten vaalien ensimmäisen kierroksen voitti sosiaalidemokraattinen puolue.",
      newsText:
        "Liettualaiset ovat äänestäneet sunnuntaina parlamenttivaalien toisella kierroksella. Vaalien ennakoitiin johtavan maata hallitsevien konservatiivien korvautumiseen keskustavasemmistolaisella koalitiolla. Vaalien kynnyskysymykset koskevat lähes täysin sisäpolitiikkaa, sillä ulkopolitiikassa kaikki puolueet ovat yhtä mieltä muun muassa Ukrainan tuen jatkamisesta ja puolustusmenojen säilyttämisestä vähintään nykyisellä tasolla. \n Kaksi viikkoa sitten vaalien ensimmäisen kierroksen voitti sosiaalidemokraattinen puolue. Toiseksi ylsi nykyinen pääministeripuolue, kristillisdemokraattinen Kotimaan liitto. Liettuan parlamenttiin eli seimasiin valitaan 141 kansanedustajaa neljäksi vuodeksi. 70 edustajaa valitaan suhteellisella vaalitavalla yhdestä valtakunnallisesta vaalipiiristä ja 71 edustajaa suoralla vaalitavalla yhden edustajan vaalipiireistä. Puolueiden on ylitettävä viiden prosentin äänikynnys saadakseen edustajia seimasiin.",
      timestamp: "8:00",
      newsGivenBy: "Joukkoviestin",
      imgURL:
        "https://images.delfi.lt/media-api-image-cropper/v1/268a3627-1023-4fa7-84f9-6f099471794a.jpg?noup&w=1200&h=711",
        theme: "Politiikkaa",
    },
    {
      id: 2,
      title: "Pörssisähkön hinta pyörii nyt nollan molemmin puolin",
      subTitle:
        "Sähköpörssi Nord Poolin hinnat ovat käyneet sunnuntaina miinuksen puolella. Samaa on luvassa myös maanantaina.",
      newsText:
        "Pörssisähkön tuntihinnat ovat laskeneet viikonvaihteeseen hyvin mataliksi. Sähköpörssi Nord Poolin tuntihinnat ovat olleet sunnuntaina miinuksella niin pitkään, että koko päivän keskihinta on lopulta -0,01 senttiä kilowattitunti. Kalleimmillaan hinta oli vuorokauden alussa, mikä sekin oli vain 0,51 senttiä kilowattitunnilta. Tämän jälkeen hinnat painuivat negatiivisiksi kello 3 yöllä ja pysyttelivät siellä aina kello 16 asti. Hinnat ovat myös maanantaina miinuksella vuorokauden aluksi aina kello 7 saakka. Päivän keskihinta on 0,42 snt/kWh. Hintapiikki nähdään kello 18, kun sähkö maksaa 1,88 snt/kWh. Alhaisia sähkönhintoja selittävät usein suotuisat tuuliolosuhteet. Kantaverkkoyhtiö Fingridin mukaan tuulivoimantuotanto onkin ollut kasvussa sunnuntain aikana.",
      timestamp: "10:00",
      newsGivenBy: "Energiatiedote",
      imgURL:
        "https://images.cdn.yle.fi/image/upload/ar_1.5633587786259542,c_fill,g_faces,h_406,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1728890070/39-1363217670cc46293278",
        theme: "Talous",
    },
    {
      id: 3,
      title: "Sähkön hinta laskee Suomessa tänä marraskuussa sääolojen vuoksi",
      subTitle:
        "Sateiset syksyn päivät tuovat helpotusta energiakustannuksiin.",
      newsText:
        "Marraskuun alussa sähkön hinta on laskenut merkittävästi Suomessa kiitos runsaille sateille, jotka ovat lisänneet vesivarantoja. Tämä kehitys tarkoittaa huomattavia säästöjä sekä kotitalouksille että yrityksille, jotka kamppailivat viime vuoden korkean energian hinnan kanssa. \n Energiateollisuus on kiittänyt suotuisia sääolosuhteita, mutta muistuttaa, että ilmastonmuutos voi tehdä talvista entistä arvaamattomampia, jolloin hinta voi vaihdella. \n Sähköyhtiöt ovat valmiita tarvittaessa sopeutumaan nopeasti muuttuviin sääolosuhteisiin, ja monet perheet ovat nyt jo tunteneet eron sähkölaskuissaan.",
      timestamp: "9:00",
      newsGivenBy: "Energiatiedote",
      imgURL:
        "https://im.mtvuutiset.fi/image/8498928/landscape16_9/1024/576/301494721960ef9bb90bfc51005a73bf/II/sahko-2.jpg",
      theme: "Talous",
    },
    {
      id: 4,
      title:
        "Helsingin uudet raitiovaunut otetaan käyttöön ympäristöystävällisempinä",
      subTitle: "Kaupungin uudet vaunut parantavat liikenteen sujuvuutta.",
      newsText:
        "Helsingin kaupungin uusimmat raitiovaunut on suunniteltu vähentämään energiankulutusta ja siten pienentämään hiilijalanjälkeä. Näissä vaunuissa on enemmän tilaa matkustajille ja ne on varustettu uusimmalla teknologialla, joka tekee niistä tehokkaita ja hiljaisempia. \n Uudistus on osa laajempaa kaupunginliikenteen modernisointia, jonka tavoitteena on vähentää riippuvuutta fossiilisista polttoaineista. \n Liikennelaitoksen mukaan uudet raitiovaunut voivat vähentää liikenteen päästöjä jopa 20 prosenttia tulevina vuosina.",
      timestamp: "10:30",
      newsGivenBy: "HSL",
      imgURL:
        "https://ym.fi/documents/1410903/39510183/_11A5262.jpg/eef138d1-97c6-9c59-7a56-7a53b69fcaf6?t=1681909643256",
      theme: "Kotimaa",
    },
    {
      id: 5,
      title:
        "Koronatilanne paranee Suomessa syksyn aikana, tartunnat vähenevät",
      subTitle: "Suomessa koronavirustapaukset ovat laskusuunnassa.",
      newsText:
        "Terveyden ja hyvinvoinnin laitos on ilmoittanut, että koronatilanne on parantunut huomattavasti viimeisten viikkojen aikana. Tartuntamäärien lasku johtuu osittain korkeasta rokotekattavuudesta ja varotoimien noudattamisesta. \n Vaikka tilanne näyttää hyvältä, terveysviranomaiset suosittelevat edelleen varovaisuutta, erityisesti sisätiloissa järjestettävissä suurissa tapahtumissa. \n Terveydenhuollon asiantuntijat seuraavat tilannetta tarkasti ja ovat valmiina ryhtymään toimenpiteisiin, jos uusia virusmuunnoksia ilmestyy.",
      timestamp: "11:00",
      newsGivenBy: "THL",
      imgURL:
        "https://img.ilcdn.fi/62IYhYIqAwb7oIlBaGWz_fZ18P0=/full-fit-in/920x0/img-s3.ilcdn.fi/b8716bebb343d6e6215765d8144833c12b5295fe683e91d4c6c2387d96ae1320.jpg",
      theme: "Koronatilanne",
    },
    {
      id: 6,
      title:
        "Ensimmäinen ensilumi satoi Lappiin ja aiheuttaa talvirengaskauden",
      subTitle:
        "Talvirenkaat suositellaan vaihtamaan ajoissa liukkauden vuoksi.",
      newsText:
        "Lapissa talven ensimmäiset lumihiutaleet ovat saaneet autoilijat vaihtamaan talvirenkaisiin, mikä on paikoin lisännyt kysyntää rengaspalveluissa. Liikenneturva kehottaa kaikkia Lapin alueella liikkuvia vaihtamaan talvirenkaat ajoissa liukastumisten ja kolareiden välttämiseksi. \n Etelä-Suomessa odotetaan talvirengaskauden alkavan lähiviikkoina, mutta turvallisuuden vuoksi monet ovat jo päättäneet hankkia talvirenkaat ennakkoon. \n Paikalliset poliisiviranomaiset ovat myös tehostaneet liikenteen valvontaa varmistamaan, että kaikki noudattavat turvallisuusmääräyksiä.",
      timestamp: "12:00",
      newsGivenBy: "Liikenneturva",
      imgURL:
        "https://arcticguesthouseandigloos.com/wp-content/uploads/2021/09/Lapland-first-snow.jpg",
        theme: "Kotimaa",
    },
    {
      id: 7,
      title:
        "Suomi parantaa elokuvatuotantotukeaan houkutellakseen ulkomaisia tuotantoja",
      subTitle:
        "Uudet tukipaketit tekevät Suomesta elokuvatuotantojen houkuttelevamman.",
      newsText:
        "Suomen hallitus on korottanut elokuvatuotantotukeaan osana kansainvälisen markkinoinnin strategiaa. Tämä avaa uusia mahdollisuuksia kansainvälisille tuotannoille tulla kuvaamaan elokuviaan Suomen kauniisiin ja monipuolisiin maisemiin. \n Suomen elokuvateollisuus on viime vuosina kasvanut, ja uusi tuki tekee maasta entistä kilpailukykyisemmän muiden Euroopan maiden joukossa. \n Tämä päätös tuo mahdollisuuksia myös kotimaisille tuotantoyhtiöille ja edistää kulttuurialan työpaikkojen luomista.",
      timestamp: "13:15",
      newsGivenBy: "Suomen Elokuvasäätiö",
      imgURL: "https://konfo-files.opintopolku.fi/toteutus-teemakuva/1.2.246.562.17.00000000000000003366/2b634087-100e-40a1-b270-8c7fbefbefad.jpg",
      theme: "Kotimaa",
    },
    {
      id: 8,
      title:
        "Epäilty terrori-isku Israelissa – yksi kuoli ja kymmeniä loukkaantui",
      subTitle:
        "Haaretz-lehden mukaan väkijoukkoon ajo tapahtui lähellä Israelin tiedustelutukikohtaa.",
      newsText:
        "Glilotissa Keski-Israelissa yksi ihminen on kuollut ja kymmeniä loukkaantunut kuorma-auton törmättyä bussipysäkille sunnuntaina, kertoo alueen pelastuspalvelu. Haaretz-lehden mukaan väkijoukkoon ajo tapahtui noin kello 10 aamulla, lähellä Israelin tiedustelutukikohtaa. \n Israelin poliisin mukaan kuorma-auto törmäsi myös pysäkillä seisoneeseen bussiin. Poliisin mukaan yksi ihminen kuoli myöhemmin törmäyksessä saamiinsa vammoihin. \n Lisäksi noin 40 kerrotaan loukkaantuneen. Poliisin mukaan paikalla olleet siviilit ampuivat kuorma-auton kuljettajan ja ”neutralisoivat” hänet. Haaretz kertoo poliisin tutkivan tapahtunutta terrori-iskuna, mutta selvittävän myös muita mahdollisia motiiveja. Äärijärjestö Hamas on sunnuntaina antanut lausunnon, jossa kuvattiin ”sankarillisen törmäyshyökkäyksen” lähellä Israelin tiedustelutukokohtaa ”olleen vastaus sionistisen miehityksen palestiinalaisia vastaan tekemiin rikoksiin”. Sunnuntaina Israelissa sattui myös toinen, erillinen välikohtaus lähellä Jerusalemia, jossa Israelin sotilaat ampuivat miehen, joka yritti puukottaa heitä ”terrorismin vastaisessa” operaatiossa. Israelin armeija on kuvannut puukotusyritystä ”terroriteoksi.”",
      timestamp: "19:00",
      imgURL:
        "https://im.mtvuutiset.fi/image/8992464/landscape16_9/1600/900/bd5ef40c92434b7849ddc8d3bd5e59c/ZW/SomeSharing/aop-tel-aviv-rajahdys.jpg",
      theme: "Lähi-itä",
    },
    {
      id: 9,
      title:
        "Suomen matkailualan kasvu kiihtyy – ulkomaiset turistit palaavat pohjoiseen",
      subTitle:
        "Lappi houkuttelee matkailijoita ainutlaatuisilla elämyksillään.",
      newsText:
        "Suomen matkailuala on kokenut ennennäkemätöntä kasvua viime kuukausina, kun ulkomaiset turistit ovat jälleen löytäneet tiensä pohjoiseen. Lapin talvikausi näyttää tänä vuonna lupaavalta, sillä majoitusvaraukset ja retkipalvelut ovat kasvaneet yli 30 prosenttia viime vuoteen verrattuna. \n Alueen matkailutoimijat ovat valmistautuneet vilkkaaseen kauteen ja laajentaneet palveluitaan kattaakseen kysyntää. Esimerkiksi uusilla revontulien katseluretkillä on tarjolla ainutlaatuisia mahdollisuuksia, joissa vierailijat voivat nauttia suomalaisesta luonnosta sekä paikallisista ruoista. \n Paikalliset yrittäjät ovat kiittäneet Suomen hallitusta matkailualan tukitoimista, jotka ovat auttaneet matkailijoita löytämään maahan palaamisensa jälkeen helposti turvallisia vaihtoehtoja.",
      timestamp: "08:45",
      newsGivenBy: "Matkailu-uutiset",
      imgURL:
        "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
        theme: "Kotimaa",
    },
    {
      id: 10,
      title:
        "Suomalaiset opiskelijat kehittävät uudenlaista teknologiaa kaupunkiliikenteen sujuvoittamiseen",
      subTitle:
        "Innovatiivinen ratkaisu kerää jo kiinnostusta suurilta kaupungeilta.",
      newsText:
        "Ryhmä suomalaisia opiskelijoita on kehittänyt uudenlaisen mobiilisovelluksen, joka helpottaa kaupunkilaisten liikkumista ja vähentää liikenteen ruuhkautumista. Sovellus hyödyntää reaaliaikaista tietoa ja koneoppimista optimoidakseen kaupunkiliikenteen ohjausta, mikä voi merkittävästi lyhentää työmatkoihin kuluvaa aikaa. \n Tämän lisäksi sovellus auttaa paikallisia viranomaisia suunnittelemaan liikenteenohjausta, mikä on erityisen tärkeää suurkaupungeissa, joissa liikenteen sujuvuudella on huomattava vaikutus ilmastonmuutoksen torjunnassa. \n Projektin vetäjä, Helsingin yliopiston tutkijatohtori, uskoo, että innovaatio voisi laajentua tulevina vuosina useisiin Euroopan maihin.",
      timestamp: "10:15",
      newsGivenBy: "Tiede ja teknologia",
      imgURL:
        "https://www.ts.fi/static/content/pic_5_5946590_k8448293_1200.jpg",
        theme: "Kotimaa",
    },
    {
      id: 11,
      title:
        "Ympäristöaktivistit kehottavat Suomea lisäämään metsien suojelupinta-alaa",
      subTitle: "Luonnon monimuotoisuuden säilyttäminen on keskeinen tavoite.",
      newsText:
        "Useat ympäristöjärjestöt ovat vedonneet Suomen hallitukseen, jotta se lisäisi suojeltujen metsien määrää merkittävästi. Aktivistien mukaan nykyiset suojelutoimet eivät riitä turvaamaan arvokkaita ekosysteemejä ja lajien monimuotoisuutta. \n Metsien käyttö on ollut pitkään kiivaan keskustelun aiheena Suomessa, ja hallitus on saanut painostusta useilta kansainvälisiltä tahoilta. \n Suunnitteilla on uusia ohjelmia, jotka tukisivat sekä metsien suojelua että metsätalouden kestävyyttä. Suomen luonnonperintösäätiön mukaan kestävät suojelutoimet ovat tärkeä osa ilmastotavoitteiden saavuttamista ja kansainvälistä yhteistyötä ympäristön suojelussa.",
      timestamp: "11:30",
      newsGivenBy: "Ympäristötiedote",
      imgURL:
        "https://www.luke.fi/sites/default/files/2022-10/Suojellut%20mets%C3%A4t%202022_FI_korjattu.png",
        theme: "Kotimaa",
    },
    {
      id: 12,
      title:
        "Koulutuksen digitalisaatio Suomessa – uudet mahdollisuudet ja haasteet",
      subTitle: "Opetuksen digitalisointi avaa uusia ovia oppimiselle.",
      newsText:
        "Suomessa on otettu suuria harppauksia opetuksen digitalisaatiossa, ja monet koulut ovat ottaneet käyttöön virtuaalisia oppimisympäristöjä ja digitaalisia resursseja. Uusien teknologioiden käyttöönotto on auttanut erityisesti etäopetuksessa, mutta myös tuonut mukanaan uusia haasteita. \n Opettajat ja oppilaat ovat joutuneet sopeutumaan nopeasti muuttuneeseen oppimisympäristöön. Monet opettajat kokevat tarvetta lisäkoulutukselle, jotta voivat tehokkaasti hyödyntää digitaalisia resursseja oppimisprosessissa. \n Suomen opetusministeriö suunnittelee lisäämään resursseja digitaalisen opetuksen kehittämiseen ja tukemaan opettajia uusien opetusmenetelmien omaksumisessa.",
      timestamp: "12:45",
      newsGivenBy: "Koulutus ja kehitys",
      imgURL:
        "https://okm.fi/documents/1410845/37297639/alakouluope10.jpg/969b8efa-e287-7706-3100-cb9a980af295?t=1609246926166",
        theme: "Kotimaa",
    },
    {
      id: 13,
      title:
        "Suomen start-up -yritykset kasvavat vauhdilla teknologia-alan kehittyessä",
      subTitle:
        "Kansainvälinen kiinnostus suomalaista innovointia kohtaan lisääntyy.",
      newsText:
        "Suomen start-up -sektori on kokenut viime vuosina kasvua teknologian ja innovoinnin kehittyessä, ja monet suomalaiset yritykset ovat saaneet kansainvälistä huomiota uusista ratkaisuistaan. Tähän kasvuun on vaikuttanut myös valtion tuki yrityksille, jotka tähtäävät globaalien ongelmien ratkaisuun. \n Useat suomalaiset teknologiayritykset ovat erikoistuneet erityisesti tekoälyyn ja data-analytiikkaan, mikä on houkutellut sijoittajia ympäri maailman. \n Kansainvälisen rahoituksen myötä suomalaisilla yrityksillä on mahdollisuus laajentaa markkinoitaan entisestään, ja monet ovat asettaneet tavoitteekseen uusien työpaikkojen luomisen tulevien vuosien aikana.",
      timestamp: "14:20",
      newsGivenBy: "Teknologia ja yritys",
      imgURL:
        "https://startupyhteiso.com/wp-content/uploads/yhteiso-e1717753176505.png",
        theme: "Kotimaa",
    },
    {
      id: 14,
      title:
        "Liverpool löylytti Leverkusenia, Milan Real Madridia – Hradeckyn huikea sarja päättyi",
      subTitle:
        "Lukas Hradeckyn edustama Leverkusen kärsi rökäletappion Anfieldillä. Hattutemppuihin pystyivät Sportingin Viktor Gyökeres ja Liverpoolin Luis Diaz.",
      newsText:
        "Liverpool pelasi vaatimattoman avauspuoliskon jalkapallon Mestarien liigassa, mutta oli liikkeellä toisella jaksolla uudella ilmeellä ja lopulta liian kova Lukas Hradeckyn edustamalle Leverkusenille.\n\nHattutempun koonnut Luis Diaz ja Cody Gakpo sinetöivät Liverpoolin 4–0-kotivoiton. Hradecky oli täysin voimaton takaiskumaalien edessä. Liverpool johtaa Mestarien liigaa täydellä 12 pisteellä.\n\nTappio oli Hradeckylle ensimmäinen Leverkusenin paidassa sitten toukokuun 2023. Huuhkajavahdin tappiottomien Leverkusenin pelien sarja päättyi 45 otteluun.\n\nEntiselle Liverpoolin keskikenttäpelaajalle, Leverkusenin nykyiselle valmentajalle Xabi Alonsolle, 42, paluu Anfieldille oli ankea. Hän edusti pelaajaurallaan Liverpoolia vuosina 2004–09.\n\nReal Madrid alamaissa\n\nMilan jatkoi Real Madridin nöyryytyksiä ja päihitti heikkovireisen kotijoukkueen Santiago Bernabeulla maalein 3–1. Edellisessä kotipelissä Real oli ottanut pataan La Ligan jättiläisten kohtaamisessa Barcelonalta 0–4.",
      timestamp: "15:20",
      newsGivenBy: "Timo Uusitalo",
      imgURL:
        "https://tmssl.akamaized.net//images/foto/galerie/lukas-hradecky-bayer-04-leverkusen-2024-1714970486-135794.jpg?lm=1714970496",
      theme: "Urheilu",
    },
    {
      id: 15,
      title:
        "Amerikkalainen mielipidemittausguru häkeltyi siitä, ketkä Trumpia äänestivät",
      subTitle:
        "Yhdysvaltain presidentinvaalien jälkeen moni vanha uskomus joutaa romukoppaan. Tätä mieltä on professori Christopher Borick.",
      newsText:
        "Ensin Christopher Borick haluaa kumota yhden Yhdysvaltain presidentinvaaleihin liitetyn väitteen. Mielipidemittauksiin ja vaalidataan erikoistunut amerikkalaisprofessori laskee antaneensa eri medioille 50–60 haastattelua vaalien jälkeen. \n Hän sanoo aloittavansa yleensä näin: \n – Tämä ei ollut rökälevoitto. Presidentinvaalien historiassa Kamala Harrisin ja Donald Trumpin välinen ero on selvä mutta ei poikkeuksellinen, Borick sanoo Ylen videohaastattelussa. \n Republikaanipuolueen ehdokas Trump voitti jokaisen ratkaisevan vaa’ankieliosavaltion. Hänen voittomarginaalinsa niissä oli 1,5–3 prosenttiyksikköä. Karkeasti tämä tarkoittaa 50 000–200 000 ääntä osavaltiota kohti. \n – Kyse oli siitä, että Trump sai marginaalit puolelleen monessa eri äänestäjäryhmässä ja monella alueella, Borick sanoo. \n Poikkeuksellisia asioita vaaliyönä kuitenkin nähtiin. \n – On häkellyttävää, kuinka paljon Trump sai ääniä niiltä, joita on pidetty demokraattien ydinkannattajina: kaupunkilaisilta, nuorilta ja etnisiltä vähemmistöiltä. \n Trump onnistui kasvattamaan kannatustaan käytännössä kaikissa väestöryhmissä paitsi korkeakoulutettujen ja yli 65-vuotiaiden joukossa.",
      timestamp: "7:00",
      newsGivenBy: "Satu Helin",
      imgURL:
        "https://www.kirkkojakaupunki.fi/o/adaptive-media/image/19035800/1200/297884.jpg",
      theme: "Yhdysvaltain presidentinvaalit 2024",
    },
    {
      id: 16,
      title:
        "Näin Trumpin voitto puree kaikkiin suomalaisiin – lue kymmenen kysymystä ja vastausta talousvaikutuksista",
      subTitle:
        "EU:n talous on hiipunut, mutta Yhdysvaltain talous puksuttaa kuin juna.",
      newsText:
        "Jos Yhdysvaltain presidentinvaalit voittanut Donald Trump lätkäisee tulleja EU:lle, vaikutukset voivat heijastua tavallisten suomalaisten talouteen asti. \n Yle pyysi Nordean pääekonomistia Tuuli Koivua, Elinkeinoeleämän keskusliiton (EK) kansainvälisestä kaupasta vastaavaa johtajaa Timo Vuorta sekä Suomen ja Yhdysvaltain välistä kauppaa edistävän Amcham Finlandin yhteiskuntasuhdeasiantuntija Markus Myllyniemeä analysoimaan vaalituloksen taloudellisia vaikutuksia. \n Ne ovat isoja ja ulottuvat kaikkiin suomalaisiin. \n 1. Yhdysvallat on Suomen suurin vientimaa. Miten tämä vaalitulos vaikuttaa meihin? \nTrump on tunnettu siitä, että hän luo epävarmuutta ympärilleen. \n – Kampanjoidessaan Trump puhui paljon tulleista, mutta on epävarmaa, miten niitä laitetaan toimeen. Trump haluaa pitää talouskasvun korkeana Yhdysvalloissa, mikä tarkoittaa kasvavaa vientimarkkinaa, mutta jos vientimahdollisuutta torpedoidaan tuontitullein, ulkomaille jää vähemmän palasia USA:n kasvavasta kakusta, sanoo Nordean Tuuli Koivu. \n – Pahoin pelkään, että Trump vie sen ohjelmansa lävitse, johon liittyy tulleja. Siihen liittyy iso kauppasodan uhka, EK:n Vuori toteaa. \n – Mahdolliset tullit näkyvät suoraan hinnoissa ja saattavat aiheuttaa haasteita yritysten toimitusketjuissa. Se voi saattaa näkyä ihmisten arjessa niin, että tilattu tavara myöhästyy, Amchamin Myllyniemi sanoo.",
      timestamp: "6:00",
      newsGivenBy: "Ulla Malminen, Pekka Pantsu",
      imgURL:
        "https://www.vasenvoima.fi/wp-content/uploads/2024/11/TrumpinMuija.png",
      theme: "Yhdysvaltain presidentinvaalit 2024",
    },
    {
      id: 17,
      title:
        "Yksi seikka yhdistää lähes kaikkia Trumpin avainpelaajia – tässä he ovat",
      subTitle:
        "Yhdysvaltain tulevan presidentin hallintoon nousee Trumpin uskollisia tukijoita.",
      newsText:
        "Donald Trump palaa Yhdysvaltain presidentiksi tammikuun lopussa. Trumpin on äskettäin uutisoitu nimittäneen tulevaksi kansliapäällikökseen Valkoiseen taloon vaalikampanjaansa johtaneen Susie Wilesin. Kyseessä on ensimmäinen tärkeä virkanimitys vaalivoiton jälkeen. \n Muiden nimitysten osalta ei vielä tiedetä, keitä Trump aikoo nostaa avustajikseen ja ministereikseen. Trumpin lähipiiri on valmistellut vallanvaihtoa jo kuukausia piilossa julkisuudelta. Vallanvaihtotiimiä johtavat liikenainen Linda McMahon ja miljardööri Howard Lutnick. \n Trump on painottanut, e tä hän haluaa tällä kertaa mahdollisimman uskollisia avustajia, jotka eivät yritä estää hänen tavoitteidensa toteutumista. \n Muun muassa nämä nimet ovat nousseet esiin haastatteluissa, vuodoissa ja eri viestimien tekemissä analyyseissa. \n Silmiinpistävää on, että lähes kaikki virkoihin arvellut henkilöt ovat miehiä.",
      timestamp: "5:00",
      newsGivenBy: "Simo Ortamo",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSweBkQAesNrXskUj_JRzaqFb2MwmjoO89NA&shttps://zephyrnet.com/wp-content/uploads/2024/11/the-us-2024-elections-are-shaping-up-to-be-crucial-for-cryptos-future.jpg",
      theme: "Yhdysvaltain presidentinvaalit 2024",
    },
    {
      id: 18,
      title:
        "Venäjän ihmisoikeusviranomainen: Poliittista sortoa ei ole, ainoastaan vähäisiä puhdistustoimenpiteitä",
      subTitle:
        "Ihmisoikeusjärjestö OVD-Infon mukaan Venäjällä on nostettu yli 9 000 syytettä armeijan häpäisemisestä, millä tarkoitetaan normaalisti Ukrainan sodan arvostelua.",
      newsText:
        "Venäjän ihmisoikeusneuvoston puheenjohtajan mukaan maan laajassa toisinajattelijoiden hiljentämisessä on kyse puhdistustoimista, ei poliittisesta sorrosta. \n Ukrainan sodan arvostelu on Venäjällä käytännössä kiellettyä, ja kaikki Venäjän presidentti Vladimir Putinin vastustajat ovat joko vankilassa, maanpaossa tai kuolleita. \n – Onhan tämä vaikea ja raskas tilanne, olemme sodassa lännen kanssa, Valeri Fadejev sanoi valtiollisen Interfax-uutistoimiston mukaan. \n – Eikä joitakin minimaalisia rajoituksia sellaisille, jotka ovat itse asiassa vihollisen puolella, voi pitää sortona, vaan vähäisinä puhdistustoimenpiteinä, puheenjohtaja väitti. \n Ihmisoikeusjärjestö OVD-Infon mukaan Venäjällä on nostettu yli 9 000 syytettä armeijan häpäisemisestä, millä tarkoitetaan normaalisti Ukrainan sodan arvostelua. Poliittisia vankeja on ihmisoikeusjärjestöjen mukaan sadoittain.",
      timestamp: "6:00",
      newsGivenBy: "Paula Tapiola",
      imgURL:
        "https://www.atlanticcouncil.org/wp-content/uploads/2024/03/2024-02-29T115741Z_75777883_RC2BC6AQU6B5_RTRMADP_3_RUSSIA-PUTIN-1024x683.jpg",
      theme: "Venäjän hyökkäys",
    },
    {
      id: 19,
      title:
        "Ukrainan rintama osittain murtunut – asiantuntija: Ukrainan isku Kurskiin toimii nyt Venäjän hyväksi",
      subTitle:
        "Lähiviikot näyttävät, pystyykö Ukraina pysäyttämään asemien sisään tunkeutuneet venäläiset vai onko syntymässä läpimurto.",
      newsText:
        "Ukrainan joukot ovat ajautuneet ahtaalle itärintamalla. Edessä saattaa olla sodan merkittävä käänne. \n Venäjän joukot aloittivat panssaroiduilla voimillaan noin viikko sitten suuren hyökkäyksen Ukrainan sotarintaman eteläosassa, Vuhledarin länsipuolella. \n Avoimista lähteistä sotaa seuraavan Black Bird Groupin analyytikko Pasi Paroinen kertoo Ukrainan rintaman murtuneen paikallisesti ja Venäjän edenneen viikossa jopa kymmenen kilometriä. \n – Pahimmassa tapauksessa ollaan siinä pisteessä, että romahdus on käynnissä paikallisesti, Paroinen sanoo. \n Tuleva viikko näyttää, pystyvätkö ukrainalaiset pitämään rintaman koossa vai onko kyseessä läpimurto. \n – Tässä selkeästi murtauduttiin ukrainalaisten asemiin sisälle. Mutta se, että voitaisiin puhua läpimurrosta, niin silloin pitäisi edetä asemien läpi myös aika rivakasti syvyyteen, Paroinen kuvailee. \n Ukrainan armeijan tilanne käy jatkuvasti yhä vaikeammaksi, Paroinen toteaa. Venäjä pystyy valtaamaan maa-alaa nopeammin kuin koskaan sodan aikana sitten kesän 2022, hän sanoo. Nyt tapahtuneen etenemisen myötä venäläiset ovat saaneet haltuunsa kukkulamaaston, josta hyökkäyksen jatkaminen loivaan alamäkeen on entistä helpompaa.",
      timestamp: "6:30",
      newsGivenBy: "Yrjö Kokkonen",
      imgURL:
        "https://www.washingtonpost.com/wp-stat/graphics/ai2html/step3-v6/VR5RA54W3VCSJCVTEBFE4CRKE4/2300-country-step3-now.jpg?c=1676925649770",
      theme: "Venäjän hyökkäys",
    },
  ],
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
