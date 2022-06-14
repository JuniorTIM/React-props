import styles from "./panel.module.css"

const Panel = () => {
    return (
        <div className={styles.sP}>
         <h1 className={styles.name}>Intocode Coding Shopcamp</h1>  
         <div className={styles.gadjets}>Гаджеты и аксессуары</div> 
         <hr className={styles.line1} />
         <div className={styles.tech}>Бытовая техника</div> 
         <hr className={styles.line2} />
         <div className={styles.other}>Прочее</div> 
        </div>
    );
};

export default Panel;