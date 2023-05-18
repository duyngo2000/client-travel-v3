import React, { useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import {
  Lock,
  Person,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@material-ui/icons"
import { useSelector } from "react-redux"
import axios from "axios"
import md5 from "../contants/md5"
import { checkPassword, checkUsername } from "../contants/validateAccountLogin"
import { setCookie } from "../contants/cookie"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { moblie, tablet } from "../contants/sizeScreen"
import { urlLogin } from "../contants/urlContants"

const RightToLeft = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    left: 50%;
    opacity: 1;
  }
`
const LeftToRight = keyframes`
  0%{
    left: 50%;
  }
  80%{
    opacity: 0.5;
  }
  100%{
    left: 80%;
    z-index: -1;
  }
`
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  animation: ${({ change }) => (change ? RightToLeft : LeftToRight)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`
const FormLogIn = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NameLogIn = styled.p`
  margin: 0;
  text-align: center;
  color: #333;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`
const PositionAbsolute = {
  position: "absolute",
  top: "10px",
  left: "10px",
  zIndex: 1,
}
const Input = styled.div`
  color: #acacac;
  background-color: #f0f0f0;
  margin: 10px 0;
  padding: 8px 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 30px;

  @media screen and (max-width: ${tablet}) {
    width: 300px;
  }
  @media screen and (max-width: ${moblie}) {
    width: 300px;
  }
`
const UserName = styled.input`
  border: 1px solid transparent;
  outline: none;
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
  ::placeholder {
    color: #aaa;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 32px;
  padding-left: 40px;
  padding-right: 15px;
  &:focus {
    border: 1px solid #e813da;
  }
`
const Password = styled.input`
  border: 1px solid transparent;
  background-color: #f0f0f0;
  outline: none;
  font-size: 16px;
  ::placeholder {
    color: #aaa;
  }

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 32px;
  padding-left: 40px;
  padding-right: 15px;
  &:focus {
    border: 1px solid #e813da;
  }
`
const ButtonLogIn = styled.button`
  width: 50%;
  height: 50px;
  line-height: 50px;
  border: none;
  outline: none;
  border-radius: 32px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 25px;
  background-color: #5995fd;
  font-weight: 600;
  color: #fff;

  :hover {
    background-color: #4d84e2;
  }
`
const Forgot = styled.p`
  width: 100%;
  text-align: right;
  margin: 0;
  padding: 0;
`
const IconHide = styled(VisibilityOffOutlined)`
  position: absolute;
  right: 5px;
  display: ${({ show }) => (show === "show" ? "none" : "block")}!important;

  &:hover {
    cursor: pointer;
    color: #c37676;
  }
`
const IconShow = styled(VisibilityOutlined)`
  position: absolute;
  right: 5px;
  display: ${({ show }) => (show === "show" ? "block" : "none")}!important;

  &:hover {
    cursor: pointer;
    color: #c37676;
  }
`
const ShowError = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-left: 35px;
  margin-top: -5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
  /* @media screen and (max-width: 480px) {
    color: #fff;
  } */
`
const ShowErrorr = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-left: 35px;
  margin-top: -5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
  display: ${(prop) => (prop.show ? "block" : " none")};

  /* @media screen and (max-width: 480px) {
    color: #fff;
  } */
`
const LogIn = ({ change }) => {
  const language = useSelector((state) => state.setLanguage.language)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = useState(false)
  const [type, setType] = useState("password")

  const [showError, setShowError] = useState(false)
  const [validation, setValidation] = useState({
    username: { userNameVN: "", userNameENG: "" },
    password: { passwordVN: "", passwordENG: "" },
  })
  const focusUserName = useRef()
  const focusPassword = useRef()

  const handleIconHide = () => {
    setShow(true)
    setType("text")
  }
  const handleIconShow = () => {
    setShow(false)
    setType("password")
  }
  const handleChangeUserName = (e) => {
    console.log("handleChangeUserName")
    setUserName(e.target.value)
    const delayDebounceFn = setTimeout(() => {
      setValidation((prev) => ({
        ...prev,
        username: checkUsername(e.target.value),
      }))
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }
  const handleChangePassword = (e) => {
    console.log("handleChangePassword")
    setPassword(e.target.value)
    const delayDebounceFn = setTimeout(() => {
      setValidation((prev) => ({
        ...prev,
        password: checkPassword(e.target.value),
      }))
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }

  let navigate = useNavigate()

  console.log(validation)

  const handleSubmitLogin = async () => {
    console.log("handleSubmitLogin")
    console.log(userName + "as" + password)
    console.log(checkUsername(userName))
    console.log(checkPassword(password))
    const isEmpty = (v) => {
      return Object.keys(v).length === 0
    }
    if (
      !isEmpty(checkUsername(userName)) &&
      !isEmpty(checkPassword(password))
    ) {
      console.log("checkUsername && checkPassword")
      focusUserName.current.focus()
      setValidation((prev) => ({
        ...prev,
        username: checkUsername(userName),
        password: checkPassword(password),
      }))
      return
    }
    if (!isEmpty(checkUsername(userName))) {
      console.log("checkUsername")
      focusUserName.current.focus()
      setValidation((prev) => ({
        ...prev,
        username: checkUsername(userName),
      }))
      return
    }
    if (!isEmpty(checkPassword(password))) {
      console.log("checkPassword")
      focusPassword.current.focus()
      setValidation((prev) => ({
        ...prev,
        password: checkPassword(password),
      }))
      return
    }

    await axios
      .post(urlLogin, {
        userName,
        password: md5(password),
      })
      .then((res) => {
        if (res.data.token) {
          setCookie("token", res.data.token, 1)
          window.localStorage.setItem("username", res.data.userName)
          window.localStorage.setItem("id", res.data.id)
          navigate("/", { replace: true })
        } else {
          setShowError(true)
          toast("Sai tài khoản hoặc mật khẩu")
        }
      })
      .catch((err) => console.log("err", err))
  }

  return (
    <Container change={change}>
      <FormLogIn>
        <NameLogIn>{language === "VN" ? "Đăng Nhập" : "Login"}</NameLogIn>
        <Input>
          <Person style={PositionAbsolute} />
          <UserName
            ref={focusUserName}
            placeholder={
              language === "VN" ? "Nhập tên tài khoản" : "Enter usename"
            }
            value={userName}
            onChange={handleChangeUserName}
          ></UserName>
        </Input>
        <ShowError>
          {language === "VN"
            ? validation.username.userNameVN
            : validation.username.userNameENG}
        </ShowError>
        <Input>
          <Lock style={PositionAbsolute} />
          <Password
            ref={focusPassword}
            placeholder={language === "VN" ? "Nhập mật khẩu" : "Enter password"}
            value={password}
            onChange={handleChangePassword}
            type={type}
          ></Password>
          <IconHide show={show ? "show" : "hide"} onClick={handleIconHide} />
          <IconShow show={show ? "show" : "hide"} onClick={handleIconShow} />
        </Input>
        <ShowError>
          {language === "VN"
            ? validation.password.passwordVN
            : validation.password.passwordENG}
        </ShowError>
        <ShowErrorr show={showError}>Sai tài khoản hoặc mật khẩu</ShowErrorr>
        <Forgot>
          {language === "VN" ? "Bạn quên mật khẩu?" : "Forget password"}
        </Forgot>
        <ButtonLogIn onClick={handleSubmitLogin}>
          {language === "VN" ? "Đăng nhập" : "Login"}
        </ButtonLogIn>
      </FormLogIn>
    </Container>
  )
}

export default LogIn
