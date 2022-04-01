// Gọi Dom thẻ input để validate
let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let uName = document.getElementById('uname');
let password = document.getElementById('pwd');
let genders = document.querySelectorAll('.gender');
let confirmPass = document.getElementById('cf-pwd');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let birth = document.getElementById('birth');
let idResident = document.getElementById('idResident');



// Gọi DOM các cái message lỗi
let fName_error = document.querySelector('.fName-error');
let lName_error = document.querySelector('.lName-error');
let uName_error = document.querySelector('.uName-error');
let password_error = document.querySelector('.pass-error');
let gender_error = document.querySelectorAll('.gender-error');
let confirmPass_error = document.querySelector('.confpass-error');
let phone_error = document.querySelector('.phone-error');
let address_error = document.querySelector('.address-error');
let birth_error = document.querySelector('.birth-error');
let idResident_error = document.querySelector('.idResident-error');


let btnSignup = document.querySelector('#btn-signup');
let formSignup = document.getElementById('form-signup');
//Khi nhấn nút submit sẽ thực hiện validate

btnSignup.addEventListener('click',function Handle(){
    errorMessage();
});


// Hàm hiển thị ra các thông tin lỗi khi nhập
const errorMessage = function(){
    let confirmPassValue = confirmPass.value;
    let phoneValue = phone.value;
    let addressValue = address.value;
    let idResidentValue = idResident.value;
    let passValue = password.value;
    let formGender = document.querySelector('.form-gender');
    if(fName.value === ''){
        fName_error.innerHTML = 'Vui lòng điền họ của bạn';
        fName.classList.add('error-input');
        return false;
    }
    else if(!(fName.value.match(/^[a-zA-ZâăđêôơưấắếốớứầằềồờừẩẳểổởửẫẵễỗỡữậặệộợựáàảãạóòỏõọíìỉĩịúùủũụéèẻẽẹÂĂĐÊÔƠƯẤẮẾỐỚỨẦẰỀỒỜỪẨẲỂỔỞỬẪẴỄỖỠỮẬẶỆỘỢỰÁÀẢÃẠÓÒỎÕỌÍÌỈĨỊÚÙỦŨỤÉÈẺẼẸ]*$/))){
        fName_error.innerHTML = 'Họ của bạn không hợp lệ';
        fName.classList.add('error-input');
        return false;
    }
    else if(!(lName.value.match(/^[a-zA-ZâăđêôơưấắếốớứầằềồờừẩẳểổởửẫẵễỗỡữậặệộợựáàảãạóòỏõọíìỉĩịúùủũụéèẻẽẹÂĂĐÊÔƠƯẤẮẾỐỚỨẦẰỀỒỜỪẨẲỂỔỞỬẪẴỄỖỠỮẬẶỆỘỢỰÁÀẢÃẠÓÒỎÕỌÍÌỈĨỊÚÙỦŨỤÉÈẺẼẸ]*$/))){
        lName_error.innerHTML = 'Tên của bạn không hợp lệ';
        lName.classList.add('error-input');
        return false;
    }
    else if(lName.value === ''){
        lName_error.innerHTML = 'Vui lòng điền tên của bạn';
        lName.classList.add('error-input');
        return false;
    }
    
    else if(!(uName.value.match(/^[a-z0-9]+$/gi))){
        uName_error.innerHTML = 'Tên đăng nhập không có chứa kí tự đặc biệt và không được viết in hoa';
        uName.classList.add('error-input');
        return false;
    }
    else if(uName.value === ''){
        uName_error.innerHTML = 'Vui lòng điền tên đăng nhập';
        uName.classList.add('error-input');
        return false;
    }

    else if(!(passValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/))){
        password_error.innerHTML = 'Mật khẩu phải dài từ 6 kí tự trở lên, có 1 kí tự viết hoa, 1 chữ cái thường và 1 kí tự đặc biệt';
        password.classList.add('error-input');
        return false;
    }

    else if(confirmPassValue ===''){
        confirmPass_error.innerHTML = 'Vui lòng nhập xác nhận mật khẩu';
        confirmPass.classList.add('error-input');
        return false;
    }
    else if(confirmPassValue !== passValue){
        confirmPass_error.innerHTML = 'Mật khẩu không khớp';
        confirmPass.classList.add('error-input');
        return false;
    }
    else if(birth.value ===''){
        birth_error.innerHTML = 'Vui lòng chọn ngày sinh';
        birth.classList.add('error-input');
        return false;
    }
    else if(phoneValue ==='')
    {
        phone_error.innerHTML = 'Vui lòng nhập số điện thoại';
        phone.classList.add('error-input');
        return false;
    }
    else if(phoneValue.length <10 || phoneValue.length >11){
        phone_error.innerHTML = 'Số điện thoại không hợp lệ';
        phone.classList.add('error-input');
        return false;
    }
    else if(idResidentValue ===''){
        idResident_error.innerHTML = 'Vui lòng nhập số căn cước công dân';
        idResident.classList.add('error-input'); 
        return false;
    }
    else if(addressValue ===''){
        address_error.innerHTML = 'Vui lòng nhập địa chỉ';
        address.classList.add('error-input');
        return false;
    }
    else if(idResidentValue.length!==12){
        idResident_error.innerHTML = 'Căn cước công dân không hợp lệ';
        idResident.classList.add('error-input'); 
        return false;
    }
    else if(genders[0].value === "on" && genders[1].value ==="on"){
        formGender.classList.add('was-validated');
        return false;
    }

    
    return true;
};


//Hàm sau khi nhập sẽ xóa thông báo lỗi
const successMessage = function(){
    if(fName.value !== ''){
        fName_error.innerHTML = '';
        if(fName.classList.contains('error-input')){
            fName.classList.remove('error-input');
        }

    }
    if(lName.value !== ''){
        lName_error.innerHTML = '';
        if(lName.classList.contains('error-input')){
            lName.classList.remove('error-input');
        }

    }
    if(uName.value !== ''){
        uName_error.innerHTML = '';
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

    let confirmPassValue = confirmPass.value;
    if(confirmPassValue === passValue && confirmPassValue!==''){
        confirmPass_error.innerHTML = '';
        if(confirmPass.classList.contains('error-input')){
            confirmPass.classList.remove('error-input');
        }

    }

    let phoneValue = phone.value;
    if(phoneValue.length >0){
        phone_error.innerHTML = '';
        if(phone.classList.contains('error-input')){
            phone.classList.remove('error-input');
        }

    }

    let addressValue = address.value;
    if(addressValue!==''){
        address_error.innerHTML = '';
        if(address.classList.contains('error-input')){
            address.classList.remove('error-input');
        }

    }

    if(birth.value !==''){
        birth_error.innerHTML = '';
        if(birth.classList.contains('error-input')){
            birth.classList.remove('error-input');
        }

    }

    let idResidentValue = idResident.value;
    if(idResidentValue !==''){
        idResident_error.innerHTML = '';
        if(idResident.classList.contains('error-input')){
            idResident.classList.remove('error-input');
        }
    }
};

