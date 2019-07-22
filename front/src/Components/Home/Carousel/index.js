import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import * as S from './style';
import {css} from "emotion";

const CarouselPage = () => {
    return (
        <MDBContainer className={css(S.containerInner)}>
            <MDBCarousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner className={css(S.carouselInner)}>

                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className={css(S.imageResize)}
                                src="./banner/banner_ecoponent.png"
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className={css(S.imageResize)}
                                src="./banner/banner_asus.jpg"
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className={css(S.imageResize)}
                                src="./banner/CrazyGamer.jpg"
                                alt="Third slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className={css(S.imageResize)}
                                src="./banner/banner_msi.jpg"
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>

                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;