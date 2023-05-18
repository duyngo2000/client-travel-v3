import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import {
  AccountCircleOutlined,
  Clear,
  Dehaze,
  ExitToAppOutlined,
  KeyboardArrowDownOutlined,
  Send,
} from "@material-ui/icons"
import { setLanguage } from "../redux/actions/languageAction"
import { setCookie } from "../contants/cookie"
import { moblie } from "../contants/sizeScreen"

const White = "#EFFBFB"
const White2 = "#F5FBEF"

const Container = styled.div`
  /* margin-bottom: 60px; */
`
const RightToLeft = keyframes`
  from{
    right: 100%;
    overflow: hidden;
    display: none;
  }
  to{
    right: 0;
  }
`
const LeftToRight = keyframes`
  to{
    right: 100%;
    overflow: hidden;
    display: none;
  }
`
const Wrapper = styled.div`
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 150px;
  background-color: ${(prop) => (prop.animation ? "#c37676" : "black")};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${moblie}) {
    position: fixed;
    z-index: 999999999999999999999999999999;
    padding: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    animation: ${(prop) => (prop.close ? RightToLeft : LeftToRight)} 0.4s ease
      forwards;
    background-color: #c37676;
  }
`
const Left = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: ${moblie}) {
    align-items: flex-start;
    height: 100px;
    width: 100%;
  }
`
const Travel = styled.h2`
  display: inline-block;
  text-transform: uppercase;
  color: ${White2};
`
const Icon = styled(Send)`
  display: inline-block;
  height: 100%;
  transform: rotate(-45deg);
  color: ${White2};
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    display: block;
    width: 100%;
  }
`
const Input = styled.input`
  display: none;
  overflow: hidden;
`
const LabelClose = styled.label`
  display: none;

  @media screen and (max-width: ${moblie}) {
    position: fixed;
    top: 10px;
    right: ${(prop) => (prop.position === "right" ? "10px" : "")};
    display: ${(prop) => (prop.close ? "block" : "none")};
  }
`
const LabelOpen = styled.label`
  display: none;

  @media screen and (max-width: ${moblie}) {
    position: fixed;
    top: 10px;
    left: ${(prop) => (prop.position === "left" ? "10px" : "")};
    display: ${(prop) => (prop.close ? "none" : "block")};
  }
`
const Close = styled(Clear)`
  color: #fff;
  padding: 4px;
  display: none;

  @media screen and (max-width: ${moblie}) {
    background-color: red;
    display: block;
    border-radius: 4px;
  }
`
const Open = styled(Dehaze)`
  color: #fff;
  padding: 4px;
  display: none;

  @media screen and (max-width: ${moblie}) {
    background-color: red;
    display: block;
    border-radius: 4px;
  }
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`
const AnimationItem = keyframes`
  from {
    width: 0;
    background-color: ${White};
  }
  to {
    width: calc(100% - 20px);
    background-color: ${White};
  }
`

const Item = styled.li`
  margin: 0 2px;
  padding: 0 10px;
  overflow: ${(prop) => (prop.show ? "hidden" : "")};
  display: ${(prop) => (prop.show ? "none" : "flex")};
  align-items: center;
  font-weight: 400;
  text-transform: uppercase;
  color: ${White2};
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 10px;
    height: 2px;
    animation: ${AnimationItem} 0.5s forwards;
  }

  @media screen and (max-width: ${moblie}) {
    border-bottom: 1px solid #ccc;
    margin: 0;
    padding: 0;

    &:hover::after {
      content: "";
      animation: none;
    }
  }
`
const ItemMessage = styled.li`
  margin: 0 2px;
  padding: 0 10px;
  overflow: ${(prop) => (prop.show ? "" : "hidden")};
  display: ${(prop) => (prop.show ? "flex" : "none")};
  align-items: center;
  font-weight: 400;
  text-transform: uppercase;
  color: ${White2};
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 10px;
    height: 2px;
    animation: ${AnimationItem} 0.5s forwards;
  }
`
const MessageAccount = styled.div`
  min-width: 200px;
  min-height: 50px;
  border-radius: 8px;
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #c37676;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  z-index: 2;
  display: ${(prop) => (prop.show ? "block" : "none")};

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: #c37676;
    position: absolute;
    top: -7px;
    right: 10px;
    transform: rotate(45deg);
    z-index: 1;
  }
`
const MenuAccount = styled.ul`
  margin: 0;
  padding: 0;
  padding: 10px;
`
const Name = styled(Link)`
  font-size: 16px;
  color: ${White};
  text-decoration: none;
  display: ${(prop) => (prop.display === "flex" ? "flex" : "")};
  align-items: center;

  @media screen and (max-width: ${moblie}) {
    padding: 20px 10px;
    width: 100%;
    margin: 0;

    &:hover::after {
      content: "";
      animation: none;
    }
  }
`
const ItemAccount = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  list-style: none;
  text-transform: none;
  color: #fff;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
  &:hover > ${Name} {
    color: #000;
  }
`

const List = styled.select`
  font-size: 16px;
  color: ${White};
  text-decoration: none;
  border: none;
  outline: none;
  background-color: transparent;

  @media screen and (max-width: ${moblie}) {
    padding: 20px 10px;
    width: 92%;
    margin: 0;

    &:hover::after {
      content: "";
      animation: none;
    }
  }
`
const ListItem = styled.option`
  border: none;
  border-radius: 16px;
  color: #000;
`

const Header = () => {
  const [animation, setAnimation] = useState(false)
  const [close, setClose] = useState(false)
  const dispatch = useDispatch()
  const language = useSelector((state) => state.setLanguage.language)

  const handleChangeLanguage = (e) => {
    dispatch(setLanguage(e.target.value))
  }

  const user = window.localStorage.getItem("username")
  let navigate = useNavigate()

  const handleLogout = () => {
    setCookie("token", "", 0)
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("id")
    console.log("click")
    navigate("/account", { replace: true })
  }

  const [message, setMassage] = useState(false)

  const handleMessageAccount = () => {
    setMassage(!message)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setAnimation(true)
      } else {
        setAnimation(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Container>
      <Wrapper animation={animation} close={close}>
        <Left>
          <Link to="/" style={{ margin: "0 10px" }}>
            <Travel>Travel</Travel>
            <Icon />
          </Link>
          <Input type="checkbox" id="close" onClick={() => setClose(false)} />
          <LabelClose htmlFor="close" close={close} position="right">
            <Close></Close>
          </LabelClose>
          <Input type="checkbox" id="open" onClick={() => setClose(true)} />
          <LabelOpen htmlFor="open" close={close} position="left">
            <Open></Open>
          </LabelOpen>
        </Left>
        <Right>
          <Menu>
            <Item onClick={() => setClose(false)}>
              <Name to="/">{language === "VN" ? "Trang chủ" : "Home"}</Name>
            </Item>
            <Item onClick={() => setClose(false)}>
              <Name to="/tour">Tour</Name>
            </Item>
            <Item onClick={() => setClose(false)}>
              <Name to="/contact">
                {language === "VN" ? "Liên hệ" : "Contact"}
              </Name>
            </Item>
            <Item onClick={() => setClose(false)}>
              <Name to="/news">{language === "VN" ? "Tin tức" : "News"}</Name>
            </Item>
            <Item onClick={() => setClose(false)}>
              <Name to="/introduce">
                {language === "VN" ? "Giới thiệu" : "Introduce"}
              </Name>
            </Item>
            <Item>
              <List onChange={handleChangeLanguage} value={language}>
                <ListItem value="VN">VN</ListItem>
                <ListItem value="ENG">ENG</ListItem>
              </List>
            </Item>
            <Item show={user} onClick={() => setClose(false)}>
              <Name to="/account">
                {language === "VN" ? "Đăng nhập" : "Login"}
              </Name>
            </Item>

            <ItemMessage
              show={user}
              style={{ position: "relative" }}
              onClick={handleMessageAccount}
            >
              {window.localStorage.getItem("username")}{" "}
              <KeyboardArrowDownOutlined />{" "}
              <MessageAccount show={message}>
                <MenuAccount>
                  <ItemAccount>
                    <Name to="infoAccount" display="flex">
                      <AccountCircleOutlined />
                      {language === "VN"
                        ? "Thông tin tài khoản"
                        : "Account information"}{" "}
                    </Name>{" "}
                  </ItemAccount>
                  <ItemAccount onClick={handleLogout}>
                    <ExitToAppOutlined />
                    {language === "VN" ? "Đăng xuất" : "Log out"}{" "}
                  </ItemAccount>
                </MenuAccount>
              </MessageAccount>
            </ItemMessage>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header
