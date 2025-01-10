import Image from "next/image";
import styles from "./Quadro.module.css";

import DrogStore from "../../../public/loja.png";
import CustomerService from "../../../public/atendimento.png";

export default function Quadro(){
    return(
        <div className={styles.container}>
            <div className={styles.container_filias}>
                <Image src={DrogStore} className={styles.img}/>
                <div className={styles.filiais}>
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
            </div>
            <div className={styles.container_filias}>
                <div className={styles.filiais}>
                    <h4>Atendimento flexível</h4>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <Image src={CustomerService} className={styles.img}/>
            </div>
        </div>
    );
}