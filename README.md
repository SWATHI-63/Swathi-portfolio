# Swathi S - Portfolio Website

A modern, dark-themed personal portfolio website showcasing skills, projects, and experience in web development and MERN stack.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark theme with cyan and purple accent colors
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Interactive Elements**: Hover effects, skill progress bars, and smooth scrolling
- **Modern UI/UX**: Clean, elegant design with gradient effects
- **Sections Include**:
  - Hero section with animated profile card
  - About section highlighting education and specialization
  - Skills section with progress bars for technical and soft skills
  - Projects showcase with 6 featured projects
  - Resume timeline with education, experience, and certifications
  - Contact form with validation
  - Social media links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icon library

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required

## 📁 Project Structure


```
Swathi-portfolio/
├── about.html
├── contact.html
├── education.html
├── home.html
├── index.html
├── interest.html
├── projects.html
├── README.md
├── resume.html
├── script.js
├── skills.html
├── styles.css
├── test-particles-simple.html
├── images/
└── resume/
```

## 🎨 Customization


### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --primary-color: #00d9ff;
  --secondary-color: #7b2ff7;
  --accent-color: #00d9ff;
  --bg-dark: #0a0e27;
  --bg-dark-secondary: #121635;
  --bg-card: #1a1f3a;
}
```

### Content
1. Update personal information in `index.html`
2. Replace social media links
3. Add your own projects and descriptions
4. Update skills and proficiency levels
5. Modify education and experience timeline

### Logo Consistency
To ensure the logo appears the same across all pages, use consistent HTML markup for the logo in the navbar. For example:
```html
<a href="home.html" class="logo">Swathi<span class="accent"></span></a>
```
Avoid extra spaces between the name and the accent span, as this can affect the visual alignment depending on your CSS.

### Adding Real Images
Replace the placeholder icons with actual images:
```html
<div class="project-image">
  <img src="path/to/your/image.jpg" alt="Project Name">
</div>
```

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1024px
- Mobile: Below 768px

## ✨ Key Features Implemented

1. **Sticky Navigation Bar** with active section highlighting
2. **Mobile Menu** with hamburger animation
3. **Scroll-triggered Animations** using Intersection Observer
4. **Skill Progress Bars** that animate on scroll
5. **Contact Form Validation** with success/error messages
6. **Smooth Scrolling** for navigation links
7. **Scroll-to-Top Button** that appears after scrolling
8. **Project Cards** with hover effects and overlay
9. **Timeline Layout** for resume section
10. **Parallax Effect** on hero section

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Future Enhancements

- [ ] Add blog section
- [ ] Integrate real contact form backend
- [ ] Add dark/light theme toggle
- [ ] Include project detail modals
- [ ] Add testimonials section
- [ ] Implement analytics tracking
- [ ] Add resume PDF download functionality

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Swathi S**
- Computer Science Engineering Student
- MERN Stack Developer
- Email: swathi.s@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Note**: This portfolio is designed to showcase skills for placement opportunities. Feel free to customize it according to your needs!
