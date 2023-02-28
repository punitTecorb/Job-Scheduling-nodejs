import moment from "moment-timezone";
var cron = require('node-cron');
cron.schedule("*/15 * * * * *", function () {
    console.log("---------------------");
    console.log("running a task every 15 seconds");
});

cron.schedule("1 * * * *", function () {
    console.log("---------------------");
    console.log('Running a task every 1 minute');
});

cron.schedule("0 0 25 * *", function () {
    console.log("---------------------");
    console.log('Running a task every twenty-Fifth day of the month.');
});
