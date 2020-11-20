import { css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../components/Layout';

const impressumStyle = css`
  height: 80vh;
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
    margin-top: 2rem;
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
            <li>Ruckerlberggasse</li>
            <li>8005 Graz</li>
            <li>Tel: 01234/5678</li>
            <li>Email: get@tothechopper.com</li>
          </ul>
        </section>
        <section css={section2}>
          <p>
            Alle Rechte, insbesondere das Recht der Vervielfältigung,
            Verbreitung und Übersetzung, vorbehalten. Kein Teil der Website darf
            in irgendeiner Form (durch Druck, Fotokopie, Mikrofilm oder ein
            anderes Verfahren) ohne schriftliche Genehmigung des Betreibers der
            Website reproduziert, gespeichert, verarbeitet, vervielfältigt oder
            verbreitet werden.{' '}
          </p>
        </section>
        <section css={section3}>
          <h2>Rechtlicher Hinweis</h2>
          <p>
            Die Website www.stuller.at und die auf ihr enthaltenen Daten und
            Informationen werden laufend mit größtmöglicher Sorgfalt geprüft und
            aktualisiert. Soweit gesetzlich zulässig wird daher die Haftung und
            Gewährleistung für die Richtigkeit und Vollständigkeit der
            veröffentlichten Daten und Informationen ausgeschlossen, d.h. der
            Betreiber haftet nicht für Schäden, die in direktem oder indirektem
            Zusammenhang mit der Nutzung dieser Website entstehen. Trotz
            sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für
            Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </Layout>
  );
}
