// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// import data from '../../assets/data.json';

import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo'; 

//случайный цвет
// const getRandomColor = ()=> {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .toUpperCase()}`;
// }


export const Statistics = ({ title, stats }) => {
    return (

        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            
            < StatisticsInfo stats={stats}/>

            {/* <ul className={css.statList}>
                <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
                    <span className={css.label}>.docx</span>
                    <span className={css.percentage}>{data.percentage}</span>
                </li>
                <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
                    <span className={css.label}>.mp3</span>
                    <span className={css.percentage}>14%</span>
                </li>
                <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
                    <span className={css.label}>.pdf</span>
                    <span className={css.percentage}>41%</span>
                </li>
                <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
                    <span className={css.label}>.mp4</span>
                    <span className={css.percentage}>12%</span>
                </li>
            </ul> */}

        </section>
    );
};