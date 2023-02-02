import stylesStat from './StatisticsInfo.module.css';

// случайный цвет
const getRandomColor = ()=> {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
}
//stats безымянный массив безымянных объектов из data.json
export const StatisticsInfo = ({ stats }) => {
    // console.log({ stats });
    return (
        <ul className={stylesStat.statList}>
            {/* здесь берём один безымянный объект и деструктуризируем. Получаем из
            него id, label, percentage */}
            {stats.map(({ id, label, percentage }) =>
            {
            console.log({ id, label, percentage });
                return (
                
                    <li key={id}
                        className={stylesStat.item}
                        style={{ backgroundColor: getRandomColor(), }}
                    >

                        <span className={stylesStat.label}>{label}</span>
                        <span className={stylesStat.percentage}>{percentage}%</span>

                    </li>
                )
            }   
            )}


        </ul>
    );
    
}
      
