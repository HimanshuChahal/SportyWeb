import React from 'react'
import '../App.css'

export default ({ title, callback }) => {
    return (
        <div>

            <div className = 'bg3' style = {{ display: 'flex', width: 150, height: 200, marginLeft: 10, marginRight: 10, boxShadow: '1px 2px 3px black', borderRadius: 20, opacity: 0.7, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
            onClick = { callback }>

                { title }

            </div>

        </div>
    )
}
