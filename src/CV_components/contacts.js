import './contacts.css';
import React, { useState } from 'react';

function Contacts() {
  const [isContactsOpen, setIsContactsOpen] = useState(true);

  function toggleContacts() {
    setIsContactsOpen(!isContactsOpen)
  };

  return (
    <div className='contactsArea'>
      <button className='arrow' onClick={() => toggleContacts()}>
        {isContactsOpen ?
          '<'
          :
          '>'
        }
      </button>
      <div className={`contacts ${!isContactsOpen && 'closed'}`}>
      <p>
        Ln
      </p>
      <p>
        Gb
      </p>
      <p>
        Hk
      </p>
    </div>
      </div >
    );
}

export default Contacts;
