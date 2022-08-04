import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import "./Router.css";

function Router(): JSX.Element {
    return (
        <div className="Router">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                {/* Home */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default Router;
