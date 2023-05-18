import styled from "styled-components"

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
const Content = styled.span`
  font-size: 14px;
  font-weight: 600;
`
const Form = styled.form`
  display: flex;
`
const Input = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 5px;
  outline: none;
  border: 1px solid #20d976;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
const Button = styled.button`
  height: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 20px;
  background-color: #20d976;
  color: #fff;
  font-weight: 600;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  :hover {
    cursor: pointer;
  }
`

const EmailNotifications = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Nhận bài viết mới nhất</Title>
        <Content>
          Bạn sẽ là những người đầu tiên nhận được những bài viết mới nhất của
          chúng tôi
        </Content>
        <Form>
          <Input placeholder="youremail@gmail.com" />
          <Button>gởi</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default EmailNotifications
