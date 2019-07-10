import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class HistoricData extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3">
            <h2>Historic Data</h2>
          </Col>
          <Col sm="2" style={{ marginTop: 10 }}>
            <select>
              <option name="15-mins">15 mins</option>
              <option name="hour">1 hour</option>
              <option name="today">Today</option>
              <option name="past">Past</option>
            </select>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HistoricData;
