import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";
// eslint-disable-next-line
const MainRouter = ({ handleModeChange, mode }) => {
    return (
        <Routes>
            <Route path="/" element={<Home handleModeChange={handleModeChange} mode={mode} />} />
        </Routes>
    );
};

export default MainRouter;