'use strict';

var Baobab = require('baobab');
var PureRenderMixin = require('react/addons').PureRenderMixin;

module.exports = new Baobab({
  route: 'main',
  search: {
    query: '',
    results: false
  },
  information: {
    id: 0,
    info: false
  }
}, {
  shiftReferences: true,
  autoCommit: true,
  mixins: [PureRenderMixin]
});
