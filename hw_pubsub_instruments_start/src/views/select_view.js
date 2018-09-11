const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (e) => {
    const allInstruments = e.detail;
    // console.log(allInstruments);
    this.populate(allInstruments);
  });

  this.element.addEventListener('change', (e) => {
    const selectedIndex = e.target.value;
    // console.log(selectedIndex);
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function (instrumentData) {
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    // console.log(option);
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
