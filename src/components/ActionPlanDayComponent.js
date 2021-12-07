import React from 'react'
import '../App.css'

export default ({ selected, text, callback }) => (
    <div className = { selected && 'bg1' } style = {{ display: 'flex', flex: 1, flexDirection: 'column', color: 'white', fontSize: 14, textAlign: 'center', borderRadius: 20, paddingTop: 7, paddingBottom: 7, paddingLeft: 5, paddingRight: 5, cursor: 'pointer' }}
    onClick = { callback }>{ text }</div>
)
