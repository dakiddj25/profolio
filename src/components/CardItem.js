import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiMaterialUi } from 'react-icons/si'
import { SiWebrtc } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'

function CardItem(props) {
  debugger
  return (
    <>
      <li className='cards__item'>
        <a  className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Image'
              src={props.src}
            />
            <div class="overlay">
            
              <div class="text"> 
                  <h1 className='Title'>{props.description}</h1>
                  {props.technology} 
            </div>
              
            </div>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;