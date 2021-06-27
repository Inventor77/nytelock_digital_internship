import React ,{ Component } from "react";
import TileContainer from './tile_container';
import TileInfoContainer from "./tile_info_container";

export default class Container extends Component {
    render() {
        return (
            <section className={"container"}>
                <TileContainer />
                <TileInfoContainer />
            </section>
        );
    }
}
