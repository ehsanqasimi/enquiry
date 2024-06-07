let burger = document.querySelector('.burger')
let ul = document.querySelector('.ul')

burger.addEventListener('click', () => {
    if (burger.textContent === 'close') {
        burger.textContent = 'menu'
        ul.classList.add('hide')
    } else {
        burger.textContent = 'close';
        ul.classList.remove('hide')
    }
});


let allLi = document.querySelectorAll('.tab')
allLi.forEach(li => {
    li.addEventListener('click', function () {
        // Remove "active" class from all elements
        allLi.forEach(item => {
            item.classList.remove('active');
        });

        // Add "active" class to the clicked element
        this.classList.add('active');
    });
});



let logo = document.querySelector('.logo')
if (window.innerWidth >= 900) {
    logo.src = './img/inline-white.png'
    // location.reload()
}


//code for contact form validation
const contactForm = document.getElementById('contact-form')

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')

    
    if (message.value.trim() === '') {
        document.querySelector('.message-error').classList.add('show')
    } else {
        document.querySelector('.message-error').classList.remove('show')
    }


    if (email.value.trim() === '') {
        document.querySelector('.email-error').classList.add('show')
    } else {
        document.querySelector('.email-error').classList.remove('show')
    }


    if (name.value.trim() === '') {
        document.querySelector('.name-error').classList.add('show')
    } else {
        document.querySelector('.name-error').classList.remove('show')
    }
})

const allInputs = document.getElementsByTagName('input')

// allInputs[0].style.backgroundColor = 'red' 




const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            this.style.backgroundColor = 'lightgreen';
        } else {
            this.style.backgroundColor = 'white';
        }
    });
});


