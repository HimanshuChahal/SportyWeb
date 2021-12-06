import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default () => {

    return (
        <>

            <div style = {{ display: 'flex', flexWrap: 'wrap', width: '90%', flexDirection: 'row-reverse', alignItems: 'center', marginLeft: '5%', marginRight: '5%', marginTop: 20 }}>

                <h4 style = {{ fontSize: 16, fontWeight: 200, color: 'white' }}>Contact Us</h4>

                <Link to = '/about' style = {{ color: 'white', textDecoration: 'none', fontSize: 16, fontWeight: 200, marginRight: 20, marginLeft: 20 }}>About</Link>

                <IoSearchOutline size = { 25 } color = 'white'/>

            </div>
            
            {/* <table width = '100%' style = {{ marginTop: 20, alignItems: 'center', marginLeft: '5%', marginRight: '5%' }}>

                <tr>

                    <td width = '80%'/>

                    <td style = {{ textAlign: 'end' }}>

                        <IoSearchOutline style = {{ alignSelf: 'end' }} size = { 25 } color = 'white'/>

                    </td>

                    <td style = {{ color: 'white', textAlign: 'end' }}>

                        <Link to = '/about' style = {{ flex: 1, color: 'white', textDecoration: 'none', fontSize: 16, fontWeight: 200, marginRight: 40 }}>About</Link>

                    </td>

                    <td>

                        <h4 style = {{ flex: 1, fontSize: 16, fontWeight: 200, color: 'white' }}>Contact Us</h4>

                    </td>

                </tr>

            </table> */}

            <div style = {{ display: 'flex', alignSelf: 'center', width: '90%', height: 0.7, marginTop: 0, marginLeft: '5%', marginRight: '5%', backgroundColor: 'white' }}/>

        </>
    )

}
