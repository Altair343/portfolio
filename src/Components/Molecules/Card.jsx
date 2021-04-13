import React from 'react';
import imgDefault from '../../Assets/img/Rectangle.png';
import PropTypes from 'prop-types';

const Card = (props) =>(
    <div className = "contentCard">
        <div className="contentCard__link">
            <a href={`/Portfolio/${ String(props.id)}`} className ="contentCard__link__item">Detalles</a>
        </div>
        <div className="contentCard__img">
            <img src={props.imgLikn} alt={props.title}/>
        </div>
    </div>
);

Card.propTypes ={
    id: PropTypes.number,
    imgLikn: PropTypes.string,
    title: PropTypes.string,
}

Card.defaultProps ={
    id: 0,
    imgLikn: imgDefault,
    title: '',
    
  }

export default Card;
