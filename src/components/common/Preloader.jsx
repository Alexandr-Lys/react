import React from 'react';
import preloader from "../../assets/img/Rolling-1s-200px.svg";

let Preloader = (props) => {
    return <div style={{backgroundColor: 'black'}}>
        <img src={preloader}/>
    </div>
};
export default Preloader;