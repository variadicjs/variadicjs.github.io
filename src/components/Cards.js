import React from 'react';
import "./Cards.css";
import {Card, CardActions, CardText, FlatButton, CardMedia, CardTitle} from 'material-ui';

const Cards = (props) => (
  <Card className="custom-card">
    <CardMedia>
      <img src="https://code.org/images/apple-touch-icon-precomposed.png" alt="" />
    </CardMedia>
    <CardTitle title={props.demoNumber} subtitle={props.subtitle} />
    <CardActions>
      {/* TODO: FIGURE OUT HOW WE'LL GET THE INPUT VALUES */}
      <FlatButton label="Action1" onClick={(e) => props.onClickHandler(props.demoNumber,[2,4,4], e)}/>
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
       {props.cardText}
    </CardText>
  </Card>
);

export default Cards; 