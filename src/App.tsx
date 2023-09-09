import React from 'react';
import './css/App.css';

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">25 + 5 Clock</h1>
        <div className="app__main main">
          <div className="main__length-controllers">
            <div className="main__length-controller length-controller">
              <h3 className="length-controller__title" id="break-length">
                Break Length
              </h3>
              <div className="length-controller__block-control" id="break-decrement">
                <div className="length-controller__btn">
                  <img src="/img/arrow-down.svg" alt="arrow down"/>
                </div>
                <div className="length-controller__number" id="break-length">
                  5
                </div>
                <div className="length-controller__btn" id="break-increment">
                  <img src="/img/arrow-up.svg" alt="arrow up"/>
                </div>
              </div>
            </div>
            <div className="main__length-controller length-controller">
              <h3 className="length-controller__title" id="session-label">
                Session Length
              </h3>
              <div className="length-controller__block-control">
                <div className="length-controller__btn" id="session-decrement">
                  <img src="/img/arrow-down.svg" alt="arrow down"/>
                </div>
                <div className="length-controller__number" id="session-length">
                  25
                </div>
                <div className="length-controller__btn" id="session-increment">
                  <img src="/img/arrow-up.svg" alt="arrow up"/>
                </div>
              </div>
            </div>
          </div>
          <div className="main__timer timer">
            <h3 className="timer__label" id="timer-label">Session</h3>
            <div className="timer__left" id="time-left">25:00</div>
          </div>
          <div className="main__timer-controller timer-controller">
            <div className="timer-controller__start-stop">
              <img src="/img/start.svg" alt="star stop timer" id="start_stop"/>
            </div>
            <div className="timer-controller__reset">
              <img src="/img/reset.svg" alt="reset timer" id="reset"/>
            </div>
          </div>
          <div className="author">
            Designed and Coded by<br/>
            <a href="https://github.com/siloksan">Kurtin Evgeniy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
