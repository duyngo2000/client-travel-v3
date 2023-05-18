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
import {
  checkPassword,
  checkUsername,
} from "../contants/validateAccountRegister"
import { useNavigate } from "react-router-dom"
import { setCookie } from "../contants/cookie"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { urlLogin, urlRegister } from "../contants/urlContants"

const RightToLeft = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    left: 50%;
  } 
`
const LeftToRight = keyframes`
  0%{
    left: 50%;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    left: 20%;
    z-index: -1;
  } 
`

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  animation: ${(prop) => (prop.change === false ? RightToLeft : LeftToRight)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`

const FormRegister = styled.div`
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
const Input = styled.div`
  color: #acacac;
  background-color: #f0f0f0;
  margin: 5px 0;
  padding: 8px 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;

  position: relative;
  width: 300px;
  height: 30px;
`
const PositionAbsolute = {
  position: "absolute",
  top: "10px",
  left: "10px",
  zIndex: 1,
}
const UserName = styled.input`
  border: 1px solid transparent;
  border-radius: 32px;
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
const IconHide = styled(VisibilityOffOutlined)`
  position: absolute;
  right: 5px;

  /* display: ${(prop) =>
    prop.show === "true" ? "none" : "block"}!important; */

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

const ButtonLogIn = styled.button`
  width: 50%;
  height: 50px;
  line-height: 50px;
  border: none;
  outline: none;
  border-radius: 32px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 20px;
  background-color: #5995fd;
  font-weight: 600;
  color: #fff;

  :hover {
    background-color: #4d84e2;
  }
`
const ShowError = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-left: 35px;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
`

const Register = ({ change }) => {
  const language = useSelector((state) => state.setLanguage.language)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = useState(false)
  const [type, setType] = useState("password")

  const handleIconHide = () => {
    setShow(true)
    setType("text")
  }
  const handleIconShow = () => {
    setShow(false)
    setType("password")
  }
  const [validation, setValidation] = useState({
    username: { userNameVN: "", userNameENG: "" },
    password: { passwordVN: "", passwordENG: "" },
  })

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
    const delayDebounceFn = setTimeout(() => {
      setValidation((prev) => ({
        ...prev,
        username: checkUsername(e.target.value),
      }))
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }
  console.log(validation)
  const handleChangePassword = (e) => {
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

  const focusUserName = useRef()
  const focusPassword = useRef()
  const isEmpty = (v) => {
    return Object.keys(v).length === 0
  }
  const handleSubmitRegister = async () => {
    if (
      !isEmpty(checkUsername(userName)) &&
      !isEmpty(checkPassword(password))
    ) {
      focusUserName.current.focus()
      setValidation((prev) => ({
        ...prev,
        username: checkUsername(userName),
        password: checkPassword(password),
      }))
      return
    }
    if (!isEmpty(checkUsername(userName))) {
      focusUserName.current.focus()
      setValidation((prev) => ({
        ...prev,
        username: checkUsername(userName),
      }))
      return
    }
    if (!isEmpty(checkPassword(password))) {
      focusPassword.current.focus()
      setValidation((prev) => ({
        ...prev,
        password: checkPassword(password),
      }))
      return
    }

    await axios
      .post(urlRegister, {
        userName,
        password: md5(password),
      })
      .then((res) => {
        if (res.data === "tạo tài khoản thành công") {
          toast("Tạo tài khoản thành công")
          axios
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
              }
            })
            .catch((err) => console.log("err", err))
          navigate("/", { replace: true })
        } else {
          toast("Tên tài khoản đã tồn tại")
        }
      })
      .catch((err) => console.log("err", err))
  }

  return (
    <Container change={change}>
      <FormRegister>
        <NameLogIn>{language === "VN" ? "Đăng Ký" : "Register"}</NameLogIn>
        <Input>
          <Person style={PositionAbsolute} />
          <UserName
            ref={focusUserName}
            placeholder={
              language === "VN" ? "Nhập tên tài khoản" : "Enter username"
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
        <ButtonLogIn onClick={handleSubmitRegister}>
          {language === "VN" ? "ĐĂNG KÝ" : "REGISTER"}
        </ButtonLogIn>
      </FormRegister>
    </Container>
  )
}

export default Register
