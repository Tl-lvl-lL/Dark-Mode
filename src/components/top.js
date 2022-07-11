import React, { Component } from "react";
import TopMenu from "./topMenu";
import Switch from "./switch";

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: null,
        };
        this.mod = this.mod.bind(this);
    }
    mod(props) {
        this.setState(
            {
                dark: props,
            },
            () => {
                console.log(this.state.dark);
            }
        );
    }
    render() {
        return (
            <header
                style={{
                    backgroundColor: this.state.dark ? "#282c34" : "white",
                }}
            >
                <nav>
                    <h2>Logo</h2>
                    <TopMenu />
                    <Switch mod={this.mod} />
                </nav>
            </header>
        );
    }
}
