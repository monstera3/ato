export type ExhibitionType = {
  id: number
  name: string
  museumName: string
  season: string
  from: string
  to: string
  museum: MuseumType
}

export type MuseumType = {
  id: number
  name: string
  address: string
  access: string
}


export type WatchedMuseumType = {
  museumId: number
  comment: string
  rate: number
}

export type UserType = {
  ato_id: string
  name: string
  comment: string
  visits: VisitType[]
}

export type VisitType = {
  id: number
  date: string
  exhibition: ExhibitionType
  review: ReviewType
  museum: MuseumType
}

export type ReviewType = {
  comment: string
  rating: number
}
