import React , {useState} from 'react'


const Faq = () => {

  const [activeQ, setActiveQ] = useState('q1');

  const openQ = (id) => {
    setActiveQ(activeQ === id ? '' : id)
  }



  const item = [
    {
      id: 'q1',
      ques: '1. What is special about comparing rental car deals?',
      ans: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',
    },
    {
      id: 'q2',
      ques: '2. How do I find the car rental deals?',
      ans: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
    },
    {
      id: 'q3',
      ques: '3. How do I find such low rental car prices?',
      ans: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',
    }
  ]
  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
              <div className="faq-content__title">
                <h5>FAQ</h5>
                <h2>Frequently Asked Questions</h2>
                <p>Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.</p>
              </div>

              <div className="all-question">
                {
                  item.map((item, id) => (
                    <div key={id} className="faq-box" 
                    onClick={()=>openQ(`${item.id}`)}
                    >
                      <div 
                        id={item.id}
                        className={`faq-box__question ${activeQ === item.id ? "active-question" : ""}`}
                        
                      >
                          <p>{item.ques}</p>
                      </div>
                      <div 
                        id={item.id}
                        className={`faq-box__answer ${activeQ === item.id ? "active-answer" : ""}`}
                      >
                          {item.ans}
                      </div>

                    </div>
                  ))
                }
              </div>
          </div>
        </div>
      
      </section> 
    </>
  )
}

export default Faq
