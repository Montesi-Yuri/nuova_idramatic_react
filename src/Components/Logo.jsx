import React from 'react';
import logo from '../images/logo_full_bg_transp.png';

export default function Logo({classes}) {
    return (
        <div>
            <img src={logo} className={classes} alt="Logo del sito" />
        </div>
    );
};
