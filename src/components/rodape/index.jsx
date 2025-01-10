import styles from './Rodape.module.css';

export default function Rodape() {
    const currentYear = new Date().getFullYear();
    return(
        <footer className={styles.container}>
            <p className={styles.paragraph}>© {currentYear} Óticas Vida. - Todos os direitos reservados.</p>
            <a className={styles.link} href="https://www.linkedin.com/in/alexsander-sautier-526678106/" target='_blank'>Dev Sautier Alexsander</a>
        </footer>
    );
}