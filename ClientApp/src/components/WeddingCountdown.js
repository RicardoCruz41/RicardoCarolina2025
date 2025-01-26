import React, { Component } from 'react';
import Countdown from 'react-countdown';
import { FormattedMessage } from 'react-intl';
import './style/WeddingCountdown.css';

export class WeddingCountdown extends Component {
    static displayName = WeddingCountdown.name;

    // Static properties
    static Completionist = () => <span>Thank you for joining us!</span>;
    static weddingDate = new Date('2025-09-12T17:00:00');

    render() {
        const { Completionist, weddingDate } = WeddingCountdown;

        // Renderer function for custom countdown display
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render when the countdown is complete
                return <span className="countdown-complete">Time's up!</span>;
            } else {
                // Render the countdown
                return (
                    <div className="countdown">
                        <div className="time">
                            <span className="number">{days}</span>
                            <span className="label">
                                <FormattedMessage id="countdownDays" defaultMessage="Days" />
                            </span>
                        </div>
                        <div className="time">
                            <span className="number">{hours}</span>
                            <span className="label">
                                <FormattedMessage id="countdownHours" defaultMessage="Hours" />
                            </span>
                        </div>
                        <div className="time">
                            <span className="number">{minutes}</span>
                            <span className="label">
                                <FormattedMessage id="countdownMinutes" defaultMessage="Minutes" />
                            </span>
                        </div>
                        <div className="time">
                            <span className="number">{seconds}</span>
                            <span className="label">
                                <FormattedMessage id="countdownSeconds" defaultMessage="Seconds" />
                            </span>
                        </div>
                    </div>
                );
            }
        };

        return (
            <Countdown date={weddingDate} renderer={renderer}>
                <Completionist />
            </Countdown>
        );
    }
}