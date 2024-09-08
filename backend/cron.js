import cron from "cron";
import https from "https";

const URL = "https://expense-tracker-gd4j.onrender.com/";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent sucessfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("Error while sending request ", e);
    });
});

export default job;
