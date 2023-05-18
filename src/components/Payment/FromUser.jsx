import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { moblie } from "../../contants/sizeScreen"
import { setPayment } from "../../redux/actions/paymentAction"

const Container = styled.div``
const Wrapper = styled.div``
const Title = styled.h2`
  text-align: center;
`
const From = styled.form`
  width: 100%;
  margin: 0;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: ${moblie}) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    grid-gap: 10px;
  }
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
const Name = styled.label`
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

  @media screen and (max-width: ${moblie}) {
    top: ${(prop) =>
      prop.focusInput || prop.valueInput !== "" ? "-12px" : "18px"};
    left: ${(prop) =>
      prop.focusInput || prop.valueInput !== "" ? "20px" : "10px"};
    font-size: ${(prop) =>
      prop.focusInput || prop.valueInput !== "" ? "16px" : "18px"};
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

  @media screen and (max-width: ${moblie}) {
    height: 60px;
    width: calc(100% - 20px) !important;
  }
`
const Textarea = styled.textarea`
  margin: 0;
  width: calc(100% - 20px);
  height: 40px;
  padding: 10px;
  outline: none;
  border-radius: 8px;
  border: none;
  border: 1px solid #ccc;

  &:focus {
    border: 1px solid #000;
  }

  @media screen and (max-width: ${moblie}) {
    height: 120px;
    width: calc(100% - 20px) !important;
  }
`
const ShowError = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;

  @media screen and (max-width: ${moblie}) {
    font-size: 16px;
  }
`

const FromUser = ({ validation, gido }) => {
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

  const dispatch = useDispatch()
  const selector = useSelector((state) => state.payment.payment)
  const selectorTour = useSelector((state) => state.product.products)
  const language = useSelector((state) => state.setLanguage.language)

  useEffect(() => {
    if (name || yearOfBirth) {
    } else if (gido[0] !== undefined) {
      setName(gido[0].name)
      setAddress(gido[0].address)
      setYearOfBirth(gido[0].age)
      setEmail(gido[0].email)
      setNumberPhone("0" + gido[0].phone)
    }
  }, [gido, name, yearOfBirth])

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
          price: selectorTour.price,
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
          price: selectorTour.price,
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
          price: selectorTour.price,
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
          price: selectorTour.price,
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
          price: selectorTour.price,
        },
      })
    )
    setNumberPhone(e.target.value)
  }

  return (
    <Container>
      <Wrapper>
        <Title>{language === "VN" ? "THÔNG TIN LIÊN HỆ" : "YOUR INFO"}</Title>
        <From>
          <Menu>
            <Item>
              <Top>
                <Name
                  htmlFor="name"
                  focusInput={changeFocusName}
                  valueInput={name}
                >
                  {language === "VN" ? "Họ tên" : "Your name"}
                </Name>
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
                <Name
                  htmlFor="yearOfBirth"
                  focusInput={changeFocusYear}
                  valueInput={yearOfBirth}
                >
                  {language === "VN" ? "Năm sinh" : "Year of birth"}
                </Name>
              </Top>
              <Input
                type="number"
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
                <Name
                  htmlFor="email"
                  focusInput={changeFocusEmail}
                  valueInput={email}
                >
                  Email
                </Name>
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
                <Name
                  htmlFor="phoneNumber"
                  focusInput={changeFocusNumberPhone}
                  valueInput={numberPhone}
                  type="number"
                >
                  {language === "VN" ? "Số điện thoại" : "Phone"}
                </Name>
              </Top>
              <Input
                id="phoneNumber"
                type="number"
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
                <Name
                  htmlFor="address"
                  focusInput={changeFocusAddress}
                  valueInput={address}
                >
                  {language === "VN" ? "Địa chỉ" : "Address"}
                </Name>
              </Top>
              <Textarea
                id="address"
                onFocus={() => setChangeFocusAddress(true)}
                onBlur={() => setChangeFocusAddress(false)}
                value={address}
                onChange={handleChangeAddress}
                style={{ width: "200%" }}
              />
              <ShowError>
                {language === "VN"
                  ? validation.addressVN
                  : validation.addressENG}
              </ShowError>
            </Item>
          </Menu>
        </From>
      </Wrapper>
    </Container>
  )
}

export default FromUser
