import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exercicio 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.imageContainer}>
          <div className={styles.picture}>
            <img src={props.catImage[0].url} alt="" className={styles.image}></img>
          </div>
        </div>
        <div>
          <ul>
              {props.catFacts.map((test) => (
                  <li key={test._id}>{test.text}</li>
              ))}
          </ul>
        </div>
      </main>

    </div>
  )
}

export async function getServerSideProps() {
  const catFactData = await fetch('https://cat-fact.herokuapp.com/facts/random?amount=5')
  const catImageData = await fetch('https://api.thecatapi.com/v1/images/search')
  const catFacts = await catFactData.json()
  const catImage = await catImageData.json()

  return {
      props: { catFacts, catImage }
  }
}
