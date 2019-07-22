import Axios from 'axios';
export default class Auth {
    static async isAdmin(){
        if(undefined === localStorage.eToken){
            return false
        } else {
            return Axios.get('/api/user/isadmin', {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': localStorage.eToken,
                }
            }).then(res => {
                if(res.data[0] === 'ROLE_ADMIN'){
                    return true
                } else {
                    return false
                }
            }).catch(err => {
                return {err: err}
            })
        }
    }
    static async getUser(token){
        if(undefined === token){
            return false
        } else {
            return Axios.get('/api/user/', {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+token,
                }
            }).then(res => {
                if(undefined !== res.data.message && res.data.message === 'Unauthenticated'){
                    return false
                } else if (undefined !== res.data.id){
                    return {user: res.data}
                }
            }).catch(err => {
                return {err: err}
            })
        }
    }

    static async getUserInfo(token){
        if(undefined === token){
            console.log('undefiend token');
            return false
        } else {
            return Axios.get('/api/user/info', {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+token,
                }
            }).then(res => {
                return {user: res.data};
            }).catch(err => {
                return {err: err}
            })
        }
    }

    static async updateUser(data) {
        var token = localStorage.getItem('eToken');
        return Axios.put(`/api/user/info`,
                data, {
                    headers: {
                        "Content-type": "application/json",
                        'Accept': 'application/json',
                        'Authorization': 'Bearer '+token,
                    }
                })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }

    static async resetPassword(data) {
        var token = localStorage.getItem('eToken');
        return Axios.post(`/api/user/password`,
                data, {
                    headers: {
                        "Content-type": "application/json",
                        'Accept': 'application/json',
                        'Authorization': 'Bearer '+token,
                    }
                })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }

    //For create object
    // creditCardNumber,
    // ccv,
    // expiration,

    static async createCreditCard(data) {
        var token = localStorage.getItem('eToken');
        return Axios.post(`/api/user/creditcard`,
                data, {
                    headers: {
                        "Content-type": "application/json",
                        'Accept': 'application/json',
                        'Authorization': 'Bearer '+token,
                    }
                })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }

    static async getCreditCard() {
        var token = localStorage.getItem('eToken');
        return Axios.get(`/api/user/creditcard`, {
                    headers: {
                        "Content-type": "application/json",
                        'Accept': 'application/json',
                        'Authorization': 'Bearer '+token,
                    }
                })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }

    static async deleteCreditCard(id) {
        var token = localStorage.getItem('eToken');
        console.log(token);
        return Axios.delete(`/api/user/creditcard/${id}`,{
                    headers: {
                        "Content-type": "application/json",
                        'Accept': 'application/json',
                        'Authorization': 'Bearer '+token,
                    }
                })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }
}
