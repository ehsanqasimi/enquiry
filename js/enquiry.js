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



//code for enquiry form validation
const enquiry = document.getElementById('enquiry-form')

enquiry.addEventListener("submit", (e) => {
    e.preventDefault()

    const nameEnquiry = document.getElementById('name-enquiry')
    const emailEnquiry = document.getElementById('email-enquiry')
    const messageEnquiry = document.getElementById('message-enquiry')


    if (messageEnquiry.value.trim() === '') {
        document.querySelector('.message-error').classList.add('show')
    } else {
        document.querySelector('.message-error').classList.remove('show')
    }


    if (emailEnquiry.value.trim() === '') {
        document.querySelector('.email-error').classList.add('show')
    } else {
        document.querySelector('.email-error').classList.remove('show')
    }


    if (nameEnquiry.value.trim() === '') {
        document.querySelector('.name-error').classList.add('show')
    } else {
        document.querySelector('.name-error').classList.remove('show')
    }
})



const form = document.getElementById('enquiry-form');
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