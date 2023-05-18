import { SearchOutlined } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { moblie } from "../contants/sizeScreen"
import { url } from "../contants/urlContants"

const ScrollTop = keyframes`
  30%{
    position: fixed;
    width: 300px;
    left: 500px;
  }
  100%{
    width: 300px;
    height: 40px;
    left: 500px;
    top: 10px;
  }
`
const ScrollTop2 = keyframes`
  to{
    top: 45px;
  }
`

const Container = styled.div`
  width: 800px;
  height: 54px;
  position: fixed;
  z-index: 9999999;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  animation-name: ${(prop) => (prop.animation ? ScrollTop : "none")};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media screen and (max-width: ${moblie}) {
    width: 95%;
    animation: ${(prop) => (prop.animation ? ScrollTop2 : "none")} 1s forwards;
  }
`
const WrapperInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #ff5722;
  }
`
const WrapperContent = styled.div`
  width: 800px;
  height: 54px;
  position: fixed;
  z-index: 9999999;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  animation-name: ${(prop) => (prop.animation ? ScrollTop : "none")};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media screen and (max-width: ${moblie}) {
    width: 100%;
    height: ${(prop) => (prop.name !== "" ? "50vh" : "")};
    overflow-y: ${(prop) =>
      prop.name !== "" && prop.tour.length > 2 ? "scroll" : ""};

    &::-webkit-scrollbar {
      width: 4px;
      background-color: #ccc;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ed0080;
    }
  }
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${(prop) => (prop.name !== "" ? "10px" : "0")};
  padding: 10px;
  border-radius: 8px;
  z-index: ${(prop) => (prop.name !== "" ? 9999999 : -9999)};
  background-color: ${(prop) => (prop.name !== "" ? "#fff" : "")};
  border: ${(prop) => (prop.name !== "" ? "2px solid #ff5722" : "")};

  @media screen and (max-width: ${moblie}) {
    grid-template-columns: 1fr 1fr;
    text-align: center;
    padding: ${(prop) => (prop.name !== "" ? "10px" : "0")};

    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
    border-radius: 0;
  }
`
const Item = styled.li`
  list-style: none;
  background-color: #fff;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  border: 1px solid #ff5722;
  border-radius: 4px;
`
const Name = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  color: #2f2b2b;
  font-size: 14px;
`
const Image = styled.img`
  width: 187px;
  height: 150px;
  border-radius: 4px;

  @media screen and (max-width: ${moblie}) {
    width: 100%;
    border-radius: 4px;
  }
`
const Icon = styled(SearchOutlined)`
  width: 2rem !important;
  height: 2rem !important;
`
const Input = styled.input`
  flex: 1;
  font-size: 18px;
  height: 80%;
  border: none;
  padding: 0 10px 0 5px;
  outline: none;
  caret-color: #ff5722;
`

const Search = ({ products }) => {
  const [tour, setTour] = useState([])
  const [animation, setAnimation] = useState(false)
  const language = useSelector((state) => state.setLanguage.language)

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

  const [name, setName] = useState("")

  const handleSearch = (e) => {
    setName(e.target.value)
    if (e.target.value !== "") {
      setTour(
        products.filter((item) =>
          item.name.toUpperCase().includes(e.target.value.toUpperCase())
        )
      )
    } else {
      setTour([])
    }
  }

  return (
    <Container animation={animation}>
      <WrapperInput>
        <Icon />
        <Input
          placeholder={language === "VN" ? "Tìm theo điểm đến" : "Search"}
          onChange={handleSearch}
          value={name}
        />
      </WrapperInput>
      <WrapperContent name={name} tour={tour}>
        <Menu name={name}>
          {tour.map((item) => (
            <Item key={item._id}>
              <Link to={`/tour/${item._id}`}>
                <Image src={url + item.image} />
                <Name>{item.name}</Name>
              </Link>
            </Item>
          ))}
        </Menu>
      </WrapperContent>
      {/* <Filter /> */}
    </Container>
  )
}

export default Search
