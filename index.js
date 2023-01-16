// code your solution here
const records = [
    //{ year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

function recordFinder(record) {
    return (record["result"] === "W")
};

function superbowlWin(record) {
    const tester = record.find(recordFinder);
    if (tester !== undefined) {
        return tester["year"];
    } else {
        return tester;
    }
};