import {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div><Link to={'posts'}>Posts</Link></div>
                <div><Link to={'comments'}>Comments</Link></div>
                <hr/>
            </div>
        )
    }
}

export {
    Header
}