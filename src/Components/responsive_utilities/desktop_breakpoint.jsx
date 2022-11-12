import React from "react";
import Breakpoint from "./breaktpoint";


export default function DesktopBreakpoint(props) {
 
    return (
        <Breakpoint name="desktop">
            {props.children}
        </Breakpoint>
    );
}