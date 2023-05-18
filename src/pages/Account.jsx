import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import LogIn from "../components/LogIn"
import Register from "../components/Register"
import { moblie, tablet } from "../contants/sizeScreen"
import brLogin from "../img/brlogin.jpg"
import brLogin2 from "../img/brlogin2.jpg"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${brLogin});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
  }
`
const ToastWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1111111111111111111111111111111111111;
`
const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 16px;
  position: relative;

  @media screen and (max-width: ${tablet}) {
    width: 95%;
  }

  @media screen and (max-width: ${moblie}) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ change }) => (change ? 60 : 0)}%;
  right: ${(prop) => (prop.change ? 0 : 60)}%;
  background-image: url(${brLogin2});
  background-size: cover;
  border-top-left-radius: ${(prop) => (prop.change ? 0 : "16px")};
  border-bottom-left-radius: ${(prop) => (prop.change ? 0 : "16px")};
  border-top-right-radius: ${(prop) => (prop.change ? "16px" : 0)};
  border-bottom-right-radius: ${(prop) => (prop.change ? "16px" : 0)};
  z-index: 999;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s;

  @media screen and (max-width: ${tablet}) {
    text-align: center;
    padding: 0 5px;
    top: 0;
    bottom: 0;
    left: ${({ change }) => (change ? 55 : 0)}%;
    right: ${({ change }) => (change ? 0 : 55)}%;
  }

  @media screen and (max-width: ${moblie}) {
    position: fixed;
    left: 0;
    right: 0;
    top: calc(100% - 200px);
    border-radius: 0;
    height: 200px;
  }
`
const Title1 = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 2rem;

  @media screen and (max-width: ${tablet}) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`
const Title2 = styled.p`
  margin: 0;
`
const ButtonRegister = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  margin-top: 20px;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid #ccc;
  outline: none;
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const WrapperLogin = styled.div`
  flex: 1;
  position: relative;

  @media screen and (max-width: ${tablet}) {
    padding: 10px;
  }
  @media screen and (max-width: ${moblie}) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 200px;
    z-index: 11111111;
    display: ${(prop) => (prop.change ? "block" : "none")};
  }
`
const WrapperRegister = styled.div`
  flex: 1;
  position: relative;

  @media screen and (max-width: ${tablet}) {
    padding: 10px;
  }
  @media screen and (max-width: ${moblie}) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 200px;
    z-index: 11111111;
    display: ${(prop) => (prop.change ? "none" : "block")};
  }
`

const Title = [
  {
    VN: {
      type: "login",
      title1: "Chào bạn!",
      title2: "Nếu bạn đã có tài khoảng?",
      title3: "Vui lòng chọn nút đăng nhập ngay bênh dưới",
      button: "Đăng nhập",
    },
    ENG: {
      type: "login",
      title1: "Hello!",
      title2: "If you already have an account?",
      title3: "Please select the login button right below",
      button: "Login",
    },
  },
  {
    VN: {
      type: "register",
      title1: "Xin chào!",
      title2: "Nếu bạn chưa có tài khoảng?",
      title3: "Vui lòng chọn nút đăng ký ngay bênh dưới",
      button: "Đăng ký",
    },
    ENG: {
      type: "register",
      title1: "Hello!",
      title2: "If you do not already have an account?",
      title3: "Please select the subscribe button right below",
      button: "Register",
    },
  },
]
const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [changeForm, setChangeForm] = useState(true)

  const language = useSelector((state) => state.setLanguage.language)

  console.log("change", changeForm)
  return (
    <Container>
      <ToastWrapper>
        <ToastContainer></ToastContainer>
      </ToastWrapper>
      <Wrapper>
        <Content change={changeForm}>
          <Title1 change={changeForm}>
            {language === "VN"
              ? changeForm
                ? Title[1].VN.title1
                : Title[0].VN.title1
              : changeForm
              ? Title[1].ENG.title1
              : Title[0].ENG.title1}
          </Title1>
          <Title2>
            {language === "VN"
              ? changeForm
                ? Title[1].VN.title2
                : Title[0].VN.title2
              : changeForm
              ? Title[1].ENG.title2
              : Title[0].ENG.title2}
          </Title2>
          <Title2>
            {language === "VN"
              ? changeForm
                ? Title[1].VN.title3
                : Title[0].VN.title3
              : changeForm
              ? Title[1].ENG.title3
              : Title[0].ENG.title3}
          </Title2>
          <ButtonRegister onClick={() => setChangeForm(!changeForm)}>
            {language === "VN"
              ? changeForm
                ? Title[1].VN.button
                : Title[0].VN.button
              : changeForm
              ? Title[1].ENG.button
              : Title[0].ENG.button}
          </ButtonRegister>
        </Content>
        <WrapperLogin change={changeForm}>
          <LogIn change={changeForm} />
        </WrapperLogin>
        <WrapperRegister change={changeForm}>
          <Register change={changeForm} />
        </WrapperRegister>
      </Wrapper>
    </Container>
  )
}

export default Account
