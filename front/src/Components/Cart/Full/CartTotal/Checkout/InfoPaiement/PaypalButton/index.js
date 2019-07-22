import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import CheckoutService from '../../../../../../../Service/CheckoutService';

declare var paypal;

const mapStateToProps = state => ({
    cart: state.cart,
})

let PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM });

class Main extends React.Component {

    getTotalCart = () => {
        const {cart} = this.props;
        let totalPrice = 0;
        for (let i = 0; i < cart.length; ++i) {
            const { price, quantity } = cart[i];
            totalPrice += price * quantity;
        }
        return totalPrice;
    }

    createOrder(data, actions) {
        console.log(data);
        var token = actions.order.create.__id__
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: this.getTotalCart(),
                },
            }],
            application_context: {
                brand_name: 'Ecoponent',
            },
        });
    }

    async onApprove(data, actions) {
        var userInfo = JSON.parse(localStorage.getItem('eUser_info'));
        var userAdress = JSON.parse(localStorage.getItem('eUser_adress'));
        var userDelivery = JSON.parse(localStorage.getItem('eUser_delivery'));
        var userCart = JSON.parse(localStorage.getItem('cart'));

        var sendOrderRes = await CheckoutService.createOrder({
            cart: userCart,
            userEmail: userInfo.mail,
            adress: userAdress,
            transporter_id: 1,
            order_id: data.OrderID,
        });
        console.log('Action:',actions.order.capture());
        console.log('Data:', data);
        console.log(sendOrderRes);
    }
    render() {
        return (
            <PayPalButton style={{color:  'blue', shape:  'pill', label:  'pay', height: 40}}
            createOrder={ (data, actions) => this.createOrder(data, actions) }
            onApprove={ (data, actions) => this.onApprove(data, actions) }
        />
    );
    }
}

export default connect(mapStateToProps)(Main);
