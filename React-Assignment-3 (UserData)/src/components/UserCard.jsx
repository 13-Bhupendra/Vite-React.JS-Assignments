import Button  from "./Button";
import data  from "../data/data";  
 
function UserCard() {
  return (
    <div className="container mt-5 mb-5">
     {data.map((el) => 
         <div className="row mx-auto mt-5 p-4 bg-light">
        <div className="col-4">
          <img
            src={el.Avatar}
            alt=""
          />
        </div>

        <div className="col-7">
          <h2>{el.UserName}</h2>
          <p>{el.address}</p>

          <div className="mt-5 d-flex justify-content-between">
            <section>
              <h3>Post</h3>
              <p>{el.post}</p>
            </section>
            <section>
              <h3>Followers</h3>
              <p>{el.followers}</p>
            </section>
          </div>

        <Button />
        </div>

      </div>
     )}
    </div>
  );
}

export default UserCard;
