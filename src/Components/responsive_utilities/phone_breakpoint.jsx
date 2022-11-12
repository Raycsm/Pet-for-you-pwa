import React from "react";
import Breakpoint from "./breaktpoint";


export default function PhoneBreakpoint(props) {
    return (
        <Breakpoint name="phone">
            {props.children}
        </Breakpoint>
 );
};
