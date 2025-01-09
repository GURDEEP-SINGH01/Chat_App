import toast from "react-hot-toast";
import useGetEmailOtp from "../../hooks/useGetEmailOtp";
import { useState } from "react";

const OtpModal = ({ email }) => {
    const [emailData, setEmailData] = useState(null)
    const [otp, setOtp] = useState('');
    const { sendEmailOtp } = useGetEmailOtp(setEmailData);

    const handleModal = async () => {
        document.getElementById('my_modal_1').showModal();
        await sendEmailOtp(email);
    }

    const handleOtpSubmit = () => {
        if (emailData) {
            const emailOtp = emailData.text.slice(-4);
            if (emailOtp === otp) {
                document.getElementById('my_modal_1').close();
                toast.success('Valid otp')
            } else {
                toast.error('Please verify the Otp');
            }
        }
    }

    return (
        <div>
            <button className="btn" onClick={handleModal}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-2/4">
                    <h3 className="font-bold text-lg">Please Enter the OTP</h3>
                    <div className="flex justify-between gap-1">
                        <input
                            className="input input-bordered w-full h-10 mt-1"
                            value={otp}
                            onChange={e => setOtp(e.target.value)}
                        />
                        <button className="btn" onClick={handleOtpSubmit}>enter</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default OtpModal