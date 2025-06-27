import FictionalData from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div>
      <h1 className="text-center mt-3" >Fictional Books</h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
        {FictionalData.map((el,i) => <BookCard  img={el.img} title={el.title} year={el.year} author={el.author} price={el.price}/> )}
      </div>
    </div>
  );
}
