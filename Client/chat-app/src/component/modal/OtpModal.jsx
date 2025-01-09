
const OtpModal = () => {

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-2/4">
                    <h3 className="font-bold text-lg">Please Enter the OTP</h3>
                    <div className="flex justify-between gap-1">
                        <input className="input input-bordered w-full h-10 mt-1"
                        />
                        <button className="btn" >enter</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default OtpModal