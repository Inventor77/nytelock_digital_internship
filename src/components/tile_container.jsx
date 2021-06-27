import React from "react";
import Tile from './tile';
import { useState } from "react";


function TileContainer() {
    const [tileArr] = useState([
        {
            tile_title: "Lettermark",
            tile_icon: "fas fa-italic"
        },
        {
            tile_title: "Wordmark",
            tile_icon: "fab fa-weebly"
        },
        {
            tile_title: "Pictorial Mark",
            tile_icon: "fas fa-lemon"
        },
        {
            tile_title: "Abstract Mark",
            tile_icon: "fab fa-artstation"
        },
        {
            tile_title: "Mascot",
            tile_icon: "fas fa-theater-masks"
        },
        {
            tile_title: "Combination",
            tile_icon: "fas fa-puzzle-piece"
        }])
    return (
        <div className="tile_container">
            <section className="upper_section" >
                <div className="container_header">
                    <h4 className="sub-heading"><span><li>How do I know which logo style is right for me?</li></span></h4>
                    <h1 className="main-heading">Different Types of Logo Styes</h1>
                </div>
                <div className="container_nav">
                    <div className="button">
                        <a href="https://nytelock.com/quote" target="_blank" rel="noreferrer" className="nav_btn">
                            <span>Contact Us<i className=""></i></span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="lower_section">
                {tileArr.map(obj => {
                    return <Tile title={obj.tile_title} tileClass={obj.tile_icon} />
                })}
            </section>
        </div>
    );
};

export default TileContainer;