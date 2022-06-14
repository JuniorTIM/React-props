import React from 'react';
import styles from '../Body/body.module.css'

const Products = (props) => {
    return (
        <div>
        <img className={styles.img} src={props.src} alt={props.title} />
          <div className={styles.cardText}>
            <p className={styles.price}>{props.price}₽</p>
            <p className={styles.title}>{props.title}</p>
            <button className={styles.buy}>Купить</button>
          </div>
        </div>
    );
};

export default Products;