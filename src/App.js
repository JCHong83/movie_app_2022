import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'udon',
    image: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/07/udon-soup-recipe.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'okonomiyaki',
    image: 'https://www.japan-guide.com/g19/r100_01.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'yakitori',
    image: 'https://www.ohayo.it/wp-content/uploads/2018/12/yakitori-spiedini-pollo-giapponesi-ricetta.jpg',
    rating: 4.4,
  },
  {
    id: 4,
    name: 'fiorentina',
    image: 'https://www.braciamiancora.com/wp-content/uploads/2015/08/Bistecca-Fiorentina-Boccanegra-Firenze-5.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: '곱창구이',
    image: 'https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202005/d4bc58f6-c585-4a83-a09a-7a6e0e2dbe0e.jpg',
    rating: 5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};


export default App;
