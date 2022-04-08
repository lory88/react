import React from "react";
import BingMapsReact from "bingmaps-react";



export default function BingMap(props) {
const push=[];

return (
    <BingMapsReact
            bingMapsKey="ArTgB5ammwlnNavNUDe59eal9F_I8zKu9xCXssrw9qgkUI2fB0Kw9gylRC72iT1E "
        height="500px"
        pushPins={props.coordinate[2]}
        mapOptions={{
            navigationBarMode: "square",
        }}
        width="500px"
        viewOptions={{
            center: { latitude: props.coordinate[0], longitude: props.coordinate[1]},
            mapTypeId: "grayscale",
        }}
    />
    );
}





























