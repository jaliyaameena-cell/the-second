import Home from "./home";
import { useNavigate } from "react-router-dom";


function Project() {
    const navigate = useNavigate();
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Welcome to your Arduino Project!</h1>
            <p>now you can start coding and connecting your Arduino</p>
            <button onClick={() => navigate("/")}  >
                back to home
            </button>
        </div >

    );
}
export default Project;