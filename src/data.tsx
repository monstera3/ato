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
