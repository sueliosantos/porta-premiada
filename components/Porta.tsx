import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presentes'

interface PortaProps{
  value: PortaModel
  onChance: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){
  const porta   = props.value
  const selecioada= porta.selecionada && !porta.aberta ? styles.selecionada : ''
  
   const alternarSelecao = e => props.onChance(porta.alternarSelecao())
  
  
  const abrir = e => {
    e.stopPropagation()
    props.onChance(porta.abrir())
  }

  function  renderizarPorta() {
    return (
      <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div 
            className={styles.macaneta}
            onClick={abrir}
            ></div>
        </div>
    )
    
  }
  
  const selecionada = porta.selecionada ? styles.selecionada : ''
  return(
      <div className={styles.area} onClick={alternarSelecao}>
          <div className={`${styles.estrutura} ${selecioada}`}>
              {porta.fechada ? renderizarPorta() : porta.temPresente ? 
                <Presente/> : false
              } 
          </div>
        <div className={styles.chao}></div>
      </div> 
  )
}