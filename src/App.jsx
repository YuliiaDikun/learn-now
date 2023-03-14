import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme'
import { GlobalStyleComponent } from './styles/GlobalStyles';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from './components/SharedLayout/SharedLayout';

const MainPage = lazy(() => import("./pages/Home/Home"));
const CoursePage = lazy(() => import("./pages/Course/Course"));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
         <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />            
            <Route path="/:id" element={<CoursePage />} />            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position="top-right"
        />
        <GlobalStyleComponent />
     </ThemeProvider>
    </>
  );
}

export default App;
