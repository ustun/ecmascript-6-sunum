"use strict";

var X = React.createClass({
    displayName: "X",

    render: function render() {
        return React.createElement(
            "h1",
            null,
            this.props.userName,
            ", thanks for being a top contributor!"
        );
    }

});

