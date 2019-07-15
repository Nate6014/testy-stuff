import React from 'react';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';
 var pic = ''


const handleTelegramResponse = response => {
  console.log(response);
 alert("thanks for the soul " + response.first_name)

 
}
const logIn = <div><TelegramLoginButton dataOnauth={handleTelegramResponse}  botName="Tucson_furs_bot" /> </div>

console.log(pic);
  
ReactDOM.render( logIn, document.getElementById('telegramButton'),

);


