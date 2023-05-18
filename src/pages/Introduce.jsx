import React, { useEffect } from "react"
import styled from "styled-components"
import {
  AddLocation,
  DragHandle,
  Email,
  FormatAlignRight,
  LocationOn,
  Phone,
} from "@material-ui/icons"
import { useSelector } from "react-redux"
import { moblie } from "../contants/sizeScreen"

const Container = styled.div`
  /* margin: 60px 0; */
  padding-top: 60px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: black;
    z-index: 1;
  }
`
const Wrapper = styled.div`
  margin: 0 150px;

  @media screen and (max-width: ${moblie}) {
    margin: 0 10px;
  }
`
const Wrapper1 = styled.div`
  text-align: center;
  margin: 100px 0;
`
const Menu = styled.div`
  margin-bottom: 50px;
`
const Name = styled.h2``
const IconWrapper = styled(FormatAlignRight)`
  transform: rotate(90deg);
  color: red;
  font-size: 2rem !important;
`
const Description = styled.p`
  margin: 0;
  padding: 0;
`
const Menu1 = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);

  @media screen and (max-width: ${moblie}) {
    grid-template-columns: 1fr;
  }
`
const Item1 = styled.li`
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
`
const NameItem1 = styled.p``

const Menu2 = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
    margin: 0 10px;
  }
`
const Item2 = styled.li`
  flex: 1;
  width: 100%;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
`
const NameItem2 = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`
const ContentItem2 = styled.p`
  text-align: justify;
`
const WrapperHotline = styled.div`
  background-color: rgba(0, 0, 0, 10%);
  padding: 0 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${moblie}) {
    display: block;
    padding: 0;
  }
`
const Hotline = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${moblie}) {
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  }
`
const TitleHotline = styled.div`
  flex: 1;
  margin: 0 10px;
`
const NameHotline = styled.p`
  font-size: 18px;
  font-weight: 600;
`
const ContentHotline = styled.p``

const Introduce = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const language = useSelector((state) => state.setLanguage.language)

  return (
    <Container>
      <Wrapper>
        <Wrapper1>
          <Menu>
            <Name>
              {language === "VN"
                ? "TRIẾT LÝ KINH DOANH"
                : "BUSINESS PHILOSOPHY"}
            </Name>
            <IconWrapper />
            <Description>
              {language === "VN"
                ? "Thành công của Tiên Phong Tech được tạo nên từ 4 triết lý kinh doanh"
                : "The success of Tien Phong Tech is made up of 4 business philosophies"}
            </Description>
          </Menu>
          <Menu1>
            <Item1>
              <AddLocation />
              <DragHandle />
              <NameItem1>
                {language === "VN"
                  ? "Chất lượng sản phẩm và dịch vụ"
                  : "Quality products and services"}
              </NameItem1>
            </Item1>
            <Item1>
              <AddLocation />
              <DragHandle />
              <NameItem1>
                {language === "VN"
                  ? "Minh bạch và tuân thủ pháp chế."
                  : "Transparency and compliance with the law."}
              </NameItem1>
            </Item1>
            <Item1>
              <AddLocation />
              <DragHandle />
              <NameItem1>
                {language === "VN"
                  ? "Luôn đem lại niềm vui cho khách"
                  : "Always bring joy to customers"}
                hàng
              </NameItem1>
            </Item1>
            <Item1>
              <AddLocation />
              <DragHandle />
              <NameItem1>
                {language === "VN"
                  ? "Lan tỏa đam mê đến mọi người"
                  : "Spread the passion to everyone"}
              </NameItem1>
            </Item1>
          </Menu1>
        </Wrapper1>
        <Wrapper1>
          <Menu>
            <Name>
              {language === "VN"
                ? "SỨ MỆNH VÀ TẦM NHÌN CỦA CHÚNG TÔI"
                : "OUR MISSION AND VISION"}
            </Name>
            <IconWrapper />
          </Menu>
          <Menu2>
            <Item2>
              <AddLocation />
              <DragHandle />
              <NameItem2>
                {language === "VN"
                  ? "Ngày càng phát triển"
                  : "Rapidly developing"}
              </NameItem2>
              <ContentItem2>
                {language === "VN"
                  ? "Trở thành một trong những công ty du lịch hàng đầu tại Việt Nam với hệ thống Tour Du lịch đa dạng, phong phú, chất lượng cao và giá cả hợp lý"
                  : "Become one of the leading travel companies in Vietnam with a diversified, rich, high quality and reasonable price tour system."}
              </ContentItem2>
            </Item2>
            <Item2>
              <AddLocation />
              <DragHandle />
              <NameItem2>
                {language === "VN" ? "Dịch vụ tốt nhất" : "Best service"}
              </NameItem2>
              <ContentItem2>
                {language === "VN"
                  ? "Mang đến những dịch vụ tốt nhất cho khách hàng, phong cách phục vụ chu đáo, nhân viên nhiệt tình thân thiện và đáng tin cậy."
                  : "Bringing the best services to customers, attentive service style, enthusiastic, friendly and reliable staff."}
              </ContentItem2>
            </Item2>
            <Item2>
              <AddLocation />
              <DragHandle />
              <NameItem2>
                {language === "VN" ? "Đam mê bất tận" : "Endless passion"}
              </NameItem2>
              <ContentItem2>
                {language === "VN"
                  ? "Lan tỏa đam mê, mang một môi trường làm việc chuyên nghiệp, sáng tạo, ghi nhận và tôn vinh những sáng tạo của những tài năng."
                  : "Spread passion, bring a professional and creative working environment, recognize and honor the creations of talented people."}
              </ContentItem2>
            </Item2>
          </Menu2>
        </Wrapper1>
      </Wrapper>
      <WrapperHotline>
        <Hotline>
          <Phone style={{ fontSize: "3rem" }} />
          <TitleHotline>
            <NameHotline>HOTLINE</NameHotline>
            <ContentHotline>0916 416 409</ContentHotline>
          </TitleHotline>
        </Hotline>
        <Hotline>
          <LocationOn style={{ fontSize: "3rem" }} />
          <TitleHotline>
            <NameHotline>
              {language === "VN" ? "ĐỊA CHỈ" : "ADDRESS"}
            </NameHotline>
            <ContentHotline>
              {language === "VN"
                ? "Số 10, đường số 08, khu dân cư Long Thịnh, Phường Phú Thứ, Quận Cái Răng, Thành phố Cần Thơ"
                : "No. 10, Street 08, Long Thinh Residential Area, Phu Thu Ward, Cai Rang District, Can Tho City"}
            </ContentHotline>
          </TitleHotline>
        </Hotline>
        <Hotline>
          <Email style={{ fontSize: "3rem" }} />
          <TitleHotline>
            <NameHotline>EMAIL</NameHotline>
            <ContentHotline>ABC@tienphongtech.vn</ContentHotline>
          </TitleHotline>
        </Hotline>
      </WrapperHotline>
    </Container>
  )
}

export default Introduce
