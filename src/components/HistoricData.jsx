import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { LineChart } from "react-d3-components";
import { getCPU, getMemory } from "../utilities/randomData";

class HistoricData extends Component {
  state = { selectedDuration: "hour" };

  handleDurationChange = event => {
    this.setState({ selectedDuration: event.target.value });
  };

  render() {
    const { selectedDuration } = this.state;
    const cpuStats = getCPU(selectedDuration);
    const memoryStats = getMemory(selectedDuration);

    return (
      <Container>
        <Row>
          <Col>
            <h2>Historic Data</h2>
          </Col>
          <Col style={{ marginTop: 10 }}>
            <select
              value={selectedDuration}
              onChange={this.handleDurationChange}
            >
              <option value="15-mins">15 mins</option>
              <option selected value="hour">
                1 hour
              </option>
              <option value="today">Today</option>
              <option value="past">Past</option>
            </select>
          </Col>
        </Row>
        <Row>
          <h3>CPU Usage</h3>
          <LineChart
            data={cpuStats}
            width={1200}
            height={400}
            margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          />
          <h3>Memory Usage</h3>
          <LineChart
            data={memoryStats}
            width={1200}
            height={400}
            margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          />
        </Row>
      </Container>
    );
  }
}

export default HistoricData;
