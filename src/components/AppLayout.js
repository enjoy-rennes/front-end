// DEPENDENCY
import React, { Component } from "react";
import Head from "../components/Head";

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {
        render() {
            return (
                <section className="app">
                    <Head />
                    <ComposedComponent {...this.props} />
                </section>
            );
        }
    }
    return AppLayout;
};

export default AppLayout;