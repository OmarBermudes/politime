'use strict';

var Baobab = require('baobab');
var PureRenderMixin = require('react/addons').PureRenderMixin;

module.exports = new Baobab({
  route: 'main'
}, {
  shiftReferences: true,
  autoCommit: true,
  mixins: [PureRenderMixin]
});
