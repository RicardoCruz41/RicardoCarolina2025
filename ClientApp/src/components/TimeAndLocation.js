import React, { Component } from 'react';
import './style/TimeAndLocation.css';
import VandelliGardenImage2 from '../images/Vandelli garden 2.jpg';
import { FormattedMessage } from 'react-intl';

export class TimeAndLocation extends Component {
    render() {
        return (
            <div className="timeLocation-content">
                <h1 className="timeLocation-title" >
                    <FormattedMessage id="timeAndLocation" defaultMessage="Time And Location" />
                </h1>
                <img className="timeLocation-image" src={VandelliGardenImage2} />
                <h4 className="timeLocation-details" >
                    <FormattedMessage id="timeAndLocation-details" defaultMessage="Friday, 12th of September 2025, 17H" />
                </h4>
                <h4 className="timeLocation-details" > Vandelli Botanical Garden</h4>
                <a className="timeLocation-address" href="https://www.google.com/maps/place/Vandelli+Botanical+Garden/@38.7067187,-9.2017967,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecb4279c1a8cd:0x800851f444044593!8m2!3d38.7067187!4d-9.2017967!16s%2Fg%2F11s9dk7_r6?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    Cal&#231;ada do Galv&atilde;o E, 1400-171 Lisboa</a>
            </div >
        );
    }
}