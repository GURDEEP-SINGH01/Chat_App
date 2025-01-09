import axios from 'axios'
import toast from 'react-hot-toast'

const useGetEmailOtp = (setEmailData) => {
    const sendEmailOtp = async (email) => {
        try {
            const getemailData = await axios.post('chatapp/emailVerify', {
                email
            })
            if (getemailData)
                setEmailData(getemailData.data.data)
        } catch (err) {
            console.log(err);

            toast.error('Error sending Otp: ' + err)
        }
    }
    return { sendEmailOtp }
}

export default useGetEmailOtp