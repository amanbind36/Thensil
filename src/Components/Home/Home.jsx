import React, { useState } from 'react'
import Styles from "./home.module.css"
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();


  const mobileData = [
    { id: 1, name: 'google pixel7', img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlfGVufDB8fDB8fHww' },
    { id: 2, name: 'Samsung S22', img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlfGVufDB8fDB8fHww' },
    { id: 3, name: 'redmi 12', img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'samsung78', img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D' },
  ];
  const TopDeal = [
    { id: 1, name: "Armai Exchange", img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww' },
    { id: 2, name: "Puma", img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: "Fastrack", img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 4, name: "Adidas", img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww' },
  ]
  const Electronics = [
    { id: 1, name: "Fire-Bolt", img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D' },
    { id: 2, name: "Printer Inks", img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww' },
    { id: 3, name: "Acer Tv", img: 'https://plus.unsplash.com/premium_photo-1661304671477-37c77d0c6930?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww' },
    { id: 4, name: "Top Canon", img: 'https://media.istockphoto.com/id/178716575/photo/mobile-devices.webp?b=1&s=170667a&w=0&k=20&c=l3I_odDQkRkXCM1tlBdGBzzRsr3vEzeObGNsTTPuw0s=' },
  ]
  const earphone = [
    { id: 1, name: "Boult Audio", img: 'https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFycGhvbmVzfGVufDB8fDB8fHww' },
    { id: 2, name: "Boult Audio 340", img: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww' },
    { id: 3, name: "Microflash s7", img: 'https://images.unsplash.com/photo-1536650731127-3b9ce7c98007?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWFycGhvbmVzfGVufDB8fDB8fHww' },
    { id: 4, name: "Boat Bashead", img: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWFycGhvbmVzfGVufDB8fDB8fHww' },
  ]
  const Faishan = [
    { id: 1, name: "Kurta Sets", img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D' },
    { id: 2, name: "Denims Jackets", img: 'https://images.unsplash.com/photo-1676213544744-d69e2f658e59?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGdvZ2dsZXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, name: "Crocs", img: 'https://images.unsplash.com/photo-1545579833-0e15a2cdb26b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29nZ2xlfGVufDB8fDB8fHww' },
    { id: 4, name: "Metronaut", img: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww' },
  ]

  return (
    <>




      <h2>Welcome to the Thinsil Tech!</h2>;
      <h3 className={Styles.heading} >Best Mobile</h3>
      <div className={Styles.home}>

        <div className={Styles.best}>
          {mobileData.map(item => (
            <div className={Styles.cart} key={item.id}>

              <img width="200px" height="250px" src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <button onClick={() => {     localStorage.setItem('ProductData', JSON.stringify(item)); }}>Add to Cart</button>
            </div>

          ))}
        </div>

      </div>
      <br /><br /><br />
      <h3 className={Styles.heading} >TopDeal</h3>
      <div className={Styles.home}>

        <div className={Styles.best}>
          {TopDeal.map(item => (
            <div className={Styles.cart} key={item.id}>

              <img width="200px" height="250px" src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <button onClick={() => {     localStorage.setItem('ProductData', JSON.stringify(item)); }}>Add to Cart</button>
            </div>

          ))}
        </div>
        </div>
        <br /><br /><br />
      <h3 className={Styles.heading} >Electronics</h3>
      <div className={Styles.home}>

        <div className={Styles.best}>
          {Electronics.map(item => (
            <div className={Styles.cart} key={item.id}>

              <img width="200px" height="250px" src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <button onClick={() => {     localStorage.setItem('ProductData', JSON.stringify(item)); }}>Add to Cart</button>
            </div>

          ))}
        </div>
        </div>
        <br /><br /><br />
      <h3 className={Styles.heading} >Earphone</h3>
      <div className={Styles.home}>

        <div className={Styles.best}>
          {earphone.map(item => (
            <div className={Styles.cart} key={item.id}>

              <img width="200px" height="250px" src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <button onClick={() => {     localStorage.setItem('ProductData', JSON.stringify(item)); }}>Add to Cart</button>
            </div>

          ))}
        </div>
        </div>
        <br /><br /><br />
      <h3 className={Styles.heading} >Faishan</h3>
      <div className={Styles.home}>

        <div className={Styles.best}>
          {Faishan.map(item => (
            <div className={Styles.cart} key={item.id}>

              <img width="200px" height="250px" src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <button onClick={() => {     localStorage.setItem('ProductData', JSON.stringify(item)); }}>Add to Cart</button>
            </div>

          ))}
        </div>
        </div>
      
    </>
  )
}

export default Home
