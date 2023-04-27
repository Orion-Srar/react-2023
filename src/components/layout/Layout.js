import {Component} from "react";

import {Header} from "../header/Header";
import {Outlet} from "react-router-dom";

class Layout extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                    <Header/>
                    <Outlet/>
            </div>
        )
    }
}

export {
    Layout
}