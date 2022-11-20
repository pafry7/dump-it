type ItemType = "shareable" | "electronic" | "waste";

export interface Item {
  type: ItemType;
  name: string;
  id: string;
  tips: string[];
  trashColor: string;
  trashName: string;
}

// plastic - yellow500
// bio - yellow900
// paper - blue700
// glass - green700
export const items: Item[] = [
  {
    id: "Fruit",
    name: "Owoc",
    tips: [
      "🚜 Nawóz pod inne rośliny",
      "🧴 Sprawdzony krem nawilżający",
      "🦷 Chcesz mieć bielsze zęby? Pocieraj je skórką od banana",
    ],
    type: "waste",
    trashColor: "yellow900",
    trashName: "Bio",
  },
  {
    id: "Paper",
    name: "Paper",
    tips: [
      "🚜 Nawóz pod inne rośliny",
      "🧴 Sprawdzony krem nawilżający",
      "🦷 Chcesz mieć bielsze zęby? Pocieraj je skórką od banana",
    ],
    type: "waste",
    trashColor: "blue700",
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
    trashColor: "yellow500",
    trashName: "Plastik",
  },
  {
    id: "sky",
    name: "Butelka",
    tips: [
      "🫧 Własny dozownik do mydła",
      "🏮 Lampki nocne z butelek",
      "🌹 Wazon na kwiaty",
    ],
    type: "shareable",
    trashColor: "green700",
    trashName: "Szkło",
  },
  {
    id: "glass bottle",
    name: "Butelka",
    tips: [
      "Własny dozownik do mydła",
      "Lampki nocne z butelek",
      "Wazon na kwiaty",
    ],
    type: "waste",
    trashColor: "green700",
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

export interface CallendarItem {
  name: string;
  days: string;
}

export const trashInfo = [
  {
    trashName: "Szkło",
    disposals: [
      "2022-11-22T08:00:21+00:00",
      "2022-12-02T08:00:21+00:00",
      "2022-12-09T08:00:21+00:00",
    ],
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
