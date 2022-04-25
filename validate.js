const pass1 = document.getElementById('password');
const pass2 = document.getElementById('passwordConfirm');
const btn = document.getElementById('btnCreate')
let pass1value = document.getElementById('password').value;
let pass2value = document.getElementById('passwordConfirm').value;
let check = null

function checkPassword() {
    let pass1value = document.getElementById('password').value;
    let pass2value = document.getElementById('passwordConfirm').value;
    if (pass1value == pass2value) {
        pass1.classList.remove('incorrect')
        pass2.classList.remove('incorrect')
        pass1.classList.add('correct')
        pass2.classList.add('correct')
        check = 'positive'
    } else {
        pass1.classList.remove('correct')
        pass2.classList.remove('correct')
        pass1.classList.add('incorrect')
        pass2.classList.add('incorrect')
        check = 'negative'
    }
}

function runCheckPassword() {
    pass1.addEventListener('keyup', () => {
        checkPassword()
        activateBtn()
    })
    pass2.addEventListener('keyup', () => {
        checkPassword()
        activateBtn()
    })
}

function activateBtn() {
    if (check == 'positive') {
        btn.disabled = false

    } else if (check === 'negative') {
        btn.disabled = true
    } 
}

runCheckPassword()