import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import { Jumbotron } from "react-bootstrap";

export default function About() {
  return (
    <Jumbotron fluid style={{margin: "50px"}}>
      <h1>ABOUT US</h1>
      <br />
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <br />
      <Button variant="outlined" color="primary">
        Read More
      </Button>

       <br />
      <FacebookIcon color="primary" fontSize="large" />
      <TwitterIcon color="danger" fontSize="large" />
      <InstagramIcon color="secondary" fontSize="large" />
    </Jumbotron>
    
  );
}
