// ============================================================
// Mission Call Guess Map — Configuration & Setup Guide
// ============================================================
// It is SAFE to commit this file to a public GitHub repo.
// Firebase config keys are NOT secrets — security is enforced
// by Firestore rules, not by keeping these values private.
// ============================================================

// ── STEP 1: Firebase ────────────────────────────────────────
// 1a. Go to https://console.firebase.google.com
// 1b. Create a new project (any name)
// 1c. Add a Web app to the project (+</> icon on Project Overview)
// 1d. Copy the firebaseConfig object below and fill it in.
// 1e. Go to Build → Firestore Database → Create Database.
//     Choose a region, then click "Start in production mode" (NOT test mode).
//
// 1f. IMPORTANT — paste these security rules in Firestore:
//     (Firestore → Rules tab → replace all content → Publish)
//
//   rules_version = '2';
//   service cloud.firestore {
//     match /databases/{database}/documents {
//       match /guesses/{docId} {
//         allow read:   if true;          // anyone can view the map
//         allow create: if true;          // anyone can submit a guess
//         allow update, delete: if false; // no editing or deleting
//       }
//     }
//   }

window.firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
};

// ── STEP 2: Jawg Maps (free map tiles) ──────────────────────
// 2a. Sign up at https://www.jawg.io/lab/  (free, no credit card)
// 2b. In the Jawg dashboard go to Access Tokens.
// 2c. Copy your default access token and paste it below.
// Free tier: 75,000 tile requests/month — more than enough.

window.JAWG_TOKEN = "YOUR_JAWG_ACCESS_TOKEN";

// ── STEP 3: Deploy ──────────────────────────────────────────
// 3a. Push the mission-call/ folder to a GitHub repository.
// 3b. In repo Settings → Pages → Deploy from branch → main → / (root).
// 3c. Share the GitHub Pages URL with family/friends!
//
// ── VERIFICATION checklist ──────────────────────────────────
// [ ] Open URL in Browser A — should see the form
// [ ] Submit a guess — check Firestore console for the document
// [ ] Open URL in Browser B (private/incognito) — should see form too
// [ ] Open URL in Browser A again — should skip to map (IP dedup)
// [ ] On map: confirm crewmate pins appear with names on click
// [ ] Click the "MISSION CALL REVEAL" title 5 times quickly
//     → password prompt appears
//     → enter the admin password to access the reveal form
// [ ] Submit actual location → gold star pin appears, winner highlighted
