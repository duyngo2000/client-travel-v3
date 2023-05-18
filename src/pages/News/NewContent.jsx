import { Link } from "react-router-dom"
import styled from "styled-components"
import { url } from "../../contants/urlContants"

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 170px;
  margin-bottom: 20px;
`
const WrapperImage = styled.div`
  flex: 2;
  position: relative;
`
const WrapperContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Title = styled.h3``
const Note = styled.span`
  font-size: 13px;
  font-style: italic;
`
const Date = styled.span`
  font-size: 13px;
  font-style: italic;
`
const Summary = styled.span`
  font-size: 14px;
`
const ImageTour = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
`
const NewContent = ({ data }) => {
  console.log(data)
  return (
    <Container>
      {data.map((content) => (
        <Wrapper key={content._id}>
          <WrapperImage key={content._id}>
            <Link to={`/news/${content._id}`}>
              <ImageTour src={url + content.image} />{" "}
            </Link>
          </WrapperImage>
          <WrapperContent>
            <Title>
              <Link
                to={`/news/${content._id}`}
                style={{ textDecoration: "none" }}
              >
                {content.name}
              </Link>
            </Title>
            <Note>
              <Link to={`/news/${content._id}`}>
                <Date></Date>
              </Link>
            </Note>
            <Summary>{content.summary}</Summary>
          </WrapperContent>
        </Wrapper>
      ))}
    </Container>
  )
}

export default NewContent
