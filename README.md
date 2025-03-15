![TaskFlow Banner](./public/images/TaskFlow%20Banner.png)

# TaskFlow (To-Do List)

## Description

TaskFlow is a powerful and intuitive web application designed to help users manage and organize their tasks efficiently. It provides a user-friendly interface to add, view, and manage to-do items, enhancing workflow organization and task tracking.

## 📸 Screenshots

Explore TaskFlow’s clean and intuitive UI!

### **Home Page**
![TaskFlow Home](https://res.cloudinary.com/dnytagac4/image/upload/v1742026378/TaskFlow_Homepage_w31rzr.png)

### **Task Management Dashboard**
#### Light Mode
![TaskFlow Dashboard](https://res.cloudinary.com/dnytagac4/image/upload/v1742026378/TaskFlow_Dashboard_wgifsl.png)

#### Dark Mode
![TaskFlow Dashboard Dark](https://res.cloudinary.com/dnytagac4/image/upload/v1742026378/TaskFlow_Dashboard_Dark_kbrkdt.png)


# Table of Contents

  - [Features](#-features)
  - [Upcoming Features](#-upcoming-features)
  - [Tech Stack](#️-tech-stack)
  - [Setup Instructions](#️-setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Live Preview](#-live-preview)
  - [Acknowledgments](#-acknowledgments)
  - [Code of Conduct](#-code-of-conduct)
  - [License](#-license)
  - [Authors](#-authors)
  - [About Me](#-about-me)
  - [Feedback](#-feedback)
  - [Contribution Guidelines](#-contribution-guidelines)

## ✨ Features

- **Add Tasks:** Create new tasks with a title.
- **View Tasks:** Display a list of all tasks added by the user.
- **Edit Tasks:** Modify the details of existing tasks.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Mark Tasks as Complete:** Track progress by marking tasks as completed.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## 🚀 Upcoming Features

- **Login:** Implementing a login page (email & Google OAuth) for user authentication.
- **Multiple Lists:** Allow users to create multiple lists such as work, home, and shopping.
- **Add Date and Time:** Enable users to connect specific dates and times with their tasks.
- **List Segregation:** Organize lists based on parameters like today, week, scheduled, afternoon, and tonight for better navigation.
- **Tags:** Allow each task to be tagged for easy search and categorization.
- **Optional Description:** Enable users to add optional descriptions to their tasks.

**Currently Working on Feature User Authentication ContextProvider...**


## 🖥️ Tech Stack

- **Frontend:** JavaScript, TypeScript, Next JS, HTML, CSS, 
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)

## ⚙️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rishabhgokhe/TaskFlow.git

2. **Navigate to Repository**
    ```bash
    cd TaskFlow

3. **Install Node Modules**
    ```bash
    npm install

4. **Setup Environment Variables:**  
   Create a `.env.local` file in the root directory and add the following:  
       JWT_SECRET- is essential for generating login cookies
       <br/>
       MONGODB_URI - required for add and fetching data
       <br/>
   ```plaintext
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<randomString>
   AUTH_GOOGLE_ID=<your-auth-google-id>
   AUTH_GOOGLE_SECRET=<your-auth-google-secret>

5. **Run project and start Development**
    ```bash
    npm run dev

6. **Access the Application:**  
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).


## 🌐 Live Preview

TaskFlow is live on Vercel: [taskflow20.vercel.app](https://taskflow20.vercel.app/)

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org/) for the Frontend Framework
- [React](https://react.dev/) for the Frontend Framework
- [MongoDB](https://www.mongodb.com/) for the database management system
- [Node.js](https://nodejs.org/) for the JavaScript runtime
- [Express.js](https://expressjs.com/) for the web application framework

## 📜 Code of Conduct

We expect all participants in our community to adhere to our Code of Conduct. Please read the full text [here](CODE_OF_CONDUCT.md).

## 🔒 License  

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license.

You are **welcome to contribute** via pull requests and issues, but **commercial use, redistribution, or proprietary modifications** are **strictly prohibited** without explicit permission.

For full license details, refer to the [LICENSE](LICENSE) file.

For licensing inquiries or permissions, please contact:
[![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)

## 💡 Contribution Guidelines

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## 👨🏻‍💻 Authors

- [Rishabh Gokhe (A Computer Science Student)](https://www.github.com/rishabhgokhe)

## 🚀 About Me

Hi there! 👋 I'm Rishabh Gokhe, the developer behind TaskFlow. I'm passionate about creating useful and user-friendly web applications that help people improve their productivity and organization. I'm always learning new technology...

Feel free to reach out if you have any questions, suggestions, or just want to chat about programming and technology. I'm always excited to connect with fellow developers and enthusiasts!

### My Vision

TaskFlow is a project born out of my desire to create a simple yet powerful tool for managing tasks. I believe that staying organized is key to success, and TaskFlow is designed to help users achieve just that.

## 📨 Feedback

If you have any feedback, please reach out to us at 
[![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)

## 🔗 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rishabh-gokhe-22168b287)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=outline&logoColor=white)](https://portfolio-rishabhgokhe.vercel.app/)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/rishabh_gokhe/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rishabhgokhe)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/rishabhgokhe)
[![Instagram](https://img.shields.io/badge/Instagram-DD2A7B?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rishabh_gokhe)

**Email Address** : [rishabhgokhe20contact@gmail.com](mailto:rishabhgokhe20contact@gmail.com)