import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/journallist`),
  post: (data)=> axios.post(`${baseUrl}/journallist`, data),
  delete: (id)=> axios.delete(`${baseUrl}/journallist/${id}`),
}