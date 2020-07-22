import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

import './style.css';
 
export default function Home(){
  
  const validDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    21, 22, 24, 27, 28, 
    31, 32, 33, 34, 35, 37, 38, 
    41, 42, 43, 44, 45, 46, 47, 48, 49, 
    51, 53, 54, 55, 
    61, 62, 63,	64, 65, 66, 67, 68, 69, 
    71, 73, 74, 75, 77, 79, 
    81, 82, 83, 84, 85, 86, 87, 88, 89,
    91, 92, 93, 94, 95, 96, 97, 98, 99
  ]

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberIsOk, setPhoneNumberIsOk] = useState(false);

  // Mask should be: (xx) 9xxxx-xxxx
  // Using regex \D for all non digits

  function getDDD(phone){
    if(phone.length >= 3){
      const DDD = phone.substring(0,2);
      let message = "válido";

      if(!validDDD.includes(parseInt(DDD))){
        message = "inválido";
      }
      return 'DDD: ' + DDD + ' ' + message;
    }
  }

  function getNumber(phone){;
    if(phone.length >= 11){
      return 'Number: ' + phone.substring(2,phone.length);
    }
  }  

  useEffect(() => {
    setPhoneNumberIsOk(phoneNumber.length >= 11);
  }, [phoneNumber]);

  return (
    <>
      <h1>What's your phone?</h1>
      
      <InputMask 
        className={"cellphone-input" + (phoneNumberIsOk ? " accept-number":" non-accept-number")}
        autoFocus={true}
        alwaysShowMask={true}
        mask="(99) \99999-9999" 
        maskChar="x" 
        inputMode="decimal" 
        pattern="[0-9]*"
        onChange={(event) => {setPhoneNumber(event.target.value.replace(/\D/g,''));}} 
        onPaste={(event) => {
          let pasted = event.clipboardData.getData('Text');
          let pastedOnlyDigits = event.clipboardData.getData('Text').replace(/\D/g,'');
          console.log('pasted: ' + pasted);
          console.log('pasted, only digits: ' + pastedOnlyDigits);
          if(pastedOnlyDigits.length > 11){
            alert('You pasted a phone longer than 11 numbers, it contains ' + pastedOnlyDigits.length.toString() + ' numbers');
          }
          else if(pastedOnlyDigits.length < 11){
            alert('You pasted a phone fewer than 11 numbers, it contains ' + pastedOnlyDigits.length.toString() + ' numbers');
          }

        }} />

      <p className="cellphone-number">I guess, it is:<br />{getDDD(phoneNumber)}<br />{getNumber(phoneNumber)}</p>
    </>
  );
}