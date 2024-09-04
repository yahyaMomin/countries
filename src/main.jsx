import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
   <QueryClientProvider client={queryClient}>
      <Provider store={store}>
         <StrictMode>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </StrictMode>
      </Provider>
   </QueryClientProvider>
);
