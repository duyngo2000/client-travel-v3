import styled from "styled-components"
import EmailNotifications from "./EmailNotifications"
import PostsNotification from "./PostsNotification"

const Container = styled.div``
const Wrapper = styled.div``
const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  margin-bottom: 20px;
`
const Title = styled.h2`
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 6px 12px;
`
const WrapperNotifacations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Notifications = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperHeader>
          <Title>Thông báo</Title>
        </WrapperHeader>
        <WrapperNotifacations>
          <EmailNotifications />
          <PostsNotification />
        </WrapperNotifacations>
      </Wrapper>
    </Container>
  )
}

export default Notifications
