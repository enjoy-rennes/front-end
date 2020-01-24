// DEPENDENCY
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// COMPONENT
import HelpsListComponent from "./HelpsList";
import HelpsFormComponent from "./HelpsForm";

export default class HelpsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            helps: [],
        }
    }

    componentDidMount() {
        this.setHelps();
    }

    setHelps() {
        // FAKE DATA
        this.setState({
            helpsList: [
                {
                    id: 10,
                    name: "Allocations familiales",
                    description: "Les familles assumant la charge de 2 enfants de moins de 20 ans perçoivent une “Allocation Familiale”. Elle est versée, chaque mois, soit à taux plein soit à taux partiel selon les ressources du foyer.",
                },
                {
                    id: 11,
                    name: "Prime d'activité",
                    description: "La prime d’activité remplace depuis quelques années maintenant le RSA Activité et la Prime pour l’emploi. Il est possible de faire une demande (uniquement en ligne) à tout moment. Si votre situation a évolué, n’hésitez pas à estimer vos droits à l’aide du simulateur.",
                    conditions: [
                        {
                            id: 10011,
                            name: "france",
                            operator: "=",
                            type: "boolean",
                            value: "true",
                        },
                    ]
                },
                {
                    id: 12,
                    name: "L’aide personnalisée au logement",
                    description: "Les aides au logement de la CAF sont au nombre de 3. La plus connue d’entre elles est l’Aide Personnalisée au Logement (APL). Elle est accordée sous conditions de ressources. Que vous soyez locataire ou propriétaire, il est possible d’en faire la demande.",
                }
            ]
        })
    }

    render() {
        const { helpsList } = this.state
        return (
            <Container className="helps-component">
                <Row>
                    <Col>
                        <HelpsFormComponent />
                    </Col>
                    <Col>
                        <HelpsListComponent data={helpsList} />
                    </Col>
                </Row>
            </Container>
        );
    }
}