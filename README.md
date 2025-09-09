# Gelos Enterprises Training Institute Website

This is a responsive multi-page website for Gelos Enterprises (GE), a newly established training institute. The site was developed as part of the Diploma of Web Development at TAFE NSW.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup & Usage](#setup--usage)
- [Pages](#pages)
- [Contact](#contact)
- [License](#license)

## Overview

The website showcases GE’s values, qualifications, enquiry and contact forms, and general information. It is fully responsive and uses modern web development practices, including SCSS for styling and JavaScript for interactivity and form validation.

## Features

- Responsive navigation with burger menu for mobile and desktop layouts
- Dynamic highlighting of active navigation tabs
- Custom logo switching based on screen size
- Qualifications listing with detailed course information
- Enquiry and contact forms with client-side validation and error feedback
- Visual feedback for form input completion
- Social media icons and footer navigation

## Project Structure

```
about.html
contact.html
enquiryPage.html
index.html
qualification.html
img/
    inline-black.PNG
    inline-white.PNG
    stacked-black.PNG
    stacked-white.PNG
js/
    app.js
    enquiry.js
styles/
    style.css
    style.css.map
    style.scss
```

- **HTML files**: Each page of the site
- **img/**: Logos and images used throughout the site
- **js/**: JavaScript for navigation and form validation
- **styles/**: SCSS source, compiled CSS, and source map

## Technologies Used

- HTML5
- CSS3 / SCSS
- JavaScript (ES6)
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css) for icons
- [Google Material Icons](https://fonts.googleapis.com/icon?family=Material+Icons)

## Setup & Usage

1. **Clone or Download**  
   Download the project files to your local machine.

2. **Open in Browser**  
   Open `index.html` or any other page directly in your browser.

3. **Development**

   - Edit SCSS in `styles/style.scss` and compile to `style.css` for changes.
   - JavaScript files are linked per page (`js/app.js` for most, `js/enquiry.js` for enquiry page).

4. **Responsive Design**  
   The site adapts to mobile and desktop layouts automatically.

## Pages

- **Home (`index.html`)**: Introduction and values of GE.
- **About (`about.html`)**: Company background and mission.
- **Qualifications (`qualification.html`)**: List of available courses and details.
- **Enquiry (`enquiryPage.html`)**: Form for course enquiries.
- **Contact (`contact.html`)**: Contact details and message form.

## Contact

For questions or feedback, please contact:  
`info@example.com`  
`+1234567890`

## License

This project was created for educational purposes as part of the Diploma of Web Development at TAFE NSW.
