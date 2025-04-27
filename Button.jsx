import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

function Button() {
const { toggleTheme } = useContext(ThemeContext);

return (
    <button onClick={toggleTheme}>
    Cambiar tema
    </button>
);
}

export default Button;