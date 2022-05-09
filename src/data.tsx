type MuseumType = {
  id: number
  title: string
  countries: string[]
  year: number
}

const museums: MuseumType[] = [
  {
    id: 1,
    title: '第13回 墨・無限展',
    countries: ['フランス', 'ドイツ', 'デンマーク', 'スウェーデン'],
    year: 2022,
  },
  {
    id: 2,
    title: 'マーク・ マンダース ―マーク・マンダースの不在',
    countries: ['フランス', 'イタリア'],
    year: 2022,
  },
  {
    id: 3,
    title: 'ライゾマティクス_マルティプレックス',
    countries: ['アメリカ'],
    year: 2022,
  }
]

export const getMuseums = (): MuseumType[] => {
  return museums;
}

export const getMuseum = (id: number): MuseumType  => {
  const museum = museums.find((museum: MuseumType) => museum.id === id)
  return museum ? museum : { id: 0, title:'', countries: [],year: 0 }
}
