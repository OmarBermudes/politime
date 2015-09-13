var informationCursor = require('../stateTree').select('information');

module.exports = {
  getInfoLegislator: function() {
    // aquí va un request
    var id = informationCursor.get('id');
    console.log(id)
    console.log('gola')
  }
};