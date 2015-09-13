'use strict';

var Baobab = require('baobab');
var PureRenderMixin = require('react/addons').PureRenderMixin;

module.exports = new Baobab({
  route: 'main',
  search: {
    query: '',
    results: []
  },
  information: {
    id: 0,
    info: {}
  }
}, {
  shiftReferences: true,
  autoCommit: true,
  mixins: [PureRenderMixin]
});
