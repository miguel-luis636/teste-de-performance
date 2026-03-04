import http from 'k6/http';
import { sleep } from 'k6';

/*
====================================================
🚀 K6 — ALL EXECUTORS STUDY SCRIPT
Objetivo:
Aprender TODOS os executors do k6 na prática.
====================================================
*/

export const options = {
  scenarios: {

    // ------------------------------------------------
    // ✅ 1. SHARED ITERATIONS
    // ------------------------------------------------
    shared_iterations_test: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 200,
      maxDuration: '30s',
      exec: 'sharedTest',
    },

    // ------------------------------------------------
    // ✅ 2. PER VU ITERATIONS
    // ------------------------------------------------
    per_vu_iterations_test: {
      executor: 'per-vu-iterations',
      vus: 10,
      iterations: 20,
      maxDuration: '30s',
      exec: 'perVuTest',
    },

    // ------------------------------------------------
    // ✅ 3. CONSTANT VUS
    // ------------------------------------------------
    constant_vus_test: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
      exec: 'constantVusTest',
    },

    // ------------------------------------------------
    // ✅ 4. RAMPING VUS
    // ------------------------------------------------
    ramping_vus_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 20 },
        { duration: '10s', target: 0 },
      ],
      exec: 'rampingVusTest',
    },

    // ------------------------------------------------
    // ✅ 5. CONSTANT ARRIVAL RATE
    // ------------------------------------------------
    constant_arrival_rate_test: {
      executor: 'constant-arrival-rate',
      rate: 30,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 50,
      exec: 'arrivalRateTest',
    },

    // ------------------------------------------------
    // ✅ 6. RAMPING ARRIVAL RATE
    // ------------------------------------------------
    ramping_arrival_rate_test: {
      executor: 'ramping-arrival-rate',
      startRate: 10,
      timeUnit: '1s',
      preAllocatedVUs: 50,
      stages: [
        { target: 30, duration: '10s' },
        { target: 60, duration: '10s' },
        { target: 0, duration: '10s' },
      ],
      exec: 'rampingArrivalRateTest',
    },

    // ------------------------------------------------
    // ✅ 7. EXTERNALLY CONTROLLED
    // ------------------------------------------------
    externally_controlled_test: {
      executor: 'externally-controlled',
      vus: 5,
      maxVUs: 50,
      duration: '30s',
      exec: 'externalControlTest',
    },
  },
};

/*
====================================================
📌 FUNÇÕES EXECUTADAS
====================================================
*/

export function sharedTest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(0.5);
}

export function perVuTest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(0.5);
}

export function constantVusTest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(0.5);
}

export function rampingVusTest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(0.5);
}

export function arrivalRateTest() {
  http.get('https://test.k6.io/contacts.php');
}

export function rampingArrivalRateTest() {
  http.get('https://test.k6.io/contacts.php');
}

export function externalControlTest() {
  http.get('https://test.k6.io/contacts.php');
}
