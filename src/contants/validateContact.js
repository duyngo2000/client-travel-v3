import validator from "validator"


const validateContact = (name, email, content)=>{
    const message = {}
 
    const validateEmail = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };

    if(validator.isEmpty(name)){
        message.nameVN = "Vui lòng nhập tên của bạn!"
        message.nameENG = "Plese enter your name!"
    }
    if(validator.isEmpty(email)){
        message.emailVN = "Vui lòng nhập email!"
        message.emailENG = "Please enter your email!"
    }
    else{
        if(!validateEmail(email)){
            message.emailVN = "Email không hợp lệ!"
            message.emailENG = "Email is not valid!"            
        }
    }
    if(validator.isEmpty(content)){
        message.contentVN = "Bạn chưa nhập nội dung!"
        message.contentENG = "Please enter content!"
    }
    else{
        
        if(content.length < 10){
            message.contentVN = "Nội dung không hợp lệ!"
            message.contentENG = "Content is not valid!"
        }else{
            if(content.includes('cmm') || content.includes('cmn') || content.includes('duy đẹp trai')){
                message.contentVN = "Đừng có chưỡi thề mà!"
                message.contentENG = "No profanity!!"
            }
        }
    }

    return message
}
export default validateContact