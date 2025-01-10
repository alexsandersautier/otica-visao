import styles from './SecaoProduto.module.css';
import Card from '../card';

import OculosGrau from '../../../public/oculos01.png'
import OculosTransicao from '../../../public/oculos02.png'
import OculosSol from '../../../public/oculos03.png'
import OculosInfantil from '../../../public/oculos04.png'

export default function SecaoProduto() {
    return(
        <section className={styles.container} id='itens'>
            <h3>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className={styles.board}>
                <div className={styles.container_itens}>
                    <Card props={{title: "Óculos de grau", image: OculosGrau, text: "R$ 500,00"}}/>
                    <Card props={{title: "Óculos transition", image: OculosTransicao, text: "R$ 750,00"}}/>
                </div>
                <div className={styles.container_itens}>
                    <Card props={{title: "Óculos de sol", image: OculosSol, text: "R$ 700,00"}}/>
                    <Card props={{title: "Óculos infantil", image: OculosInfantil, text: "R$ 500,00"}}/>
                </div>
            </div>
            <h3>Todos os nossos produtos incluem:</h3>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    );
}