import React from 'react';
import FooterCom from '../footer/footer'
import SignIn from '../container/button';
import NeuroRed from './mainN/neuroR';
import "./style.css"


export default function RedN(){
  return (
    <div className='bodyCom'>
      <div className="container">
        <p>Fraud Detection</p>
        <SignIn props={"Sing Out"}/>
      </div>
      <NeuroRed/>
      <FooterCom/>
    </div>
  );
}
