import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import FAQ_Image from '../assets/faq_image.png'
import { IoChevronForward } from 'react-icons/io5'

export default () => {

    return (
        <div className = 'bg2' style = {{ display: 'flex', flexDirection: 'column', padding: 60 }}>

            <div style = {{ marginTop: 20, alignSelf: 'center', color: 'white', fontSize: 50, textAlign: 'center', marginLeft: 40, marginRight: 40 }}>Join today and see your Dreams Come True.</div>

            <button className = 'bg1' style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 40, borderRadius: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 40, paddingRight: 40, color: 'white', fontSize: 19, borderWidth: 0, alignItems: 'center', cursor: 'pointer' }}>

                Be sporty and join us

                <AiOutlineArrowRight style = {{ marginLeft: 10 }} color = 'white'/>

            </button>

            <img style = {{ width: 300, height: 130, marginTop: 100, alignSelf: 'center' }} src = { FAQ_Image }/>

            <div style = {{ marginTop: 20, alignSelf: 'center', color: 'white', fontSize: 19 }}>Frequently asked questions</div>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 40, marginLeft: 100, marginRight: 100, paddingTop: 15, paddingBottom: 15, paddingLeft: 40, paddingRight: 40, backgroundColor: '#4A4A4A', boxShadow: '0px 3px 1px 0px #656565 inset', borderRadius: 20, color: 'white', fontSize: 19, justifyContent: 'space-between', alignItems: 'center' }}>

                Are drills included in the Program?

                <IoChevronForward size = { 25 } color = '#FFB800'/>

            </div>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 100, marginRight: 100, paddingTop: 15, paddingBottom: 15, paddingLeft: 40, paddingRight: 40, backgroundColor: '#4A4A4A', boxShadow: '0px 3px 1px 0px #656565 inset', borderRadius: 20, color: 'white', fontSize: 19, justifyContent: 'space-between', alignItems: 'center' }}>

                Are drills included in the Program?

                <IoChevronForward size = { 25 } color = '#FFB800'/>

            </div>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 20, marginLeft: 100, marginRight: 100, paddingTop: 15, paddingBottom: 15, paddingLeft: 40, paddingRight: 40, backgroundColor: '#4A4A4A', boxShadow: '0px 3px 1px 0px #656565 inset', borderRadius: 20, color: 'white', fontSize: 19, justifyContent: 'space-between', alignItems: 'center' }}>

                Are drills included in the Program?

                <IoChevronForward size = { 25 } color = '#FFB800'/>

            </div>

        </div>
    )

}
