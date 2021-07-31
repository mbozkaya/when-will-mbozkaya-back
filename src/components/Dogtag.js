import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

const DogTag = () => {
    const { me } = useContext(MainContext);
    return (
        <div id="dogtag-body">
            <div id="dogtag">
                <div id="dogtag-hole"></div>
                <div id="information">
                    <p id="name">{`${me.firstname} ${me.lastname}`}</p>
                    <p id="service-number">{me.identityNumber}</p>
                    <p id="blood-group-and-type">{me.bloodGroup}</p>
                    <p id="religious-preference">{me.religion}</p>
                </div>
            </div>
        </div>
    )
};

export default DogTag;