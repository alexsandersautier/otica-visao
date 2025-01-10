import styles from './SecaoCapa.module.css';

export default function SecaoCapa() {
    return(
        <section className={styles.container}>
            <div className={styles.container_card}>
                <div className={styles.card}>
                    <p>Preços baixo em</p>
                    <h1>ÓCULOS DE GRAU E DE SOL</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    );
}