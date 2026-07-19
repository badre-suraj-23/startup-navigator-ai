import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Articles from "./pages/Articles";
import Resources from "./pages/Resources";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

    return (

        <BrowserRouter>

            <Routes>


                <Route
                    path="/"
                    element={<Login />}
                />


                <Route
                    path="/register"
                    element={<Register />}
                />



                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/search"
                    element={
                        <ProtectedRoute>
                            <Search />
                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/articles"
                    element={
                        <ProtectedRoute>
                            <Articles />
                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/resources"
                    element={
                        <ProtectedRoute>
                            <Resources />
                        </ProtectedRoute>
                    }
                />


            </Routes>

        </BrowserRouter>

    );

}


export default App;