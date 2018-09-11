const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (e) => {
    const instrumentFamily = e.detail;
    console.log(instrumentFamily);
    this.displayResult(instrumentFamily);  })
};

InstrumentInfoView.prototype.displayResult = function (instrumentFamily) {
  const display = document.querySelector('#instrument-info');
  display.innerHTML = this.insertAdjacentHTML(instrumentFamily);
};

InstrumentInfoView.prototype.insertAdjacentHTML = function (instrumentFamily) {
  return`
  <div class= "result-box">
    <ul>
      <li>Name: ${instrumentFamily.name}</li>
      <li>Description: ${instrumentFamily.description}</li>
      <li>Instruments: ${instrumentFamily.instruments}</li>
    </ul>
  </div>`
};

module.exports = InstrumentInfoView;
