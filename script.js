let loginBtn = document.getElementById('login');
let signUpBtn = document.getElementById('sign-up');
let button = document.getElementById('btn');

const signUp = () =>{
    signUpBtn.style.left='50px'
    loginBtn.style.left='-450px'
    button.style.left='110px'
}
const login = () =>{
    signUpBtn.style.left='600px'
    loginBtn.style.left='100px'
    button.style.left='0'
}

const openLogin = ()=>{
    let form = document.querySelector('.form-bg');
    form.style.display = 'flex'
    console.log(form)
}
// openLogin();