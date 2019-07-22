import React from 'react';
import Container from '@material-ui/core/Container';
import * as S from './style';

export default class AboutUs extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <S.Container>

          <S.AboutsUsContainer>
            <S.Title>Qui sommes nous ?</S.Title>
            <S.Text>
              Nous somme Ecoponent, une jeune startup française fan de nouvelles technologies
              mais aussi investie dans l'écologie, car nous avons compris que nous vivons 
              sur un grain de sable fragile perdu dans l'univer à préserver. Nous avons donc 
              voulu rapprocher ces 2 aspects sur notre site en mélangeant technologie 
              et écologie.
            </S.Text>
            <S.Text>
              Notre concept est simple, favoriser l'apport de materiaux recyclé pour 
              l'envoi de colis, mais surtout permettre au futur consommateur dès lors 
              d'un achat de contribuer à une action écologique, puisque Ecoponent reverse 
              une partie du prix à hauteur de 3,42% du panier total. Cela permet de 
              financer diverse projets écologique en colaboration avec différentes 
              associations partenaire, principalement axé sur le maintient des milieux 
              naturel pour préserver la faune et la flore, mais aussi permettre de reforester 
              certaine zone de notre magnifique planète vider de leur forêt.
            </S.Text>
            <S.Text>
              Un de notre autre principe est de permettre au consommateur de pouvoir 
              revoyer ses anciens composants et appareils électronique pour permettre 
              un recyclage plus efficace et ainsi reduire l'inpact carbone sur l'extraction 
              de nouvelles matières première.
            </S.Text>
          </S.AboutsUsContainer>

        </S.Container>
      </Container>
    );
  }
}