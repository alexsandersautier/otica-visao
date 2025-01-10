import Quadro from '../quadro';
import styles from './SecaoSobre.module.css';

export default function SecaoSobre() {
    return(
        <section className={styles.container} id='about'>
            <div className={styles.head}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades 
                   focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar 
                   ao cliente bom atendimento, qualidade e preço baixo. </p>
            </div>
            <Quadro />
        </section>
    );
}