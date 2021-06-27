import { Component } from "react";


export default class Tile extends Component {
    render() {
        return (
            <div className={"tile"}>
                <div>
                    <div>

                    </div>
                    <h3 className={"tile_title"}>{ this.props.title }</h3>
                    <h3 className={"tile_title"}>Logos</h3>
                </div>
            </div>
        );
    }
}