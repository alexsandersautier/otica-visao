import CardContato from '../cardcontato';
import styles from './SecaoContato.module.css';

import Email from '../../../public/email.png';
import Local from '../../../public/local.png';
import Phone from '../../../public/telefone.png';

import Face from '../../../public/fb.png';
import Insta from '../../../public/ig.png';
import X from '../../../public/tt.png';

export default function SecaoContato() {
    return(
        <section className={styles.container} id="contact">
            <h3 className={styles.title}>Fale conosco</h3>
            <p className={styles.paragraph}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className={styles.container_card}>
                <CardContato props={{images: [Local, Phone, Email], title: "Nossos contatos", texts: ["Nova Iguaçu, RJ","(21) 9999-9999","contato@oticavida.com"]}}/>
                <CardContato props={{images: [Face, Insta, X], title: "Nossos redes sociais", texts: ["/OticaVida","@oticavidarj","@oticavidarj"]}}/>
            </div>
        </section>
    );
}