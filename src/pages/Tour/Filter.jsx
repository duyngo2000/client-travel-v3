import {
  ArrowDropDown,
  DeleteSweepOutlined,
  FilterListOutlined,
  SearchOutlined,
} from "@material-ui/icons"
import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: #c37676;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`
const Search = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  /* padding: ${(prop) => (prop.type === "date" ? "0 5px" : "0 10px 0 5px")}; */
  border-radius: 4px;
`
const WrapperPrice = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;

  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  height: calc(100% - 16px - 2px);
`
const Price = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  top: calc(42px + 10px);
  display: ${(prop) => (prop.show ? "flex" : "none")};
  flex-wrap: wrap;
  max-width: 600px;
  min-width: 382px;

  ::before {
    content: "";
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    background-color: #fff;
    position: absolute;
    top: -6px;
    left: 16px;
  }
`
const FromTo = styled.span`
  border: 1px solid #ccc;
  padding: 8px 10px;
  font-size: 14px;
  margin: 5px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
  :active {
    border: 1px solid #fff;
    background-color: #ccc;
  }
`
const WrapperTime = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`
const Time = styled.div`
  height: 100%;
`
const WrapperSeats = styled.div`
  display: inline-block;
  position: relative;
  z-index: 5;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`
const Seats = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  top: calc(42px + 10px);
  display: ${(prop) => (prop.show ? "flex" : "none")};
  flex-wrap: wrap;
  max-width: 600px;
  min-width: 382px;

  ::before {
    content: "";
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    background-color: #fff;
    position: absolute;
    top: -6px;
    left: 16px;
  }
`
const WrapperChangeFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -5px;
`
const ButtonChangeFiler = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px;
  font-weight: 600;
  :hover {
    cursor: pointer;
    border: 1px solid aqua;
    background-color: aqua;
    color: #fff;
  }
`

const Filter = () => {
  const [show, setShow] = useState({
    price: false,
    seats: false,
  })
  const [filter, setFilter] = useState({
    search: "",
    price: {
      up: "",
      to: "",
    },
    seats: {
      up: "",
      to: "",
    },
    time: "",
  })
  const handleShow = (item) => {
    switch (item) {
      case "price":
        setShow({ price: !show.price })
        break
      case "seats":
        setShow({ seats: !show.seats })
        break
      default:
        break
    }
  }
  const handleFilter = (data) => {
    console.log(data)
    switch (data.split(":")[0]) {
      case "search":
        setFilter((prev) => ({ ...prev, search: data.split(":")[1] }))
        break
      case "price":
        handleShow("price")
        if (data.includes("<") && data.includes(">")) {
          const priceUp = data.split(">")
          const priceTo = priceUp[1].split("<")
          setFilter((prev) => ({
            ...prev,
            price: {
              up: priceTo[0],
              to: priceTo[1],
            },
          }))
        } else if (data.includes(">")) {
          const price = data.split(">")
          setFilter((prev) => ({
            ...prev,
            price: {
              up: price[1],
              to: "",
            },
          }))
        } else {
          const price = data.split("<")
          setFilter((prev) => ({
            ...prev,
            price: {
              up: "",
              to: price[1],
            },
          }))
        }
        break
      case "seats":
        handleShow("seats")
        if (data.includes("<") && data.includes(">")) {
          const seatsUp = data.split(">")
          const seatsTo = seatsUp[1].split("<")
          setFilter((prev) => ({
            ...prev,
            seats: {
              up: seatsTo[0],
              to: seatsTo[1],
            },
          }))
        } else if (data.includes(">")) {
          const seats = data.split(">")
          setFilter((prev) => ({
            ...prev,
            seats: {
              up: seats[1],
              to: "",
            },
          }))
        } else {
          const seats = data.split("<")
          setFilter((prev) => ({
            ...prev,
            seats: {
              up: "",
              to: seats[1],
            },
          }))
        }
        break
      case "time":
        setFilter((prev) => ({ ...prev, time: data.split(":")[1] }))
        break
      default:
        break
    }
  }

  const submitFilter = () => {
    console.log("filter", filter)
  }
  return (
    <Container>
      <Wrapper>
        <Search>
          <SearchOutlined />
          <Input
            placeholder="Tìm theo điểm đến"
            onChange={(e) => handleFilter("search:" + e.target.value)}
            value={filter.search}
          />
        </Search>
        <WrapperPrice>
          <Title onClick={() => handleShow("price")}>
            {filter.price.up === "" && filter.price.to === ""
              ? "Giá"
              : filter.price.up !== "" && filter.price.to !== ""
              ? "Từ " + filter.price.up + "tr - " + filter.price.to + "tr"
              : filter.price.up !== ""
              ? "Trên " + filter.price.up + " triệu"
              : "Dưới " + filter.price.to + " triệu"}{" "}
            <ArrowDropDown />
          </Title>
          <Price show={show.price}>
            <FromTo
              onClick={() => {
                handleFilter("price:<3")
              }}
            >
              Dưới 3 triệu
            </FromTo>
            <FromTo onClick={() => handleFilter("price:>3<5")}>
              Từ 3tr - 5tr
            </FromTo>
            <FromTo onClick={() => handleFilter("price:>5<7")}>
              Từ 5tr - 7tr
            </FromTo>
            <FromTo onClick={() => handleFilter("price:>7<10")}>
              Từ 7tr - 10tr
            </FromTo>
            <FromTo onClick={() => handleFilter("price:>10")}>
              Trên 10 triệu
            </FromTo>
          </Price>
        </WrapperPrice>
        <WrapperSeats>
          <Title onClick={() => handleShow("seats")}>
            {filter.seats.up === "" && filter.seats.to === ""
              ? "Số chổ ngồi"
              : filter.seats.up !== "" && filter.seats.to !== ""
              ? "Từ " + filter.seats.up + "ng - " + filter.seats.to + "ng"
              : filter.seats.up !== ""
              ? "Trên " + filter.seats.up + " người"
              : "Dưới " + filter.seats.to + " người"}{" "}
            <ArrowDropDown />
          </Title>
          <Seats show={show.seats}>
            <FromTo onClick={() => handleFilter("seats:<3")}>
              Dưới 3 người
            </FromTo>
            <FromTo onClick={() => handleFilter("seats:>3<5")}>
              Từ 3ng - 5ng
            </FromTo>
            <FromTo onClick={() => handleFilter("seats:>5<7")}>
              Từ 5ng - 7ng
            </FromTo>
            <FromTo onClick={() => handleFilter("seats:>7<10")}>
              Từ 7ng - 10ng
            </FromTo>
            <FromTo onClick={() => handleFilter("seats:>10")}>
              Trên 10 người
            </FromTo>
          </Seats>
        </WrapperSeats>
        <WrapperTime>
          <Time>
            <Input
              type="date"
              onChange={(e) => handleFilter("time:" + e.target.value)}
              value={filter.time}
            />
          </Time>
        </WrapperTime>
        <WrapperChangeFilter>
          <ButtonChangeFiler onClick={submitFilter}>
            Lọc <FilterListOutlined />
          </ButtonChangeFiler>
          <ButtonChangeFiler
            onClick={() =>
              setFilter({
                search: "",
                price: {
                  up: "",
                  to: "",
                },
                seats: {
                  up: "",
                  to: "",
                },
                time: "",
              })
            }
          >
            Bỏ chọn <DeleteSweepOutlined />{" "}
          </ButtonChangeFiler>
        </WrapperChangeFilter>
      </Wrapper>
    </Container>
  )
}

export default Filter
