import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/topo";
import SecaoCapa from "@/components/secaocapa";
import SecaoProduto from "@/components/secaoproduto";
import SecaoSobre from "@/components/secaosobre";
import SecaoContato from "@/components/secaocontato";
import Rodape from "@/components/rodape";
import Arrow from "@/components/arrow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas vida</title>
        <meta name="description" content="page created by dev alexsander sautier about react course" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Topo/>
        <SecaoCapa/>
        <SecaoProduto/>
        <SecaoSobre/>
        <SecaoContato/>
        <Rodape/>
        <Arrow/>
      </main>
    </>
  );
}
