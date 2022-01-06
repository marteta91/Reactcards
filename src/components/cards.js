import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  render() {
    return (
      <div className="ct-cards">
        {this.props.data.cards.map((card, index) => (
          <card
            key={index}
            imgName={card.imgName}
            imgUser={card}
            imgURL={card.imgURL}
            index={index}
          ></card>
        ))}
      </div>
    );
  }
}
export default Cards;
