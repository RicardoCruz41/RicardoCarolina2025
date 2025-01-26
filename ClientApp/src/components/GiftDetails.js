import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './style/GiftDetails.css';
import JapanHoneymoon from '../images/japan-honeymoon.jpg';

export class GiftDetails extends Component {
    render() {
        return (
            <div className="gift-details-container">
                <div className="image-container">
                    <img className="japan-honeymoon-img" src={JapanHoneymoon} alt="Japan Honeymoon" />
                    <div className="gift-message">
                        <h1>
                            <FormattedMessage id="gift-title" defaultMessage="Want to give us a gift?" />
                        </h1>
                        <p>
                            <FormattedMessage id="gift-message" defaultMessage="The best gift you could give us is your attendance!" />
                        </p>
                        <p>
                            <FormattedMessage id="gift-message2" defaultMessage="Besides that, if you want to help us out with our new house decor or our honeymoon to Japan feel free to send us a token of your appreciation through the methods available below:" />
                        </p>
                        <p><strong>MBWAY:</strong> 918960273 / 925355133</p>
                        <p><strong>IBAN:</strong> PT50 0010 0000 6354 2650 0011 2</p>
                    </div>
                </div>
            </div>
        );
    }
}