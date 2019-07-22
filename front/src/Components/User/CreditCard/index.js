import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import AuthService from '../../../Service/AuthService';

export default class CreditCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            creditcard: [],
        }
    }

    handleInputChange(event){
        if (event.target.name === 'expireDate') {
            if (event.target.value.length <= 5) {
                if (event.target.value.length === 2 && event.target.value.length > this.state.expireDate.length) {
                    this.setState({[event.target.name]: event.target.value + '/'});
                } else {
                    this.setState({[event.target.name]: event.target.value});
                }
            }
        } else {
            if (event.target.name === 'ccv') {
                if (event.target.value.length <= 3) {
                    this.setState({[event.target.name]: event.target.value});
                }
            } else {
                if (event.target.name === 'cartNumber') {
                    if (event.target.value.length <= 16) {
                        if (parseInt(event.target.value[event.target.value.length - 1]) && !isNaN(parseInt(event.target.value[0]))) {
                            this.setState({[event.target.name]: event.target.value});
                        }
                    }
                } else {
                    this.setState({[event.target.name]: event.target.value});
                }
            }
        }
    }

    displayCreditCard = () => {
        return (
            <Container>
            <Grid style={{marginTop: '5em'}} container direction='row' justify='center'>
            <Grid style={{marginRight: '2em', width: 600 }}>
            <h2 style={{fontWeight: 'bold', paddingBottom: 10, borderBottom:' 1px solid #8ed5a4'}}>Carte enregistrer pour vos commande</h2>
            <h6 style={{fontWeight: 'bold',marginTop: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>

            <Grid style={{marginTop: 40}} container direction='row' justify='space-around'>
                <Grid style={{width: '30%'}}  direction='column' justify='center'>
                    <Grid container direction='row' justify='center'>
                    <i style={{fontSize: 70, marginBottom: 10}} class="fas fa-shield-alt"></i>
                    </Grid>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </Grid>
                <Grid style={{width: '30%'}}direction='column' justify='center'>
                    <Grid container direction='row' justify='center'>
                    <i style={{fontSize: 70, marginBottom: 10}} class="fas fa-tachometer-alt"></i>
                    </Grid>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </Grid>
                <Grid style={{width: '30%'}} direction='column' justify='center'>
                    <Grid container direction='row' justify='center'>
                    <i style={{fontSize: 70, marginBottom: 10}} class="far fa-check-circle"></i>
                    </Grid>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </Grid>
            </Grid>
            <Grid style={{marginTop: '2em'}} container direction='row' justify='center'>
            <Button margin="normal" variant="outlined" onClick={this.deleteCreditCard.bind(this)}>Supprimer cet carte</Button>
            </Grid>
            </Grid>
            <div style={{ borderLeft: '2px solid #8ed5a4', paddingLeft: 50, paddingTop: 50, paddingBottom: 60}}>
            <ImageCreditCard cardData={this.state} />
            </div>
            </Grid>
            </Container>
        );
    }

    newCreditCard(){
        return (
            <div>
            <h1>Ajoutez une carte de credit</h1>
            <h4>Vous pourrez l'utiliser a tous moment pour commander de nouveau produit</h4>
            <Container style={{marginTop: 30}}>
            <TextField style={padding_field} error={false} helperText='Required' fullWidth label="Numero de carte" value={this.state.cartNumber} name='cartNumber' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
            <TextField style={padding_field} error={false} helperText='Required' label="Nom du titulaire" value={this.state.titulaireName} name='titulaireName' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
            <TextField style={padding_field} error={false} helperText='Required' label="Date d'expiration" value={this.state.expireDate} name='expireDate' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
            <TextField style={padding_field} error={false} helperText='Required' label="CCV" value={this.state.ccv} name='ccv' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
            <Button onClick={this.addCreditCard.bind(this)} margin="normal" variant="outlined">Ajoutez</Button>
            </Container>
            <Container style={{marginTop: 15}}>
            <h6 style={{color: 'red'}}>Votre code ccv au dos de votre carte (code a 3 chiffres) vous sera demander pour chaque paiement</h6>
            </Container>
            </div>
        );
    }

    async addCreditCard(){
        const { cartNumber, titulaireName, ccv } = this.state;
        var res = await AuthService.createCreditCard({
            titulaire: titulaireName,
            creditCardNumber: cartNumber,
            ccv: ccv,
            expiration: '2020-05-01'
        });
        await this.setState({creditcard: res});
    }

    async deleteCreditCard() {
        const { id } = this.state.creditcard;
        var res = await AuthService.deleteCreditCard(id);
        if (res.success === "Card deleted") {
            await this.setState({creditcard: []});
        }
    }

    async componentDidMount(){
        var creditcard = await AuthService.getCreditCard();
        if (creditcard.length === 0) {
            await this.setState({creditcard: creditcard});
        } else {
            await this.setState({creditcard: creditcard[0]});
        }
    }

    render(){
        const { creditcard } = this.state;
        if (creditcard.length === 0) {
            return(
                this.newCreditCard()
            );
        } else {
            return(
                this.displayCreditCard()
            );
        }
    }
}

function ImageCreditCard(props){
    const creditCardData = props.cardData.creditcard;
    var number = '';
    var numberSplited = (""+creditCardData.creditCardNumber).split('');
    var expire = creditCardData.expiration.split(' ')[0].split('-')[1] +'/'+ creditCardData.expiration.split(' ')[0].split('-')[0].substr(2);
    for (var i = 0; i < numberSplited.length; i++) {
        number += numberSplited[i];
        if ((i + 1) % 4 === 0 ) {
            number += ' ';
        }
    }

    return (
        <div style={creditCardStyle}>
        <Grid>
        <p style={{fontSize: '1.5em', color: 'white', fontWeight: 'bold'}}>Bank</p>
        </Grid>
        <Grid container direction='row' justify='center'>
        <p style={{fontSize: '2.8em', color: 'white', fontWeight: 'bold'}}>{number}</p>
        </Grid>
        <Grid container direction='row' justify='space-between' alignItems="center">
        <Grid>
        <p style={{fontSize: '1.3em', color: 'white', fontWeight: 'bold'}}>{expire}</p>
        <h6 style={{fontSize: '1.5em', color: 'white', fontWeight: 'bold' }}>{creditCardData.titulaire}</h6>
        </Grid>
        <Grid style={{backgroundColor:'white', padding: 10, borderRadius: 2}}>
        <h5 style={{fontSize: '1.7em', color: 'black', fontWeight: 'bold', margin: 0 }}>VISA</h5>
        </Grid>
        </Grid>
        </div>
    );
}

const padding_field = {
    margin: 5,
    marginTop: 20
}

const creditCardStyle = {
    boxShadow: "#8ed5a4 46px 38px 0px",
    borderRadius: '17px',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '30px',
    paddingBottom: '30px',
    width: '450px',
    backgroundColor: 'black'
}
