export interface Item {
  id: number,
  type: string,
  title: string,
  imageSource: string,
  price: number
}

export const items = [
  {
    id: 1,
    type: "electric guitar",
    title: "EPIPHONE LES PAUL SPECIAL VE EBONY VINTAGE",
    imageSource: "item-1.jpg",
    price: 23400
  },
  {
    id: 2,
    type: "bass",
    title: "EPIPHONE THUNDERBIRD IV BASS REVERSE VINTAGE SUNBURST",
    imageSource: "item-2.jpg",
    price: 49000
  },
  {
    id: 3,
    type: "electric guitar amp",
    title: "FENDER CHAMPION 20",
    imageSource: "item-3.jpg",
    price: 17300
  },
  {
    id: 4,
    type: "electric guitar",
    title: "GIBSON 2019 EXPLORER ANTIQUE NATURAL",
    imageSource: "item-4.jpg",
    price: 167000
  },
  {
    id: 5,
    type: "electric guitar",
    title: "GIBSON LES PAUL STANDARD 50S HERITAGE CHERRY SUNBURST",
    imageSource: "item-5.jpg",
    price: 238000
  }
]