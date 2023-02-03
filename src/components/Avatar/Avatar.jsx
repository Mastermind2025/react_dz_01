// import images from '../../assets/images.json';
import ava from '../../assets/user.json';
import styles from './Avatar.module.css';

// export const Avatar = (src, alt) => {
//     return <img width="250px" src={src} alt={alt} />;
   
// };

export const Avatar = ({ src, alt = 'test' }) => {

// В index.js есть src и путь, если его нет, то первая картинка из массива json
    return <img width="250px" src={ src || ava.avatar } alt={alt} />;
};

export const ThisMan = () => {
    return <p className={styles.text}>{ava.username}</p>
}
