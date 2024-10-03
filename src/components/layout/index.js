import { Outlet } from "react-router-dom"
import Header from "../header";

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout;