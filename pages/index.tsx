import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Form() {
  const [qtdPortas, setQtdPortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Jogo da Gigi</h1>
        </Card>
        <Card>
          <EntradaNumerica
            text="Quantidade de portas?"
            value={qtdPortas}
            onChange={(novaqtd) => setQtdPortas(novaqtd)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <EntradaNumerica
            text="Porta com presente?"
            value={comPresente}
            onChange={(presente) => setComPresente(presente)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link} style={{ flex: "1", margin: "0" }}>
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
