import { ThemeProvider } from "./Themes/ThemeContext";
import RoutesApp from "./Routes/RoutesApp";

function App() {
  return (
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;