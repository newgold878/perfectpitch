/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, WoodMaterial, Testimonial } from './types';

import postoljeImg from './assets/images/postolje_za_zdjelice_1780397150875.png';
import grebalicaImg from './assets/images/macka_grebalica_1780397171034.png';
import kucicaImg from './assets/images/kucica_za_ljubimce_1780397191410.png';
import radionicaImg from './assets/images/radionica_pet_craft_1780397209228.png';

export const WOOD_MATERIALS: WoodMaterial[] = [
  {
    id: 'oak',
    name: 'Oak',
    nameCroatian: 'Hrast',
    density: 'Tvrdo drvo (cca 760 kg/m³)',
    colorDescription: 'Intenzivni, plamenom obrađeni i osjenčani zlatno-smeđi godovi s baršunastim opipom.',
    priceMultiplier: 1.3,
    bestFor: 'Premium postolja za zdjelice, čvrste baze za teške grebalice, luksuzni kreveti.'
  },
  {
    id: 'walnut',
    name: 'Walnut',
    nameCroatian: 'Orah',
    density: 'Srednje tvrdo drvo (cca 640 kg/m³)',
    colorDescription: 'Ekskluzivna tamnosmeđa do čokoladna nijansa s valovitim i luksuznim godovima.',
    priceMultiplier: 1.6,
    bestFor: 'Dizajnerska postolja za zdjelice s detaljnim gravurama, unikatni pladnjevi i dekoracije.'
  },
  {
    id: 'ash',
    name: 'Ash',
    nameCroatian: 'Jasen',
    density: 'Izrazito žilavo i fleksibilno drvo (cca 690 kg/m³)',
    colorDescription: 'Svijetla krem boja s dinamičnim rebrima, izrazite čvrstoće i otpornosti na udarce.',
    priceMultiplier: 1.15,
    bestFor: 'Konstrukcijske etaže za mačje grebalice, stupovi za penjanje, robusne igračke.'
  },
  {
    id: 'fir',
    name: 'Fir / Spruce',
    nameCroatian: 'Smreka / Jela',
    density: 'Lagano i toplo crnogorično drvo (cca 450 kg/m³)',
    colorDescription: 'Svijetlo-žućkasta površina s rustikalnim prirodnim čvorovima, naglašena vatrom.',
    priceMultiplier: 0.9,
    bestFor: 'Vanjske i unutarnje kućice za kućne ljubimce, hranilice za ptice, dom i vrt.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'bowls-oak-premium',
    name: 'Dizajnersko Postolje sa Zdjelicama "Classic Finish"',
    category: 'bowls',
    categoryCroatian: 'Postolja za Zdjelice',
    image: postoljeImg,
    description: 'Luksuzno povišeno ergonomsko postolje izrađeno od masivnog slavonskog hrasta. Specijalno projektirano za podizanje razine hranjenja čime se olakšava gutanje i smanjuje pritisak na vratnu kralježnicu vašeg psa ili mačke. Drveni okvir je termički obrađen plamenom kako bi se naglasio crtež godova, te zaštićen s tri sloja Rubio Monocoat organskog 100% netoksičnog ulja, potpuno otpornog na vodu, hranu i slinu.',
    dimensionsInfo: 'Dostupne veličine: S (za mačke i male pse) | M (srednje pse) | L i XL (velike pasmine)',
    materialUsed: 'Slavonski hrast i dvije inox posude od nehrđajućeg čelika (prikladne za perilicu)',
    completionTime: '5 - 7 dana',
    priceRange: '45 € - 95 €',
    features: [
      'Ergonomski kut koji smanjuje naprezanje zglobova',
      'Ugrađene vrhunske inox posude s prigušivačima buke',
      'Visokootporni ekološki premaz bez štetnih otapala',
      'Prekrasan laserom urezan motiv šapice na prednjoj strani'
    ]
  },
  {
    id: 'scratcher-ash-nature',
    name: 'Ekskluzivna Prirodna Grebalica "Artisan Trunk"',
    category: 'scratchers',
    categoryCroatian: 'Grebalice za Mačke',
    image: grebalicaImg,
    description: 'Stabilna, iznimno masivna penjalica i grebalica za mačke napravljena od sušenog prirodnog drvenog trupca divlje šljive ili trešnje. Cijelom svojom duljinom ručno je opletena debelim sisal užetom prve klase od 10 mm. Etaže i odmorišta od jasenovog drva osiguravaju čvrstoću, a jastuci od organskog flisa su uklonjivi i jednostavni za pranje u perilici.',
    dimensionsInfo: 'Visina: 120 - 170 cm | Baza: 55x55 cm | Masa: cca 18 kg (vrhunska stabilnost bez prevrtanja)',
    materialUsed: 'Prirodno neobrađeno deblo, jasenove ploče, 100% sisal vlakna',
    completionTime: '2 - 3 tjedna',
    priceRange: '140 € - 260 €',
    features: [
      'Garantirana vrhunska težina i protuklizni podlošci',
      'Izuzetno debelo i otporno sisal uže (dugovječni vijek grebanja)',
      'Uklonjive i perive presvlake s mekim antialergijskim punjenjem',
      'Prirodni dizajn koji se savršeno uklapa u svaki moderni dnevni boravak'
    ]
  },
  {
    id: 'house-fir-vintage',
    name: 'Premium Drvena Kućica za Pse i Mačke',
    category: 'houses',
    categoryCroatian: 'Kućice i Kreveti',
    image: kucicaImg,
    description: 'Prekrasna ručno rađena kućica s kosim krovom koja služi kao dekorativni element doma i toplo utočište za vašeg ljubimca. Eksterijer je ručno spaljen japanskom Shou Sugi Ban tehnikom čime se postiže upečatljiv, vintage crni izgled drveta uz visoku prirodnu vodootpornost i obranu od plijesni. Dolazi s pripadajućim debelim ortopedskim jastukom za odmor.',
    dimensionsInfo: 'Dimenzije: S (60x50x55 cm) | M (75x60x70 cm) | L (95x75x85 cm)',
    materialUsed: 'Četinarsko puno drvo (smreka i jela), ortopedski jastuk s navlakom na patent',
    completionTime: '10 - 15 dana',
    priceRange: '180 € - 310 €',
    features: [
      'Visina od tla štiti od hladnih podova i propuha',
      'Obrada spaljivanjem bez ijedne kapljice umjetne otrovne boje',
      'Uklonjivi krov za super lagano pranje i usisavanje unutrašnjosti',
      'Može se naručiti s personaliziranim imenom ljubimca na pločici'
    ]
  },
  {
    id: 'decor-oak-tray',
    name: 'Artisan Drveni Pladanj s Prirodnim Rubom',
    category: 'decorations',
    categoryCroatian: 'Dekoracije za Dom',
    image: radionicaImg,
    description: 'Predivan dekorativni rustikalni pladanj za stol ili hodnik, ručno odsječen od jedne ploče stoljetnog hrasta ili oraha s očuvanim prirodnim rubom trupca (live edge). Podvrgnut laganom plamenom pečenju kako bi pocrnjeli prirodni prstenovi drva, dajući toplinu i dramatičnost svakom dekorativnom kutku vašeg doma.',
    dimensionsInfo: 'Okvirna duljina: 45 cm | Širina: 22 cm | Debljina: 3 cm',
    materialUsed: 'Cjelovito masivno drvo gorskog hrasta lužnjaka',
    completionTime: '3 - 5 dana',
    priceRange: '30 € - 55 €',
    features: [
      '100% ručni rad iz Samobora - svaki pladanj je neponovljiv unikati',
      'Zasićen pčelinjim organskim voskom i farmaceutskim mineralnim uljima',
      'Može se sigurno koristiti i kao daska za suhomesnate delicije i sireve',
      'Skrivene silikonske nožice koje štite osjetljive staklene površine'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Lorena Bačani',
    location: 'Samobor',
    comment: 'Naručili smo povišeno hrastovo postolje sa zdjelicama i predivnu grebalicu za našu mačku. Perfect Finish je nadmašio sva očekivanja! Sve je čvrsto, stabilno, a pas više nema problema sa gutanjem jer je zdjelica povišena. Izgleda luksuzno!',
    rating: 5,
    projectType: 'Hrastovo Postolje & Grebalica'
  },
  {
    id: 't2',
    clientName: 'Ivan Horvat',
    location: 'Karlovac',
    comment: 'Kupio sam gotovu retro kućicu za psa u crnom stilu i oduševljen sam obradom drveta! Shou Sugi Ban gorenje daje predivan izgled koji se savršeno uklapa u naš prostor. Ekološki premaz bez mirisa je pun pogodak.',
    rating: 5,
    projectType: 'Gotička Vintage Kućica'
  },
  {
    id: 't3',
    clientName: 'Marija Kovač',
    location: 'Zagreb',
    comment: 'Ove drvene daske i dekoracije za dom koje dečki izrađuju unose toliku toplinu u naš prostor! Završna obrada je glatka poput svile, perfect finish u punom smislu riječi. Preporučujem od srca.',
    rating: 5,
    projectType: 'Artisan Drveni Pladanj'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Savjetovanje i Izbor',
    description: 'Saslušat ćemo potrebe vašeg psa, mačke ili doma te odabrati optimalne povišene dimenzije, ergonomski kut jela i prikladnu vrstu drveta.'
  },
  {
    step: '02',
    title: 'Nacrt s Ljubavlju',
    description: 'Izrađujemo digitalnu skicu visine postolja prilagođene točno vašem ljubimcu (od čivava do doga) te dostavljamo transparentnu ponudu.'
  },
  {
    step: '03',
    title: 'Termička Obrada Plamenom',
    description: 'Nakon ručnog krojenja drva, tehnikom kontroliranog spaljivanja naši majstori izvlače duboke, bogate godove dajući drvu iznimnu vintage ljepotu.'
  },
  {
    step: '04',
    title: 'Ekološki Perfect Finish',
    description: 'Fino poliranje u više granulacija i ručni nanos najkvalitetnijeg Rubio organskog ulja na bazi voska. 100% sigurno i netoksično za životinje!'
  },
  {
    step: '05',
    title: 'Dostava na Vaš Prag',
    description: 'Pažljivo pakiramo unikat i šaljemo ga brzom poštom na vašu adresu, spreman za osmijeh na licu vašeg sretnog ljubimca.'
  }
];
