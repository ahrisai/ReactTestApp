import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes,privateRoutes } from "../router/routes";
import { useContext } from "react";
import { authContext } from "../context";
import Loader from "./Loader/Loader";
const AppRouter = () => {
  const {isAuth,isLoading}=useContext(authContext)
  
  if(isLoading){
    return <Loader/>
  }
  return (
    isAuth
    ?<Routes>

    {privateRoutes.map(route=><Route key={route.path} element={route.element} path={route.path} exact/>)

    }
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
    :<Routes>

    
    {publicRoutes.map(route=><Route key={route.path} element={route.element} path={route.path} exact/>)

    }
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
