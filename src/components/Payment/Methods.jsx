import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { keyframes } from "styled-components"
import { setPayment } from "../../redux/actions/paymentAction"
import { moblie } from "../../contants/sizeScreen"

const Container = styled.div``
const Title = styled.h2`
  text-align: center;
`
const Menu = styled.ul`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
`
const Checkbox = styled.input``
const Name = styled.p``
const ShowError = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
  margin-left: 40px;

  @media screen and (max-width: ${moblie}) {
    font-size: 16px;
    padding: 0 10px;
  }
`
const AnimationMsPayment = keyframes`
  0%{
    height: 0px;
  }
  20%{
    height: 100px;
    padding: 32px;
  }
  50%{
    height: 50%;
    padding: 32px;
  } 
  100%{
    height: 100%;
    padding: 32px;
  }
`
const MessagePayment1 = styled.div`
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  padding: 0 32px;
  height: 0px;
  background: #f7f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
  animation: ${(prop) => (prop.checked === 1 ? AnimationMsPayment : "")} 1.5s
    linear forwards;

  &::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`

const MessagePayment3 = styled.div`
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  padding: 0 32px;
  height: 0px;
  background: #f7f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
  animation: ${(prop) => (prop.checked === 3 ? AnimationMsPayment : "")} 1.5s
    linear forwards;

  &::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`
const MenuMss = styled.ul`
  margin: 0;
  padding: 0;
`
const ItemMss = styled.li`
  list-style: none;
  margin-bottom: 10px;
`
const NameMss = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 2px;
  font-weight: 600;
`
const TitleMss = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`
const Highlight = styled.label`
  color: #ed0080;
`

const API = [
  {
    id: 1,
    name: "Thanh toán tại quầy",
  },
  {
    id: 2,
    name: "Thanh toán qua PAYPAL",
  },
  {
    id: 3,
    name: "Thanh toán chuyển khoản qua ngân hàng",
  },
]

const APIPayMent = [
  {
    id: 1,
    name: "Ngân hàng",
    title: "Ngân hàng Thương mại cổ phần Kỹ Thương Việt Nam (Techcombank)",
  },
  {
    id: 2,
    name: "Số tài khoản",
    title: "123456789",
  },
  {
    id: 3,
    name: "Tên tài khoản",
    title: "CÔNG TY TNHH MỘT THÀNH VIÊN CÔNG NGHỆ KỸ THUẬT TIÊN PHONG",
  },
]

const Methods = ({ validation }) => {
  const [checked, setChecked] = useState("")

  const dispatch = useDispatch()
  const selector = useSelector((state) => state.payment.payment)
  const language = useSelector((state) => state.setLanguage.language)

  const handleChecked = (item) => {
    dispatch(
      setPayment({
        info: selector.info,
        method: { id: item.id, name: item.name, price: item.price },
        tour: selector.tour,
      })
    )
    setChecked(item.id)
    console.log(item.id)

    // switch (item.id) {
    //   case 1:
    //     setChecked(item.id)
    //     break
    //   case 2:
    //     setChecked2(item.id)
    //     break
    //   case 3:
    //     setChecked3(item.id)
    //     break

    //   default:
    //     break
    // }
  }

  return (
    <Container>
      <Title>
        {language === "VN" ? "PHƯƠNG THỨC THANH TOÁN" : "PAYMENT METHODS"}
      </Title>
      <Menu>
        {API.map((item) => (
          <Item key={item.id}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                type="radio"
                onChange={() => handleChecked(item)}
                checked={checked === item.id}
              />
              <Name>{item.name}</Name>
            </div>
          </Item>
        ))}
      </Menu>
      <MessagePayment1 checked={checked}>
        <NameMss>
          {language === "VN" ? "Bạn đã chọn" : "You have chosen"}{" "}
          <Highlight>
            {language === "VN" ? "thanh toán tại quầy" : "pay at the counter"}
          </Highlight>
          .{" "}
          {language === "VN" ? "Tuy nhiên bạn cần phải" : "However you need to"}{" "}
          <Highlight>
            {language === "VN" ? "chuyển khoản 20% tour" : "20% tour transfer"}
          </Highlight>{" "}
          {language === "VN"
            ? "để có thể giữ chổ."
            : "to be able to hold the spot."}
        </NameMss>

        <MenuMss>
          {APIPayMent.map((item) => (
            <ItemMss key={item.id}>
              <NameMss>{item.name}</NameMss>
              <TitleMss>{item.title}</TitleMss>
            </ItemMss>
          ))}
          <ItemMss>
            <NameMss>{language === "VN" ? "Nội dung" : "Content"}</NameMss>
            <TitleMss>
              {language === "VN"
                ? "- Thanh toán tiền 20% tiền cọc tour"
                : "- Pay 20% tour deposit"}{" "}
              <Highlight>{selector.tour.name}</Highlight>
            </TitleMss>
            <TitleMss>
              {language === "VN" ? "- Số tiền 20%:" : "- Amount 20%:"}{" "}
              <Highlight>
                {selector.tour.price &&
                  ((selector.tour.price * 20) / 100).toLocaleString("vi-VN")}
                VND
              </Highlight>
            </TitleMss>
            <TitleMss>
              {language === "VN" ? "- Mã tour:" : "ID tour"}{" "}
              <Highlight>{selector.tour.id}</Highlight>
            </TitleMss>
          </ItemMss>
          <ItemMss>
            <TitleMss>
              {language === "VN"
                ? "Trong trường hợp Quý khách cần hỗ trợ khác, vui lòng liên hệ ngay với chúng tôi."
                : "In case you need other assistance, please contact us immediately."}
            </TitleMss>
            <Highlight>Hotline: 0916 416 409</Highlight>
          </ItemMss>
        </MenuMss>
      </MessagePayment1>

      <MessagePayment3 checked={checked}>
        <MenuMss>
          {APIPayMent.map((item) => (
            <ItemMss key={item.id}>
              <NameMss>{item.name}</NameMss>
              <TitleMss>{item.title}</TitleMss>
            </ItemMss>
          ))}
          <ItemMss>
            <NameMss>{language === "VN" ? "Nội dung" : "Content"}</NameMss>
            <TitleMss>
              {language === "VN" ? "- Thanh toán tiền" : "Pay"}{" "}
              <Highlight>{selector.tour.name}</Highlight>
            </TitleMss>
            <TitleMss>
              {language === "VN" ? "- Số tiền" : "- Price"}{" "}
              <Highlight>
                {selector.tour.price &&
                  selector.tour.price.toLocaleString("vi-VN")}
                VND
              </Highlight>
            </TitleMss>
            <TitleMss>
              {language === "VN" ? "- Mã tour:" : "- ID tour"}{" "}
              <Highlight>{selector.tour.id}</Highlight>
            </TitleMss>
          </ItemMss>
          <ItemMss>
            <TitleMss>
              {language === "VN"
                ? "Trong trường hợp Quý khách cần hỗ trợ khác, vui lòng liên hệ ngay với chúng tôi."
                : "In case you need other assistance, please contact us immediately."}
            </TitleMss>
            <Highlight>Hotline: 0916 416 409</Highlight>
          </ItemMss>
        </MenuMss>
      </MessagePayment3>

      <ShowError>
        {language === "VN" ? validation.idVN : validation.idENG}
      </ShowError>
    </Container>
  )
}

export default Methods
