import React from "react";
import { useState } from "react";




const TileInfo = () => {
    return (
        <div className="tile_info">
            <h2>Combination Logos</h2>
            {/* <h2>{ this.props.head}</h2> */}
            {/* <p>{this.props.para}</p> */}
            <p>
                A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.&nbsp;
                <br></br>
                Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.
            </p>
        </div>
    );
}

const TileImg = () => {
    return (
        <div className="tile_img">

        </div>
    );
}

const TileInfoContainer = () => {
    const [tileInfoArr] = useState([
        {
            info_title: "Lettermark Logos",
            info_icon: `A Monogram or lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity.<br></br>By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.&nbsp;`
        },
        {
            info_title: "Wordmark Logos",
            info_icon: `Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google’s logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.`
        },
        {
            info_title: "Pictorial Mark Logos",
            info_icon: `A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.<br></br>A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.`
        },
        {
            info_title: "Abstract Mark Logos",
            info_icon: `An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower. <br></br>Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.`
        },
        {
            info_title: "Mascot Logos",
            info_icon: `Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson<br></br>A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC’s Colonel and PUB’s cute Water Wally.&nbsp;`
        },
        {
            info_title: "Combination Logos",
            info_icon: `A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.&nbsp;<br></br>Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.`
        }])
    return (
        <div className="tile_info_container">
            <TileInfo head={"Fill it"} para={"Fill it"} />
            <TileImg />
        </div>
    );
}

export default TileInfoContainer;