import React from "react";

function Cards(props) {
    return (
        <div className="col-lg-3">
            <div className="card box">
                <img className="imgSize" src={props.imgsrc} alt="Card demos" height="150px" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.sname}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.lname1}</li>
                        <li className="list-group-item">{props.lname2}</li>
                        <li className="list-group-item">{props.lname3}</li>
                    </ul>
                    <div classNameName="card-body">
                        <a href="https://getbootstrap.com/docs/5.0/components/card/" class="card-link">{props.link1}</a>
                        <a href="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" class="card-link">{props.link}</a>
                    </div>
                </div>
            </div>
        </div>
   );
}
export default Cards;
