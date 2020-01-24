// DEPENDENCY
import React, { Component } from "react";
// COMPONENT
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
// CSS FILE

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {
        render() {
            return (
                <section className="app">
                    <Head />
                    <Header />
                    <ComposedComponent {...this.props} />
                    <Footer />
                </section>
            );
        }
    }

    return AppLayout;
};

export default AppLayout;