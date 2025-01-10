import Image from "next/image";
import styles from "./Item.module.css";

export default function Item({props}) {
    return(
        <div className={styles.container}>
            <Image src={props.image} className={styles.img}/>
            <span>{props.text}</span>
        </div>
    );
}