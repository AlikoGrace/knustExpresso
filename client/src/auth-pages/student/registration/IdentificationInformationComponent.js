import React, {useRef, useState} from 'react';

function IdentificationInformationComponent({onPrevious}) {
    const icardNumberRef = useState('');



    return (
        <section>
            <div className="container mt-1 p-5">
                <form action="#">
                    <div className={` d-flex flex-column align-items-center`}>
                        <h4 className={'font-weight-bolder'}>Identification Information</h4>
                        <p className={'m-3'}>Complete the form below with your bio data</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="graduateType">Type of Identification </label>
                                <select id="graduateType" className="form-control">
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="fname" className={'text-dark'}>Identification Card Number</label>
                                    <input type="text" ref={icardNumberRef} id={'icardNumber'} className={'form-control'}
                                           placeholder={'Enter your given name'}/>
                                </div>
                            </div>
                    </div>
                    </div>

                    <div className="w-100 d-flex justify-content-between mt-5">
                        <button type="button" onClick={onPrevious}>Previous</button>
                        <button type="button" >Submit</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default IdentificationInformationComponent;