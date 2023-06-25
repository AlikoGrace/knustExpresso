import React, {useRef, useState} from 'react';

function AcademicInformationComponent({onPrevious,onNext}) {
    const studentNumberRef = useRef(null)
    const sIndexRef = useRef(null)


    function handleAcademicInformation() {
        console.log(studentNumberRef.current.value)
        console.log(sIndexRef.current.value)
    }

    return (
        <section>
            <div className="container mt-1 p-5">
                <form action="#">
                    <div className={` d-flex flex-column align-items-center`}>
                        <h4 className={'font-weight-bolder'}>Academic Information</h4>
                        <p className={'m-3'}>Complete the form below with your academic data</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <div className={``}>
                                    <label htmlFor="fname" className={'text-dark'}>Student Number</label>
                                    <input type="text" ref={studentNumberRef} id={'studentNumber'} className={'form-control'}
                                           placeholder={'Enter your given name'}/>
                                </div>

                            </div>
                            <div className="col-md-6 mt-3">
                                <div className={``}>
                                    <label htmlFor="sname" className={'text-dark'}>Index Number</label>
                                    <input type="text" ref={sIndexRef} id={'sindex'} className={'form-control'}
                                           placeholder={'Enter your surname'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6 mt-3">
                                <label htmlFor="graduateType">Graduate Type</label>
                                <select id="graduateType" className="form-control">
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label htmlFor="admissionYear">Admission Year</label>
                                <select id="admissionYear" className="form-control">
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6 mt-3">
                                <label htmlFor="programme">Programme of Study</label>
                                <select id="programme" className="form-control">
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label htmlFor="graduationYear">Graduation or Last Study Year</label>
                                <select id="graduationYear" className="form-control">
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="w-100 d-flex justify-content-between mt-5">
                        <button type="button" onClick={onPrevious}>Previous</button>
                        <button type="button" onClick={handleAcademicInformation}>Next</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default AcademicInformationComponent;