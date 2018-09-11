const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', function() {
  const selectElement= document.querySelector('select#instrument-families');
  console.log(selectElement);
  const instrumentDropdown = new SelectView(selectElement);
  console.log(instrumentDropdown);
  instrumentDropdown.bindEvents();

  const instrumentFamilies = new InstrumentFamilies;
  instrumentFamilies.bindEvents();
});
