import http from '@/http-common'

class TypeDataService {
  getAll () {
    return http.get('/type')
  }
}
export default new TypeDataService()
