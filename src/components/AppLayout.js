// DEPENDENCY
import React, { Component } from "react";

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {
        render() {
            return (
                <section className="app">
                    <ComposedComponent {...this.props} />
                </section>
            );
        }
    }
    return AppLayout;
};

export default AppLayout;