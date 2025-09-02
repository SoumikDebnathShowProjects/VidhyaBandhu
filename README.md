VidhyaBandhu

An ed-tech platform
Developer: Soumik Debnath


Project Description

VidhyaBandhu is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack (ReactJS, NodeJS, MongoDB, and ExpressJS).

VidhyaBandhu aims to provide:

A seamless and interactive learning experience for students, making education more accessible and engaging.

A platform for instructors to showcase their expertise and connect with learners across the globe.

This document covers the technical details of the platform, including:

System Architecture

Front-end

Back-end

API Design

Deployment

Testing

Future Enhancements

In summary, VidhyaBandhu is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise.

System Architecture

The VidhyaBandhu platform consists of three main components: the front end, the back end, and the database. It follows a client-server architecture, with the front end serving as the client and the back end + database as the server.

Front-end

Built with ReactJS for a dynamic and responsive user interface.

Communicates with the back end using RESTful APIs.

Back-end

Built with NodeJS and ExpressJS for scalability and robustness.

Handles business logic, authentication, course management, and payment integration.

Database

Powered by MongoDB (NoSQL), storing course content, user data, and media files.

Supports unstructured/semi-structured data (videos, PDFs, images).

Front-end Details

The front end of VidhyaBandhu includes:

For Students:

Homepage – Overview of the platform and quick links.

Course List – Displays available courses with descriptions and ratings.

Wishlist – Students can bookmark preferred courses.

Cart & Checkout – Course purchase flow.

Course Content – Course-specific learning material (videos, documents, etc.).

User Details – Student profile information.

Edit User Details – Profile management.

For Instructors:

Dashboard – Overview of courses, ratings, and student engagement.

Insights – Analytics on student activity and course performance.

Course Management – Create, update, and delete courses.

Profile Management – Edit and update instructor details.

For Admin (future scope):

Dashboard & Insights – Platform-wide metrics.

Instructor Management – Manage instructor details and courses.

User & Course Management – Administrative oversight.

Tech Stack (Front-end):

ReactJS for UI

Tailwind CSS for styling

Redux for state management

VSCode for development

Back-end Details
Architecture

Monolithic structure built with Node.js + Express.js.

MongoDB as the database.

Key Features:

Authentication & Authorization – Secure login/signup using JWT & OTP verification.

Course Management – CRUD operations for courses and media.

Payment Integration – Razorpay for checkout and enrollment.

Cloud-based Media Handling – Using Cloudinary for images, videos, and PDFs.

Markdown Support – For rendering text-based course content.

Tech Stack (Back-end):

Node.js & Express.js

MongoDB with Mongoose

JWT for authentication

Bcrypt for password hashing

Database Schema:

Student Schema – name, email, password, enrolled courses.

Instructor Schema – name, email, password, created courses.

Course Schema – course details, description, instructor info, media.

API Design

REST API using Node.js + Express.js.

Sample Endpoints:

POST /api/auth/signup – Register a user (student/instructor).

POST /api/auth/login – Authenticate user & issue JWT.

POST /api/auth/verify-otp – Verify OTP during registration.

POST /api/auth/forgot-password – Reset password via email.

GET /api/courses – List all courses.

GET /api/courses/:id – Fetch details of a specific course.

POST /api/courses – Create a new course.

PUT /api/courses/:id – Update a course.

DELETE /api/courses/:id – Remove a course.

POST /api/courses/:id/rate – Add a course rating.

Deployment

Front-end: Hosted on Vercel

Back-end: Hosted on Render or Railway

Database: Hosted on MongoDB Atlas

Media: Managed via Cloudinary

Future Enhancements

🎮 Gamification – Badges, points, leaderboards for student engagement.

🎯 Personalized Learning Paths – Custom study plans based on student goals.

💬 Social Learning – Discussions, group projects, and peer feedback.

📱 Mobile App – iOS and Android versions.

🤖 AI-powered Recommendations – Smart course suggestions.

🕶️ VR/AR Integration – Immersive learning for selected courses.

Conclusion

VidhyaBandhu is a robust, scalable, and engaging ed-tech platform built with the MERN stack. It provides an interactive learning experience for students and a powerful platform for instructors. Future enhancements like gamification, AI-driven learning, and mobile apps will make it even more engaging and impactful.
