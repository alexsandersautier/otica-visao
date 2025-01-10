import Item from '../item';
import styles from './CardContato.module.css';

export default function CardContato({props}){
    return(
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <Item props={{image: props.images[0], text: props.texts[0]}}/>
            <Item props={{image: props.images[1], text: props.texts[1]}}/>
            <Item props={{image: props.images[2], text: props.texts[2]}}/>
        </div>
    );
}