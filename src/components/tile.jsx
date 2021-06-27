import React, { Component } from "react";


export default class Tile extends Component {
    render() {
        return (
            <div className={"tile"}>
                <div>
                    <div>
                        <i aria-hidden="true" className={this.props.tileClass}></i>
                    </div>
                    <h3 className={"tile_title"}>
                        {this.props.title}
                        <br />
                        Logos
                    </h3>
                </div>
            </div>
        );
    }
}