import validator from "validator"

export const checkUsername = (userName) => {
    const message = {}

    if (validator.isEmpty(userName)) {
        message.userNameVN = "Vui lòng nhập tên tài khoản!"
        message.userNameENG = "Plese enter user name!"
    }
    return message
}
export const checkPassword = (password) => {
    const message = {}

    if (validator.isEmpty(password)) {
        message.passwordVN = 'Vui lòng nhập mật khẩu';
        message.passwordEND = 'Please enter your password';
    }
    return message
}
