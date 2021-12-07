import createDataContext from './createDataContext'
import sportyapi from '../api/sportyapi'
import sportyapicoach from '../api/sportyapicoach'

const reducer = (state, action) => {
    
    switch(action.type)
    {

        case 'getProfileSetupQuestions': return { ...state, profile_setup_questions: action.payload }

    }

}

const getProfileSetupQuestions = dispatch => {

    return async (callback) => {

        try
        {

            const response = await sportyapicoach.get('api/plan/get_all_plans/', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4ODUxODI2MzQwIiwiZXhwIjoxNjM5NjUzNDgxLCJpYXQiOjE2Mzg3ODk0ODF9.ztZPtH836Hy6InWg_Lw-9-Jsz3J4VR_aGqiJ79GENdI'
                },
            })
            
            dispatch({ type: 'getProfileSetupQuestions', payload: response.data })

            callback && callback()

        } catch(e)
        {
            console.log('Profile setup questions', e)
        }

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
    { sendOTP, getProfileSetupQuestions },
    { profile_setup_questions: {} })
