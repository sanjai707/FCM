import React from 'react';
import mail from'../images/communication.png';
function Footer() {
  return (
    <section className='footer-container'>
    <article className='mail-sec'>
    <img className='mail' src={mail} alt='mail'/> 
      <h1>
      : Srisanjainallathambi@gmail.com
      </h1>
    </article>
    <h3>        © 2024 Copyright:    @wondercoder</h3>
    </section>
  );
}
export default Footer;
