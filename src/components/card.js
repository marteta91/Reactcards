import { Component } from "react";

import eye from "../assets/ico/img/eye.svg";
import edit from "../assets/ico/img/edit.svg";
import del from "../assets/ico/img/delete.svg";
import heart from "../assets/ico/img/heart.svg";
import star from "../assets/ico/img/star.svg";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="ct-card">
          <div className="ct-card-img">
            <img
              className="img-card"
              src={require("../assets/img/${this.props.imgURL}.jpg").default}
              alt={this.props}
            ></img>
            ;
          </div>
        </div>
        <div className="ct-card-info">
          <div className="ct-icons">
            <div className="ct-icons-like">
              <button className="bt-ico">
                <img className="img-ico" src={star} alt="star value buttom" />
              </button>
              <button className="bt-ico">
                <img className="img-ico" src={heart} alt="love button" />
              </button>
              <button className="bt-ico">
                <img className="img-ico" src={eye} alt="show  button" />
              </button>
            </div>
            <div className="ct-icons-modify">
              <button className="bt-ico">
                <img className="img-ico" src={edit} alt="edit button" />
              </button>
              <button className="bt-ico">
                <img className="img-ico" src={del} alt="delete button" />
              </button>
            </div>
          </div>
          <div className="ct-text">
            <h6 className="txt-card-title">{this.props.imgName}</h6>
            <h6 className="txt-card-user">{this.props.imgUser}</h6>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
