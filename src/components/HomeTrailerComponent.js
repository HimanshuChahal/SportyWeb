import React from 'react'

export default () => (

    <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

        <div style = {{ width: '100%', height: 50, backgroundColor: 'black' }}/>

        <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', paddingTop: 15, paddingBottom: 15, paddingRight: 40, backgroundColor: '#111111', justifyContent: 'flex-end' }}>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14, cursor: 'pointer' }}>Refund</div>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14, cursor: 'pointer' }}>About us</div>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14, cursor: 'pointer' }}>Contact us</div>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14, cursor: 'pointer' }}>Terms and Conditions</div>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14, cursor: 'pointer' }}>Privacy policy</div>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14, cursor: 'pointer' }}>Copyright</div>

            <div style = {{ marginRight: 20, color: 'white', fontSize: 14 }}>Sporty 2021</div>

        </div>

    </div>

)
