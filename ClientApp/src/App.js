import React from 'react';
import AttendanceForm from './components/AttendanceForm';
import { WeddingCountdown } from './components/WeddingCountdown';
import { TimeAndLocation } from './components/TimeAndLocation';
import { GiftDetails } from './components/GiftDetails';
import VandelliGardenImage from './images/Vandelli garden.jpg';
import './custom.css';

const App = ({ switchLanguage, locale }) => {

    return (
        <div style={{ background:"#fcf8eb" }}>
        <div className="home-div">
                <img className="home-image" alt="wedding venue" src={VandelliGardenImage} />
              <div className="language-dropdown">
                  <select
                        className="language-select"
                        onChange={(e) => switchLanguage(e.target.value)}
                  >
                      <option value="en">EN</option>
                      <option value="pt">PT</option>
                  </select>
              </div>
                <h1 className="brideGroom-names"> Ricardo & Carolina</h1>
                <br />
                <div className="countdown-div" >
                    <WeddingCountdown></WeddingCountdown>
                </div>
            </div>
            <br />
            <TimeAndLocation />
            <br />
            <AttendanceForm apiEndpoint="https://ricardocarolina2025-efdpfjcwf2g3aqe4.westeurope-01.azurewebsites.net/Attendance/SendAttendanceConfirmation" currentLanguage={locale} />
            <br />
          <GiftDetails/>
    </div>
  );
};

export default App;
