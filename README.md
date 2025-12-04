Stellar – A Modern Twitter-Like Social Platform
<p align="center"> <img src="./screenshots/stellar-logo.png" alt="Stellar Logo" width="120"/> </p>

Stellar is a lightweight, modern social media web application inspired by Twitter.
It is built using React and Vite, styled with a glassmorphism interface, and powered by Firebase (Authentication, Firestore, and Storage).

The platform allows users to:

Post text updates

Like and delete posts

Sign in with Google

Experience a visually appealing, glass-based UI

(Upcoming) Upload images, comment on posts, and more

Preview
<p align="center"> <img src="./screenshots/screenshot1.png" alt="Stellar App Screenshot" width="700"/> </p>
Features
Google Authentication

Secure sign-in using Firebase Authentication.

Create Posts

A smooth and minimal composer to share updates.

Like Posts

Interactive liking system synchronized through Firestore.

Delete Posts

Users can remove their own posts, updated in real time.

Demo Posts

Default posts are shown when no real posts exist to keep the feed populated.

Glassmorphism UI

A clean, modern interface with translucent components and soft highlights.

Real-Time Updates

Firestore provides instant synchronization across devices.

Tech Stack
Technology	Purpose
React + Vite	Frontend framework and development environment
Firebase Authentication	User sign-in with Google
Firestore	Real-time database for posts
Firebase Storage	(Upcoming) Image uploads
TailwindCSS	Styling and UI utilities
Custom Glassmorphism Theme	Visual design layer
Getting Started
1. Clone the Repository
git clone https://github.com/YOUR-USERNAME/stellar.git
cd stellar

2. Install Dependencies
npm install

3. Add Firebase Configuration

Create:

src/firebase.ts


Add:

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your config here
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

4. Run Development Server
npm run dev

Project Structure
stellar/
 ├── src/
 │   ├── assets/          → Logo and visuals
 │   ├── components/      → Sidebar, Composer, PostCard, etc.
 │   ├── contexts/        → Authentication context
 │   ├── pages/           → Home, Profile, NotFound
 │   ├── firebase.ts      → Firebase setup
 │   └── App.tsx
 ├── screenshots/         → App screenshots and logo
 ├── public/
 └── README.md

Authors
Name	GitHub
Rakshit Kumar	github.com/USERNAME
Shreya Shinde
github.com/USERNAME
Future Enhancements

Image uploads (Firebase Storage)

Comments

Notifications

Theme switching

Threads and replies

Editable profile pages

Contributions

Contributions, suggestions, and improvements are welcome.
Feel free to open an issue or submit a pull request.
