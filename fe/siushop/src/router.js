import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/users/homePage"
import MasterLayout from "./pages/users/theme/masterLayout"
import { ROUTER } from "./utils/router"
import ProfilePage from "./pages/users/profilePage"

const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage/>
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key)=>(
                        <Route key={key} path={item.path} element={item.component}/>
                    )) 
                }
            </Routes>
        </MasterLayout>
    );
}

const RouterCustom = () =>{
    return renderUserRouter()
}

export default RouterCustom

