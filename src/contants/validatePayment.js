import validator from "validator"


const validatePayment = (name, yearOfBirth, address, email, numberPhone, id)=>{
    const message = {}
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    if(validator.isEmpty(name)){
        message.nameVN = "Vui lòng nhập tên của bạn!"
        message.nameENG = "Plese enter your name!"
    }
    if(yearOfBirth.length <= 0 || yearOfBirth <= 1900){
        message.yearOfBirthVN = "Năm sinh không hợp lệ!"
        message.yearOfBirthENG = "Plese enter year of birth!"
    }
    if(validator.isEmpty(address)){
        message.addressVN = "Vui lòng nhập địa chỉ!"
        message.addressENG = "Please enter address!"
    }

    if(validator.isEmpty(email)){
        message.emailVN = "Vui lòng nhập email!"
        message.emailENG = "Please enter email!"
    }else{
        if(!validateEmail(email)){
            message.emailVN= 'Email không hợp lệ!'
        }
    }
    if(numberPhone){
        if(numberPhone.length < 10 || numberPhone.length >= 11){
            message.numberPhoneVN = "Số điện thoại không hợp lệ!"
            message.numberPhoneENG = "Invalid phone number!"
        }
    }
    else{
        message.numberPhoneVN = "Vui lòng nhập số điện thoại!"
        message.numberPhoneENG = "Plese enter phone number!"
    }
    if(id.length <=0){
        message.idVN = "Vui lòng chọn phương thức thanh toán!"
        message.idENG = "Please enter payment!"
    }
    return message
}
export default validatePayment