import MessageModel from '~/server/models/message'

export default defineEventHandler(async (event) => {
  const userInfo = getCookieTokenInfo(event)
  if (!userInfo) {
    kunError(event, 10115, 205)
    return
  }
  const uid = userInfo.uid

  await MessageModel.deleteMany({ receiver_uid: uid })

  return 'MOEMOE delete all message successfully!'
})
