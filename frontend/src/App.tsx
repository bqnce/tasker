import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/_main";
import { LoginPage } from "./pages/_login";
import { SignUpPage } from "./pages/_signup";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
