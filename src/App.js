import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Delete from "./Components/Delete"; // contacts delete
import NoPage from "./Components/NoPage";
import Update from "./Components/Update"; //accounts update

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));