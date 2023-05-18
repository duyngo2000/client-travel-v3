import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FromUser from "./Payment/FromUser"
import Methods from "./Payment/Methods"
import TitleTour from "./Payment/TitleTour"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import validatePayment from "../contants/validatePayment"
import { setAccount } from "../redux/actions/accountAction"
import { useNavigate } from "react-router-dom"
import { urlAccount, urlTour, urlUser } from "../contants/urlContants"
import { moblie } from "../contants/sizeScreen"
import { ArrowLeft, ArrowRight } from "@material-ui/icons"

const Container = styled.div`
  margin: 60px 150px;

  @media screen and (max-width: ${moblie}) {
    margin: 60px 0;
    overflow: hidden;
  }
`
const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${moblie}) {
    width: 400%;
    transform: translateX(calc(${(prop) => prop.page * -25}%));
    transition: all 0.5s ease;
  }
`
const Left = styled.div`
  flex: 1;

  @media screen and (max-width: ${moblie}) {
    height: 50vh;
    flex: 1;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${moblie}) {
    flex: 3;
    display: flex;
    flex-direction: row;
  }
`
const TopRight = styled.div`
  @media screen and (max-width: ${moblie}) {
    flex: 1;
  }
`
const CenterRight = styled.div`
  @media screen and (max-width: ${moblie}) {
    flex: 1;
  }
`
const BottomRight = styled.div`
  padding: 50px;
  @media screen and (max-width: ${moblie}) {
    flex: 1;
    padding: 0;
    margin-top: 50px;
  }
`
const BuyNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${moblie}) {
    margin: 0 10px;
  }
`
const Button = styled.button`
  background-color: #ed0080;
  color: #fff;
  font-size: 1.7rem;
  border: none;
  border: 1px solid;
  outline: none;
  border-radius: 8px;
  width: 100%;
  padding: 12px 0;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #ed0080;
    border: 1px solid #ed0080;
  }
`
const WrapperNumber = styled.div`
  display: none;
  @media screen and (max-width: ${moblie}) {
    display: block;
    padding: 0 10px;
  }
`
const MenuNumber = styled.ul`
  margin: 0;
  padding: 0;
  @media screen and (max-width: ${moblie}) {
    display: flex;
  }
`
const ItemNumber = styled.li`
  @media screen and (max-width: ${moblie}) {
    list-style: none;
    width: 40px;
    height: 40px;
    margin-right: 41px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    position: relative;
    transition: all 1s ease;

    &::before {
      content: "";
      position: absolute;
      width: 40px;
      top: 50%;
      right: -42px;
      border: 1px dashed #ccc;
    }
    &:first-child {
      border: ${(prop) =>
        prop.page >= 0 ? "1px solid red" : "border: 1px solid #ccc"};
      &::before {
        content: "";
        border: ${(prop) =>
          prop.page >= 0 ? "1px dashed red" : "border: 1px dashed #ccc"};
      }
    }
    &:nth-child(2) {
      border: ${(prop) =>
        prop.page >= 1 ? "1px solid red" : "border: 1px solid #ccc"};
      &::before {
        content: "";
        border: ${(prop) =>
          prop.page >= 1 ? "1px dashed red" : "border: 1px dashed #ccc"};
      }
    }
    &:nth-child(3) {
      border: ${(prop) =>
        prop.page >= 2 ? "1px solid red" : "border: 1px solid #ccc"};
      &::before {
        content: "";
        border: ${(prop) =>
          prop.page >= 2 ? "1px dashed red" : "border: 1px dashed #ccc"};
      }
    }
    &:last-child {
      border: ${(prop) =>
        prop.page >= 3 ? "1px solid red" : "border: 1px solid #ccc"};
      &::before {
        content: "";
        width: 0;
        border: none;
      }
    }
  }
`
const WrapperChange = styled.div`
  display: none;
  @media screen and (max-width: ${moblie}) {
    display: block;
    padding: 0 10px;
    margin-top: 20px;
  }
`
const MenuChange = styled.ul`
  margin: 0;
  padding: 0;
  @media screen and (max-width: ${moblie}) {
    display: flex;
    justify-content: space-between;
  }
`
const ItemChange = styled.li`
  @media screen and (max-width: ${moblie}) {
    list-style: none;
    border: 1px solid #ccc;
    padding: 20px 40px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
`

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const selector = useSelector((state) => state.payment.payment)
  const info = selector.info
  const method = selector.method
  const tour = selector.tour
  const formData = new FormData()
  const [validation, setValidation] = useState("")
  const [gido, setGido] = useState([])
  const username = window.localStorage.getItem("username")
  const selectorAccount = useSelector((state) => state.account.account)
  const language = useSelector((state) => state.setLanguage.language)
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()
  console.log("page", page)

  useEffect(() => {
    const fetchTourDetail = async () => {
      await axios
        .get(`${urlAccount}/${username}`)
        .then((res) => {
          dispatch(setAccount(res.data[0]._id))
        })
        .catch((err) => console.log("err", err))
    }
    fetchTourDetail()
  }, [username, dispatch])

  useEffect(() => {
    axios
      .get(urlUser + "/account/" + selectorAccount)
      .then((res) => {
        console.log("data", res.data)
        setGido(res.data)
      })
      .catch((err) => err)
  }, [selectorAccount])

  useEffect(() => {
    const fetchTourDetail = async () => {
      await axios
        .get(`${urlTour}/${tour.id}`)
        .then((res) => {
          // console.log("id", res.data)
        })
        .catch((err) => console.log("err", err))
    }
    fetchTourDetail()
  }, [tour.id])

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    const validate = validatePayment(
      info.name,
      info.yearOfBirth,
      info.address,
      info.email,
      info.numberPhone,
      method.id
    )
    const isValid = Object.keys(validate).length

    if (isValid > 0) {
      setValidation(validate)
      return
    }

    formData.append("name", info.name)
    formData.append("age", info.yearOfBirth)
    formData.append("email", info.email)
    formData.append("phone", info.numberPhone)
    formData.append("address", info.address)
    formData.append("method", method.id)
    formData.append("idTour", tour.id)

    const name = info.name
    const age = info.yearOfBirth
    const email = info.email
    const phone = info.numberPhone
    const address = info.address
    // const method = method.id
    const idTour = tour.id

    //nếu thanh toán tiền mặt thì link này

    switch (method.id) {
      case 1:
        console.log("thanh toán tại quầy")
        await axios
          .post(urlUser, {
            name,
            age,
            email,
            phone,
            address,
            method: method.id,
            idTour,
            account: selectorAccount,
          })
          .then(function (response) {
            // console.log(response.data)
            alert("Thanh toán thành công")
            navigate("/tour", { replace: true })
          })
          .catch(function (error) {
            console.log(error)
          })

        break
      case 2:
        alert(
          "Hệ thống thanh toán qua Paypal đang gặp sự cố. Qúy khách vui lòng chọn phương thức thanh toán khác"
        )
        // console.log("thanh toán qua PAYPAL")
        let link = ""
        await axios
          .post("http://localhost:5000/paypal", {
            name,
          })
          .then(function (response) {
            link = response.data
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
        window.location.assign(link)
        break
      case 3:
        console.log("CHUYỂN KHOẢNG")
        await axios
          .post(urlUser, {
            name,
            age,
            email,
            phone,
            address,
            method: method.id,
            idTour,
            account: selectorAccount,
          })
          .then(function (response) {
            alert("Thanh toán thành công")
            navigate("/tour", { replace: true })
            // console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
        break
      default:
        break
    }
    axios
      .get(urlTour + "/" + tour.id)
      .then((res) => {
        axios
          .put(urlTour + "/seats/" + tour.id, {
            seats: res.data.seats - 1,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }
  const handleBack = () => {
    page <= 0 ? setPage(0) : setPage(page - 1)
  }
  const handleNext = () => {
    page >= 3 ? setPage(3) : setPage(page + 1)
  }

  return (
    <Container>
      <WrapperNumber>
        <MenuNumber>
          <ItemNumber page={page}>1</ItemNumber>
          <ItemNumber page={page}>2</ItemNumber>
          <ItemNumber page={page}>3</ItemNumber>
          <ItemNumber page={page}>4</ItemNumber>
        </MenuNumber>
      </WrapperNumber>
      <WrapperChange>
        <MenuChange>
          <ItemChange onClick={handleBack}>
            <ArrowLeft />
            Lui
          </ItemChange>
          <ItemChange onClick={handleNext}>
            Tới
            <ArrowRight />
          </ItemChange>
        </MenuChange>
      </WrapperChange>
      <Wrapper page={page}>
        <Left>
          <TitleTour />
        </Left>
        <Right>
          <TopRight>
            <FromUser validation={validation} gido={gido} />
          </TopRight>
          <CenterRight>
            <Methods validation={validation} />
          </CenterRight>
          <BottomRight>
            <BuyNow>
              <Button onClick={handleSubmit}>
                {language === "VN" ? "Thanh toán" : "PAY NOW"}
              </Button>
            </BuyNow>
          </BottomRight>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Payment
