import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { BarChart } from "react-d3-components";

const data = [
  {
    label: "somethingA",
    values: [
      { x: "12:45", y: 15 },
      { x: "12:40", y: 95 },
      { x: "12:35", y: 25 }
    ]
  }
];

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
        <Row>
          <Col>
            <div>
              <BarChart
                data={data}
                width={400}
                height={400}
                margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HistoricData;
