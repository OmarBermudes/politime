var searchCursor = require('../stateTree').select('search');
var informationCursor = require('../stateTree').select('information');

module.exports = {
  changeQuery: function(q) {
    searchCursor.set('query', q);
  },

  onInput: function() {
    var query = searchCursor.get('query');

    // aquí se hace un request
  },

  getIDLegislator: function(id) {
    informationCursor.set('id', id);
  }
};