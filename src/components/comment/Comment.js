import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        let {id, name, email, body} = this.props.comment;

        return(
            <div>
                <div>{id}.{name}</div>
                <div>{email}</div>
                <div>{body}</div>
                <br/>
            </div>
        )
    }
}

export {
    Comment
}