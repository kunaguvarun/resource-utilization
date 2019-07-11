import moment from "moment";
moment().format();
let stats = [];

const generateStatsFor = date => {
  let startDate = new Date(moment(date).format("L"));
  let now = startDate;
  let servers = ["WACSRIB00001019", "WACSRIB00001020", "WACSRIB00001023"];

  while (moment(now).get("date") === moment(startDate).get("date")) {
    // still today
    now = moment(now)
      .add(5, "m")
      .toDate();
    let hour = moment(now).get("hour");

    servers.forEach(s => {
      stats.push({
        server: s,
        cpu:
          (hour > 20 && hour < 22) || (hour > 4 && hour < 6)
            ? Math.floor(Math.random() * (100 - 80) + 1) + 80
            : Math.floor(Math.random() * (10 - 1) + 1) + 1,

        memory:
          (hour > 16 && hour < 18) || (hour > 8 && hour < 10)
            ? Math.floor(Math.random() * (100 - 80) + 1) + 80
            : Math.floor(Math.random() * (10 - 1) + 1) + 1,

        cDrive:
          (hour > 11 && hour < 14) || (hour > 4 && hour < 6)
            ? Math.floor(Math.random() * (100 - 80) + 1) + 80
            : Math.floor(Math.random() * (10 - 1) + 1) + 1,

        dDrive:
          (hour > 21 && hour < 23) || (hour > 4 && hour < 6)
            ? Math.floor(Math.random() * (100 - 80) + 1) + 80
            : Math.floor(Math.random() * (10 - 1) + 1) + 1,

        timestamp: now
      });
    });
  }
  return stats;
};

stats.concat(
  generateStatsFor(moment().format("L")),
  generateStatsFor(moment().subtract(1, "day")),
  generateStatsFor(moment().subtract(2, "days"))
);

stats.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));

const filterStats = duration => {
  let filteredStats = [];

  switch (duration) {
    case "15-mins":
      filteredStats = stats.filter(s =>
        moment(s.timestamp).isBetween(
          moment().subtract(15, "minutes"),
          moment()
        )
      );
      break;

    case "hour":
      filteredStats = stats.filter(s =>
        moment(s.timestamp).isBetween(moment().subtract(1, "hour"), moment())
      );
      break;

    case "today":
      filteredStats = stats.filter(s =>
        moment(s.timestamp).isBetween(moment().format("L"), moment())
      );
      break;

    default:
      filteredStats = stats.filter(s =>
        moment(s.timestamp).isBefore(moment().format("L"))
      );
  }
  return filteredStats;
};

export const getCPU = duration => {
  let filteredStats = filterStats(duration);

  const data = [
    {
      label: "WACSRIB00001019",
      values: filteredStats
        .filter(s => s.server === "WACSRIB00001019")
        .map(obj => ({ x: obj.timestamp, y: obj.cpu }))
    }
  ];
  return data;
};

export const getMemory = duration => {
  let filteredStats = filterStats(duration);

  const data = [
    {
      label: "WACSRIB00001019",
      values: filteredStats
        .filter(s => s.server === "WACSRIB00001019")
        .map(obj => ({ x: obj.timestamp, y: obj.memory }))
    }
  ];
  return data;
};
