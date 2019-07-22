import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

//cb
// import {Elements, StripeProvider} from 'react-stripe-elements';

//Step
import InfoUser from './infoUser';
import InfoAdress from './InfoAdress';
import InfoDelivery from './InfoDelivery';
import InfoPaiement from './InfoPaiement';

import AuthService from '../../../../../Service/AuthService.js'

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user,
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Vos informations personnelle', 'Adresse de livraison', 'Methode de livraison', 'Paiement'];
}

async function getInfoUser(){
  var data = {};
  var res = await AuthService.getUserInfo(localStorage.getItem('eToken'));
  if (res.user) {
    data = {info : {id_user: res.user.user_id, lastname: res.user.lastname, mail: res.user.email,name: res.user.name,phone: res.user.phone}, adress : {pays: res.user.pays,ville: res.user.ville,code_postal: res.user.code_postal,departement: res.user.departement,voie: res.user.voie}};
    localStorage.setItem('eUser_info', JSON.stringify(data.info));
    localStorage.setItem('eUser_adress', JSON.stringify(data.adress));
  }
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (<InfoUser local={localStorage.getItem('eUser_info')}/>);
    case 1:
      return (<InfoAdress local={localStorage.getItem('eUser_adress')}/>);
    case 2:
      return (<InfoDelivery local={localStorage.getItem('eUser_delivery')}/>);
    case 3:
      return (<InfoPaiement />);
    default:
      return 'Unknown step';
  }
}

function StepperCheckout() {
  getInfoUser();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    localStorage.removeItem('eUser_adress');
    localStorage.removeItem('eUser_info');
    localStorage.removeItem('eUser_delivery');
    setActiveStep(0);
  }
  
  return (
    <div style={{width: 700}}>
    <Container style={{backgroundColor: '#ffffffc9', border: '1px solid #e5a771'}}>
    <div className={classes.root}>
      <Stepper style={{backgroundColor: 'transparent'}} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {
                    activeStep !== 3
                    ? (                  <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                      >
                                        {activeStep === steps.length - 1 ? 'Confirmer le paiement' : 'Next'}
                                      </Button>)
                    : (false)
                  }
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
    </Container>
    </div>
  );
}

export default connect(mapStateToProps)(StepperCheckout);
