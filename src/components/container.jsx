import { Component } from "react";
import  Tile_Container  from './tile';

export default class Container extends Component {
    render() {
        return (
            <div className={"container"}>
                <Tile_Container />
            </div>
        );
    }
}
