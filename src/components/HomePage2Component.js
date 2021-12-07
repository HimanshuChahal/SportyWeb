import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default () => {

    return (
        <div className = 'bg6' style = {{ display: 'flex', flex: 1, flexDirection: 'column', boxShadow: '5px 5px 15px 20px #000000 inset', padding: 60 }}>

            <div style = {{ alignSelf: 'center', marginTop: 40, color: 'white', fontSize: 45 }}>TRAIN SMART. &ensp;GROW FAST.</div>

            <div style = {{ display: 'flex', flexDirection: 'column', width: '60%', marginLeft: '20%', marginRight: '20%', alignSelf: 'center', marginTop: 60, borderRadius: 20, boxShadow: '0px 3px 1px 0px #656565 inset', backgroundColor: '#4A4A4A', padding: 20, color: 'white', fontSize: 16, textAlign: 'center' }}>

            At Sporty, we make sure that you train to be the best in business. It can be done just by hard work, you need to be smart. All of the work that you do on ground should translate into results.<br/><br/>We make sure we provide results by applying modern practices of body dynamics mixed with world class technology.<br/><br/>You will see an improvement in your performance from the first month!

            </div>

            <button className = 'bg1' style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 40, marginBottom: 40, borderRadius: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 40, paddingRight: 40, color: 'white', fontSize: 19, borderWidth: 0, alignItems: 'center', cursor: 'pointer' }}>

                Book your free trial now

                <AiOutlineArrowRight style = {{ marginLeft: 10 }} color = 'white'/>

            </button>

        </div>
    )

}
