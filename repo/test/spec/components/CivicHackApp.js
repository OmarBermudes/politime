'use strict';

describe('CivicHackApp', () => {
  let React = require('react/addons');
  let CivicHackApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CivicHackApp = require('components/CivicHackApp.js');
    component = React.createElement(CivicHackApp);
  });

  it('should create a new instance of CivicHackApp', () => {
    expect(component).toBeDefined();
  });
});
