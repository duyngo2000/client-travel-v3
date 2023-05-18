import validator from "validator"

export const checkUsername = (username) => {
    const message = {}
    if (validator.isEmpty(username)) {
        message.userNameVN = "Vui lòng nhập tên tài khoản!"
        message.userNameENG = "Plese enter user name!"
    } else {
        if (username.length < 6) {
            message.userNameVN = "Tên tài khoản phải nhiều hơn 6 ký tự!"
            message.userNameENG = "Account name must be more than 6 characters!"
        }
    }
    return message
}
export const checkPassword = (password) => {
    const message = {}
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");

    if (password.length === 0) {
        message.passwordVN = 'Vui lòng nhập mật khẩu!';
        message.passwordEND = 'Enter your password!';
    }
    else if (false === enoughRegex.test(password)) {
        message.passwordVN = 'Nhiều hơn 8 kí tự';
        message.passwordEND = 'Password must be more than 8 characters!';
    }
    else if (!strongRegex.test(password) && !mediumRegex.test(password)) {
        message.passwordVN = 'Mật khẩu phải chứa chữ hoa chữ thường hoặc số!';
        message.passwordEND = 'Password must contain upper case letters or numbers!';
    }
    return message
}
