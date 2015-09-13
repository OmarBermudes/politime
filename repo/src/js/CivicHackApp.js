'use strict';

var React = require('react/addons');
var mixin = require('baobab-react/mixins');
var tree = require('./stateTree.js');

var Presentation = require('./components/Presentation.js');
var Search = require('./components/Search.js');
var Information = require('./components/Information.js');

var ReactVelocityTransitionGroup = require('velocity-transition-group');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var CircularProgress = require('material-ui').CircularProgress;


var fastClick = require('fastclick');

require('../styles/main.scss');

var CivicHackApp = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    route: ['route']
  },

  render: function() {
    var handler;
    var view = this.state.route;

    switch(view) {
      case 'main': handler = <Presentation key={view} />;
        break;
      case 'search': handler = <Search key={view} />;
        break;
      case 'information': handler = <Information key={view} />;
        break;
    }

    return (
      <ReactVelocityTransitionGroup
        enter='fadeIn'
        leave='fadeOut'
        easing='linear'
        duration={250}
      >
        {handler}
      </ReactVelocityTransitionGroup>
    );
  }
});

var CivicHackAppWrapper = React.createClass({
  mixins: [mixin.root],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return <CivicHackApp />;
  }
});

React.render(<CivicHackAppWrapper tree={tree} />, document.getElementById('app')); // jshint ignore:line

fastClick.attach(document.body);
