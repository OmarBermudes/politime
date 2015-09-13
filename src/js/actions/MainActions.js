var routeCursor = require('../stateTree');

module.exports = {
  changeView: function(route) {
    routeCursor.set('route', route);
  }
};