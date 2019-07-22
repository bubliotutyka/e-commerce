import Axios from 'axios';

export default class SuppliersService {

    static async getAll() {
        return Axios.get("/api/supplier", {
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



    static async create(data) {

        return Axios.post(`/api/supplier`,
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

    static async delete(id) {
        return Axios.delete(`/api/supplier/${id}`, {
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

    static async update(id, data) {
        return Axios.put(`/api/supplier/${id}`, data)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }
}