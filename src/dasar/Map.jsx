import React from 'react'

const Foods = [
  {
    nama: "Soto",
    harga: 12000
  },
  {
    nama: "Mie Ayam",
    harga: 7000
  },
  {
    nama: "Nasi Goreng",
    harga: 15000
  },
]

const totalHarga = Foods.reduce(
  (total, food) => total + food.harga
)

const Map = () => {
  return (
    <>
      <h2>Map sederhana</h2>
      <ul>
        {Foods.map((food, index) => {
          return (
            <li>
              {index + 1}. {food.nama} - {food.harga}
            </li>
          )
        })}
      </ul>
      <h2>Map filter harga yang lebih dari 11000</h2>
      <ul>
        {Foods.filter(food => food.harga > 11000).map((food, index) => {
          return (
            <li>
              {index + 1}. {food.nama} - {food.harga}
            </li>
          )
        })}
      </ul>
      <h3>Total Harga : {totalHarga}</h3>
    </>
  )
}

export default Map