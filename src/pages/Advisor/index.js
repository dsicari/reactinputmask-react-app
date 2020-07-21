import React from 'react';
import './style.css';

export default function Advisor({ history }){

  return (
    <>
      <h1>Go to home page</h1>
      <button onClick={() => {history.push('/home')}}>GO</button>
    </>
  );
}