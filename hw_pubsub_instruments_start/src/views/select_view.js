const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    console.log(allInstruments);
    this.populate(allInstruments);
  });

};

SelectView.prototype.populate = function (instrumentInfo) {
  instrumentInfo.forEach((instrument, index) => {
    const option = document.createElement('option');
    // console.log(option);
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
