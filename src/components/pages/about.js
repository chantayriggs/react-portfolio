import React from "react"
import image from "../../../static/assets/images/pfp.jpg"

export default function() {
    return(
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + image + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
              />
            <div className="right-column">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque. At auctor urna nunc id. Sagittis id consectetur purus ut faucibus. Turpis cursus in hac habitasse platea. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Elit ut aliquam purus sit amet luctus venenatis. Vel pretium lectus quam id. At tellus at urna condimentum mattis pellentesque. Pellentesque elit eget gravida cum sociis. Mi ipsum faucibus vitae aliquet. Tincidunt lobortis feugiat vivamus at augue eget arcu. Morbi leo urna molestie at elementum eu facilisis sed. Cursus in hac habitasse platea dictumst quisque. Quam quisque id diam vel quam elementum pulvinar. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Eget gravida cum sociis natoque penatibus et magnis. Maecenas sed enim ut sem viverra aliquet eget sit.
            </div>
        </div>
    )
}