import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../Color';

export const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 3em;
  border: 4px solid ${Color.ecoLightOrange};
  border-radius: 3px;
`;

const centerMedia = css`
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`;

const baseText = css`
  margin: 0;
  font-size: 1em;
  font-weight: 400;
  color: ${Color.darkGrey};
`;

export const ContainerProduct = styled.div`
  width: 100%;
  border: 1px solid ${Color.ecoBrown};
  padding: .25em .5em;
  background-color: ${Color.white};
  box-shadow: ${Color.shadow};
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  margin: 5em 0 3em 0;
`;

export const ProductName = styled.h2`
  ${baseText}
  ${centerMedia}
  font-weight: 400;
  font-size: 1.6em;
`;

export const ReviewContainer = styled.div`
  ${centerMedia}
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: .6em;
`;

export const ReviewStars = styled.div`
  ${baseText}
  
  i.fas {
    color: ${Color.yellow};
  }

  i.far {
    color: ${Color.grey};
  }
`;

export const ReviewText = styled.p`
  ${baseText}
  margin-left: .6em;
  font-weight: 300;
`;

export const EcoContainer = styled.div`
  ${centerMedia}
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: .6em;
  padding: 1.2em 0;
  width: 100%;
  border-top: 1px solid ${Color.lightGrey};
`;

export const EcoStars = styled.div`
  ${baseText}
  
  i.fas {
    color: ${Color.ecoGreen};
  }

  i.not {
    color: ${Color.grey};
  }
`;

export const EcoText = styled.p`
  ${baseText}
  margin-left: .6em;
  font-weight: 300;
`;

export const ProductPrice = styled.h6`
  ${baseText}
  ${centerMedia}
  color: ${Color.ecoOrange};
  font-size: 1.4em;
  margin: 1em 0;
`;

export const ProductDesc = styled.p`
  ${baseText}
  ${centerMedia}
  font-weight: 300;
  padding-bottom: 3em;
  border-bottom: 1px solid ${Color.lightGrey};
  margin-bottom: 2em;
`;

export const Description = styled.p`
  ${baseText}
  ${centerMedia}
  font-weight: 300;
`;


export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2em;
`;

const baseQuantityItem = css`
  width: 50%;
`;

export const InStock = styled.p`
  ${baseText}
  ${baseQuantityItem}
  text-align: center;
  border: 1px solid ${Color.ecoBrown};
  padding: .3em 0;
  font-weight: 300;
  border-radius: 3px;
`;

export const QuantityInputContainer = styled.div`
  ${baseQuantityItem}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const QuantityInputText = styled.p`
  ${baseText}
  margin-right: 1.5em;
  font-weight: 300;
`;

export const QuantityInput = styled.select`
  background-color: transparent;
  border: 1px solid ${Color.ecoBrown};
  padding: .3em .6em;
  font-weight: 300;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabView = styled.div`
  width: 100%;
  border-top: 1px solid ${Color.lightGrey};
  padding: 2em .5em;
`;