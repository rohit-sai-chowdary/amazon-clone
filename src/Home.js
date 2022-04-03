import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/61tECQhnTeL._SX3000_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            id='123'
            title='Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL254_SR254,254_.jpg'
            rating={5}
          />
          <Product
            id='124'
            title='Things We Never Got Over'
            price={10.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71ODaT072wL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='125'
            title='The Fellowship of the Ring: Lord of the Rings, Book 1'
            price={35.49}
            image='https://m.media-amazon.com/images/I/A1Rz51wCTYL._AC_UY218_.jpg'
            rating={5}
          />
          <Product
            id='126'
            title='The Hobbit: The Battle of The Five Armies'
            price={17.99}
            image='https://m.media-amazon.com/images/I/A1EeSml7GYL._AC_UY218_.jpghttps://m.media-amazon.com/images/I/A1EeSml7GYL._AC_UY218_.jpg'
            rating={5}
          />
          <Product
            id='127'
            title='The Hobbit: The Desolation of Smaug'
            price={17.99}
            image='https://m.media-amazon.com/images/I/A1GPi4xTDZL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='128'
            title='SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz'
            price={1094.98}
            image='https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX450_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
