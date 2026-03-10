import http from "k6/http";
import exec from "k6/execution";
import { sleep } from "k6";

export const options = {

  vus: 20,
  duration: "1m",

  thresholds: {
    http_req_duration: ["p(95) < 500"],
    http_req_failed: ["rate < 0.01"],
  },
};

export default function () {

  const vu = exec.vu.idInTest;

  console.log(`VU ${vu}`);

  http.get("https://test.k6.io");

  sleep(1);
}