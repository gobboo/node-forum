import Api from './Api'
/* eslint-disable */
export default {
  index (limit) {
    return Api().get(`blogs?limit=${limit}`)
  },
  post (blog) {
    return Api().post('blogs', blog)
  },
  show (blogId) {
    return Api().get(`blogs/${blogId}`)
  },
  put (blog) {
    return Api().put(`blogs/${blog.id}`, blog)
  },
  delete (blogId) {
    return Api().delete(`blogs/${blogId}`)
  } 
}