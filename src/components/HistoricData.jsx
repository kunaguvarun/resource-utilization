import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { BarChart } from "react-d3-components";
import { getCPU } from "../utilities/randomData";

class HistoricData extends Component {
  state = { selectedDuration: "15-mins" };

  handleDurationChange = event => {
    this.setState({ selectedDuration: event.target.value });
  };

  render() {
    const { selectedDuration } = this.state;
    const data = getCPU(selectedDuration);

    return (
      <Container>
        <Row>
          <Col sm="3">
            <h2>Historic Data</h2>
          </Col>
          <Col sm="2" style={{ marginTop: 10 }}>
            <select
              value={selectedDuration}
              onChange={this.handleDurationChange}
            >
              <option selected value="15-mins">
                15 mins
              </option>
              <option value="hour">1 hour</option>
              <option value="today">Today</option>
              <option value="past">Past</option>
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
