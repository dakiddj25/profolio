import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import WeRise from './images/werise.png'
import bitter from './images/bitter.png'
import byte from './images/byte.jpg'
import tastebuds from './images/tastebuds.png'
import pokemon from './images/pokemon.png'
import { FaReact } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiMaterialUi } from 'react-icons/si'
import { SiWebrtc } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          

            <CardItem
              src={WeRise}
              text='A virtual community center where users can share knowledge and build community!'
              label='WeRise'
              path='https://werise.netlify.app'
              description = 'WeRise was build on these technologys!'
              technology = { <p>{<FaReact size='3em'/>}  &nbsp;
                  {<SiPostgresql size='3em'/>} &nbsp;
                  {<AiFillHtml5 size='3em'/>} &nbsp;
                  {<SiMaterialUi size='3em'/>} &nbsp;
                  {<SiWebrtc size='3em'/>} &nbsp;
                  {<SiFirebase size='3em' aria-label='FireBase'/>} 
                  </p>}
            />

            <CardItem
              src={bitter}
              text='A twitter replica that allows user to create posts to share their thoughts and feelings!'
              label='Bitter'
              path='https://bittercta.netlify.app'
              description = 'Bitter was build on these technologys!'
              technology = { <p>{<FaReact size='3em'/>}  &nbsp;
                  {<AiFillHtml5 size='3em'/>} &nbsp;
                  {<DiCss3 size='3em' aria-label='css'/>} 
                  {<SiPostgresql size='3em'/>} &nbsp;
                  {<SiFirebase size='3em' aria-label='FireBase'/>} 
                  </p>}
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={tastebuds}
              text='Ever wanted to try new foods but didnt have anyone to go with? Try TasteBuds and find your yummy buddy!'
              label='Taste Buds'
              path='https://tastebuds.netlify.app'
              description = 'Technologys used!'
              technology = { <p>
                  {<FaReact size='3em'/>}  &nbsp;
                  {<AiFillHtml5 size='3em'/>} &nbsp;
                  {<DiCss3 size='3em' aria-label='css'/>} 
                  </p>}
            />

            <CardItem
              src={pokemon}
              text='Experience Pokemon like never before! Select any Pokemon and have them battle! '
              label='Pokemon Battle'
              path='https://pokemonbattlearea.netlify.app'
              description = 'Technologys used!'
              technology = { <p>
                  {<FaReact size='3em'/>}  &nbsp;
                  {<AiFillHtml5 size='3em'/>} &nbsp;
                  {<DiCss3 size='3em' aria-label='css'/>} 
                  </p>}
            />

            <CardItem
              src={byte}
              text='A photo blog Web App to share all your favorite foods! '
              label='Byte'
              path='https://byteme.netlify.app'
              description = 'Technologys used!'
              technology = { <p>
                  {<FaReact size='3em'/>}  &nbsp;
                  {<AiFillHtml5 size='3em'/>} &nbsp;
                  {<DiCss3 size='3em' aria-label='css'/>} 
                  {<SiPostgresql size='3em'/>} &nbsp;
                  </p>}
            />

          </ul>
        </div>

      </div>
    </div>
  );
}

export default Cards;