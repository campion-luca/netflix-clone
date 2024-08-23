import { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

class FilmList extends Component {
  state = {
    test: {Search :[]}
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=1a24496b&s=" + this.props.filmc
      );
      console.log("PROPS dell'url arrivata", this.props.filmc);

      if (response.ok) {
        let test = await response.json();
        this.setState({ test: test});
        console.log("chiamata compiuta ");
        
      } else {
        throw new Error("chiamata FALLITA");
      }
    } catch (error) {
      console.log("ERRORE");
    }
  };



  render() {  
    return (
        // console.log("E' GIUSTO CAZZO", this.state.test.Search)
        <Container className="mt-4">
      <Row>
        {this.state.test.Search.map((filmsing) => {
          return (
            <Col xs={12} md={2} key={filmsing.imdbID}>
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={filmsing.Poster} />
              </Card>
            </Col>
          );
        })}
      </Row>
      </Container>
    );
  }
}

export default FilmList;
