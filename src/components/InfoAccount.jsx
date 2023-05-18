import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import styled from "styled-components"
import { urlUser } from "../contants/urlContants"
import { setPayment } from "../redux/actions/paymentAction"
import { Link } from "react-router-dom"
import { SearchOutlined } from "@material-ui/icons"

const Container = styled.div`
  margin: 0 150px;
  margin-top: 65px;
  height: calc(100vh - 60px);
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`
const Title = styled.h3`
  text-align: center;
`
const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`
const Search = styled.div`
  grid-column: 1/3;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px 8px;
`
const IconSearch = styled(SearchOutlined)``
const InputSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
`
const Day = styled.div`
  grid-column: 3/4;
`
const Select = styled.select``
const Option = styled.option``
const Price = styled.div`
  grid-column: 4/5;
`
const Menu = styled.ul`
  grid-column: ${(prop) => (prop.flex === "1" ? "1/2" : "2/4")};
  height: calc(100vh - 60px - 60px);
  margin: 0;
  padding: 0;
  border: 2px solid #ccc;
  padding: 20px;
`
const Item = styled.li`
  margin: 0;
  width: 100%;
  list-style: none;
  position: relative;
`
const Top = styled.div`
  position: absolute;
`
const WrapperInfoTour = styled.div`
  padding-top: 15px;
  overflow-y: scroll;
  height: calc(100vh - 60px - 60px - 60px - 60px);

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: #c37676;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #cc6b6b;
  }
`
const InfoTour = styled.div`
  border: 2px solid #c37676;
  padding: 7px 10px;
  margin-bottom: 20px;
  position: relative;
`
const Name = styled.span`
  position: absolute;
  left: 10px;
  top: -13px;
  border-radius: 16px;
  padding: 1px 5px;
  color: #fff;
  background-color: #c37676;
  font-weight: 600;
  font-size: 15px;
`
const Content = styled.span``
const Value = styled.label`
  margin: 0;
  color: #254d4d;
  position: absolute;
  top: ${(prop) =>
    prop.focusInput || prop.valueInput !== "" ? "-12px" : "10px"};
  left: ${(prop) =>
    prop.focusInput || prop.valueInput !== "" ? "20px" : "10px"};
  font-size: ${(prop) =>
    prop.focusInput || prop.valueInput !== "" ? "14px" : "16px"};
  transition: all 0.5s;
  position: relative;
  padding: 5px;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fff;
    z-index: -1;
  }
`
const Input = styled.input`
  margin: 0;
  width: calc(100% - 20px);
  height: 40px;
  padding: 0 10px;
  outline: none;
  border-radius: 8px;
  border: none;
  border: 1px solid #ccc;

  &:focus {
    border: 1px solid #000;
  }
`
const Button = styled.button`
  margin: 0;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  outline: none;
  border-radius: 8px;
  border: none;
  border: 1px solid #ccc;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background-color: #c37676;
    color: #fff;
  }
`

const ShowError = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
`

// const API = [
//   { nameVN: "Tên của bạn", nameENG: "Your name" },
//   { nameVN: "Email của bạn", nameENG: "Your email" },
//   { nameVN: "Năm sinh", nameENG: "Year of birth" },
//   { nameVN: "Số điện thoại của bạn", nameENG: "Phone number" },
//   { nameVN: "Địa chỉ của bạn", nameENG: "Your address" },
// ]

const InfoAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const selector = useSelector((state) => state.payment.payment)
  const language = useSelector((state) => state.setLanguage.language)

  const [changeFocusName, setChangeFocusName] = useState(false)
  const [changeFocusYear, setChangeFocusYear] = useState(false)
  const [changeFocusAddress, setChangeFocusAddress] = useState(false)
  const [changeFocusEmail, setChangeFocusEmail] = useState(false)
  const [changeFocusNumberPhone, setChangeFocusNumberPhone] = useState(false)

  const [name, setName] = useState("")
  const [yearOfBirth, setYearOfBirth] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [numberPhone, setNumberPhone] = useState("")
  const [allTour, setAllTour] = useState([])

  const dispatch = useDispatch()
  const selectorTour = useSelector((state) => state.product.products)

  const handleChangeName = (e) => {
    dispatch(
      setPayment({
        info: {
          name: e.target.value,
          yearOfBirth,
          email,
          numberPhone,
          address,
        },
        method: selector.method,
        tour: {
          id: selectorTour._id,
          name: selectorTour.name,
        },
      })
    )
    setName(e.target.value)
  }
  const handleChangeYearOfBirth = (e) => {
    dispatch(
      setPayment({
        info: {
          name,
          yearOfBirth: e.target.value,
          email,
          numberPhone,
          address,
        },
        method: selector.method,
        tour: {
          id: selectorTour._id,
          name: selectorTour.name,
        },
      })
    )
    setYearOfBirth(e.target.value)
  }
  const handleChangeAddress = (e) => {
    dispatch(
      setPayment({
        info: {
          name,
          yearOfBirth,
          email,
          numberPhone,
          address: e.target.value,
        },
        method: selector.method,
        tour: {
          id: selectorTour._id,
          name: selectorTour.name,
        },
      })
    )
    setAddress(e.target.value)
  }
  const handleChangeEmail = (e) => {
    dispatch(
      setPayment({
        info: {
          name,
          yearOfBirth,
          email: e.target.value,
          numberPhone,
          address,
        },
        method: selector.method,
        tour: {
          id: selectorTour._id,
          name: selectorTour.name,
        },
      })
    )
    setEmail(e.target.value)
  }
  const handleChangeNumberPhone = (e) => {
    dispatch(
      setPayment({
        info: {
          name,
          yearOfBirth,
          email,
          numberPhone: e.target.value,
          address,
        },
        method: selector.method,
        tour: {
          id: selectorTour._id,
          name: selectorTour.name,
        },
      })
    )
    setNumberPhone(e.target.value)
  }
  const [validation, setValidation] = useState("")

  const urlUserAccount =
    urlUser + "/account/" + window.localStorage.getItem("id")

  useEffect(() => {
    const fetchTourDetail = async () => {
      await axios
        .get(urlUserAccount)
        .then((res) => {
          // console.log("data", res.data[0])
          setName(res.data[0].name)
          setYearOfBirth(res.data[0].age)
          setEmail(res.data[0].email)
          setNumberPhone("0" + res.data[0].phone)
          setAddress(res.data[0].address)
          setAllTour(res.data[0].allTour)
        })
        .catch((err) => console.log("err", err))
    }
    fetchTourDetail()
  }, [urlUserAccount])

  // console.log(allTour)
  const handleSubmit = async () => {
    await axios
      .put(urlUserAccount, {
        name: name,
        age: yearOfBirth,
        email: email,
        phone: numberPhone,
        address: address,
      })
      .then(() => alert("Cập nhật thành công!"))
      .catch((err) => err)
  }
  return (
    <Container>
      <Wrapper>
        <Menu flex="1">
          <Title>
            {language === "VN" ? "Thông tin của bạn" : "Your information"}
          </Title>
          <Item>
            <Top>
              <Value
                htmlFor="name"
                focusInput={changeFocusName}
                valueInput={name}
              >
                {language === "VN" ? "Họ tên" : "Name"}
              </Value>
            </Top>

            <Input
              id="name"
              onFocus={() => setChangeFocusName(true)}
              onBlur={() => setChangeFocusName(false)}
              value={name}
              onChange={handleChangeName}
            />
            <ShowError>
              {language === "VN" ? validation.nameVN : validation.nameENG}
            </ShowError>
          </Item>
          <Item>
            <Top>
              <Value
                htmlFor="yearOfBirth"
                focusInput={changeFocusYear}
                valueInput={yearOfBirth}
              >
                {language === "VN" ? "Năm sinh" : "Year of Birth"}
              </Value>
            </Top>
            <Input
              id="yearOfBirth"
              onFocus={() => setChangeFocusYear(true)}
              onBlur={() => setChangeFocusYear(false)}
              value={yearOfBirth}
              onChange={handleChangeYearOfBirth}
            />
            <ShowError>
              {language === "VN"
                ? validation.yearOfBirthVN
                : validation.yearOfBirthENG}
            </ShowError>
          </Item>
          <Item>
            <Top>
              <Value
                htmlFor="email"
                focusInput={changeFocusEmail}
                valueInput={email}
              >
                Email
              </Value>
            </Top>
            <Input
              id="email"
              type="email"
              onFocus={() => setChangeFocusEmail(true)}
              onBlur={() => setChangeFocusEmail(false)}
              value={email}
              onChange={handleChangeEmail}
            />
            <ShowError>
              {language === "VN" ? validation.emailVN : validation.emailENG}
            </ShowError>
          </Item>
          <Item>
            <Top>
              <Value
                htmlFor="phoneNumber"
                focusInput={changeFocusNumberPhone}
                valueInput={numberPhone}
                type="number"
              >
                {language === "VN" ? "Số điện thoại" : "Phone number"}
              </Value>
            </Top>
            <Input
              id="phoneNumber"
              onFocus={() => setChangeFocusNumberPhone(true)}
              onBlur={() => setChangeFocusNumberPhone(false)}
              value={numberPhone}
              onChange={handleChangeNumberPhone}
            />
            <ShowError>
              {language === "VN"
                ? validation.numberPhoneVN
                : validation.numberPhoneENG}
            </ShowError>
          </Item>
          <Item>
            <Top>
              <Value
                htmlFor="address"
                focusInput={changeFocusAddress}
                valueInput={address}
              >
                {language === "VN" ? "Địa chỉ" : "Address"}
              </Value>
            </Top>
            <Input
              id="address"
              onFocus={() => setChangeFocusAddress(true)}
              onBlur={() => setChangeFocusAddress(false)}
              value={address}
              onChange={handleChangeAddress}
            />
            <ShowError>
              {language === "VN" ? validation.addressVN : validation.addressENG}
            </ShowError>
          </Item>
          <Item>
            <Button onClick={handleSubmit}>
              {language === "VN" ? "Cập nhật" : "Update"}
            </Button>
          </Item>
        </Menu>
        <Menu flex="2">
          <Title>
            {language === "VN"
              ? "Thông tin các chuyến đi"
              : "Information about trips"}
          </Title>
          <Filter>
            <Search>
              <IconSearch />
              <InputSearch placeholder="Tên Tour" />
            </Search>
            <Day>
              <Select>
                <Option value="0">Ngày</Option>
                <Option value="0">Gần nhất</Option>
                <Option value="0">Xa nhất</Option>
              </Select>
            </Day>
            <Price>
              <Select>
                <Option value="0">Giá</Option>
                <Option value="0">Thấp đến cao</Option>
                <Option value="0">Cao đến thấp</Option>
              </Select>
            </Price>
          </Filter>
          {allTour.map((item, index) => (
            <Item key={item._id}>
              <WrapperInfoTour>
                <InfoTour>
                  <Name>
                    Tour ngày{" "}
                    {moment(item.idTour.timeStart).utc().format("DD/MM/YYYY")}{" "}
                    đến {moment(item.idTour.timeEnd).utc().format("DD/MM/YYYY")}
                  </Name>
                  <Content>
                    Bạn đã đặt {item.idTour.name} với giá:{" "}
                    {item.idTour.price.toLocaleString("vi-VN") + " VND"} và tour
                    khởi hành từ {item.idTour.departureFrom}
                    {". "}
                    <Link to={`infoTour${item.idTour._id}`}>Xem chi tiết</Link>
                  </Content>
                </InfoTour>
              </WrapperInfoTour>
            </Item>
          ))}
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default InfoAccount
