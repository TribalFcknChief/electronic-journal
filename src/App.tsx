import { useEffect, useState } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import { Route, Routes, useLocation } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.tsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.tsx";
import { GroupsPage } from "./pages/GroupsPage/GroupsPage.tsx";
import {StudentsPage} from "./pages/StudentsPage/StudentsPage.tsx"
import { ShedulePage } from "./pages/ShedulePage/ShedulePage.tsx";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const newSocket = io("http://localhost:3000");
        newSocket.emit("join", { userId: `${JSON.parse(localUser).id}` });
        setSocket(newSocket);
        return () => {
          newSocket.close();
        };
      }
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<RegistrationPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/groups" element={<GroupsPage />}></Route>
      <Route path="/students" element={<StudentsPage />}></Route>
      <Route path="/shedule" element={<ShedulePage/>}></Route>
    </Routes>
  );
}

export default App;
