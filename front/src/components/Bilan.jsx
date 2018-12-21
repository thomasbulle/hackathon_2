import React, { Component } from 'react';
import './bilan.scss';
import { Progress, Collapse, Button, CardBody, Card, Container } from 'reactstrap';

class Bilan extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return (
      <Container>
        <a className="fancy-button bg-gradient1">
                  <span onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    Je veux voir mon bilan !
                  </span>
                </a>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>

              <h2 className="pb-5">Détails de votre consommation :</h2>

              <h2>Navigation & Mails :</h2>
              <div className="text-center">42%</div>
              <Progress className="mb-5" value={42} color="success" /><br />

              <h2>Smartphones & Tablettes :</h2>
              <div className="text-center">71%</div>
              <Progress  className="mb-5"value={71} color="danger" /><br />

              <h2>Éco-Conception :</h2>
              <div className="text-center">29%</div>
              <Progress className="mb-5" value={29} color="success" /><br />

              <h2>Smart Utilisation :</h2>
              <div className="text-center">67%</div>
              <Progress className="mb-5" value={67} color="warning" /><br />

              <h2>Impact carbonne de vos équiments :</h2>
              <div className="text-center">75%</div>
              <Progress className="mb-5" value={75} color="danger" /><br />

              <h2>Impact carbonne de votre usage internet :</h2>
              <div className="text-center">55%</div>
              <Progress className="mb-5" value={55} color="warning" /><br />


              <h1>Score total :</h1>
              <h1 className="mb-5 score">7/10</h1>

              <h5 className="mb-3">PRECONISATIONS APRES AFFICHAGE DU BILAN :</h5>
              <h5>-  N'appuyez pas automatiquement sur le bouton « Rechercher » de Google : vous émettez l’équivalent de 5 à 7 grammes de CO².</h5>
              <h5>-  Réduisez vos envois de mails inutiles : envoyer un simple mail rejette 10 grammes de CO² (l’équivalent de ce que peut absorber un arbre en une journée).</h5>
              <h5>-  Réduisez votre temps d’utilisation d’une heure d’Internet : c’est la consommation de 4000 tonnes de pétrole soit 4000 allers-retours Paris, New-York en avion !</h5>

            </CardBody>
          </Card>
        </Collapse>
      </Container>
    );
  }
}

export default Bilan;