import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import BookAppointment from "./components/appointment/BookAppointment";
import Home from "./components/home/Home";
import RootLayout from "./components/layouts/RootLayout";
import UserRegist from "./components/user/UserRegist";
import Vet from "./components/veterinarians/Vet";
import VetListing from "./components/veterinarians/VetListing";
import Login from "./components/auth/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/doctors" element={<VetListing />} />
        <Route path="/register-user" element={<UserRegist />} />
        <Route
          path="/appointments/create/:recipientId"
          element={<BookAppointment />}
        />
        <Route path="/veterinarian/:vetId/veterinarian" element={<Vet />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <main className="">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
