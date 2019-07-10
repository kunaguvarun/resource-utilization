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
      cpu:
        moment(now).get("hour") > 20 && moment(now).get("hour") < 22
          ? Math.floor(Math.random() * (100 - 80) + 1) + 80
          : Math.floor(Math.random() * (10 - 1) + 1) + 1,

      memory: Math.floor(Math.random() * 100) + 1 + "%",
      cDrive: Math.floor(Math.random() * 100) + 1 + "%",
      dDrive: Math.floor(Math.random() * 100) + 1 + "%",
      timestamp: now
    });
  });
}

export const getCPU = () => {
  const data = [
    {
      label: "CPU",
      values: stats
        .filter(s => s.server === "WACSRIB00001019")
        .map(obj => ({ x: obj.timestamp, y: obj.cpu }))
    }
  ];
  return data;
};
