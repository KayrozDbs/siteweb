import React from 'react';
import '../../css/Home/body.css';
import logo from '../../assets/logo.png';
import html5 from '../../assets/html5.png';
import css3 from '../../assets/css3.png';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';
import katrea from '../../assets/Logo_KATREA.png';

function Body() {
    return (
    <body className='bodycard'>
    <div className='bodyfond'>
<div className='profil_card'>
    <h3> Mon Profil</h3>
    <div className='head_profil'>
        <img src={logo} className="logo" alt="Logo" />
        <a href="https://github.com/Hesedi3l" target="_blank" className="btn black" rel="noreferrer">Discord</a>
        <a href="https://github.com/Hesedi3l" target="_blank" className="btn blue" rel="noreferrer">Twitter</a>

        <div className='bottom_profil'>
        <div className='html_profil'>
        <img src={html5} alt="Logo html5" />
        <h4> HTML5 </h4>
        </div>
        <div className='html_profil'>
        <img src={css3} alt="Logo html5" />
        <h4> CSS3 </h4>
        </div>
        <div className='html_profil'>
        <img src={react} alt="Logo html5" />
        <h4> REACT </h4>
        </div>
        <div className='html_profil'>
        <img src={nodejs} alt="Logo html5" />
        <h4> Node.js </h4>
        </div>

    </div>
    </div>
    
</div>

<div className='expe_card'>
<h3> Mon éxpérience</h3>
<div className='body_xp'>
<div className='project1'>
<img src={katrea} className="logo" alt="Logo" />
<p className='p1'> - Développement d'un bot discord </p>
<p className='p2'> - Développement d'un bot musique</p>
</div>
</div>

</div>


    </div>

    
        
    </body>
    )
}

export default Body;