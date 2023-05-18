import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { apiKey, url, urlNews } from "../../contants/urlContants"

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  gap: 20px;
  box-shadow: 0px 0px 6px #ccc;
  border-radius: 4px;
`
const Title = styled.h4`
  text-transform: uppercase;
`
const WrapperPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Post = styled.div`
  display: flex;
  height: 60px;
`
const Content = styled.span`
  font-size: 12px;
  line-height: 1.2rem;
  font-weight: 600;
  flex: 1;
  padding: 0 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  :hover {
    color: #20d976;
  }
`
const Image = styled.img`
  width: 120px;
  height: 60px;
  text-decoraion: none;
`

const PostsNotifications = () => {
  const [apiPostsNotifications, setApiPostsNotifications] = useState([])
  useEffect(() => {
    axios
      .get(`${urlNews}/getbyview?_limit=3`, {
        headers: {
          "api-key": apiKey,
        },
      })
      .then((res) => {
        setApiPostsNotifications(res.data.news)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Container>
      <Wrapper>
        <Title>Bài viết nổi bật</Title>
        <WrapperPost>
          {apiPostsNotifications !== undefined &&
            apiPostsNotifications.map((posts) => (
              <Post key={posts._id}>
                <Link to={posts._id}>
                  <Image
                    src={url + posts.image}
                    style={{ borderRadius: "4px" }}
                  />
                </Link>
                <Content>
                  <Link
                    to={posts._id}
                    style={{
                      textDecoration: "none",
                      color: "#627b67",
                    }}
                  >
                    {posts.summary}
                  </Link>
                </Content>
              </Post>
            ))}
        </WrapperPost>
      </Wrapper>
    </Container>
  )
}

export default PostsNotifications
