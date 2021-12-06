import React from 'react'
import HeaderComponent from './HeaderComponent'
import { useParams, useNavigate } from 'react-router'

export default () => {

    const params = useParams()

    const navigate = useNavigate()

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <h1 style = {{ marginTop: 40, alignSelf: 'center', color: 'white' }}>Enter the OTP</h1>

            <div style = {{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '60%', marginTop: 20, backgroundColor: '#4A4A4A', borderRadius: 20, boxShadow: '2px 4px 6px black', alignSelf: 'center' }}>

                <div style = {{ marginTop: 40, alignSelf: 'center', color: 'white', textAlign: 'center', marginLeft: 10, marginRight: 10 }}>Enter the OTP sent to { params.phone_number }</div>

                <input style = {{ width: 150, alignSelf: 'center', marginTop: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 20, boxShadow: '1px 2px black inset', backgroundColor: '#222222', borderWidth: 0, outline: 'none', textAlign: 'center', color: 'white', fontSize: 16 }} type = 'text' maxLength = { 6 } placeholder = 'OTP'/>

                <button className = 'button' style = {{ marginTop: 20, alignSelf: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderWidth: 0, borderRadius: 20, color: 'white' }}
                onClick = {() => navigate('/questions')}>Verify OTP</button>
                
                <h4 style = {{ marginTop: 20, alignSelf: 'center', textAlign: 'center', color: 'white', fontWeight: 300 }}>Didn't receive the OTP?</h4>

                <div style = {{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignSelf: 'center', marginTop: 20, marginBottom: 40 }}>

                    <div style = {{ color: '#FFB800', cursor: 'pointer', fontSize: 12, marginRight: 10, fontWeight: 300, textAlign: 'center' }}>Resend OTP</div>

                    <div style = {{ color: '#FFB800', cursor: 'pointer', fontSize: 12, marginLeft: 10, fontWeight: 300, textAlign: 'center' }}>Reset mobile number</div>

                </div>

            </div>

        </div>
    )

}
