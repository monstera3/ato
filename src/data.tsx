type MuseumType = {
  id: number
  museumName: string
  address: string
  access: string
}

const museums: MuseumType[] = [
  {
    id: 1,
    museumName: '東京都現代美術館',
    address:'〒135-0022 東京都 江東区三好4-1-1',
    access: '東京メトロ半蔵門線「清澄白河駅」B2出口より徒歩9分',
  },
  {
    id: 2,
    museumName: '国立新美術館',
    address: '〒106-8558 東京都 港区六本木7-22-2',
    access: '東京メトロ千代田線乃木坂駅 青山霊園方面改札6出口（美術館直結）',
  },
  {
    id: 3,
    museumName: '三菱一号館美術館',
    address:'〒100-0005 東京都 千代田区丸の内2-6-2',
    access: '〒100-0005 東京都 千代田区丸の内2-6-2',
  }
]

export const getMuseums = (): MuseumType[] => {
  return museums;
}

export const getMuseum = (id: number): MuseumType  => {
  const museum = museums.find((museum: MuseumType) => museum.id === id)
  return museum ? museum : { id: 0, museumName:'', address: '',access: '' }
}
