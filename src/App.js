import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/Layout";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";

const App = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'posts'}/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;