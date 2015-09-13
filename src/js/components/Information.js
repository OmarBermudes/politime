'use strict';

var React = require('react');
var mixin = require('baobab-react/mixins');
var Tabs = require('material-ui').Tabs;
var Tab = require('material-ui').Tab;
var IconButton = require('material-ui').IconButton;
var Avatar = require('material-ui').Avatar;
var Paper = require('material-ui').Paper;
var RaisedButton = require('material-ui').RaisedButton;

var MainActions = require('../actions/MainActions');
var InformationActions = require('../actions/InformationActions');
var informationCursor = require('../stateTree').select('information');

var Information = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    id: ['information', 'id'],
    info: ['information','info']
  },

  componentDidMount: function() {
    // después de que el componente se montó, lo primero que hárá es el request.
    InformationActions.getInfoLegislator();
  },

  render: function() {
      if(this.state.info){
        var info = this.state.info.body.info;
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
                src={info.perfil.imagenUrl}
              />
              <p className="information__name">
                {info.perfil.nombre}
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
        
      }else{
        return <div></div>;
      }
  },

  _renderActions: function() {
    var actions = [];
    var trayectorias = this.state.info.body.info.trayectorias;
    console.log(trayectorias);
    for (var i = 0; i < trayectorias.length; i++) {
          var aux= [];
          for (var j=0; j < trayectorias[i].actions.length; j++){
            aux.push(
            <div className="actions__information">
            <div className="actions__date">
              <div>
                <p>{trayectorias[i].actions[j].from}</p>
                <p>{trayectorias[i].actions[j].to}</p>
              </div>
            </div>
            <Paper zDepth={2} className="actions__description">
              <p>{trayectorias[i].actions[j].action}</p>
            </Paper>
          </div>
              );
          }
      if(trayectorias[i].actions.length>0){
          actions.push(
          <div className="actions__action" key={i}>
            <p className="actions__title">{trayectorias[i].title}</p>
            {aux}
          </div>
          );
        }    
    }

    return actions;
  },

  handleClick: function() {
    MainActions.changeView('search');
  },

  _renderProfile: function() {
    var infoProfile = [];
    var profile = this.state.info.body.info.perfil;
    console.log(profile);
    
      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Nombre:</p>
          <p className="profile__content">{profile.cargo} {profile.nombre} por la {profile.legislatura}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Estatus:</p>
          <p className="profile__content">{profile.estatus}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Partido:</p>
          <p className="profile__content">{profile.partido}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Nacimiento:</p>
          <p className="profile__content">{profile.fechaNacimiento}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Principio de la elección:</p>
          <p className="profile__content">{profile.principioDeEleccion}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Zona:</p>
          <p className="profile__content">{profile.zonaEntidad}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Toma de protesta:</p>
          <p className="profile__content">{profile.tomaDeProtesta}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Suplente:</p>
          <p className="profile__content">{profile.suplente}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Último grado de estudios:</p>
          <p className="profile__content">{profile.ultimoGradoEstudios}</p>
        </div>
      );

      infoProfile.push(
        <div className="profile__info">
          <p className="profile__label">Preparación académica:</p>
          <p className="profile__content">{profile.preparacionAcademica}</p>
        </div>
      );

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
