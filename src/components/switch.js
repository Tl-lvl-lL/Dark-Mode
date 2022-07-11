import React, { Component } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: false,
        };
    }

    darkMode = () => {
        this.setState(
            {
                dark: !this.state.dark,
            },
            () => {
                console.log(this.state.dark);
            }
        );
    };
    onClick = (event) => {
        this.darkMode();
        this.props.mod(this.state.dark);
        // console.log(this.state.dark);
        // console.log(this.props);
    };

    render() {
        return (
            <section onClick={this.onClick}>
                <Icon dark={this.state.dark} />
            </section>
        );
    }
}
function Icon(props) {
    if (props.dark) {
        return (
            <FontAwesomeIcon
                icon={faSun}
                size="xl"
                color="yellow"
                spin={true}
                className="sun"
            />
        );
    } else {
        return (
            <FontAwesomeIcon
                icon={faMoon}
                size="xl"
                color="blue"
                // spin={true}
                className="moon"
            />
        );
    }
}
