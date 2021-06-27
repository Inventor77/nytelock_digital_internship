import { Component } from "react";
import  Tile  from './tile';



export default class Tile_Container extends Component {
    render() {
        return (
            <div>
                <Tile title={"Lettermark"} />
                <Tile title={"Wordmark"} />
                <Tile title={"Pictorial Mark"} />
                <Tile title={"Abstract Mark"} />
                <Tile title={"Mascot"} />
                <Tile title={"Combination"} />
            </div>
        )
    }
}