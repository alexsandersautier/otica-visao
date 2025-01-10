import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({props}) {
    return(
        <div className={styles.div}>
            <h4>{props.title}</h4>
            <Image src={props.image} className={styles.img}/>
            <p>{props.text}</p>
        </div>
    );
}