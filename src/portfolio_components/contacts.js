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
          '>'
          :
          '<'
        }
      </button>
      <div className={`contacts ${!isContactsOpen && 'closed'}`}>
        <a className="contact_link" href="https://www.linkedin.com/in/bilalozlu/">
          <img src="linkedin.png" alt="linkedin" width="40px" />
        </a>
        <a className="contact_link" href="https://github.com/bilalozlu/">
          <img src="github.png" alt="github" width="40px" />
        </a>
        <a className="contact_link" href="https://www.hackerrank.com/bilalozlu/">
          <img src="hackerrank.png" alt="hackerrank" width="40px" />
        </a>
      </div>
    </div >
  );
}

export default Contacts;
