import Api from './Api'


export default {
  new (data) {
    return Api().post('thread', data)
  },
  index (forumId) {
    return Api().get('threads', forumId)
  },
  get (id) {
    return Api().get('thread', id)
  }
}