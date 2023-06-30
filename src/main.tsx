import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/css/main.css";
import AuthContextProvider from "./context/AuthContextProvider.tsx";
import ArtworkContextProvider from "./context/ArtworkContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ArtworkContextProvider>
        <App />
      </ArtworkContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
