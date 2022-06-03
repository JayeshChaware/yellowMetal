import React from 'react'
import '../assets/css/Checkout.css'
var and='&'
const Checkot = () => {
  return (
    <div>
        <div>
            <div>Signup</div>
            <div>
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder='Enter First Name'/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter Last Name'/>
                </div>
            </div>
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder='Enter Email'/>
                </div>
                <div>
                    <button placeholder='Send OTP'>Send OTP</button>
                </div>
            </div>
            <div>
                <div>
                    <label>OTP</label>
                    <input type="text" placeholder='Enter OTP'/>
                </div>
            </div>
            <div>
                <div>
                    <label>Contact Number</label>
                    <input type="text" placeholder='Enter Contact Number'/>
                </div>
                <div>
                <button placeholder='Send OTP'>Send OTP</button>
                </div>
            </div>
            <div>
                <div>
                    <label>OTP</label>
                    <input type="text" placeholder='ENter OTP'/>
                </div>
                <div>
                    <label>Date Of Birth</label><label>Optional</label>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div>
                    <label>Aadhar Card</label><label>Optional</label>
                    <input type="file"/>
                </div>
                <div>
                    <label>Pan Card</label><label>Optional</label>
                    <input type="file"/>
                </div>
            </div>

            <div>
                <button>Continue</button>
            </div>
        </div>
        Delivery Information
        <div>
            <p>Shipping Address</p>
            <div>
                <div>
                    <label>House Name</label>
                    <input type="text" placeholder='Enter House Name'/>
                </div>
                <div>
                    <label>Street {and} House Number</label>
                    <input type="text" placeholder='Enter House Name'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkot