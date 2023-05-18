import { RemoveRedEyeOutlined, ThumbUpOutlined } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1068px;
  margin: 0 auto;
`
const Wrapper = styled.div``
const Menu = styled.ul`
  height: 60vh;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`
const Item = styled.li`
  box-shadow: 0 2px 2px #ccc;
  border-radius: 4px;

  :first-child {
    grid-column: 1/2;
    grid-row: 1/4;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
  :nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: row-reverse;
  }
  :nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
  }
  :nth-child(4) {
    grid-column: 2/3;
    grid-row: 3/4;
    display: flex;
    flex-direction: row-reverse;
  }
`
const WrapperImage = styled.div`
  flex: 1;
  position: relative;
  :first-child {
    grid-row: 1/3;
  }
`
const WrapperContent = styled.div`
  flex: 1;
`
const Content = styled.div`
  padding: 10px;
`
const Name = styled.h2``
const Note = styled.div`
  padding: 10px 0;
  font-size: 14px;
`
const Date = styled.span``
const Views = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px !important;
`
const Likes = styled.span``

const FirstContent = () => {
  const [apiFirstContent, setApiFirstContent] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts1/getbyview?_limit=4")
      .then((res) => {
        setApiFirstContent(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Container>
        <Wrapper>
          {/* <Menu>
            {apiFirstContent.map((content) => (
              <Item key={content._id}>
                <WrapperImage>
                  <Link href={replaceLink(content.articletTitle)}>
                    <Image
                      src={content.image}
                      loader={() => content.image}
                      alt=""
                      fill
                      style={{
                        borderTopLeftRadius: "4px",
                        borderBottomLeftRadius: "4px",
                      }}
                    />
                  </Link>
                </WrapperImage>
                <WrapperContent>
                  <Content>
                    <Link href={replaceLink(content.articletTitle)}>
                      <Name>{content.articletTitle}</Name>
                    </Link>
                    <Note>
                      <Date>{formatDate(content.createdAt)}</Date>
                      <Views>
                        {content.view}
                        <RemoveRedEyeOutlined
                          style={{ fontSize: "14px", marginLeft: "5px" }}
                        />
                      </Views>
                      <Likes>
                        {content.like}
                        <ThumbUpOutlined
                          style={{ fontSize: "14px", marginLeft: "5px" }}
                        />
                      </Likes>
                    </Note>
                  </Content>
                </WrapperContent>
              </Item>
            ))}
          </Menu> */}
        </Wrapper>
      </Container>
    </>
  )
}

export default FirstContent
