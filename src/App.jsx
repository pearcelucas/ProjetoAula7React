import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles, Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { Cursos } from "./pages/Cursos";
import { Contatos } from "./pages/Contatos";
import { Detalhes } from "./pages/Detalhes";
import { Page404 } from "./pages/Page404";



export const App = () => {
  return (
    <>
     <BrowserRouter>
     <GlobalStyles/>
     <Menu/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="cursos" element={<Cursos/>}/>
         <Route path="contatos" element={<Contatos/>}/>
         <Route path="detalhes/:id" element={<Detalhes/>}/>
         <Route path="*" element={<Page404/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
}

