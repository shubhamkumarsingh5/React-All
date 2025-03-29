import ThemedComponent from "../components/contextAPI/themedComponent";
import { ThemeProvider } from "../components/contextAPI/themeProvider.jsx";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
