import { Facebook, YouTube, ArrowRightAlt } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Container = styled.div`
  padding: 40px 80px;
  border-top: 3px solid #ed0080;
  background-color: #272626;
  color: white;
  line-height: 1.4;

  @media screen and (max-width: 739px) {
    display: none;
  }
`
const Wrapper = styled.div`
  display: flex;

  @media screen and (min-width: 740px) and (max-width: 1023px) {
    display: block;
  }
`
const Left = styled.div`
  flex: 1;
`
const InfoCty = styled.div``
const CtyName = styled.div``
const CtyAddress = styled.div``
const CtyPhone = styled.div``
const CtyEmail = styled.div``
const Highlight = styled.span`
  border-bottom: 2px solid #ccc;
`
const Name = styled.div``
const Right = styled.div`
  flex: 1;
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
    margin-top: 20px;
  }
`
const SendEmail = styled.div`
  width: 50%;
  margin: 10px 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
`
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: #fff;
  color: #000;
`
const Send = styled(ArrowRightAlt)`
  color: #000;
  cursor: pointer;
`
const IconFb = styled(Facebook)`
  width: 35px !important;
  height: 35px !important;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 8px;
  background-color: red;
`
const IconYt = styled(YouTube)`
  width: 35px !important;
  margin-right: 10px;
  cursor: pointer;
  height: 35px !important;
  border-radius: 8px;
  background-color: red;
`

const Footer = () => {
  const language = useSelector((state) => state.setLanguage.language)

  return (
    <Container>
      <Wrapper>
        <Left>
          <InfoCty>
            <CtyName>
              CÔNG TY TNHH MỘT THÀNH VIÊN CÔNG NGHỆ KỸ THUẬT TIÊN PHONG
            </CtyName>
            <CtyAddress>
              <Highlight>{language === "VN" ? "Địa chỉ" : "Address"}</Highlight>
              :{" "}
              {language === "VN"
                ? "Số 10, đường số 08, khu dân cư Long Thịnh, Phường Phú Thứ, Quận Cái Răng, Thành phố Cần Thơ"
                : "No. 10, Street 08, Long Thinh Residential Area, Phu Thu Ward, Cai Rang District, Can Tho City"}
            </CtyAddress>
            <CtyPhone>
              <Highlight>
                {language === "VN" ? "Điện thoại" : "Phone number"}
              </Highlight>
              : 0916 416 409
            </CtyPhone>
            <CtyEmail>
              <Highlight>
                {language === "VN" ? "Mã số thuế" : "Tax code"}
              </Highlight>
              : 1801526082
            </CtyEmail>
          </InfoCty>
        </Left>
        <Right>
          <Name>
            {language === "VN" ? "LIÊN HỆ VỚI CHÚNG TÔI" : "CONTACT US"}
          </Name>
          <SendEmail>
            <Input placeholder="Nhập email" />
            <Send />
          </SendEmail>
          <IconFb />
          <IconYt />
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer
