import React from 'react';
import Products from '../Products/Products';
import styles from './body.module.css'


const Body = () => {
    return (
        <div className={styles.container}>
          <Products
               src='http://intocode.ru/d/react-project-1/images/1.jpg'
               price={97000}
               title='Macbook'
            />
          <Products
               src='http://intocode.ru/d/react-project-1/images/2.jpg'
               price={35999}
               title='Galaxy'
            />
          <Products
               src='http://intocode.ru/d/react-project-1/images/3.jpg'
               price={58950}
               title='Скутер'
            />
          <Products
               src='http://intocode.ru/d/react-project-1/images/4.jpg'
               price={12000}
               title='Монитор Sansung'
            />
          <Products
               src='http://intocode.ru/d/react-project-1/images/5.jpg'
               price={500}
               title='Распираторная маска'
            />
          <Products
               src='http://intocode.ru/d/react-project-1/images/6.jpg'
               price={75000}
               title='Стиральная машина'
            />
        </div>       
    );
};

export default Body;