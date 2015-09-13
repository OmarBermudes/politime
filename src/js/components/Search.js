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

var Search = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    query: ['search', 'query'],
    results: ['search', 'results']
  },

  render: function() {
    console.log(this.state.query)
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

    for (var i = 0; i < 10; i++) {
      listItems.push(
        <ListItem 
          key={i}
          onClick={this.handleClick.bind(null, i)}
          primaryText={
            <p>
              <span 
                style={{
                  fontSize: '15px'}}
                >
                  Inbox Me Llamo Sor Juana Inés De La Cruz
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
                Diputada LIX · PRI · Yucatán · Activo
              </span>
            </p>
          }
          leftAvatar={<Avatar 
            style={{height: '45px', width: '45px'}}
            src="https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg" 
          />} 
        />
      );
    }

    return listItems;
  }
});

module.exports = Search;
