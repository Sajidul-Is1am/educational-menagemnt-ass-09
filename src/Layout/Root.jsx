import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-urbanist">
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;