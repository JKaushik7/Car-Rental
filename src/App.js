import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";

// const db = getDatabase(app);

// // const putData = () => {
// //   set(ref(db, "users/darshan"),{
// //     id: 1,
// //     name: "darshan",
// //     age: 21,
// //   });
// // };


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="models" element={<Models />}/>
        <Route path="testimonials" element={<TestimonialsPage/>}/>
        <Route path="team" element={<Team />}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="SignIn" element={<SignIn/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
      </Routes>

      {/* <div className="App">
        <h1>Firebase</h1>
        <button onClick={putData}>Put data</button>
      </div> */}

    </>
  );
}

export default App;