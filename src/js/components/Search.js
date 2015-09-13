'use strict';

var React = require('react');
var mixin = require('baobab-react/mixins');
var TextField = require('material-ui').TextField;
var IconButton = require('material-ui').IconButton;
var Paper = require('material-ui').Paper;
var List = require('material-ui').List;
var ListItem = require('material-ui').ListItem;
var ListDivider = require('material-ui').ListDivider;
var Avatar = require('material-ui').Avatar;

var MainActions = require('../actions/MainActions');
var SearchActions = require('../actions/SearchActions');

var imageURL = require('../../images/yeoman.png');
var searchCursor = require('../stateTree').select('search');

var Search = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    query: ['search', 'query'],
    results: ['search', 'results']
  },

  render: function() {
    return (
      <div className="search">
        <div className="search__input">
           <TextField 
            onChange={this.handleChange}
            hintText="Escribe nombre del legislador..." 
            underlineFocusStyle={{borderColor: 'white'}}
            fullWidth={true}
          />
          <IconButton 
            iconClassName="material-icons"
            iconStyle={{color: 'white'}}
            onClick={this.handleInput}
          >
            send
          </IconButton>
        </div>
        <Paper zDepth={2} className="search__results">
          <List>
            {this._renderLegislators()}
          </List>
        </Paper>
      </div>
    );
  },

  handleClick: function(id) {
    SearchActions.getIDLegislator(id);
    MainActions.changeView('information');
  },

  handleChange: function(e) {
    var query = e.target.value.trim();

    e.preventDefault();

    if (query) SearchActions.changeQuery(query);

  },

  handleInput: function() {
    SearchActions.onInput();
  },

  _renderLegislators: function() {
    var listItems = [];
    var items = searchCursor.get('results');
    // console.log(items);
    for (var i = 0; i < items.length; i++) {
      listItems.push(
        <ListItem 
          key={items[i].id}
          onClick={this.handleClick.bind(null,items[i].id)}
          primaryText={
            <p>
              <span 
                style={{
                  fontSize: '15px'}}
                >
                  {items[i].nombre}
              </span>
            </p>
          }
          secondaryText={
            <p>
              <span 
                style={{
                  color: 'gray', 
                  fontSize: '11px'
                }}
              >
              {items[i].cargo} · {items[i].partido} · {items[i].entidad}
              </span>
            </p>
          }
          leftAvatar={<Avatar 
            style={{height: '45px', width: '45px'}}
            src={items[i].image} 
          />} 
        />
      );
    }

    return listItems;
  }
});

module.exports = Search;
