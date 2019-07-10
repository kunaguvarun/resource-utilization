import moment from "moment";
moment().format();

export const getRandomData = duration => {
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
