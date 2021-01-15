import React from 'react'
import { cities } from "./cities";

const handleChange = (e) => {
    
  };
function SearcBox() {
    return (
        <div className="container d-flex justify-content-center">
        <h5>Hava Durumunu Öğrenmek İstediğiniz İl'i Seçiniz. </h5>
        <form name="cityname" type="submit" onChange={handleChange}>
          {cities}
        </form>
        <br />
        <br />
      </div>
    )
}

export default SearcBox

