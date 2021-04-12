import React from 'react';
import defaultImg from '../../Assets/img/Rectangle2.svg';

const CarouselWeb = (props) => {

    return (
        <div className="ConteinerDetails__img state-Web">
            <div className="your-class">
                {
                    props.imgPro1
                    ?<div><img src={props.imgPro1} alt={props.title} /> </div>
                    :<div><img src={defaultImg} alt={props.title} /> </div>
                }
                {
                    props.imgPro2
                    ?<div><img src={props.imgPro2} alt={props.title} /> </div>
                    : ``
                }
                {
                    props.imgPro3
                    ?<div><img src={props.imgPro3} alt={props.title} /> </div>
                    :``
                }
            </div>
        </div>
    );
}

export default CarouselWeb;