import React from 'react';

function Food({ fav }) {
  return <h3>I like {fav}</h3>
}

const foodILike = [
  {
    name: 'udon',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkisaki.it%2Fproduct%2Fwakame-udon%2F&psig=AOvVaw0t9FToqELoHd2F5bpVUFzh&ust=1672313290661000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjW59OYnPwCFQAAAAAdAAAAABAL',
  },
  {
    name: 'okonomiyaki',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.japan-guide.com%2Fr%2Fe100.html&psig=AOvVaw0GmWTVwBZj4xtE0Xjl677A&ust=1672313589832000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLih_uqZnPwCFQAAAAAdAAAAABAD',
  },
  {
    name: 'yakitori',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F1013201-yakitori-grilled-chicken-skewers&psig=AOvVaw0W36jbbOHdEiHMRf5lu0gQ&ust=1672313711324000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCSy5uanPwCFQAAAAAdAAAAABAD',
  },
  {
    name: 'fiorentina',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmonicucci.altervista.org%2Frecipe-items%2Fbistecca-alla-fiorentina-doc%2F&psig=AOvVaw0uEcMfYxQd4Mxa5LPuCqsa&ust=1672313824593000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDtkceanPwCFQAAAAAdAAAAABAN',
  },
  {
    name: '곱창구이',
    image: 'https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202005/d4bc58f6-c585-4a83-a09a-7a6e0e2dbe0e.jpg',
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
    </div>)
}

export default App;
