var searchCursor = require('../stateTree').select('search');
var informationCursor = require('../stateTree').select('information');
var request = require('superagent');
require('superagent-jsonp')(request);
module.exports = {
  changeQuery: function(q) {
    searchCursor.set('query', q);
  },

  onInput: function() {
    var query = searchCursor.get('query');
    var page = 1;
    request
       .get('http://192.168.1.89/legisladores/query/?q='+query)
       .jsonp()
       .end(function(err,res){
          searchCursor.set('results',res.body.legisladores.items);
          // console.log(res);
       });
  },
  getIDLegislator: function(id) {
    informationCursor.set('id', id);
    
  }
};