import React, { useState } from 'react'
import '../App.css'
import HeaderComponent from './HeaderComponent'
import { months, week } from '../data.json'
import CalendarDaysComponent from './CalendarDaysComponent'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import CalendarDatesComponent from './CalendarDatesComponent'

export default () => {

    const [ selected, setSelected ] = useState(0)

    const getDate = (day) => {

        if((new Date().getDate() - new Date().getDay()) + day <= 0)
        {
            return months[(new Date().getMonth()) - 1].days + ((new Date().getDate() - new Date().getDay()) + day)
        }

        return (new Date().getDate() - new Date().getDay()) + day

    }

    const getDates = (day) => {

        var dates = []

        let i = (new Date().getDate()) - (new Date().getDay()) + day

        if(i <= 0)
        {
            dates.push(-1)

            i += 7
        } else if(i > months[new Date().getMonth()].days)
        {
            dates.push(-1)
        }

        while(i > 0)
        {
            i -= 7
        }

        i += 7

        if((day - i + 1) < 0)
        {
            dates.push(-1)
        }

        for(; i <= months[new Date().getMonth()].days ; i += 7)
        {
            dates.push(i)
        }

        return dates

    }

    return (
        <div className = 'Container'>

            <HeaderComponent/>

            <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', margin: window.innerWidth/20, marginRight: 40 }}>

                <div style = {{ display: 'flex', flex: 4, flexDirection: 'column', color: 'white', fontSize: 40, marginRight: 20 }}>

                    Calendar

                    <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 20, fontSize: 30, fontWeight: 300 }}>

                        <div style = {{ flex: 1 }}>{ months[new Date().getMonth()].name }</div>

                        <BsChevronLeft style = {{ marginTop: 10, cursor: 'pointer' }} size = { 20 }/>

                        <BsChevronRight style = {{ marginTop: 10, cursor: 'pointer' }} size = { 20 }/>

                    </div>

                    <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>

                        <CalendarDatesComponent getDates = {() => getDates(0)} day = 'S'/>

                        <CalendarDatesComponent getDates = {() => getDates(1)} day = 'M'/>

                        <CalendarDatesComponent getDates = {() => getDates(2)} day = 'T'/>

                        <CalendarDatesComponent getDates = {() => getDates(3)} day = 'W'/>

                        <CalendarDatesComponent getDates = {() => getDates(4)} day = 'T'/>

                        <CalendarDatesComponent getDates = {() => getDates(5)} day = 'F'/>

                        <CalendarDatesComponent getDates = {() => getDates(6)} day = 'S'/>

                    </div>

                    <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 20, backgroundColor: '#4A4A4A', boxShadow: '2px 4px 6px black', borderRadius: 20, textAlign: 'center', fontSize: 16, paddingLeft: '20%', paddingRight: '20%', fontWeight: 300, paddingBottom: 20 }}>

                        <div style = {{ marginTop: 20, color: 'white', fontSize: 30, alignSelf: 'center', textAlign: 'center', fontWeight: 'normal' }}>3 day streak</div>

                        You’re doing great! Come back tomorrow to keep your.

                    </div>

                </div>

                <div style = {{ display: 'flex', flex: 7, flexDirection: 'column', marginLeft: 40 }}>

                    <div style = {{ display: 'flex', flex: 1, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>

                        <CalendarDaysComponent getDate = { () => getDate(0) } selected = { selected === 0 } onClick = {() => setSelected(0)} day = { week[0].name.substr(0, 3) }/>
                
                        <CalendarDaysComponent getDate = { () => getDate(1) } selected = { selected === 1 } onClick = {() => setSelected(1)} day = { week[1].name.substr(0, 3) }/>

                        <CalendarDaysComponent getDate = { () => getDate(2) } selected = { selected === 2 } onClick = {() => setSelected(2)} day = { week[2].name.substr(0, 3) }/>

                        <CalendarDaysComponent getDate = { () => getDate(3) } selected = { selected === 3 } onClick = {() => setSelected(3)} day = { week[3].name.substr(0, 3) }/>

                        <CalendarDaysComponent getDate = { () => getDate(4) } selected = { selected === 4 } onClick = {() => setSelected(4)} day = { week[4].name.substr(0, 3) }/>

                        <CalendarDaysComponent getDate = { () => getDate(5) } selected = { selected === 5 } onClick = {() => setSelected(5)} day = { week[5].name.substr(0, 3) }/>

                        <CalendarDaysComponent getDate = { () => getDate(6) } selected = { selected === 6 } onClick = {() => setSelected(6)} day = { week[6].name.substr(0, 3) }/>

                    </div>

                    <div style = {{ display: 'flex', flex: 3, flexDirection: 'column' }}>

                        <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#4A4A4A', boxShadow: '1px 1px 1px black', borderRadius: 20 }}>

                            <div style = {{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>

                                <div style = {{ display: 'flex', flex: 1, marginRight: 20, justifyContent: 'flex-end' }}>
                                    
                                    <div style = {{ paddingTop: 7, paddingBottom: 7, paddingLeft: 25, paddingRight: 25, backgroundColor: 'black', borderTopLeftRadius: 20, borderTopRightRadius: 20, color: 'white', alignSelf: 'flex-end' }}>

                                        Drill

                                    </div>
                                    
                                </div>

                                <div style = {{ display: 'flex', flex: 1, marginLeft: 20 }}>
                                    
                                    <div style = {{ paddingTop: 7, paddingBottom: 7, paddingLeft: 25, paddingRight: 25, backgroundColor: 'black', borderTopLeftRadius: 20, borderTopRightRadius: 20, color: 'white' }}>
                                    
                                        Diet
                                    
                                    </div>

                                </div>

                            </div>

                            <div className = 'bg5' style = {{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 40, marginRight: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}
