import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './style.css'; 

const WhatsAppButton = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=5571992917798&text='
      target='_blank'
      rel='noopener noreferrer'
      className='floating-button'
    >
      <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
    </a>
  );
};

export default WhatsAppButton;
