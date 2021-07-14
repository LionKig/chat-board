import React from "react";
import Link from "@material-ui/core/Link";


const Copyright = () => {
    return ( <
        div className = "row authcopyrow" >
        <
        div className = "col-md-8 desc pad itemsheight" >
        <
        Link href = '/' >
        <
        img src = "/logoname.png"
        alt = "Go to Sign" / >
        <
        /Link> <
        /div> <
        div className = "col-md-4 dollar grey price middle space pad itemsheight" >
        <
        p > Pulitzer Ce nter on Crisis Reporting– Fellow / Correspondent.Traveled across Congo
        for several weeks to <
        br / > report on election developments, and to raise awareness of the Congo conflict in US media.Embedded <
        br / > with Moroccan, Pakistani and Uruguayan United Nations peacekeepers in Ituri, Lake Albert and South <
        br / > Kivu.Accredited with Ministry of Information and United Nations Mission in Congo(Summer 2006). <
        br / > ntary report on the relation between the Congo conflict and the scramble
        for mineral resources(Fall 2006). <
        br / > Aired on PBS’ Foreign Exchange with Fareed Zakaria.Guest appearances on BBC’ s World News <
        /p>  <
        /div> <
        /div>
    );
};

export default Copyright;