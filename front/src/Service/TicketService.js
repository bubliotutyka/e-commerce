import Axios from 'axios';

export default class Ticket {

  static async getAllByUser(token){
      if(undefined === token){
          return false
      } else {
          return Axios.get('/api/user/order', {
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer '+token,
              }
          }).then(res => {
                return res.data;

          }).catch(err => {
              return {err: err}
          })
      }
  }

  static async getById(id) {
      return Axios.get(`/api/order/${id}`, {
              headers: {
                  "Content-type": "application/json"
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
