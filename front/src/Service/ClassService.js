import Axios from 'axios';

export default class ClassService {

    static async getAll() {
        return Axios.get("/api/classes", {
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

    static async getById(id) {
        return Axios.get(`/api/classe/${id}`, {
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
        
        return Axios.post(`/api/classe`,
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
        return Axios.delete(`/api/classe/${id}`, {
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