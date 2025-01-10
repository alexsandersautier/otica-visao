import Image from 'next/image';
import styles from './Topo.module.css';
import Link from 'next/link';
import Logo from '../../../public/logo.png';

export default function Topo() {
    return(
        <header className={styles.container}>
            <Image className={styles.logo} src={Logo}/>
            <div className={styles.links}>
                <Link className={styles.link} href="#itens">Produtos</Link>
                <Link className={styles.link} href="#about">Sobre</Link>
                <Link className={styles.link} href="#contact">Contato</Link>
            </div>
        </header>
    );
}