import NavBar from "../Layout/NavBar";
// eslint-disable-next-line
const Home = ({ handleModeChange, mode }) => {

    return (
        <NavBar mode={mode} handleModeChange={handleModeChange} />
    );
};

export default Home;