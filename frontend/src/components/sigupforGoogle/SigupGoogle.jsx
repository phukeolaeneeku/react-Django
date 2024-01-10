import React from 'react'

const SigupGoogle = () => {
  return (
    <>
    <div className="box_forgot">
            {/* <Link to="/loginuser" className="box_iconBack">
                <IoArrowBack id="box_icon_Back" />
                <p>Back</p>
            </Link> */}
            <h2>Seller registratio</h2>
            <div className="title">
                Please enter additional information to register as a seller!
            </div>

            <form className='container_form'>

                <div className='title_seller2'>
                    Enter additional informatiom
                </div>
                <input type="text" placeholder="Store name (required)" required />

                <input type="text" placeholder="Address (required) " required />
                <input type="text" placeholder="Contact information (optional)" required />
                <input type="text" placeholder="Business registration number (optional)" required />

                <textarea
                  className="box_text"
                  placeholder="Store introduction (optional/maximum 300 characters)"
                  maxLength="300"
                ></textarea>

                <button type="submit">Check</button>
            </form>
        </div>
    </>
  )
}

export default SigupGoogle