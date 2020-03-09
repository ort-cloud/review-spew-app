import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./App.css";

class Reviews extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const url = `http://localhost:8000/api/reviews/savedReview/user/2`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, no. Error!");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(`DATA: ${data}`);
      });
  }



  render() {



    /* console.log(this.props.location.state); */
    return (
      <div>
        <header>
          <p>[placeholder for logo]</p>
          <p>[logo will also be button returning to the landing page]</p>
          <Link to={"/"}>
            <h1>Reviews</h1>
          </Link>
          <h2>The searchiest of search pages</h2>
        </header>

        <Link to={"/search"}>
          <button>Back To Search</button>
        </Link>
      </div>
    );
  }
}
export default Reviews;


