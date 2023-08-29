import { useState } from 'react';
import styles from './modulos/app.module.css';

function App() {
  const [bandasList, setBandasList] = useState([])
  const [bandasNome, setBandasName] = useState('')
  const [bandasEstilo, setBandasEstilo] = useState('')

  return (
    <>
      <main className={styles.main}>
        <form className={styles.formConteiner} onSubmit={() => { }}>
          <h2>Adicione sua Banda favorita</h2>
            <input type='text' 
                   name='nomeDaBanda' 
                   id='nomeDaBanda' 
                   placeholder='Nome da sua Banda' 
                   onChange={(event) => setBandasName(event.target.value)}
                   value={bandasNome}/>

            <input type='text' 
                   name='bandasEstilo' 
                   id='bandasEstilo' 
                   placeholder='Aqui é o estilo da banda' 
                   onChange={(event) => setBandasEstilo(event.target.value)}
                   value={bandasEstilo}/>   

            <button type='submit' 
                   disabled={bandasNome == '' && bandasEstilo == ''} >Adicionar</button>              
        </form>
        <section className={styles.listSection}>
          <h3>Minhas Bandas Favoritas</h3>
          <div className={styles.listConteiner}>
          
          </div>
        </section>
      </main>
    </>
  )
}

export default App
