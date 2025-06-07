# DevTinder 💻❤️

A developer matchmaking platform that connects coders based on their tech stacks, interests, and collaboration preferences. Think Tinder, but for developers!

## 🚀 Overview

DevTinder is a full-stack MERN application where developers can:

* Create profiles with their skills and GitHub info
* Swipe left/right to match with other developers
* Chat and collaborate in real-time
* Discover like-minded coders for projects, hackathons, and learning

## 🌟 Features

* 🔐 JWT-based Authentication (Signup/Login)
* 👤 Developer Profiles (with bio, skills, GitHub integration)
* 👉 Swipe-to-match logic
* 💬 Real-time chat system
* 🌐 Fully responsive UI with modern design

## 💠 Tech Stack

**Frontend**:

* React (Vite)
* Tailwind CSS
* Axios

**Backend**:

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.IO (for chat)
* JWT & bcrypt (authentication/security)

**Deployment**:

* Backend: AWS EC2 with Nginx
* Frontend: Vite build served via reverse proxy

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AbhishekMalkhedkar/DevTinder-web.git
cd DevTinder-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_API_URL=http://localhost:5000/api
```

> Adjust the API URL based on your backend setup.

### 4. Run the App

```bash
npm run dev
```

App should be running at [http://localhost:5173](http://localhost:5173)

## 📸 Screenshots

*Add screenshots or GIFs here to showcase UI and features.*

## 📂 Folder Structure

```
/src
  ├── components/      # Reusable components
  ├── pages/           # Page components
  ├── services/        # API calls
  ├── contexts/        # Global state (auth, chat, etc.)
  └── App.jsx          # Root component
```

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a PR.

## 📬 Contact

**Abhishek Malkhedkar**
📧 [abhishekmalkhedkar3@gmail.com](mailto:abhishekmalkhedkar3@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/abhishek-malkhedkar-3b9664238)
🐙 [GitHub](https://github.com/AbhishekMalkhedkar)

---

⭐ If you like this project, consider giving it a star!
