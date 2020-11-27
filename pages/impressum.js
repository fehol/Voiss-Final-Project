import { css } from '@emotion/core';

import Layout from '../components/Layout';

const impressumStyle = css`
  height: 100vh;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const listStyle = css`
  li {
    list-style: none;
  }
`;

const section1 = css`
  h1 {
    text-align: center;
    padding-top: 2rem;
    margin-bottom: 5rem;
  }
`;
const section2 = css`
  text-align: justify;
  margin-top: 2rem;
`;
const section3 = css`
  margin-top: 2rem;
  p {
    text-align: justify;
  }
`;

export default function Impressum() {
  return (
    <Layout>
      <title>Impressum</title>
      <div css={impressumStyle}>
        <section css={section1}>
          <h1>Impressum</h1>
          <h2>Keith D. Voss</h2>
          <ul css={listStyle}>
            <li>8005 Graz</li>
            <li>Email: keithdvoss@gmail.com</li>
          </ul>
        </section>
        <section css={section2}></section>
        <section css={section3}>
          <h2>Rechtlicher Hinweis</h2>
          <p>
            Alle Rechte, insbesondere das Recht der Vervielfältigung,
            Verbreitung und Übersetzung, vorbehalten. Kein Teil der Website darf
            in irgendeiner Form (durch Druck, Fotokopie, Mikrofilm oder ein
            anderes Verfahren) ohne schriftliche Genehmigung des Betreibers der
            Website reproduziert, gespeichert, verarbeitet, vervielfältigt oder
            verbreitet werden.{' '}
          </p>
        </section>
      </div>
    </Layout>
  );
}
