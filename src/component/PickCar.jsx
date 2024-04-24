import {useState} from 'react'
import { CarData } from './CarData'
import CarBox from './CarBox'


const PickCar = () => {
    const [active, setActive] = useState('FirstCar');
    const [btnColor, setBtnColor] = useState('btn1');

    const btnID = (id) => {
        setBtnColor(btnColor === id ? '' : id)
    }

    const coloringBtn = (id) => {
        return btnColor === id ? 'colored-button' : '';
    }

    const CarName = [
        {
            name: 'Audi A1 S-Line',
            act: 'FirstCar',
            id: 'btn1'
        },
        {
            name: 'VW Golf 6',
            act: 'SecondCar',
            id: 'btn2'
        },
        {
            name: 'Toyota Camry',
            act: 'ThirdCar',
            id: 'btn3'
        },
        {
            name: 'BMW 320 ModernLine',
            act: 'FourthCar',
            id: 'btn4'
        },
        {
            name: 'Mercedes-Benz GLK',
            act: 'FifthCar',
            id: 'btn5'
        },
        {
            name: 'VW Passat CC',
            act: 'SixthCar',
            id: 'btn6'
        },
    ]

  return (
    <>
        <section className="pick-section">
            <div className="container">
                <div className="pick-container">
                    <div className="pick-container__title">
                        <h3>Vehicle Models</h3>
                        <h2>Our rental fleet</h2>
                        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                    </div>
                    <div className="pick-container__car-content">
                        <div className="pick-box">
                            {
                                CarName.map((car, i) => (
                                    <button
                                        key={i}
                                        className={`${coloringBtn(car.id)}`}
                                        id= {car.id}                                    
                                        onClick = {()=>{
                                            setActive(car.act);
                                            btnID(car.id)
                                        }}
                                    >
                                        {car.name}
                                    </button>
                                ))
                            }
                        </div>
                        {active === "FirstCar" && <CarBox data={CarData} carID={0} />}
                        {active === "SecondCar" && <CarBox data={CarData} carID={1} />}
                        {active === "ThirdCar" && <CarBox data={CarData} carID={2} />}
                        {active === "FourthCar" && <CarBox data={CarData} carID={3} />}
                        {active === "FifthCar" && <CarBox data={CarData} carID={4} />}
                        {active === "SixthCar" && <CarBox data={CarData} carID={5} />}

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PickCar

