import { useState, useEffect } from 'react'
import Golf6 from "../assets/cars-big/golf6.jpg";
import AudiA1 from "../assets/cars-big/audia1.jpg";
import Toyota from "../assets/cars-big/toyotacamry.jpg";
import Bmw320 from "../assets/cars-big/bmw320.jpg";
import Benz from "../assets/cars-big/benz.jpg";
import Passat from "../assets/cars-big/passatcc.jpg";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";


const BookCar = () => {
  const [model, setModel] = useState(false)

  // booking car
  const [carType, setCarType] = useState('');
  const [pickUp, setPickUp] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [pickTime, setPickTime] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [carImg, setCarImg] = useState('');

  // model infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");



  // booking form
  const handleCar = (e) => {
    setCarType(e.target.value)
    setCarImg(e.target.value);
  }

  const handlePick = (e) => {
    setPickUp(e.target.value);
  }

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  }

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  }

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  }


  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };


  // open model
const openModel = (e) => {
  e.preventDefault();
  const errorMsg = document.querySelector('.error-message');

  if (
    pickUp === '' ||
    dropOff === '' ||
    pickTime === '' ||
    dropTime === '' ||
    carType === ''
  ) {
    errorMsg.style.display = 'flex';
  } else {
    setModel(!model);
    const modelDiv = document.querySelector('.booking-modal');
    modelDiv.scroll(0, 0);
    errorMsg.style.display = 'none';
  }
};

  // car image
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = AudiA1;
      break;
    case "VW Golf 6":
      imgUrl = Golf6;
      break;
    case "Toyota Camry":
      imgUrl = Toyota;
      break;
    case "BMW 320 MordernLine":
      imgUrl = Bmw320;
      break;
    case "Mercedes-Benz":
      imgUrl = Benz;
      break;
    case "VW Passat CC":
      imgUrl = Passat;
      break;
    default:
      imgUrl = '';
  }

  // disable page scroll when maodal is displayed
  useEffect(() => {
    if (model) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[model]);

  // Confirm model booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModel(!model);
    const doneMsg = document.querySelector('.booking-done');
    doneMsg.style.display = 'flex';
  }
  // hide message

  const hideMessage = () => {
    const doneMsg = document.querySelector('.booking-done');
    doneMsg.style.display = 'none';
  }


  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModel}
          className={`model-overlay ${model ? 'active-model' : ''}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>
              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>
              <p className="booking-done">
                Check your email to confirm an order.{''}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>
              <form className="box-form">
                <div className="box-form__car-type">
                  <label htmlFor="carType">
                    <IconCar className='input-icon' /> &nbsp; Select Your Car Type <b>*</b>
                  </label>
                  <select value={carType} id="carType" onChange={handleCar}>
                    <option value="">Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 MordernLine">BMW 320 MordernLine</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label htmlFor="pickUp">
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}<b>*</b>
                  </label>
                  <select value={pickUp} id="pickUp" onChange={handlePick}>
                    <option value="">Select Pick up location</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Gurgoan">Gurgoan</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Palwal">Palwal</option>
                  </select>
                </div>
                <div className="box-form__car-type">
                  <label htmlFor="dropOff">
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-of{" "}<b>*</b>
                  </label>
                  <select value={dropOff} id="dropOff" onChange={handleDrop}>
                    <option value="">Select Pick up location</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Gurgoan">Gurgoan</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Palwal">Palwal</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className='input-icon' /> &nbsp; Pick-up {' '} <b>*</b>
                  </label>
                  <input
                    type="date"
                    value={pickTime}
                    id="picktime"
                    onChange={handlePickTime}
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className='input-icon' /> &nbsp; Drop-off {' '} <b>*</b>
                  </label>
                  <input
                    type="date"
                    value={dropTime}
                    id="droptime"
                    onChange={handleDropTime}
                  />
                </div>

                <button onClick={openModel} type='submit'>Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className={`booking-modal ${model ? 'active-modal' : ''}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <IconX onClick={openModel} />
        </div>

        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry, you will receive:
          </h4>
          <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
        </div>

        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Date & Time</h6>

                  <p>
                    {pickTime} / {' '}
                    <input type="time" className='input-time' />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Date & Time</h6>

                  <p>
                    {dropTime} / {' '}
                    <input type="time" className='input-time' />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span> Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt='car_img' />}
          </div>

        </div>
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label htmlFor="fname">First Name <b>*</b></label>
                <input type="text" id="fname" value={name} onChange={handleName} placeholder='Enter your first name'></input>
                <p className='error-modal'>This field is required</p>
              </span>

              <span>
                <label htmlFor="lname">Last Name <b>*</b></label>
                <input type="text" id="lname" value={lastName} onChange={handleLastName} placeholder='Enter your last name'></input>
                <p className='error-modal'>This field is required</p>
              </span>

              <span>
                <label htmlFor="phno">Phone Number <b>*</b></label>
                <input type="tel" id="phno" value={phone} onChange={handlePhone} placeholder='Enter your phone number' />
                <p className='error-modal'>This field is required</p>
              </span>

              <span>
                <label htmlFor="age">Age <b>*</b></label>
                <input type="number" id="age" value={age} onChange={handleAge} placeholder='18' />
                <p className='error-modal'>This field is required</p>
              </span>
            </div>
              <div className="info-form__1col">
                <span>
                  <label htmlFor="email">Email <b>*</b></label>
                  <input type="email" id="email" value={email} onChange={handleEmail} placeholder='Enter your email address' />
                  <p className='error-modal'>This field is required</p>
                </span>
                <span>
                  <label htmlFor="address">Address <b>*</b></label>
                  <input type="text" id="address" value={address} onChange={handleAddress} placeholder='Enter your street address' />
                  <p className='error-modal'>This field is required</p>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label htmlFor="city">City <b>*</b></label>
                  <input type="text" id="city" value={city} onChange={handleCity} placeholder='Enter your city' />
                  <p className='error-modal'>This field is required</p>
                </span>
                <span>
                  <label htmlFor="zip">Zip Code <b>*</b></label>
                  <input type="text" id="zip" value={zipcode} onChange={handleZip} placeholder='Enter your zip code' />
                  <p className='error-modal'>This field is required</p>
                </span>
              </div>


            
            <span className="info-form__checkbox">
              <input type="checkbox" id="agree" name='agree' />
              <label htmlFor="agree">Please send me latest news and updates</label>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookCar
