const games = [
    { 
        title: "Apex Legends", 
        description: "Csapat alapú battle royale játék, ahol különleges hősök küzdenek egymással.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch | Műfaj: Battle Royale, First-person shooter | Besorolás: 16+",
        reviews: ["Izgalmas battle royale élmény! A pörgős akció páratlan."],
        comments: ["A pályatervezés elképesztő, minden terület egyedi", "Bárcsak több csapatkommunikációs funkció lenne"],
        image: "img/ApexLegends.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Assassin’s Creed Mirage", 
        description: "Akció-kaland játék, amely a rejtett mozgásra és parkourra építve egy ősi városban zajló titkos küldetéseket kínál.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Akció-kaland, Stealth | Besorolás: 16+",
        reviews: ["Lenyűgöző visszatérés a klasszikus Assassin’s Creed élményhez", "A környezet és a történetmesélés egyszerűen mesés"],
        comments: ["A Bagdadi város újraalkotása fantasztikus", "A parkour és a harcok még mindig remekek, de hiányzik a nagyobb nyitott világ"],
        image: "img/AssasinsCreed.png",
        creator: "Ubisoft"
    },
    { 
        title: "Battlefield 2042", 
        description: "Nagy léptékű, futurisztikus multiplayer FPS dinamikus csatákkal.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: First-person shooter, Taktikai | Besorolás: 18+",
        reviews: ["Látványos és dinamikus csaták, de még mindig van hova fejlődni", "A járművek és fegyverek kezelése remek, de a balansz néha zűrös"],
        comments: ["A nagy csaták valóban izgalmasak", "A bugok néha zavaróak, de összességében élvezetes a játék"],
        image: "img/Battlefield.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Black Myth: Wukong", 
        description: "Kínai mitológián alapuló akció-RPG, ahol egy harcos majom mágikus képességekkel küzd.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Akció-RPG, Hack and Slash | Besorolás: 16+",
        reviews: ["Lenyűgöző grafika és izgalmas harcrendszer", "A játékvilág részletes és gazdag, de a történet még kérdéses"],
        comments: ["A harcok tényleg nagyon mennek, élvezet velük játszani", "Néha kicsit túl bonyolultnak érződik, de összességében jó a játék"],
        image: "img/Wukong.png",
        creator: "Game Science"
    },
    { 
        title: "Call of Duty: Black Ops 6", 
        description: "Intenzív, első személyű lövölde, amely titkos katonai műveletekben és hi-tech fegyverekkel vívott csatákban merül el.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: First-person shooter, Akció | Besorolás: 18+",
        reviews: ["Mindig akciódús! A legjobb COD grafika eddig."],
        comments: ["A grafika elképesztő!", "Ismétlődő, de még mindig szórakoztató"],
        image: "img/BlackOps6.png",
        creator: "Activision"
    },
    { 
        title: "Call of Duty: Modern Warfare III", 
        description: "Akciódús, első személyű lövölde, amely modern harctereken zajló katonai műveletek és intenzív multiplayer csaták keverékét kínálja.", 
        specs: "Platform: PC, PS4, PS5, Xbox One, Xbox Series X|S | Műfaj: FPS, Akció | PEGI 18", 
        reviews: ["Az egyik legjobb történet a sorozatban! A grafikák és a hanghatások is pazarok. A multiplayer új játékmódjai izgalmasak és frissítőek."],
        comments: ["Imádom a kampányt, végigpörgettem egy hétvége alatt!", "A multi néha túlzottan egyensúlyozatlan, de még mindig nagyon élvezetes."],
        image: "img/ModernWarfare3.png",
        creator: "Activision"
    },
    { 
        title: "Counter-Strike 2", 
        description: "Taktikai, csapat alapú FPS, ahol a játékosok bombákat telepítenek vagy diffuzálnak, miközben stratégiai harcokban mérik össze tudásukat.", 
        specs: "Platform: PC | Műfaj: First-person shooter, Taktikai | Besorolás: 18+",        reviews: ["A klasszikus újraértelmezése! A játékmenet még mindig izgalmas és pörgős. Tökéletes versenyszintű élmény, a grafika és a teljesítmény javult."],
        comments: ["A régi érzés, de sokkal simább játékélmény!", "A matchmaking rendszer még mindig néha idegesítő, de imádom a játékot."],
        image: "img/CS2.png",
        creator: "Valve"
    },
    { 
        title: "Cyberpunk 2077", 
        description: "Nyílt világú RPG, ahol a játékosok egy futurisztikus városban, különféle technológiai fejlesztésekkel és döntésekkel formálhatják történetüket.", 
        specs: "Platform: PC, PlayStation, Xbox, Stadia | Műfaj: RPG, Akció | Besorolás: 18+",        reviews: ["Lenyűgöző világ és történet, tele izgalmas fordulatokkal. Még mindig a legszebb nyílt világú játék, amit valaha láttam."],
        comments: ["A grafika és a hangulat egyszerűen magával ragadó!", "Sok bug van, de a történet és a világ kompenzálja."],
        image: "img/Cyberpunk.png",
        creator: "CD Projekt"
    },
    { 
        title: "Dead by Daylight", 
        description: "Aszimmetrikus horror játék, ahol egy gyilkos üldözi a túlélőket, akik megpróbálnak generátorokat javítani és elmenekülni.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch | Műfaj: Horror, Multiplayer, Asymmetrikus játék | Besorolás: 18+",
        reviews: ["Izgalmas és feszültséggel teli, minden meccs más! A túlélők és a gyilkosok közötti dinamikus játszmák mindig új élményt adnak."],
        comments: ["A játék nagyon addiktív, de néha túl kiszámítható.", "Néhány karakter és képesség túl erős, de  a hangulat remek!"],
        image: "img/DeadByDaylight.png",
        creator: "Behaviour Interactive"
    },
    { 
        title: "EA Sports FC 25", 
        description: "Futballszimulátor, amely valósághű mérkőzéseket és csapatmenedzsmentet kínál a sport rajongóinak.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Sport, Foci szimulátor | Besorolás: 3+",
        reviews: ["A legjobb focis játék, amit valaha játszottam! A játékmenet és a grafika szinte tökéletes."],
        comments: ["A legnagyobb újítások közé tartozik a dinamikus időjárás!", "A játékélmény teljesen megváltozott, de a régi hibák még mindig jelen vannak."],
        image: "img/FC25.png",
        creator: "EA Sports"
    },
    { 
        title: "Elden Ring", 
        description: "Akció-RPG, amely egy nyílt világban zajlik, ahol a játékosok felfedezhetik a sötét fantáziavilágot és harcolhatnak erős ellenfelekkel.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: RPG, Akció | Besorolás: 16+",
        reviews: ["Az egyik legjobb RPG, amit valaha készítettek! Az open-world felfedezés és a harcok fantasztikusak."],
        comments: ["A világ elképesztően részletes és gazdag, sosem unom meg.", "Nehéz, de jutalmazza a kitartást, minden felfedezés egy új élmény!"],
        image: "img/EldenRing.png",
        creator: "From Software"
    },
    { 
        title: "Far Cry 6", 
        description: "Nyílt világú akciójáték, ahol a játékosok gerillaként harcolnak egy diktátor ellen egy trópusi szigeten.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Open-world, Akció | Besorolás: 18+",
        reviews: ["A szokásos Far Cry élmény, tele akcióval és látványos helyszínekkel. A történet érdekes, de a játékmenet kicsit ismétlődő."],
        comments: ["A helyszínek szuperek, imádom a dzsungeles részeket!", "A harcok élvezetesek, de egy idő után kicsit túl monoton."],
        image: "img/FarCry6.png",
        creator: "Ubisoft"
    },
    { 
        title: "Farming Simulator 25", 
        description: "Valósághű szimulátor, ahol a játékosok farmot vezetnek, növényeket termesztenek és állatokat nevelnek.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch | Műfaj: Szimuláció | Besorolás: 3+",
        reviews: ["Ha szereted a szimulátorokat, akkor ez a játék mindent hoz, amit vársz. A részletes mezőgazdasági élmény és a járművek kezelése lenyűgöző."],
        comments: ["Tök jó, hogy többféle járművet is kipróbálhatsz, de egy kicsit unalmassá válhat hosszú távon.", "Imádom, hogy szinte mindent meg lehet építeni és irányítani!"],
        image: "img/FarmingSimulator.png",
        creator: "Giants Software"
    },
    { 
        title: "Fortnite", 
        description: "Battle royale játék, ahol a játékosok építkezve és harcolva próbálnak túlélni egy folyamatosan zsugorodó pályán.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch, Mobile | Műfaj: Battle Royale, Akció | Besorolás: 12+",
        reviews: ["Még mindig az egyik legszórakoztatóbb battle royale játék. A folyamatos frissítések és az új események mindig izgalmasak."],
        comments: ["Imádom a skinek és a különböző játékmódokat, mindig van új dolog!", "Néha a matchmaking igazságtalan, de a játékélmény így is szuper."],        
        image: "img/Fortnite.png",
        creator: "Epic Games"
    },
    { 
        title: "Forza Horizon 5", 
        description: "Nyílt világú autóverseny játék, amely lenyűgöző tájakon és dinamikus környezetben kínál izgalmas versenyeket.", 
        specs: "Platform: PC, Xbox | Műfaj: Autós szimulátor, Verseny | Besorolás: 3+",
        reviews: ["A legjobb autós játék, amit valaha játszottam! A világ hatalmas és gyönyörű, a vezetési élmény pedig magával ragadó."],
        comments: ["A táj csodálatos, a versenyek pedig pörögnek! Imádom az új autókat.", "Néhány verseny túl könnyű, de az open world felfedezése teljesen lenyűgöz."],        
        image: "img/ForzaHorizon5.png",
        creator: "Xbox Game Studios"
    },
    {
        title: "God of War Ragnarök", 
        description: "Akció-kaland játék, ahol Kratos és Atreus a nordikus mitológia világában küzdenek a Ragnarök eljövetelével.", 
        specs: "Platform: PlayStation 4, PlayStation 5 | Műfaj: Akció, RPG | Besorolás: 18+",
        reviews: ["Mesteri folytatás, ami minden szempontból túlszárnyalja az előző részt. A történet, a karakterek és a harcok egyszerűen fenomenálisak."],
        comments: ["A történet elképesztően jól van felépítve, és a karakterek fejlődése is zseniális!", "A harcok nagyon jók, de néha túl sok a lassúbb, pihenős rész."],
        image: "img/GodOfWarRagnarokpng.png",
        creator: "Sony Interactive"
    },
    { 
        title: "Grand Theft Auto V", 
        description: "Nyílt világú akciójáték, amelyben a játékosok három karaktert irányítva vesznek részt bűnözői tevékenységekben Los Santos városában.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Akció, Open-world | Besorolás: 18+",
        reviews: ["Még mindig az egyik legjobb open-world játék, amit valaha készítettek. A történet és a karakterek fantasztikusak, a játékmenet pedig sosem unalmas."],
        comments: ["A város elképesztően részletes, és sosem lehet megunni.", "A küldetések nagyon jók és élvezhetőek."],        
        image: "img/GTAV.png",
        creator: "Rockstar Games"
    },
    { 
        title: "Lego Star Wars: The Skywalker Saga", 
        description: "Kalandjáték, amely a Star Wars filmek történetét meséli el LEGO stílusban, tele humorral és akcióval.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch | Műfaj: Akció-kaland, LEGO szimulátor | Besorolás: 7+",
        reviews: ["Egy szórakoztató és könnyed játék, ami a Star Wars univerzumot újra életre kelti. A humor és a játékmenet tökéletes keveréke."],
        comments: ["Imádom, hogy minden filmet átélhetünk LEGO karakterekkel, nagyon vicces!", "Néha kicsit könnyű, de a gyerekeknek tökéletes szórakozás."],
        image: "img/LegoStarWars.png",
        creator: "Warner Bros."
    },
    { 
        title: "Marvel's Spider-Man 2", 
        description: "Akció-kaland játék, ahol Peter Parker és Miles Morales közösen küzdenek New Yorkban a Marvel univerzum híres ellenségei ellen.", 
        specs: "Platform: PlayStation 5 | Műfaj: Akció, Open-world | Besorolás: 16+",
        reviews: ["Ez a játék minden szempontból tökéletes folytatás. A harcok dinamikája és a történet egyszerűen lenyűgöző."],
        comments: ["A hálószörfözés és a városi felfedezés egyszerűen fantasztikus!", "A fő történet izgalmas, de néha a mellékküldetések kicsit unalmasak."],        
        image: "img/SpiderMan2.png",
        creator: "Sony Interactive"
    },
    { 
        title: "Microsoft Flight Simulator 2024", 
        description: "Valósághű repülőszimulátor, amely lehetővé teszi a játékosok számára, hogy különböző repülőgépekkel fedezzék fel a világot.", 
        specs: "Platform: PC, Xbox Series X/S | Műfaj: Szimuláció, Repülés | Besorolás: 3+",
        reviews: ["A világ legrealisztikusabb repülős szimulátora! A grafika és a repülés élménye egyszerűen lenyűgöző."],
        comments: ["A tájak gyönyörűek, de néha a repülőgép kezelése bonyolult lehet.", "Imádom a repülést, de a kezdőknek nem könnyű elsőre."],
        image: "img/FlightSimulator.png",
        creator: "Microsoft"
    },
    { 
        title: "Minecraft", 
        description: "Kockákból épített nyílt világú játék, ahol a játékosok felfedezhetik, építhetnek és túlélhetnek a végtelen környezetben.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch, Mobile | Műfaj: Sandbox, Kaland, Szimuláció | Besorolás: 7+",
        reviews: ["A világ legnépszerűbb játékának minden percét élvezni lehet. A kreativitásnak nincs határa, és mindig van valami új felfedezni."],
        comments: ["Imádom, hogy bármit építhetek, amit csak akarok!", "A túlélő mód néha nagyon nehéz, de pont ezért izgalmas."],
        image: "img/Minecraft.png",
        creator: "Mojang"
    },
    { 
        title: "NBA 2K25", 
        description: "Kosárlabda szimulátor, amely valósághű játékélményt kínál, lehetővé téve a csapatok irányítását és versenyzést.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Sport, Kosárlabda szimulátor | Besorolás: 3+",
        reviews: ["Az egyik legrealisztikusabb kosárlabda játék, amit valaha készítettek. A játékmenet és a grafika minden szempontból lenyűgöző."],
        comments: ["A játékélmény hihetetlen, de néha a mesterséges intelligencia frusztráló lehet.", "A sok mikrotranzakció frusztráló és nem fejlődött eleget a játékmenet."],
        image: "img/Nba2K25.png",
        creator: "2K Sports"
    },
    { 
        title: "Need For Speed Unbound", 
        description: "Autós versenyjáték, amely gyors versenyekre, testreszabott autókra és dinamikus rendőrségi üldözésekre épít.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Verseny, Autós akció | Besorolás: 12+",
        reviews: ["Izgalmas autós versenyzés, ami tökéletesen ötvözi a gyors tempót és a látványos grafikai stílust. A tuning és a személyre szabás mélysége lenyűgöző."],
        comments: ["A versenyek szuperek, de néha a mesterséges intelligencia túl kemény.", "A grafika és a zene fantasztikus, de a sztori nem volt túl emlékezetes."],

        image: "img/NFSUnbound.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Overwatch 2", 
        description: "Csapat alapú hero shooter, ahol a játékosok különböző hősökkel küzdenek, stratégiai együttműködésre van szükség.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch | Műfaj: First-person shooter, Taktikai | Besorolás: 12+",
        reviews: ["A csapat alapú harcok és az új karakterek rengeteg izgalmat hoznak. Az új játékmódok friss levegőt adnak a sorozatnak."],
        comments: ["Imádom az új hősöket, de néha úgy érzem, hogy a matchmaking nem túl igazságos.", "A játékmenet szórakoztató, de az új pályák nem mindegyike jön be."],        
        image: "img/Overwatch2.png",
        creator: "Blizzard"
    },
    { 
        title: "PUBG: Battlegrounds", 
        description: "Battle royale játék, ahol a játékosok egy szigeten harcolnak egymással, hogy az utolsó túlélővé váljanak.", 
        specs: "Platform: PC, PlayStation, Xbox, Mobile | Műfaj: Battle Royale, Akció | Besorolás: 16+",
        reviews: ["Az egyik legismertebb battle royale, ami igazi kihívást ad. A stratégiai elemek és a feszültség mindig ott van a levegőben."],
        comments: ["A túlélés mindig izgalmas, de a matchmaking néha igazságtalan.", "Néha a szerverek lassúak, de a játékélmény még így is pazar."],
        image: "img/Pubg.png",
        creator: "Krafton"
    },
    { 
        title: "Red Dead Redemption 2", 
        description: "Nyílt világú akció-kaland játék, amely a vadnyugat korában játszódik, tele felfedezéssel és küldetésekkel.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Open-world, Akció, RPG | Besorolás: 18+",
        reviews: ["A világ egyik legszebb és legrészletesebb open-world játékának mesterműve. A történet és a karakterek mélysége valami elképesztő."],
        comments: ["A táj gyönyörű, a vadászat és a felfedezés sosem unalmas!", "Néha túl lassú a tempó, de a történet miatt érdemes kitartani."],        
        image: "img/RDR2.png",
        creator: "Rockstar Games"
    },
    { 
        title: "Rocket League", 
        description: "Autós foci játék, ahol a játékosok autókkal próbálnak gólt szerezni egy hatalmas focipályán.", 
        specs: "Platform: PC, PlayStation, Xbox, Switch | Műfaj: Sport, Autós foci | Besorolás: 3+",
        reviews: ["A legjobb keveréke a focinak és a vehikles játéknak. Könnyen megtanulható, de sosem lesz unalmas."],
        comments: ["Imádom, hogy mindig új dolgokat próbálhatok ki a kocsikkal!", "Néha a csapatok nem teljesen egyenlőek, de a versenyek így is izgalmasak."],
        image: "img/RocketLeague.png",
        creator: "Psyonix"
    },
    { 
        title: "Sea of Thieves", 
        description: "Kalandjáték, ahol a játékosok kalózként hajóznak, kincseket keresnek és más játékosokkal mérkőznek meg a tengeren.", 
        specs: "Platform: PC, Xbox | Műfaj: Akció, Kaland, Multijátékos | Besorolás: 12+",
        reviews: ["A legjobb kalózos élmény, amit valaha játszottam. A közösségi aspektus és a felfedezés sosem hagy unatkozni."],
        comments: ["A tengeri csaták hihetetlenül szórakoztatóak, és mindig van valami új felfedezni.", "Néha a loot rendszer kicsit csalódást okozhat, de a játék még így is szórakoztató."],
        image: "img/SeaOfThieves.png",
        creator: "Xbox Game Studios"
    },
    { 
        title: "Silent Hill 2 Remake", 
        description: "Horror játék, amely a Silent Hill városában zajló borzalmas titkokat és pszichológiai kihívásokat tár fel.", 
        specs: "Platform: PlayStation 5, PC, Xbox | Műfaj: Horror, Akció | Besorolás: 18+",
        reviews: ["A klasszikus horrorjáték felújítása, ami mindent hoz, amit vártunk. A félelmetes atmoszféra és a történet még mindig magával ragadó."],
        comments: ["A grafika szuper, de a játékélmény kicsit túl lassú lehet a mai ritmushoz.", "Hihetetlenül ijesztő, de néha túlságosan elnyújtott."],
        image: "img/SilentHill2test.png",
        creator: "Konami"
    },
    { 
        title: "Starfield", 
        description: "Nyílt világú űr-RPG, ahol a játékosok felfedezhetik az univerzumot, küldetéseken vesznek részt és saját történetüket alakítják.", 
        specs: "Platform: PC, Xbox Series X/S | Műfaj: RPG, Sci-fi | Besorolás: 16+",
        reviews: ["A Bethesda egyik legnagyobb sci-fi kalandja, tele felfedezésre váró bolygókkal. A világ építése és a történet is lenyűgöző."],
        comments: ["A térbeli utazás és a felfedezés fantasztikus, de a harcok néha túl egyszerűek.", "Imádom, hogy minden bolygón más élmény vár, de a játékmenet kicsit repetitív."],
        image: "img/Starfield.png",
        creator: "Bethesda"
    },
    { 
        title: "Star Wars: Jedi Fallen Order", 
        description: "Akció-kaland játék, ahol a játékosok egy fiatal jedi szerepét öltve küzdenek a galaxis sötét erői ellen.", 
        specs: "Platform: PC, PlayStation, Xbox, Stadia | Műfaj: Akció, RPG | Besorolás: 16+",
        reviews: ["A legjobb Star Wars játék, amit az utóbbi években készítettek. Az akció és a történet tökéletes keveréke."],
        comments: ["A lightsaber harcok szuper izgalmasak, de néha a pályák túl szűkek.", "Imádom a Jedi erőt, de a nehézségi szint néha túlságosan frusztráló."],        
        image: "img/FallenOrder.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Star Wars Outlaws", 
        description: "Nyílt világú akció-kaland játék, ahol a játékosok a Star Wars univerzumának alvilágában kalandoznak, miközben bűnözői életet élnek.", 
        specs: "Platform: PlayStation 5, Xbox Series X/S | Műfaj: Akció, Open-world | Besorolás: 16+",
        reviews: ["Izgalmas új Star Wars kaland, ami friss élményt ad a galaxis felfedezésében. A nyílt világ és a karakterek remekül kiegészítik egymást."],
        comments: ["A világ hatalmas és tele van lehetőségekkel, de a küldetések néha ismétlődőek.", "Imádom, hogy a játék sokféle játékmenetet ötvöz, de a harcok kicsit lassúak."],        
        image: "img/StarWarsOutlaws.png",
        creator: "Ubisoft"
    },
    { 
        title: "The Last of Us 2", 
        description: "Akció-kaland játék, amely egy poszt-apokaliptikus világban követi Ellie és Abby történetét, miközben túlélésért és bosszúért küzdenek.", 
        specs: "Platform: PlayStation 4, PlayStation 5 | Műfaj: Akció, RPG | Besorolás: 18+",
        reviews: ["Egy érzelmileg mély és erőteljes folytatás, ami az előző részhez képest még többet ad. A történet és a karakterek fejlődése lenyűgöző."],
        comments: ["A történet bár nehéz és szívszorító, de rendkívül jól megírt.", "A harcok feszültek és izgalmasak, de a történet sokaknak túl sötét lehet."],        
        image: "img/LastOfUs2.png",
        creator: "Sony Interactive"
    },
    { 
        title: "The Sims 4", 
        description: "Életszimulátor, ahol a játékosok virtuális karaktereket irányítanak, építenek, dolgoznak és alakítják a Simjeik életét.", 
        specs: "Platform: PC, PlayStation, Xbox, Mac, Mobile | Műfaj: Szimuláció | Besorolás: 12+",
        reviews: ["A Sims sorozat legújabb része, ami még mindig rengeteg lehetőséget ad a szórakoztató élet szimulációhoz. Az új bővítmények és frissítések folyamatosan új élményeket hoznak."],
        comments: ["A játék sokféle lehetőséget ad a szórakoztatásra, de néha a mikrotranzakciók zavaróak.", "Nagyon élvezem az új bővítményeket, de a játék alapjaival néha unalmassá válik."],        
        image: "img/Sims4.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Tom Clancy's Rainbow Six Siege", 
        description: "Taktikai FPS, ahol a játékosok operátorokként csapatban harcolnak épületekben, bombákat hatástalanítanak vagy védenek.", 
        specs: "Platform: PC, PlayStation, Xbox | Műfaj: Taktikai FPS, Multijátékos | Besorolás: 18+",
        reviews: ["A taktikai lövöldözős játékok királya, ahol a csapatmunka mindenek felett áll. A pályák és a karakterek rendkívül változatosak."],
        comments: ["A taktikai elemek szuper izgalmasak, de a játék néha túl kemikusan igényli a csapatot.", "A stratégiát és a csapatmunkát mindenki imádni fogja, de a kezdőknek nehéz lehet."],        
        image: "img/RainbowSix.png",
        creator: "Ubisoft"
    },
    { 
        title: "Valorant", 
        description: "Csapat alapú taktikai FPS, ahol a játékosok egyedi képességekkel harcolnak a győzelemért.", 
        specs: "Platform: PC | Műfaj: First-person shooter, Taktikai | Besorolás: 12+",
        reviews: ["A taktikai lövöldözős játékok új királya, ami izgalmas és intenzív versenyeket kínál. A hősök és a képességek remekül kiegészítik a lövöldözést."],
        comments: ["A játék nagyon szórakoztató, de a matchmaking néha nem fair.", "Imádom a különböző hősöket és azok egyedi képességeit, de néha túl kemikusan kényszerít a csapatjátékra."],        
        image: "img/Valorant.png",
        creator: "Riot Games"
    },


];


let currentGame;

// Betölti a gameket
function loadGames() {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = ""; // Töröljük a már meglévő tartalmat, ha van
    games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.creator}</p>
        `;
        
        gameElement.onclick = () => showDetails(game);
        gameList.appendChild(gameElement);
    });
}
//SÖTÉT-VILÁGOS MÓD---------------------------------------------------------------
function darkMode() {
    document.body.classList.toggle("dark-mode");

    // Ikon váltása Font Awesome használatával
    const buttonIcon = document.getElementById('toggleButton').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        buttonIcon.classList.remove('fa-sun');
        buttonIcon.classList.add('fa-moon');
    } else {
        buttonIcon.classList.remove('fa-moon');
        buttonIcon.classList.add('fa-sun');
    }

    const modalContent = document.querySelector(".modal-content");
    const gameDetails = document.getElementById("gameDetails");

    if (document.body.classList.contains("dark-mode")) {
        modalContent.style.backgroundColor = "#121212"; // modal background
        modalContent.style.color = "white"; // modal text color
        gameDetails.style.borderColor = "#1b1b1b"; // search

        // HEADER RÉSZ
        const headerContainer = document.querySelector(".header-container");
        const logoTitle = document.querySelector(".logo-title h1");
        const searchInput = document.getElementById("searchInput");

        headerContainer.style.backgroundColor = "white";
        logoTitle.style.color = "#121212";
        searchInput.style.backgroundColor = "#121212";
        searchInput.style.color = "white"; 
        searchInput.style.borderColor = "white"; 
    } else {
        modalContent.style.backgroundColor = "white"; // modal background
        modalContent.style.color = "#121212"; // modal text color
        gameDetails.style.borderColor = "#121212"; // search

        // HEADER RÉSZ
        const headerContainer = document.querySelector(".header-container");
        const logoTitle = document.querySelector(".logo-title h1");
        const searchInput = document.getElementById("searchInput");

        headerContainer.style.backgroundColor = "#121212";
        logoTitle.style.color = "white";
        searchInput.style.backgroundColor = "white";
        searchInput.style.color = "#121212"; 
        searchInput.style.borderColor = "#121212";
    }

    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "";
    footer.style.color = "";
}


// MODAL COLOR SWTICH
function updateModalStyles() { 
    const modalContent = document.querySelector(".modal-content");
    if (document.body.classList.contains("dark-mode")) {
        modalContent.style.backgroundColor = "white";
        modalContent.style.color = "#121212";
    } else {
        modalContent.style.backgroundColor = "#121212";
        modalContent.style.color = "white";
    }
}
//SÖTÉT-VILÁGOS MÓD---------------------------------------------------------------
function displayGames(filteredGames) {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = "";  // Törli az előző keresési eredményeket

    // Minden játékot hozzáad a listához
    filteredGames.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.creator}</p>
        `;
        gameElement.onclick = () => showDetails(game); // Modal megjelenik
        gameList.appendChild(gameElement);
    });
}

// vélemény, kommentek
function showDetails(game) {
    document.getElementById('gameTitle').textContent = game.title;
    document.getElementById('gameCreator').textContent = game.creator;
    document.getElementById('gameDescription').textContent = game.description;
    document.getElementById('gameSpecs').textContent = game.specs;

    // Felugró vélemény
    const randomReview = game.reviews[Math.floor(Math.random() * game.reviews.length)];
    document.getElementById('reviewContent').textContent = randomReview;

    // Felugró komment
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = "";
    game.comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentList.appendChild(commentItem);
    });
    updateModalStyles();
    document.getElementById('gameDetails').style.display = 'flex';

}

// Bezáródik a felugró ablak
function closeDetails() {
    document.getElementById('gameDetails').style.display = 'none';
}

// Random "a hét játéka"
function recommendGame() {
    currentGame = games[Math.floor(Math.random() * games.length)];
    document.getElementById('randomGameTitle').textContent = currentGame.title;
}
function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm)); // Szűrés
    displayGames(filteredGames); // A szűrt játékok megjelenítése
}

// Oldal inicializálása
window.onload = () => {
    loadGames();
    recommendGame();
};

function showGameDetails(game) {
    const { title, creator, image, description, specs, reviews, rating, ratingCount } = game;

    document.getElementById("gameModalTitle").innerText = title;
    document.getElementById("gameModalCreator").innerText = creator;
    document.getElementById("gameModalImage").src = image;
    document.getElementById("gameModalDescription").innerText = description;
    document.getElementById("gameModalSpecs").innerText = specs;
    
    updateModalStyles();

    document.getElementById("gameModal").style.display = "block";
}


function closeModal() {
    document.getElementById("gameModal").style.display = "none";
}


document.querySelectorAll(".game-card").forEach((card, index) => {
    card.addEventListener("click", () => showGameDetails(games[index]));
});


