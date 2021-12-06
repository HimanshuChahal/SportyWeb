import React from 'react'
import '../App.css'

export default ({ getDate, selected, onClick, day }) => (
    
    <div className = { selected && 'bg4' } style = {{ display: 'flex', flex: 1, flexDirection: 'column', color: 'white', alignItems: 'center', backgroundColor: selected && '#4A4A4A', cursor: 'pointer' }}
    onClick = { onClick }>

        { day }

        <div className = 'bg1' style = {{ display: 'flex', width: 50, height: 50, marginTop: 5, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>

            <div className = 'bg2' style = {{ display: 'flex', width: 44, height: 44, borderRadius: 22, color: 'white', alignItems: 'center', justifyContent: 'center' }}>

                { getDate() }

            </div>

        </div>

    </div>

)
