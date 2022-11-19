export interface Item {
  name: string;
  tips: string[];
  shareable: boolean;
  trashColor: string;
}

export const items: Item[] = [
  {
    name: "banana",
    tips: ["Uzyj jako pojemnik", "Uzyj jako pojemnik", "Uzyj jako pojemnik"],
    shareable: true,
    trashColor: "red",
  },
];
