import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        let {id, title} = this.props.post;

        return(
            <div>
                <div>{id}.{title}</div>
            </div>
        )

    }
}

export {
    Post
}