import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import TextComponent from './TextComponent'
import Mobile_Image from '../assets/mobile_image.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HomePage2Component from './HomePage2Component'
import HomePage3Component from './HomePage3Component'
import HomePage7Component from './HomePage7Component'
import HomeTrailerComponent from './HomeTrailerComponent'

const HomeComponent = () => {

    const navigate = useNavigate()

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 40, marginBottom: 40, marginLeft: '10%', marginRight: '10%', alignSelf: 'center', marginBottom: 100 }}>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 80, marginRight: '5%' }}>

                    <h1 style = {{ fontSize: window.innerWidth/22, textAlign: 'center', color: 'white', fontWeight: 500 }}>India's Best Fitness and Sports Coaches Under One Roof!</h1>

                    <div style = {{ marginTop: 20, color: 'white', textAlign: 'center', alignSelf: 'center', marginLeft: '20%', marginRight: '20%' }}>Not sure how to play at the big stage?  Or be the fittest version of yourself? Make us a part of your journey and see the miracles!</div>

                    <button className = 'bg1' style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 20, borderRadius: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 40, paddingRight: 40, color: 'white', fontSize: 19, borderWidth: 0, alignItems: 'center', cursor: 'pointer' }}
                    onClick = {() => navigate('/signin')}>
                        
                        Login to learn more
                    
                        <AiOutlineArrowRight style = {{ marginLeft: 10 }} color = 'white'/>
                    
                    </button>

                </div>

                <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 60 }}>

                    <div style = {{ display: 'flex', flexDirection: 'column' }}>

                        <TextComponent/>

                    </div>

                    <div style = {{ display: 'flex', flexDirection: 'column', maxWidth: window.innerWidth/5, maxHeight: window.innerHeight/2 }}>

                        <img style = {{ width: 420, height: 700, marginLeft: -100, marginTop: -60 }} src = { Mobile_Image }/>

                    </div>

                </div>

            </div>

            <HomePage2Component/>

            <HomePage3Component/>

            <HomePage7Component/>

            <HomeTrailerComponent/>

        </div>
    )

}

export default HomeComponent
