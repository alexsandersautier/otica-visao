import Image from "next/image";
import styles from "./Arrow.module.css";

import ArrowPng from "../../../public/up-arrow.png";
import Link from "next/link";

export default function Arrow(){
    return(
        <div className={styles.container}>
            <Link href="/"><Image src={ArrowPng} className={styles.img}/></Link>
        </div>
    );
}