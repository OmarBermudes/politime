var informationCursor = require('../stateTree').select('information');
var request = require('superagent');
require('superagent-jsonp')(request);

module.exports = {
  getInfoLegislator: function() {
    var id = informationCursor.get('id');
    request
       .get('http://192.168.1.89/legisladores/legisladorinfo/'+id)
       .jsonp()
       .end(function(err,res){
          informationCursor.set('information',res);
          console.log(res);
       });
  }
};