import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'

export default () => {

    return (
        <div style = {{ display: 'flex', flexDirection: 'column', marginTop: 20, marginLeft: 20, marginRight: 20, position: 'relative' }}>

            <img className = 'img-blur' style = {{ width: '100%', height: 200 }} src = 'https://photographycourse.net/wp-content/uploads/2020/02/Portrait-vs-Landscape-Featured-Image-3.jpg'/>

            <div style = {{ position: 'absolute', display: 'flex', width: '100%', height: 200, flexDirection: 'row', alignSelf: 'center', color: 'white' }}>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <BsPlayCircle style = {{ alignSelf: 'center', marginBottom: 20 }} size = { 70 } color = 'white'/>

                    Name

                </div>

                <div style = {{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 12 }}>

                    Description text

                    <button className = 'bg1' style = {{ alignSelf: 'center', marginTop: 20, paddingTop: 7, paddingBottom: 7, paddingLeft: 40, paddingRight: 40, borderRadius: 20, color: 'white', borderWidth: 0 }}>Go Live</button>

                    <button className = 'bg1' style = {{ alignSelf: 'center', marginTop: 10, paddingTop: 7, paddingBottom: 7, paddingLeft: 40, paddingRight: 40, borderRadius: 20, color: 'white', borderWidth: 0 }}>Mark as done</button>

                </div>

            </div>

        </div>
    )

}
