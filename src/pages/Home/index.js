import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

import './style.css';
 
export default function Home(){
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberIsOk, setPhoneNumberIsOk] = useState(false);

  // Mask should be: (xx) 9xxxx-xxxx
  // Using regex \D for all non digits

  function getDDD(phone){
    if(phone.length >= 3){
      return 'DDD: ' + phone.substring(0,2);
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
        onChange={(event) => {setPhoneNumber(event.target.value.replace(/\D/g,''))}} />

      <p className="cellphone-number">I guess, it is:<br />{getDDD(phoneNumber)}<br />{getNumber(phoneNumber)}</p>
    </>
  );
}