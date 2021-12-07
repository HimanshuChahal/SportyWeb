import React, { useContext, useState, useEffect } from 'react'
import '../App.css'
import HeaderComponent from './HeaderComponent'
import { Context as DetailContext } from '../context/DetailsContext'
import { CgProfile } from 'react-icons/cg'
import ProfileSetup1Component from './ProfileSetup1Component'
import { useNavigate } from 'react-router'
import { FiCircle } from 'react-icons/fi'
import { VscCircleFilled } from 'react-icons/vsc'

export default () => {

    const { state: detailState, getProfileSetupQuestions } = useContext(DetailContext)

    const [ question, setQuestion ] = useState(1)

    const [ selected, setSelected ] = useState(-1)

    const navigate = useNavigate()

    useEffect(() => {

        getProfileSetupQuestions(() => {
            console.log(detailState.profile_setup_questions)
        })

        // if(question === 0)
        // {
        //     setTimeout(() => setQuestion(1), 2000)
        // }

    }, [])

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 20 }}>

                {
                    (question === 0) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div className = 'bg1' style = {{ display: 'flex', width: window.innerWidth/5, height: window.innerWidth/5, borderRadius: window.innerWidth/10, alignSelf: 'center', justifyContent: 'center', marginTop: window.innerWidth/10 }}>

                                <div className = 'bg2' style = {{ display: 'flex', width: window.innerWidth/5 - 2, height: window.innerWidth/5 - 2, borderRadius: window.innerWidth/10, alignSelf: 'center' }}>

                                    <CgProfile size = { window.innerWidth/5 - 2 } color = 'white'/>

                                </div>

                            </div>

                            <div style = {{ alignSelf: 'center', marginTop: 20, color: 'white', fontSize: window.innerWidth/20 }}>Setup Profile</div>

                        </div>)
                }

                {
                    (question === 1) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div style = {{ alignSelf: 'center', marginTop: 20, color: 'white', fontSize: window.innerHeight/20 }}>What is your gender?</div>

                            <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 40, marginLeft: '20%', marginRight: '20%', alignSelf: 'center' }}>

                                <ProfileSetup1Component title = 'Non-binary' callback = {() => setQuestion(2)}/>

                                <ProfileSetup1Component title = 'Male' callback = {() => setQuestion(2)}/>

                                <ProfileSetup1Component title = 'Female' callback = {() => setQuestion(2)}/>

                                <ProfileSetup1Component title = 'Prefer not to say' callback = {() => setQuestion(2)}/>

                                <ProfileSetup1Component title = 'Other' callback = {() => setQuestion(2)}/>

                            </div>

                        </div>)
                }

                {
                    (question === 2) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 100, marginLeft: '30%', marginRight: '30%', backgroundColor: '#4A4A4A', borderRadius: 20, boxShadow: '2px 4px 6px black' }}>

                                <div style = {{display: 'flex', alignSelf: 'center', textAlign: 'center', marginTop: 40, color: 'white', fontSize: 25 }}>How old are you?</div>
                                
                                <div style = {{ width: '30%', alignSelf: 'center' }}>

                                    <div style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 20, color: 'white' }}>

                                        {/* <input style = {{ color: 'white', borderColor: 'black' }} type = 'radio' size = { 50 } checked = { selected === 0 }
                                        onClick = {() => setSelected(0)}/> */}

                                        <FiCircle style = {{ alignSelf: 'center', justifyContent: 'center', cursor: 'pointer' }} size = { 15 } onClick = {() => setSelected(0)}/>

                                        { selected === 0 && <VscCircleFilled style = {{ alignSelf: 'center', justifyContent: 'center', marginLeft: -13.5, marginTop: 0.75 }} size = { 13 }/> }

                                        &emsp;Below 18 years

                                    </div>

                                    <div style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 10, color: 'white' }}>

                                        {/* <input style = {{ color: 'white', borderWidth: 1, borderColor: 'black' }} type = 'radio' size = { 50 } checked = { selected === 1 }
                                        onClick = {() => setSelected(1)}/> */}

                                        <FiCircle style = {{ alignSelf: 'center', justifyContent: 'center', cursor: 'pointer' }} size = { 15 } onClick = {() => setSelected(1)}/>

                                        { selected === 1 && <VscCircleFilled style = {{ alignSelf: 'center', justifyContent: 'center', marginLeft: -13.5, marginTop: 0.75 }} size = { 13 }/> }

                                        &emsp;18 to 26

                                    </div>

                                    <div style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'baseline', marginTop: 10, color: 'white' }}>

                                        {/* <input style = {{ color: 'white', borderWidth: 1, borderColor: 'black' }} type = 'radio' size = { 50 } checked = { selected === 2 }
                                        onClick = {() => setSelected(2)}/> */}

                                        <FiCircle style = {{ alignSelf: 'center', justifyContent: 'center', cursor: 'pointer' }} size = { 15 } onClick = {() => setSelected(2)}/>

                                        { selected === 2 && <VscCircleFilled style = {{ alignSelf: 'center', justifyContent: 'center', marginLeft: -13.5, marginTop: 0.75 }} size = { 13 }/> }

                                        &emsp;27 to 40

                                    </div>

                                    <div style = {{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 10, color: 'white' }}>

                                        {/* <input style = {{ color: 'white', borderWidth: 1, borderColor: 'black' }} type = 'radio' size = { 50 } checked = { selected === 3 } */}
                                        {/* onClick = {() => setSelected(3)}/> */}

                                        <FiCircle style = {{ alignSelf: 'center', justifyContent: 'center', cursor: 'pointer' }} size = { 15 } onClick = {() => setSelected(3)}/>

                                        { selected === 3 && <VscCircleFilled style = {{ alignSelf: 'center', justifyContent: 'center', marginLeft: -13.5, marginTop: 0.75 }} size = { 13 }/> }

                                        &emsp;40 and above

                                    </div>

                                    <div style = {{ display: 'flex', flexDirection: 'column' }}>

                                        <input style = {{ alignSelf: 'center', width: '100%', marginTop: 20, marginLeft: -10, paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 20, borderWidth: 0, outline: 'none', backgroundColor: '#222222', boxShadow: '1px 2px black inset', color: 'white', fontSize: 16 }} type = 'text'
                                        onClick = {() => setSelected(-1)}/>

                                        <button className = 'button' style = {{ alignSelf: 'center', marginTop: 20, marginBottom: 40, paddingTop: 7, paddingBottom: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 20, borderWidth: 0, color: 'white', fontSize: 16 }}
                                        onClick = {() => setQuestion(3)}>Next</button>

                                    </div>

                                </div>

                            </div>

                        </div>)
                }

                {
                    (question === 3) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 100, marginLeft: '30%', marginRight: '30%', paddingTop: 40, backgroundColor: '#4A4A4A', borderRadius: 20, boxShadow: '2px 4px 6px black', alignItems: 'center', color: 'white', fontSize: 25 }}>

                                What is your height?

                                <input style = {{ alignSelf: 'center', width: '50%', marginTop: 40, marginLeft: -10, paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 20, borderWidth: 0, outline: 'none', backgroundColor: '#222222', boxShadow: '1px 2px black inset', color: 'white', fontSize: 16, textAlign: 'center' }} type = 'text'/>

                                <button className = 'button' style = {{ alignSelf: 'center', marginTop: 20, marginBottom: 40, paddingTop: 7, paddingBottom: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 20, borderWidth: 0, color: 'white', fontSize: 16 }}
                                onClick = {() => setQuestion(4)}>Next</button>

                            </div>
                            
                        </div>
                    )
                }

                {
                    (question === 4) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 100, marginLeft: '30%', marginRight: '30%', paddingTop: 40, backgroundColor: '#4A4A4A', borderRadius: 20, boxShadow: '2px 4px 6px black', alignItems: 'center', color: 'white', fontSize: 25 }}>

                                What is your current weight?

                                <input style = {{ alignSelf: 'center', width: '50%', marginTop: 40, marginLeft: -10, paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 20, borderWidth: 0, outline: 'none', backgroundColor: '#222222', boxShadow: '1px 2px black inset', color: 'white', fontSize: 16, textAlign: 'center' }} type = 'text'/>

                                <button className = 'button' style = {{ alignSelf: 'center', marginTop: 20, marginBottom: 40, paddingTop: 7, paddingBottom: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 20, borderWidth: 0, color: 'white', fontSize: 16 }}
                                onClick = {() => setQuestion(5)}>Next</button>

                            </div>
                            
                        </div>
                    )
                }

                {
                    (question === 5) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 100, marginLeft: '30%', marginRight: '30%', paddingTop: 40, backgroundColor: '#4A4A4A', borderRadius: 20, boxShadow: '2px 4px 6px black', alignItems: 'center', color: 'white', fontSize: 25 }}>

                                What is your expected weight?

                                <input style = {{ alignSelf: 'center', width: '50%', marginTop: 40, marginLeft: -10, paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 20, borderWidth: 0, outline: 'none', backgroundColor: '#222222', boxShadow: '1px 2px black inset', color: 'white', fontSize: 16, textAlign: 'center' }} type = 'text'/>

                                <button className = 'button' style = {{ alignSelf: 'center', marginTop: 20, marginBottom: 40, paddingTop: 7, paddingBottom: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 20, borderWidth: 0, color: 'white', fontSize: 16 }}
                                onClick = {() => setQuestion(6)}>Next</button>

                            </div>
                            
                        </div>
                    )
                }

                {
                    (question === 6) && (
                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                            <div style = {{ alignSelf: 'center', marginTop: 20, color: 'white', fontSize: window.innerHeight/20 }}>How many days do you workout in a week?</div>

                            <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 40, marginLeft: '20%', marginRight: '20%', alignSelf: 'center' }}>

                                <ProfileSetup1Component title = '1' callback = {() => navigate('/action_plan')}/>

                                <ProfileSetup1Component title = '2' callback = {() => navigate('/action_plan')}/>

                                <ProfileSetup1Component title = '3' callback = {() => navigate('/action_plan')}/>

                                <ProfileSetup1Component title = '4+' callback = {() => navigate('/action_plan')}/>

                            </div>

                        </div>)
                }

            </div>

        </div>
    )

}
