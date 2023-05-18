import React, { useEffect, useState } from "react"
import styled from "styled-components"
import iconIntroduce from "../img/lienLac.png"
import axios from "axios"
import { useSelector } from "react-redux"
import validateContact from "../contants/validateContact"
import { toast, ToastContainer } from "react-toastify"
import { moblie } from "../contants/sizeScreen"

const Container = styled.div`
  padding-top: 100px;
  background-color: aliceblue;
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

  @media screen and (max-width: ${moblie}) {
    padding-top: 60px;
  }
`
const Wrapper = styled.div``
const WrapperTitle = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 10%);
`
const Title1 = styled.h1`
  color: #007ce8;
  margin: 0;
  padding: 0;
  @media screen and (max-width: ${moblie}) {
    padding-top: 10px;
  }
`
const Title2 = styled.p`
  margin: 0;
  padding: 0;
  color: #007ce8;
  margin-bottom: 20px;

  @media screen and (max-width: ${moblie}) {
    text-align: center;
    padding: 0 10px;
  }
`

const WrapperForm = styled.div`
  height: calc(85vh - 60px);
  position: relative;
  background-color: aliceblue;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50vw;
    height: 50vh;
    background-image: url(${iconIntroduce});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const Form = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 16px;

  @media screen and (max-width: ${moblie}) {
    padding: 0;
    width: 100%;
  }
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`
const Name = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
  width: 82%;
  text-align: left;
`
const Input = styled.input`
  height: 40px;
  width: calc(80% - 14px);
  padding: 0 10px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    border: 1px solid #7496d4;
  }
`
const Textarea = styled.textarea`
  height: 100px;
  width: calc(80% - 14px);
  padding: 5px 10px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: justify;
  &:focus {
    border: 1px solid #7496d4;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ccc;
    border-radius: 1600px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20px;
    border-radius: 160px;
    background-color: #ed0080;
  }
`
const Button = styled.button`
  width: calc(80% + 10px);
  height: 40px;
  text-align: center;
  margin-left: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #7496d4;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #7496d4;
    border: 1px solid #7496d4;
  }
`
const ShowError = styled.p`
  margin: 0;
  padding: 0;
  width: 82%;
  font-size: 14px;
  color: red;
`

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  const language = useSelector((state) => state.setLanguage.language)
  const [validation, setValidation] = useState("")

  const handleChangeName = (e) => {
    setName(e.target.value)
    setValidation(validateContact(e.target.value, email, content))
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    setValidation(validateContact(name, e.target.value, content))
  }
  const handleChangeContent = (e) => {
    setContent(e.target.value)
    setValidation(validateContact(name, email, e.target.value))
  }

  const handleSubmit = async () => {
    const validate = validateContact(name, email, content)
    const isValid = Object.keys(validate).length

    if (isValid > 0) {
      setValidation(validate)
      return
    }
    await axios
      .post("http://localhost:5000/api/contact", {
        name,
        email,
        content,
      })
      .then(function (response) {
        toast(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    setName("")
    setEmail("")
    setContent("")
  }

  return (
    <Container>
      <ToastContainer
        style={{ zIndex: "1111111111111111111" }}
      ></ToastContainer>
      <Wrapper>
        <WrapperTitle>
          <Title1>
            {language === "VN" ? "Liên hệ chúng tôi" : "Contact us"}
          </Title1>
          <Title2>
            {language === "VN"
              ? "Chúng tôi luôn sẳn sàng hổ trợ, dù bạn ở bất cứ nơi đâu"
              : "We are always ready to help, wherever you are"}
          </Title2>
        </WrapperTitle>
        <WrapperForm>
          <Form>
            <Menu>
              <Item>
                <Name>{language === "VN" ? "Tên của bạn" : "Your name"}</Name>
                <Input value={name} onChange={handleChangeName} />
                <ShowError>
                  {language === "VN" ? validation.nameVN : validation.nameENG}
                </ShowError>
              </Item>
              <Item>
                <Name>
                  {language === "VN" ? "Email của bạn" : "Your email"}
                </Name>
                <Input value={email} onChange={handleChangeEmail} />
                <ShowError>
                  {language === "VN" ? validation.emailVN : validation.emailENG}
                </ShowError>
              </Item>
              <Item>
                <Name>
                  {language === "VN"
                    ? "Hãy chia sẽ lo lắng của bạn"
                    : "Please share your worries"}
                </Name>
                <Textarea
                  value={content}
                  onChange={handleChangeContent}
                ></Textarea>
                <ShowError>
                  {language === "VN"
                    ? validation.contentVN
                    : validation.contentENG}
                </ShowError>
              </Item>
            </Menu>
            <Button onClick={handleSubmit}>
              {language === "VN" ? "Gởi" : "Submit"}
            </Button>
          </Form>
        </WrapperForm>
      </Wrapper>
    </Container>
  )
}

export default Contact
