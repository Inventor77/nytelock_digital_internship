import React, {useState} from "react";
import TileContainer from './tile_container';
import TileInfoContainer from "./tile_info_container";
import '../App.css';

const Container = () => {
    const [index, setIndex] = useState(0);
    return (
        <section className={"container"}>
            <TileContainer setIndex={setIndex} />
            <TileInfoContainer index={index} />
        </section>
    );
}

export default Container;