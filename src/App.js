import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumPage from "./pages/AlbumsPage/AlbumPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import Post from "./components/post/Post";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'todos'}/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;