import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { SignIn } from "./routes/Sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
