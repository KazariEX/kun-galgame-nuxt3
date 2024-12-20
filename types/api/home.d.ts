import type { GalgameResource } from './galgame-resource.d.ts'
import type { MessageType } from './message.d.ts'

export interface HomeMessage {
  uid: number
  name: string
  tid: number
  gid: number
  type: MessageType
  content: string
  time: number
}

export interface HomeUserStatus {
  moemoepoints: number
  isCheckIn: boolean
}

export interface HomePinnedTopic {
  tid: number
  title: string
  time: number
}

export interface HomeTopic {
  tid: number
  title: string
  views: number
  likes: number
  replies: number
  comments: number

  time: number
  tags: string[]
  section: string[]
  user: KunUser
  status: number
  upvoteTime: number
}

export interface HomeGalgame {
  gid: number
  name: KunLanguage
  time: number
  views: number
  contributors: KunUser[]
  languages: string[]
  platforms: string[]
}

export interface HomeGalgameResources extends GalgameResource {
  name: KunLanguage
  time: number
}
