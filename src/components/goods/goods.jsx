import React from 'react';
import Slider from '../slider/slider';
import GoodsDescription from '../goods-description/goods-description';

const Goods = () => {
  return (
    <section className="goods">
      <h1 className="visually-hidden">Сайт Авто Мото</h1>
      <h2 className="visually-hidden">Секция с изображением и описанием автомобиля</h2>
      <div className="goods__wrapper">
        <Slider />
        <GoodsDescription />
      </div >
    </section >
  )
};

export default Goods;