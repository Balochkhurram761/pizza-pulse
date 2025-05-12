import React, { useEffect, useState } from 'react'
import DetailPage from '../../components/detailPage/DetailPage'
import Loader from '../../components/loader/Loader'
const AboutUs = () => {
  const [IsLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 3000)
  }, [])
  return (
    <>
      {IsLoader ? (
        <Loader />
      ) : (


        <DetailPage />
      )
      }
    </>

  )
}

export default AboutUs