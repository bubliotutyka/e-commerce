import Axios from 'axios';

export default class TransporterService {
  
  static async GetAllTransporter() {
      return Axios.get(`/api/transporter`,
                  {
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

  static async AddTransporter(data) {
    return Axios.post(`/api/transporter`,
                data,
                {
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

    static async DeleteTransporter(id) {
        return Axios.delete(`/api/transporter/${id}`,
                    {
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

    static async EditTransporter(id, data) {
        return Axios.put(`/api/transporter/${id}`,
                    data,
                    {
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

    static async GetTransporter(id) {
        return Axios.get(`/api/transporter/${id}`,
                    {
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
