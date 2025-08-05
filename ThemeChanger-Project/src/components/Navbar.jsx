import { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { ThemeChanger } from "../context/ThemeChanger";


export default function Navbar() {

  const {theme , themeToggler} = useContext(ThemeChanger)
  console.log(theme , themeToggler)

  return (
    <>
      <div className="container-fluid p-2" style={{ border: "1px solid black" , backgroundColor:theme=="light" ? "white" : "black"  , color:theme=="light" ? "black" : "white"}}>
        <div className="container d-flex align-items-center justify-content-between">
          <section className="d-flex align-items-center justify-content-between w-50">
            <h3>Logo.</h3>
            <span>Home</span>
            <span>About</span>
            <span>Service</span>
            <span>Blogs</span>
          </section>
          <button className="p-2 rounded rounded-circle" onClick={themeToggler}>{theme == "dark" ? <IoSunny style={{fontSize:"25px" }}/> : <IoMoonSharp style={{fontSize:"23px"}}/>}</button>
        </div>
      </div>
    </>
  );
}
