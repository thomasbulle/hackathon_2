import React, { Component } from 'react';
import './homePage.scss';
import { Col, Row } from 'reactstrap';
import Etape from './Etape';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="all">

        <div className="bg">
          <div className="text">
              <h1>Participez à la sobriété numérique !</h1>
              <h2>Nous vous offrons diagnostic et recommandations sur votre environnement</h2>
              <h2>numérique avec l’ambition de vous aider.</h2>
              <div className="btnAlign pt-5">
                <a className="fancy-button bg-gradient1"><span><img src="http://image.noelshack.com/fichiers/2018/51/4/1545334326-particulier.png"/>Vous êtes un particulier ?</span></a><div className="espace"></div><a className="fancy-button bg-gradient1"><span><img src="http://image.noelshack.com/fichiers/2018/51/4/1545334803-entreprise.png"/>Vous êtes une entreprise ?</span></a>
              </div>
          </div>
        </div>

        <Row>

          <Col className="pt-4" xs="12" lg="4">
            <Etape 
              image="http://image.noelshack.com/fichiers/2018/51/4/1545322975-picto-digipact-ok-1.png"
              titre="My Digi’Pact :"
              text="Parce que chacun peut agir dans son propre environnement, engagez-vous pour tendre vers plus de sobriété numérique !"
            />
          </Col>

          <Col className="pt-4" xs="12" lg="4">
            <Etape 
              image="http://image.noelshack.com/fichiers/2018/51/4/1545322672-picto-bilan-ok.png"
              titre=" Notre bilan :"
              text="Indiquez-nous vos équipements numériques et vos usages pour un diagnostic personnalisé."
            />
          </Col>

          <Col className="pt-4" xs="12" lg="4">
            <Etape 
              image="http://image.noelshack.com/fichiers/2018/51/4/1545322903-picto-collaboration.png"
              titre="Votre collaboration : "
              text="Réduisez votre empreinte carbone grâce à nos recommandations !"
            />
          </Col>

        </Row> 

      </div>
     );
  }
}
 
export default HomePage;