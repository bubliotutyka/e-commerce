import Axios from 'axios';

export default class CheckoutService {

  static async createOrder(data) {

      return Axios.post(`/api/order`,
              data, {
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
