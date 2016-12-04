import React from 'react';
import './place-style.css'
import LocationPin from './location-pin.png'
import '../place/place-style.css'

export default (props) =>
    <div className="mapPointer">{props.text}
        <img src={LocationPin}
             alt="Gabinet Weterynaryjny"
             className="location-pin"/>
    </div>