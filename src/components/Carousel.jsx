import React from "react";
import Slide from "./Slide";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            slider: [
                {
                    alt: "first",
                    url: "https://808.media/wp-content/uploads/2021/07/2021-tesla-model-s-plaid.jpg"
                },
                {
                    alt: "second",
                    url: "https://motor.ru/imgs/2021/01/28/07/4481037/611a78c40ab185aaa332f915528fdd900c9d34c6.jpg"
                },
                {
                    alt: "third",
                    url: "https://www.ixbt.com/img/n1/news/2021/5/1/modelsplaid_large_large_large.jpg"

                },
                {
                    alt: "fourth",
                    url: "https://cdn.hevcars.com.ua/wp-content/uploads/2020/09/tesla-model-s-plaid-specs-hevcars-2.jpg"

                }
            ],
        }
    }

    leftHandler = () => {
        let activeSlide = this.state.activeSlide
        const slider = this.state.slider
        if(activeSlide === 0){
            activeSlide = slider.length-1
        }
        else{
            activeSlide = activeSlide-1
        }
        this.setState({activeSlide})
    }

    rightHandler = () => {
        let activeSlide = this.state.activeSlide
        const slider = this.state.slider
        if(activeSlide === slider.length-1){
            activeSlide = 0
        }
        else{
            activeSlide = activeSlide+1
        }
        this.setState({activeSlide})
    }



    render() {

        return (

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
                {this.state.slider.map((value,index)=>{
                    return <Slide key={index}
                                  isActive={this.state.activeSlide === index}
                                  alt={value.alt}
                                  url={value.url}/>
                })}
            </div>
            <button onClick={this.leftHandler}
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">

                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button onClick={this.rightHandler}
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">


                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


        )
    }
}

export default Carousel