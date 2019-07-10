import moment from "moment";
moment().format();

let startDate = new Date(moment().format("L"));
let now = startDate;
let stats = [];
let servers = ["WACSRIB00001019", "WACSRIB00001020", "WACSRIB00001023"];

while (moment(now).get("date") === moment(startDate).get("date")) {
  // still today
  now = moment(now)
    .add(5, "m")
    .toDate();
  servers.forEach(s => {
    stats.push({
      server: s,
      cpu: Math.floor(Math.random() * 100) + 1 + "%",
      memory: Math.floor(Math.random() * 100) + 1 + "%",
      cDrive: Math.floor(Math.random() * 100) + 1 + "%",
      dDrive: Math.floor(Math.random() * 100) + 1 + "%",
      timestamp: now
    });
  });
}

export const getCPU = () => {};

export const getRandomData = duration => {
  let endDate = new Date();
  let startDate = moment(endDate)
    .subtract(15, "minutes")
    .toDate();

  const data = [
    {
      label: "somethingA",
      values: [
        { x: "SomethingA", y: 10 },
        { x: "SomethingB", y: 4 },
        { x: "SomethingC", y: 3 }
      ]
    }
  ];

  return data;
};
