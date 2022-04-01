let uName = document.getElementById('uname');
let password = document.getElementById('pwd');


let password_error = document.querySelector('.pass-error');

let btnLogIn = document.querySelector('#btn-login');


btnLogIn.addEventListener('click', function handle(e){
    handleLogIn(e);
    
});



function handleLogIn(e){
    let passValue = password.value;
    if(uName.value === ''){
        e.preventDefault();
        password_error.innerHTML = 'Tài khoản hoặc mật khẩu của bạn chưa đúng';
        uName.classList.add('error-input');
        return false;
    }
    else if(passValue.length <6){
        e.preventDefault();
        password_error.innerHTML = 'Tài khoản hoặc mật khẩu của bạn chưa đúng';
        password.classList.add('error-input');
        return false;
    }
    return true;
}

const successMessage = function(){
    if(uName.value !== ''){
        if(uName.classList.contains('error-input')){
            uName.classList.remove('error-input');
        }
    
    }
    
    let passValue = password.value;
    if(passValue.length>0){
        password_error.innerHTML = '';
        if(password.classList.contains('error-input')){
            password.classList.remove('error-input');
        }
    
    }


}

