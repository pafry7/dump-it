type ItemType = "shareable" | "electronic" | "waste";

export interface Item {
  type: ItemType;
  name: string;
  id: string;
  tips: string[];
  trashColor: string;
  trashName: string;
}

export const items: Item[] = [
  {
    id: "banana",
    name: "Banan",
    tips: [
      "Nawóz pod inne rośliny",
      "Sprawdzony krem nawilżający",
      "Chcesz mieć bielsze zęby? Pocieraj je skórką od banana",
    ],
    type: "waste",
    trashColor: "yellow800",
    trashName: "Bio",
  },
  {
    id: "Fruit",
    name: "Owoc",
    tips: [
      "Nawóz pod inne rośliny",
      "Sprawdzony krem nawilżający",
      "Chcesz mieć bielsze zęby? Pocieraj je skórką od banana",
    ],
    type: "waste",
    trashColor: "yellow800",
    trashName: "Bio",
  },
  {
    id: "plastic bottle",
    name: "Butelka",
    tips: [
      "Pojemnik do kiszenia ogórków",
      "Karmnik dla ptaków",
      "Doniczka na kwiaty",
      "Wazon",
      "Pojemnik na produkty sypkie",
      "Szufelka na psie kupy",
    ],
    type: "waste",
    trashColor: "yellow300",
    trashName: "Plastik",
  },
  {
    id: "sky",
    name: "Butelka",
    tips: [
      "Minimalistyczny wazon na kwiaty",
      "Własny dozownik do mydła",
      "Lampki nocne z butelek",
      "Wazon na kwiaty",
    ],
    type: "electronic",
    trashColor: "green",
    trashName: "Szkło",
  },
  {
    id: "glass bottle",
    name: "Butelka",
    tips: [
      "Minimalistyczny wazon na kwiaty",
      "Własny dozownik do mydła",
      "Lampki nocne z butelek",
      "Wazon na kwiaty",
    ],
    type: "waste",
    trashColor: "green500",
    trashName: "Szkło",
  },
  {
    id: "Mobile Phone",
    name: "Telefon",
    tips: [],
    type: "electronic",
    trashColor: "green",
    trashName: "Nie dotyczy",
  },
  {
    id: "vase",
    name: "Waza",
    tips: [],
    type: "shareable",
    trashColor: "green",
    trashName: "Nie dotyczy",
  },
];

("https://orangerecykling.pl/wycen");

export interface CallendarItem {
  name: string;
  days: string;
}

export const calendarData: CallendarItem[] = [
  {
    days: "14.11",
    name: "Odpady komunalne",
  },
  {
    name: "Odpady Bio",
    days: "15.11, 29.11",
  },
  {
    name: "Szkło",
    days: "28.11",
  },
  {
    name: "Papier",
    days: "20.11",
  },
  {
    name: "Plastik",
    days: "28.11",
  },
  {
    name: "Metal",
    days: "28.11",
  },
];

export const trashInfo = [
  {
    trashName: "Szkło",
    shouldBeDumped: [
      "Butelki i słoiki po napojach i żywności",
      "Szklane opakowania po kosmetykach",
    ],
    shouldNotBeDumped: [
      "Butelki i słoiki po napojach i żywności",
      "Szklane opakowania po kosmetykach",
      "Ceramiki, doniczek, porcelany, fajansu, kryształów",
      "Szkła okularowego",
      "Szkła żaroodpornego",
      "Zniczy z zawartością wosku",
      "Żarówek i świetlówek",
      "Reflektorów",
      "Opakowań po lekach, rozpuszczalnikach, olejach silnikowych",
      "Luster",
      "Szyb okiennych i zbrojonych",
      "Monitorów i lamp telewizyjnych",
      "Termometrów i strzykawek",
    ],
  },
];
