// DEPENDENCY
import React from "react";

export default class HelpsListComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const { data } = this.props;
        let list;

        // if (data) {
        // let items = data.map((item) =>
        //     <Card key={item.id}>
        //         <Accordion.Toggle as={Card.Header} eventKey={item.id}>
        //             <h4 className="text-info">
        //                 {item.name}
        //             </h4>
        //         </Accordion.Toggle>
        //         <Accordion.Collapse eventKey={item.id}>
        //             <Card.Body>{item.description}</Card.Body>
        //         </Accordion.Collapse>
        //     </Card >
        // );
        // list =
        // <Accordion defaultActiveKey={data[0].id} className="text-left">
        //     {items}
        // </Accordion>;
        // }

        return (
            <div className="help-list">
                {/* {list} */}
            </div>
        );
    }
}