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
    disposals: [
      "2022-11-22T08:00:21+00:00",
      "2022-12-02T08:00:21+00:00",
      "2022-12-09T08:00:21+00:00",
    ],
    trashName: "Glass",
    shouldBeDumped: [
      "Beverage and food bottles and jars",
      "Glass packaging of cosmetics",
    ],
    shouldNotBeDumped: [
      "Ceramics, pots, porcelain, faience, crystals",
      "Eyeglasses",
      "Heat-resistant glass",
      "Candles with wax content",
      "Incandescent and fluorescent lamps",
      "Headlights",
      "Packages of medicines, solvents, motor oils",
      "Mirror",
      "Window and reinforced glass",
      "Television monitors and lamps",
      "Thermometers and syringes",
    ],
  },
  {
    trashName: "Bio",
    disposals: [
      "2022-11-23T08:00:21+00:00",
      "2022-12-02T08:00:21+00:00",
      "2022-12-13T08:00:21+00:00",
    ],
    shouldBeDumped: [
      "Peelings and leftovers of fruits and vegetables",
      "Meal leftovers",
      "Eggshells",
      "Coffee and tea grounds",
      "Out-of-date fruits and vegetables",
      "Cut grass, leaves, flowers",
    ],
    shouldNotBeDumped: [
      "Bones, meat and its remains",
      "Medicines",
      "Animal excrement",
      "Hazardous waste",
      "Ash",
      "Stones",
      "Ziemi",
    ],
  },
  {
    trashName: "Paper",
    disposals: [
      "2022-11-02T08:00:21+00:00",
      "2022-12-12T08:00:21+00:00",
      "2022-12-19T08:00:21+00:00",
    ],
    shouldBeDumped: [
      "Paper or cardboard packaging",
      "Newspapers and magazines",
      "Catalogs, brochures, folders",
      "School and office paper",
      "Books and notebooks",
      "Paper bags and sacks",
    ],
    shouldNotBeDumped: [
      "Heavily soiled or greasy paper",
      "Film-coated paper and carbon paper",
      "Milk and beverage cartons",
      "Disposable diapers and other hygiene materials",
      "Bags of fertilizer, cement and other building materials",
    ],
  },
  {
    trashName: "Plastic",
    disposals: [
      "2022-11-10T08:00:21+00:00",
      "2022-12-12T08:00:21+00:00",
      "2022-12-09T08:00:21+00:00",
    ],
    shouldBeDumped: [
      "Plastic bottles (without caps)",
      "Household chemical bottles",
      "Plastic caps",
      "Soda cans",
      "Milk and juice cartons",
      "Jar caps",
    ],
    shouldNotBeDumped: [
      "Plastic toys",
      "Drug packaging",
      "Disposable dishes",
      "AGD",
    ],
  },
];
