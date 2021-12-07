import React, { useContext, useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { Context as DetailContext } from '../context/DetailsContext'

export default () => {

    const { sendOTP } = useContext(DetailContext)

    const [ phoneNumber, setPhoneNumber ] = useState('')

    const [ correctNumber, setCorrectNumber ] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        !correctNumber && setCorrectNumber(true)

    }, [ phoneNumber ])

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <h1 style = {{ textAlign: 'center', color: 'white', marginTop: 100 }}>Login</h1>

            <div style = {{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '60%', marginLeft: '20%', marginRight: '20%', marginTop: 20, backgroundColor: '#4A4A4A', borderRadius: 20, boxShadow: '2px 4px 6px black', alignSelf: 'center' }}>

                <div style = {{ display: 'flex', flexDirection: 'row', width: 150, paddingLeft: 40, paddingRight: 40, paddingTop: 5, paddingBottom: 5, borderRadius: 20, color: 'white', fontWeight: 300, alignSelf: 'center', backgroundColor: '#222222', marginTop: 40, boxShadow: '1px 2px black inset', alignItems: 'center' }}>

                    +91

                    <div style = {{ width: 1, height: 20, marginLeft: 5, marginRight: 5, backgroundColor: 'white' }}/>

                    <input id = 'phone_number' value = { phoneNumber } onChange = {(event) => { setPhoneNumber(event.target.value) }} className = 'input' style = {{ width: '90%', color: 'white', background: '#222222', fontSize: 14, outline: 'none', placeContent: 'center', borderWidth: 0, marginRight: '5%' }} type = 'tel' placeholder = 'Phone number' maxLength = { 10 }/>

                </div>

                {
                    !correctNumber && (
                        <h4 style = {{ color: 'red', alignSelf: 'center', marginTop: 12, fontWeight: 250 }}>Incorrect phone number</h4>
                    )
                }

                {/* <table style = {{ width: '100%', borderRadius: 20, alignSelf: 'center', backgroundColor: '#222222', marginTop: 40, boxShadow: '1px 2px black inset' }}>

                    <tr>

                        <td style = {{ color: 'white', fontSize: 14 }}>

                            +91

                        </td>

                        <div style = {{ flex: 1, width: 0.5, height: 28, marginLeft: 5, marginRight: 5, backgroundColor: 'white' }}/>

                        <td>

                            <input id = 'phone_number' className = 'input' style = {{ color: 'white', background: '#222222', fontSize: 14, outline: 'none', placeContent: 'center' }} type = 'tel' placeholder = 'Phone number' maxLength = { 10 }/>

                        </td>

                    </tr>

                </table> */}

                <button onClick = {() => {
                    if(phoneNumber.length === 10 && [ ...phoneNumber ].every((value) => !Number.isNaN(Number(value))) && phoneNumber[0] !== '0')
                    {
                        setCorrectNumber(true)

                        navigate(`/otp/${ phoneNumber }`, { phone_number: phoneNumber })

                        console.log(document.getElementById('phone_number').value)

                        sendOTP(document.getElementById('phone_number').value, () => {
                            navigate('/otp', { phone_number: phoneNumber })
                        })
                    } else
                    {
                        setCorrectNumber(false)
                    }
                }} className = 'button' style = {{ marginTop: 20, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, borderRadius: 20, borderWidth: 0, fontSize: 15, color: 'white', alignSelf: 'center', cursor: 'pointer' }}>

                    Send OTP

                </button>

                <div style = {{ marginTop: 15, marginLeft: '20%', marginRight: '20%', fontSize: 15, textAlign: 'center', color: '#C4C4C4' }}>

                    By continuing, you agree to our Terms of Service and Privacy Policy

                </div>

                <div style = {{ width: '40%', height: 1, marginTop: 15, marginLeft: '30%', marginRight: '30%', backgroundColor: 'white' }}/>

                <div style = {{ marginTop: 15, marginLeft: '20%', marginRight: '20%', fontSize: 22, textAlign: 'center', color: 'white' }}>

                    Got a referral code?

                </div>

                <input style = {{ marginTop: 20, width: 200, alignSelf: 'center', backgroundColor: '#222222', borderRadius: 20, borderWidth: 0, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, fontSize: 14, boxShadow: '1px 2px black inset', color: 'white', outline: 'none', marginBottom: 40 }} type = 'text' placeholder = 'Type it here...'/>

            </div>

        </div>
    )
    
}
