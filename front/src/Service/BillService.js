import Axios from 'axios';
var Api2Pdf = require('api2pdf');
var a2pClient = new Api2Pdf('ad168b82-9286-481e-a011-66602d6d5a2b');

export default class bills {
    static async getBills(id){
        const bills = await Axios.get(`/api/order/${id}/bill`)
                        .then(res => {
                            return res.data;
                        })
                        .catch(err => {
                            console.log(err);
                        })
        const pdf = await a2pClient.wkhtmltopdfFromHtml(bills).then(function(result) {
            return result;
        });
        return pdf

    }
}
