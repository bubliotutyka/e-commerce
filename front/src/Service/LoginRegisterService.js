import Axios from 'axios'

export default class LoginRegisterService {
    static async login(data){
        return Axios.post('/api/login', data, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            return(res)
        }).catch(err => {
            return(err)
        })
    }
    static async register(data){
        return Axios.post('/api/register', data, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            return(res)
        }).catch(err => {
            return(err)
        })
    }
}
