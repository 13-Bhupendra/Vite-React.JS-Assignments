import BookCard from "./BookCard";
import NonFictionalData from "../nonfiction.json"

export default function NonFiction() {
  return (
    <div>
      <h1 className="text-center mt-3" >Non-Fiction Book</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {NonFictionalData.map((el,i) =><BookCard  img={el.img} title={el.title} year={el.year} author={el.author} price={el.price} /> )}
      </div>
    </div>
  );
}
