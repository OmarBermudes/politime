'use strict';

var React = require('react');
// var mixin = require('baobab-react/mixins');
var Tabs = require('material-ui').Tabs;
var Tab = require('material-ui').Tab;
var IconButton = require('material-ui').IconButton;
var Avatar = require('material-ui').Avatar;
var Paper = require('material-ui').Paper;
var RaisedButton = require('material-ui').RaisedButton;

var MainActions = require('../actions/MainActions');

var Information = React.createClass({
  render: function() {
    return (
      <div className="information">
        <div className="information__header">
          <IconButton
            onClick={this.handleClick}
            iconClassName="material-icons"
            iconStyle={{color: 'white'}}
          >
            keyboard_backspace
          </IconButton>
          <Avatar
            className="information__image"
            style={{
              height: '90px',
              width: '90px',
              border: '5px solid white'
            }}
            src="https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
          />
          <p className="information__name">
            Doge De Latinoamérica
          </p>
        </div>
        <Tabs
          inkBarStyle={{backgroundColor: '#ffffff'}}
          tabItemContainerStyle={{backgroundColor: '#37db67'}}
          contentContainerStyle={{
            backgroundColor: '#37db67',
            width: '100%',
            maxWidth: '680px',
            margin: '0 auto'
          }}
        >
          <Tab label="TRAYECTORIA">
            <div className="actions">
              {this._renderActions()}
            </div>
          </Tab>

          <Tab label="PERFIL">
            <div className="profile">
              <Paper zDepth={2}>
                {this._renderProfile()}
              </Paper>
            </div>
          </Tab>

          <Tab label="COMPARTIR">
            <div className="share">
              {this._renderShare()}
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  },

  _renderActions: function() {
    var actions = [];

    for (var i = 0; i < 10; i++) {
      actions.push(
        <div className="actions__action" key={i}>
          <p className="actions__title">COMISIONES</p>
          <div className="actions__information">
            <div className="actions__date">
              <div>
                <p>2001</p>
                <p>2003</p>
              </div>
            </div>
            <Paper zDepth={2} className="actions__description">
              <p>Diputada local en la LVI legislatura del Congreso de Yucatán. Presidenta de la Comisión de Equidad y Género. Responsable de la organización y ejecución del primer foro de equidad y género.</p>
            </Paper>
          </div>
          <div className="actions__information">
            <div className="actions__date">
              <div>
                <p>2001</p>
                <p>2003</p>
              </div>
            </div>
            <Paper zDepth={2} className="actions__description">
              <p>Diputada local en la LVI legislatura del Congreso de Yucatán. Presidenta de la Comisión de Equidad y Género. Responsable de la organización y ejecución del primer foro de equidad y género.</p>
            </Paper>
          </div>
        </div>
      );
    }

    return actions;
  },

  handleClick: function() {
    MainActions.changeView('search');
  },

  _renderProfile: function() {
    var infoProfile = [];

    for (var i = 0; i < 10; i++) {
      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Nombre</p>
          <p className="profile__content">Senadora Propietario: Ortega Pacheco, Ivonne Aracely por la LX Legislatura</p>
        </div>
      );
    }

    return infoProfile;
  },

  _renderShare: function() {
    return (
      <div className="share__container">
        <RaisedButton
          className="share__button"
          linkButton={true}
          label="Facebook"
          labelColor={"white"}
          backgroundColor={"#4285f4"}
          href="#"
        />
        <RaisedButton
          className="share__button"
          linkButton={true}
          label="Twitter"
          labelColor={"white"}
          backgroundColor={"#5ca7ff"}
          href="#"
        />
        <RaisedButton
          className="share__button"
          linkButton={true}
          label="Google +"
          labelColor={"white"}
          backgroundColor={"#d0021b"}
          href="#"
        />
      </div>
    );
  }
});

module.exports = Information;
