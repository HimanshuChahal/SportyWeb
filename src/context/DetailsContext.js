import createDataContext from './createDataContext'
import sportyapi from '../api/sportyapi'

const reducer = (state, actions) => {
    
    switch(actions.type)
    {

    }

}

const sendOTP = dispatch => {

    return async (phone_number, callback) => {

        try
        {
            await sportyapi.post('sendotp', {
                mobileNumber: phone_number
            })

            callback && callback()
        } catch(e)
        {
            console.log('Send OTP', e)
        }

    }

}

export const { Context, Provider } = createDataContext(reducer,
    { sendOTP },
    {})
