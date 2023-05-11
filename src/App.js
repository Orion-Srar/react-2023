import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {UserPage} from "./pages/UserPage";
import {CommentPage} from "./pages/CommentPage";
import {CarPage} from "./pages/CarPage";

const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;