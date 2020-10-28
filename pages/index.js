import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Keith Website</title>
      </Head>
      <Layout>
        <main>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum
              maiores saepe a sed est qui odit. Eaque, nulla. Necessitatibus
              assumenda hic culpa nulla excepturi quod nisi rerum voluptatum
              laboriosam.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
