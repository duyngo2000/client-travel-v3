import React, { useEffect } from "react"
import Header from "../components/Header"
import Search from "../components/Search"
import SliderVideo from "../components/SliderVideo"
import FaveritePlaces from "../components/FaveritePlaces"
import TravelTips from "../components/TravelTips"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setProduct } from "../redux/actions/productActions"
import { urlTour } from "../contants/urlContants"
import CheapTour from "../components/CheapTour"
import TourExperience from "../components/TourExperience"
import ExpensiveTour from "../components/ExpensiveTour"

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = useSelector((state) => state.allProducts.products)

  const dispatch = useDispatch()
  useEffect(() => {
    const ListTour = async () => {
      const response = await axios
        .get(`${urlTour}?page=${0}`, {
          headers: {
            "api-key": "duy",
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setProduct(response.data.data))
    }
    ListTour()
  }, [dispatch])

  return (
    <div>
      <Header />
      <SliderVideo />
      <Search products={products} />
      <FaveritePlaces />
      <CheapTour />
      <ExpensiveTour />
      <TravelTips />
      <TourExperience />
      {/* <TourGuide /> */}
    </div>
  )
}

export default HomePage
