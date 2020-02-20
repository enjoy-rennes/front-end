// DEPENDENCY
import React from "react";

import MenuComponent from "../components/Menu";

export default class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="header">
                <MenuComponent />
            </div>
        )
    }
}

