/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefalut();
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_xl4b5md', 'template_ofunlgs', '#contact-form', '7Vp6iR1YQ4PsyhYu9').then(() => {
    // show sent message
    contactMessage.textContent = 'Message sent successfully ✅';

    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = '';
    }, 5000);
  });
};
contactForm.addEventListener('submit', sendEmail);
