# Sean Chin's Personal Portfolio Website

#### Video Demo: https://youtu.be/0RZ7veUrWWQ

---

### Description:

This project is my personal portfolio website built using HTML, CSS, and JavaScript. The purpose of this website is to showcase more about myself, my experiences, achievements, projects, certfications and more. It is designed to be clean, minimalistic and interactive.

The website consists of four main pages: **Home**, **About**, **Portfolio**, and **Contact**. Each page has a navigation bar, allowing users to seamlessly explore different sections. A key feature of the site is a **dark/light mode toggle**, implemented using JavaScript and CSS variables, with the user's preference stored in `localStorage` so that it persists across pages.

---

### Project Structure:
project-folder/
│── home.html
│── about.html
│── portfolio.html
│── contact.html
│── css/
│ ├── home.css
│ ├── about.css
│ ├── portfolio.css
│ ├── contact.css
│ ├── upper_border.css
│── images/
│ ├── CS50P cert.jpg
│ ├── yijc_cca.jpg
│ ├── service_transcript.jpg
│ └── ... other images
│── project.js
│── README.md

### Project Files:

- **home.html**: Home page with welcome message, statement, and dark/light mode toggle.
- **about.html**: A page to provide some basic information about myself such as educational background, hobbies, and future goals.
- **portfolio.html**: A page which showcases certifications, mini-projects, achievements, and work experience.
- **contact.html**: Provides contact information with clickable phone, email, and GitHub links.
- **CSS files**: Each page has its own CSS file (home.css, about.css, portfolio.css, contact.css) for styling of individaul pages. Dedicated CSS files for each page are for organisation, easier access and modularity. It also contains shared variables for dark/light mode.
- **upper_border.css** A CSS file dedicated to styling the navigation bar found on every page except the homepage.
- **project.js**: Handles light/dark mode theme toggle, rememebering light/dark mode preference, and active highlighting of navigation links.

---

### Features:

- **Responsive Layout:**
   I used CSS layout techniques such as Grid and Flexbox to build a responsive interface that dynamically adjusts to different screen sizes across desktop and mobile. This ensured that elements like
   text, images, and videos properly fit into different screen sizes without breaking the website

- **Navigation bar:**
   A fixed navigation bar at the bottom of the homepage and the top of every other page to facilitate navigation of website. JavaScript was also used to achieve active navigation highlighting so that users could better identify what page they were in.

- **Dark/Light Mode:**
   This feature was added to enhance users’ experience by accommodating their personal preferences for light or dark mode, while also considering the different lighting conditions they may be in.
   JavaScript was used to dynamically toggle a dark-mode class on the document to switch between dark/light mode and stores the user’s theme preference using localStorage to ensure consistency of light/dark theme across page reloads. CSS properties were used to store color values for light/dark theme, making it easier to switch between the two themes.

### Design Choices

- **Typography:**
   `Sora` was used for Home page for a bold, modern look.
   `Outfit` was used for body text for readability and professionalism.

- **Visual Layout:**
   For portfolio page, which contains the most content, bold headers were used to distinguish the different sections and grab users' attention, horizontal lines were added to divide the sections, and consistent spacing to achieve a well-structured layout.

- **Navigation bar:**
   To maximise vertical screen space and reduce screen clutter, allowing user to focus on the main content. Placing it at the top instead of on the left also preserves horizontal space and allow more room for content to stretch across the page width-wise. This also ensures usability on smaller screens with limited horizontal space like mobile.

- **Color/theme:**
   A simple color scheme was chosen, with black text on a white background for light mode and white text on a dark background for dark mode. This gives a clean appearance while also providing high contrast for readability.

---

### Reflection:

Through this project, I learnt to structure a website with HTML, create my desired design layout using CSS grid and flexbox, make the site adaptive to different screen sizes and add interactivity to a site using JavaScript. I also gained experience in making design choices to improve usability and visual appearance of my website, and in identifying and fixing issues, particularly those related to layout.

---


