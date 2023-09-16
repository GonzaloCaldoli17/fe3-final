import React from 'react';
import styles from './css/LandingPage.module.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className={styles.background}>
            <div>
                <h1 className={styles.type}>La sonrisa perfecta está a solo un click de distancia<span className={styles.dot}>.</span></h1>
            </div>
            <Link to='/home'>
                <button className={styles.button}>Ir al inicio</button>
            </Link>
        </div>
    );
};

export default LandingPage;