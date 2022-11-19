export interface Item {
  name: string;
  tips: string[];
  shareable: boolean;
  trashColor: string;
}

export const items: Item[] = [
  {
    name: "banana",
    tips: [
      "Nawóz pod inne rośliny",
      "Sprawdzony krem nawilżający",
      "Chcesz mieć bielsze zęby? Pocieraj je skórką od banana",
    ],
    shareable: true,
    trashColor: "yellow800",
  },
  {
    name: "plastic bottle",
    tips: [
      "Pojemnik do kiszenia ogórków",
      "Karmnik dla ptaków",
      "Doniczka na kwiaty",
      "Wazon",
      "Pojemnik na produkty sypkie",
      "Szufelka na psie kupy",
    ],
    shareable: true,
    trashColor: "yellow",
  },
  {
    name: "glass bottle",
    tips: [
      "Minimalistyczny wazon na kwiaty",
      "Własny dozownik do mydła",
      "Lampki nocne z butelek",
      "Wazon na kwiaty",
    ],
    shareable: true,
    trashColor: "green",
  },
  {
    name: "mobile device",
    tips: [],
    shareable: true,
    trashColor: "green",
  },
];

const electronicTips = [
  "Zostaw zużyty sprzęt w sklepie, w którym kupujesz nowe urządzenie",
  "Zostaw małogabarytowy zużyty sprzęt w dużym markecie bez konieczności kupowania nowego",
  "Oddaj zużyty sprzęt elektryczny i elektroniczny w miejscu dostawy",
  "Odnieś zużyty sprzęt do punktu zbierania",
];

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
