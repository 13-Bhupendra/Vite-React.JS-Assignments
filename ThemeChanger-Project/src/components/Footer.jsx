import { useContext } from "react";
import { ThemeChanger } from "../context/ThemeChanger";

export default function Footer() {

  const {theme} = useContext(ThemeChanger)
  console.log(theme)


  return (
    <>
      <div className="container-fluid" style={{ border: "1px solid black" , backgroundColor: theme == "light" ? "white" : "black" , color : theme =="light" ? "black " : "white"}}>
        <div className="container d-flex align-items-center justify-content-between p-4">
          <h3>Logo.</h3>
          <section>
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Service</h6>
            <h6>Blogs</h6>
          </section>
          <section>
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Service</h6>
            <h6>Blogs</h6>
          </section>
          <section>
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Service</h6>
            <h6>Blogs</h6>
          </section>
          <section>
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Service</h6>
            <h6>Blogs</h6>
          </section>
        </div>
      </div>
    </>
  );
}
