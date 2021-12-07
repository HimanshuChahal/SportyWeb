import React, { useState } from 'react'
import '../App.css'
import ActionPlanDayComponent from './ActionPlanDayComponent'
import DrillComponent from './DrillComponent'
import HeaderComponent from './HeaderComponent'
import Trophy from '../assets/trophy.png'

export default () => {

    const [ selected, setSelected ] = useState(0)

    const [ type, setType ] = useState(0)

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginTop: 70, marginLeft: window.innerWidth/20, marginRight: window.innerWidth/20 }}>

                <div style = {{ display: 'flex', flex: 1.1, flexDirection: 'column', marginRight: 40, textAlign: 'center', fontSize: 30, color: 'white' }}>

                    Here's what we have curated for you

                    <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 100, borderRadius: 20, backgroundColor: '#222222', boxShadow: '1px 2px black inset' }}>

                        <ActionPlanDayComponent text = 'Day 1' selected = { selected === 0 } callback = {() => setSelected(0)}/>

                        <ActionPlanDayComponent text = 'Day 2' selected = { selected === 1 } callback = {() => setSelected(1)}/>

                        <ActionPlanDayComponent text = 'Day 3' selected = { selected === 2 } callback = {() => setSelected(2)}/>

                        <ActionPlanDayComponent text = 'Day 4' selected = { selected === 3 } callback = {() => setSelected(3)}/>

                        <ActionPlanDayComponent text = 'Day 5' selected = { selected === 4 } callback = {() => setSelected(4)}/>

                        <ActionPlanDayComponent text = 'Day 6' selected = { selected === 5 } callback = {() => setSelected(5)}/>

                        <ActionPlanDayComponent text = 'Day 7' selected = { selected === 6 } callback = {() => setSelected(6)}/>
                        
                    </div>

                    <div style = {{ fontSize: 16, marginTop: 40 }}>You are doing great</div>

                    <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 40, alignItems: 'center' }}>

                        <div style = {{ display: 'flex', flexDirection: 'row', maxWidth: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 60, paddingRight: 60, backgroundColor: '#4A4A4A', borderRadius: 10, boxShadow: '0px 3px 1px 0px #656565 inset', color: 'white', fontSize: 14, alignItems: 'center' }}>

                            <img style = {{ marginRight: 10 }} width = { 20 } height = { 20 } src = 'https://photographycourse.net/wp-content/uploads/2020/02/Portrait-vs-Landscape-Featured-Image-3.jpg'/>

                            Three exercises left

                        </div>

                    </div>

                </div>

                <div style = {{ display: 'flex', flex: 2, flexDirection: 'column', marginLeft: 40 }}>

                    <div style = {{ display: 'flex', flexDirection: 'row', zIndex: 1 }}>

                        <div style = {{ display: 'flex', flex: 1, marginRight: 20, justifyContent: 'flex-end' }}>
                            
                            <div style = {{ paddingTop: 15, paddingBottom: 15, paddingLeft: 40, paddingRight: 40, backgroundColor: type === 0 && '#111111', borderTopLeftRadius: 20, borderTopRightRadius: 20, color: 'white', cursor: 'pointer', boxShadow: type === 0 && '1px 2px 3px black inset' }}
                            onClick = {() => setType(0)}>

                                Drill

                            </div>
                            
                        </div>

                        <div style = {{ display: 'flex', flex: 1, marginLeft: 20 }}>
                            
                            <div style = {{ paddingTop: 15, paddingBottom: 15, paddingLeft: 40, paddingRight: 40, backgroundColor: type === 1 && '#111111', borderTopLeftRadius: 20, borderTopRightRadius: 20, color: 'white', cursor: 'pointer', boxShadow: type === 1 && '1px 2px 3px black inset' }}
                            onClick = {() => setType(1)}>
                            
                                Diet
                            
                            </div>

                        </div>

                    </div>

                    <div className = 'bg5' style = {{ display: 'flex', flexDirection: 'column', height: window.innerHeight/2, overflowY: 'scroll', marginLeft: 0, marginRight: 0, marginTop: -5, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20, paddingBottom: 20, borderTopWidth: 2, borderLeftWidth: 1, borderRightWidth: 1, borderWidth: 5, borderColor: 'white', boxShadow: '0px 4px black inset' }}>

                        <DrillComponent/>

                        <DrillComponent/>

                        <DrillComponent/>

                    </div>

                </div>

            </div>

            <div style = {{ marginTop: 40, marginLeft: 60, color: 'white', fontSize: 25 }}>Progress</div>

            <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 0, alignItems: 'center', marginLeft: window.innerWidth/20, marginRight: window.innerWidth/20, marginBottom: 70 }}>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', height: 20, borderRadius: 10, boxShadow: '1px 0px 1px 1px black inset', marginRight: 40, backgroundColor: '#111111', justifyContent: 'center' }}>

                    <div className = 'bg1' style = {{ width: '90%', height: 18, borderRadius: 15 }}/>

                </div>

                <img width = { 70 } src = { Trophy }/>

            </div>

        </div>
    )

}
