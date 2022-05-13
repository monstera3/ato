export type ExhibitionType = {
  id: number
  exhibitionName: string
  museumName: string
  season: string
}

export type MuseumType = {
  id: number
  museumName: string
  address: string
  access: string
}


export type WatchedMuseumType = {
  museumId: number
  comment: string
  rate: number
}

export type UserType = {
  id: string
  displayName: string
  comment: string
  watchedMuseum: WatchedMuseumType[]
  followingUserIds: string[]
}

const users: UserType[] = [
  {
    id: 'first_man',
    displayName: 'A男',
    comment: '現代アートが好きです',
    watchedMuseum: [
      {
        museumId: 1,
        comment: 'ワクワクした！',
        rate: 5,
      },
      {
        museumId: 3,
        comment: 'よかったです！',
        rate: 4,
      },
      {
        museumId: 5,
        comment: 'よかったです！',
        rate: 4,
      },
      {
        museumId: 6,
        comment: '好みが分かれそうです',
        rate: 3,
      }
    ],
    followingUserIds: [
      'second_man'
    ]
  },
  {
    id: 'second_man',
    displayName: 'B男',
    comment: '西洋美術が好きです',
    watchedMuseum: [
      {
        museumId: 2,
        comment: '落ち着きます',
        rate: 5,
      }
    ],
    followingUserIds: [
      'third_man'
    ]
  },
  {
    id: 'third_man',
    displayName: 'C男',
    comment: '美術館によく行きます',
    watchedMuseum: [
      {
        museumId: 2,
        comment: '初めて行きました',
        rate: 4,
      }
    ],
    followingUserIds: [
      'first_man'
    ]
  }
]

export const getUser = (id: string): UserType => {
  const user = users.find((user: UserType) => user.id === id)
  if (user) {
    return user;
  } else {
    return {
      id: '',
      displayName: '',
      comment: '',
      watchedMuseum: [],
      followingUserIds: []
    }
  }
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
    access: 'JR「東京」駅（丸の内南口）徒歩5分',
  },
  {
    id: 4,
    museumName: '九州国立博物館',
    address:'〒818-0118 福岡県 太宰府市石坂4-7-2 ',
    access: '西鉄福岡 天神駅から西鉄天神大牟田線（特急約13分／急行約17分）で「西鉄二日市」駅乗り換え 西鉄太宰府線利用「太宰府」駅下車、徒歩で約10分',
  },
  {
    id: 5,
    museumName: '佐川美術館',
    address:'〒524-0102 滋賀県 守山市水保町北川2891',
    access: 'JR東海道本線（琵琶湖線）守山駅下車、近江鉄道バスまたはタクシーにて約30分',
  },
  {
    id: 6,
    museumName: '東京ステーションギャラリー',
    address:'〒100-0005 東京都 千代田区丸の内1-9-1',
    access: 'JR線東京駅 丸の内北口 改札前（東京駅丸の内駅舎内）',
  },
  {
    id: 7,
    museumName: '大阪中之島美術館',
    address:'〒530-0005 大阪府 大阪市北区中之島4丁目 ',
    access: ' ',
  },
  {
    id: 8,
    museumName: '松岡美術館',
    address:'〒108-0071 東京都 港区白金台5-12-6',
    access: '東京メトロ南北線・都営地下鉄三田線 白金台駅 1番出口から徒歩7分',
  },
  {
    id: 9,
    museumName: '三菱一号館美術館',
    address:'〒100-0005 東京都 千代田区丸の内2-6-2',
    access: '〒100-0005 東京都 千代田区丸の内2-6-2',
  },
  {
    id: 10,
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


const exhibitions: ExhibitionType[] = [
  {
    id: 1,
    exhibitionName: '冨嶽三十六景と東海道五十三次',
    museumName:'MOA美術館',
    season: '開催期間：2022年5月13日(金)〜2022年7月18日(月・祝)',
  },{
    id: 2,
    exhibitionName: 'ゲルハルト・リヒター展',
    museumName:'東京国立近代美術館',
    season: '開催期間：2022年6月7日(火)〜2022年10月2日(日)',
  },{
    id: 3,
    exhibitionName: 'ダミアン・ハースト　桜',
    museumName:'国立新美術館',
    season: '開催期間：2022年3月2日(水)〜2022年5月23日(月) ',
  },
]

export const getExhibitions = (): ExhibitionType[] => {
  return exhibitions;
}

// export const getExhibition = (id: number): ExhibitionType  => {
//   const exhibition = exhibitions.find((exhibition: ExhibitionType) => exhibition.id === id)
//   return exhibition ? exhibition : { id: 0, exhibitionName:'', museumName: '',season: '' }
// }
