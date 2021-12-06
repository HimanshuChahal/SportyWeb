import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

const HomeComponent = () => {

    const navigate = useNavigate()

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <div style = {{ display: 'flex', flexDirection: 'row', flex: 1, marginTop: 40, marginBottom: 40, marginLeft: '10%', marginRight: '10%', alignItems: 'center', alignSelf: 'center', marginBottom: 100 }}>

                <h1 style = {{ flex: 1, fontSize: window.innerWidth/20, textAlign: 'center', color: 'white', fontWeight: 300, marginRight: '5%' }}>India's Best Fitness and Sports Coaches Under One Roof!</h1>

                <div style = {{ display: 'flex', flexDirection: 'column' }}>

                    <h2 style = {{ flex: 1, fontSize: window.innerWidth/20, textAlign: 'center', color: 'white', fontWeight: 200, marginLeft: '5%' }}> Welcome to Sporty</h2>

                    <button onClick = {() => navigate('/signin')} className = 'button' style = {{ marginLeft: '10%', marginRight: '10%', color: 'white', paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 40, borderWidth: 0, fontSize: 20, justifyContent: 'center', alignSelf: 'center', cursor: 'pointer' }}>

                        Login to learn more

                    </button>

                </div>

            </div>

            {/* <table width = '100%' style = {{ marginTop: 40 }}>

                <tr>

                    <td width = '50%' style = {{ paddingLeft: '10%', paddingRight: '10%' }}>

                        <h1 style = {{ fontSize: window.innerWidth/20, textAlign: 'center', color: 'white', fontWeight: 300 }}>India's Best Fitness and Sports Coaches Under One Roof!</h1>

                    </td>

                    <td width = '50%' style = {{ paddingLeft: '10%', paddingRight: '10%' }}>

                        <h2 style = {{ fontSize: window.innerWidth/20, textAlign: 'center', color: 'white', fontWeight: 200 }}> Welcome to Sporty</h2>

                        <button onClick = {() => navigate('/signin')} className = 'button' style = {{ width: '80%', zIndex: 2, marginLeft: '10%', marginRight: '10%', color: 'white', fontSize: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 20, borderWidth: 0, justifyContent: 'center', cursor: 'pointer' }}>

                            <table width = '100%'>

                                <tr>

                                    <td width = '80%'>

                                        <div>Login to learn more</div>

                                    </td>

                                    <td>

                                        <AiOutlineArrowRight style = {{ marginTop: 5 }} color = 'white'/>

                                    </td>

                                </tr>

                            </table>

                        </button>

                    </td>

                </tr>

            </table> */}

        </div>
    )

}

export default HomeComponent
