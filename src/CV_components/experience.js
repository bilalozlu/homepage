import './cv_section.css';
import React, { useState } from 'react';

function Experience() {
  const [hiddenStyle, setHiddenStyle] = useState({ display: 'none', color: 'white' });

  return (
    <div className="cv_section">
      <div>
        <p className='title' onMouseEnter={e => {
          setHiddenStyle({ display: 'block', color: 'white' });
        }}
          onMouseLeave={e => {
            setHiddenStyle({ display: 'none', color: 'white' })
          }}>
          HAVELSAN
        </p>
        <p style={hiddenStyle}>
          02.2022 – ongoing
        </p>
        <p className='text'>
          Maintaining large Java project (debugging and analysis)
        </p>
        <p className='text'>
          Developing front-end application with ReactJS
        </p>
        <p className='title'>
          StartupHeroes
        </p>
        <p className='text'>
          Developing front-end application with VueJS & ReactJS
        </p>
        <p className='title'>
          OBSS
        </p>
        <p className='text'>
          Developing front-end application with ReactJS & Redux & Hooks
        </p>
        <p className='title'>
          Turna Teknoloji
        </p>
        <p className='text'>
          Developing mobile application with React Native & Redux
        </p>
        <p className='title'>
          FAME CRYPT
        </p>
        <p className='text'>
          Implementing cryptographic algorithms with C++
        </p>
        <p className='text'>
          Company website with HTML/CSS
        </p>
        <p className='title'>
          Korona Software Solutions
        </p>
        <p className='text'>
          Developing mobile application with React Native
        </p>
        <p className='title'>
          Piksel Bilişim
        </p>
        <p className='text'>
          Developing web application (PHP, Apache, MySQL, HTML/CSS)
        </p>
      </div>
      <div className='photo'>
        <img alt='experience' src="experience.jpg" />
      </div>
    </div>
  );
}

export default Experience;
