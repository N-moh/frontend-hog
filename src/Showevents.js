import React, {useState} from 'react';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
//import Container from 'react-bootstrap/Container';
function Showevent() {
const [count, setCount] = useState([0,0,0,0,0]);
function updateCount(index){
    let newCount=[...count]
    newCount[index]=newCount[index]+1
    setCount(newCount)
}
  return (
    <CardGroup>
    <Card className = "cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic1.jpg" />
        <Card.Body >
          <Card.Title>Code Club</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          Sun, Jan9, 4:00 pm
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
          Online
          </Card.Subtitle>
          <Card.Text>Join for an hour of free coding on Scratch </Card.Text>
          <p>{count[0]}</p>
        <Button onClick={() => updateCount(0)}>
        Likes
         </Button>
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic2.jpg" />
        <Card.Body >
          <Card.Title>Careers Fair</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          Wed, Mar 2, 10:00
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
          Sheffield
          </Card.Subtitle>
          <Card.Text>Looking for a new career?please join</Card.Text>
          <p>{count[1]}</p>
        <Button onClick={() => updateCount(1)}>
        Likes
         </Button>
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic3.jpg" />
        <Card.Body>
          <Card.Title>Peter Pan</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Fri, Jan 21, 19:00
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Sheffield
          </Card.Subtitle>
          <Card.Text>A traditional family pantomine to enjoy</Card.Text>
          <p>{count[2]}</p>
        <Button onClick={() => updateCount(2)}>
        Likes
         </Button>
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic4.jpg" />
        <Card.Body>
          <Card.Title>Kelham Island</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          Tue, March 13, 9:00am
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
           London
          </Card.Subtitle>
          <Card.Text>Discover the fascinating stories about its history</Card.Text>
          <p>{count[3]}</p>
        <Button onClick={() => updateCount(3)}>
        Likes
         </Button>
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic5.jpg"/>
        <Card.Body>
          <Card.Title>Vegan Market</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          Sun, Jan 16, 10:30am
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
           Sheffield
          </Card.Subtitle>
          <Card.Text>Huge variety of food and much more </Card.Text>
          <p>{count[4]}</p>
        <Button onClick={() => updateCount(4)}>
        Likes
         </Button>
         <Button variant="primary">Find More</Button>
        </Card.Body>
      </Card>
      </Card>
      </CardGroup>
  );
}
export default Showevent;