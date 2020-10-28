import styles from '../styles/home.module.css';
import Head from 'next/head';
import Layout from '../components/layout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Keith Website</title>
      </Head>
           <Layout>
        <main className={styles.Main}>
          
         <div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum maiores saepe a sed est qui odit. Eaque, nulla. Necessitatibus assumenda hic culpa nulla excepturi quod nisi rerum voluptatum laboriosam.</p>
         </div>
         <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum optio sint odio impedit tempora, asperiores dolorem dolore veniam porro laborum necessitatibus voluptatem pariatur quia quae autem aliquid debitis? Hic, harum?</p></div>
          <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum optio sint odio impedit tempora, asperiores dolorem dolore veniam porro laborum necessitatibus voluptatem pariatur quia quae autem aliquid debitis? Hic, harum?</p></div>
           <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum optio sint odio impedit tempora, asperiores dolorem dolore veniam porro laborum necessitatibus voluptatem pariatur quia quae autem aliquid debitis? Hic, harum?</p></div>
      
        </main>
       
      </Layout>
  </>
  )
}