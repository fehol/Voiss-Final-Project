/** @jsx jsx */
/** @jsxRuntime classic */
import {jsx} from '@emotion/core';
import Header from './header';
import Footer from './footer';


export default function Layout(props) {
  return (
    <div>
    <Header />
        <div>
        {props.children}
        </div>
    
    <Footer />
    </div>
  );
}



  /* <img src="/Version1BG.svg" alt="BG"/> */