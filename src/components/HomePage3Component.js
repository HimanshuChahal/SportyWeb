import React from 'react'
import h31 from '../assets/h31.png'
import h321 from '../assets/h321.png'
import h322 from '../assets/h322.png'
import h33 from '../assets/h33.png'

export default () => {

    return (
        <div className = 'bg2' style = {{ display: 'flex', flexDirection: 'column', padding: 60 }}>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 40 }}>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>

                    <img style = {{ width: 450, height: 400 }} src = { h31 }/>

                </div>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>

                    <div style = {{ color: 'white', fontSize: 30 }}>Highly trained expert coaches</div>

                    <div style = {{ width: 350, marginTop: 20, color: 'white', fontSize: 19, textAlign: 'center', fontWeight: 300 }}>Our company follows very strict process to partner with only the best of the best coaches for you</div>

                </div>

            </div>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: -80 }}>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>

                    <div style = {{ color: 'white', fontSize: 30 }}>Video analytics using AI</div>

                    <div style = {{ width: 350, marginTop: 20, color: 'white', fontSize: 19, textAlign: 'center', fontWeight: 300 }}>We use artificial intelligence to draw insights from training videos which helps in training you better.</div>

                </div>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                    <img style = {{ width: 300, height: 500 }} src = { h321 }/>

                    <img style = {{ width: 300, height: 500, marginLeft: -100 }} src = { h322 }/>

                </div>

            </div>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: -80 }}>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>

                    <img style = {{ width: 450, height: 400 }} src = { h33 }/>

                </div>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>

                    <div style = {{ color: 'white', fontSize: 30 }}>Video analytics using AI</div>

                    <div style = {{ width: 350, marginTop: 20, color: 'white', fontSize: 19, textAlign: 'center', fontWeight: 300 }}>We use artificial intelligence to draw insights from training videos which helps in training you better.</div>

                </div>

            </div>

        </div>
    )

}
