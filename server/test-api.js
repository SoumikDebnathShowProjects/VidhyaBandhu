/**
 * API health check script for VidhyaBandhu backend.
 * Tests all routes: public endpoints should return 2xx or expected error; protected should return 401 without token.
 */

const BASE = process.env.BASE_URL || "https://vidhyabandhu-1.onrender.com/api/v1";
const ROOT = process.env.ROOT_URL || "https://vidhyabandhu-1.onrender.com";

const tests = [
  // Root
  { name: "GET / (root)", method: "GET", url: ROOT, body: null, expectAuth: false },
  // Auth - public
  { name: "POST /auth/sendotp", method: "POST", url: `${BASE}/auth/sendotp`, body: { email: "test@example.com" }, expectAuth: false },
  { name: "POST /auth/login", method: "POST", url: `${BASE}/auth/login`, body: { email: "test@example.com", password: "test" }, expectAuth: false },
  { name: "POST /auth/reset-password-token", method: "POST", url: `${BASE}/auth/reset-password-token`, body: { email: "test@example.com" }, expectAuth: false },
  // Auth - protected (expect 401)
  { name: "POST /auth/changepassword", method: "POST", url: `${BASE}/auth/changepassword`, body: {}, expectAuth: true },
  // Course - public
  { name: "GET /course/getAllCourses", method: "GET", url: `${BASE}/course/getAllCourses`, body: null, expectAuth: false },
  { name: "GET /course/showAllCategories", method: "GET", url: `${BASE}/course/showAllCategories`, body: null, expectAuth: false },
  { name: "GET /course/getAverageRating", method: "GET", url: `${BASE}/course/getAverageRating`, body: null, expectAuth: false },
  { name: "GET /course/getReviews", method: "GET", url: `${BASE}/course/getReviews`, body: null, expectAuth: false },
  { name: "POST /course/getCourseDetails", method: "POST", url: `${BASE}/course/getCourseDetails`, body: { courseId: "000000000000000000000000" }, expectAuth: false },
  { name: "POST /course/getCategoryPageDetails", method: "POST", url: `${BASE}/course/getCategoryPageDetails`, body: { categoryId: "000000000000000000000000" }, expectAuth: false },
  // Course - protected (expect 401)
  { name: "GET /course/getInstructorCourses", method: "GET", url: `${BASE}/course/getInstructorCourses`, body: null, expectAuth: true },
  { name: "POST /course/getFullCourseDetails", method: "POST", url: `${BASE}/course/getFullCourseDetails`, body: { courseId: "000000000000000000000000" }, expectAuth: true },
  // Profile - protected
  { name: "GET /profile/getUserDetails", method: "GET", url: `${BASE}/profile/getUserDetails`, body: null, expectAuth: true },
  { name: "GET /profile/getEnrolledCourses", method: "GET", url: `${BASE}/profile/getEnrolledCourses`, body: null, expectAuth: true },
  { name: "GET /profile/instructorDashboard", method: "GET", url: `${BASE}/profile/instructorDashboard`, body: null, expectAuth: true },
  // Payment - protected
  { name: "POST /payment/capturePayment", method: "POST", url: `${BASE}/payment/capturePayment`, body: {}, expectAuth: true },
  { name: "POST /payment/verifyPayment", method: "POST", url: `${BASE}/payment/verifyPayment`, body: {}, expectAuth: true },
  // Contact - public
  { name: "POST /reach/contact", method: "POST", url: `${BASE}/reach/contact`, body: { firstname: "Test", lastname: "User", email: "test@example.com", message: "Test message", countrycode: "+91", phonenumber: "9999999999" }, expectAuth: false },
];

async function runOne(test) {
  const opts = {
    method: test.method,
    headers: { "Content-Type": "application/json" },
  };
  if (test.body && Object.keys(test.body).length) opts.body = JSON.stringify(test.body);
  let res;
  try {
    res = await fetch(test.url, opts);
  } catch (e) {
    return { ok: false, status: "ERR", message: e.message };
  }
  const status = res.status;
  let body;
  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }
  if (test.expectAuth) {
    return { ok: status === 401, status, message: status === 401 ? "Correctly requires auth" : (body?.message || body) };
  }
  return { ok: status < 500, status, message: body?.message || (typeof body === "string" ? body.slice(0, 80) : JSON.stringify(body).slice(0, 80)) };
}

async function main() {
  console.log("Base URL:", BASE);
  console.log("Root URL:", ROOT);
  console.log("---");
  let passed = 0;
  let failed = 0;
  for (const test of tests) {
    const result = await runOne(test);
    const status = result.ok ? "PASS" : "FAIL";
    if (result.ok) passed++; else failed++;
    console.log(`${status} ${test.name} -> ${result.status} ${result.message ? result.message.toString().slice(0, 60) : ""}`);
  }
  console.log("---");
  console.log(`Total: ${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
