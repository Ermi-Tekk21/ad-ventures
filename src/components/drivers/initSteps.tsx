"use client"

import React, { useState } from 'react';
import Step_1 from './pendingSteps/step_1';
import Step_2 from './pendingSteps/step_2';
import Step_3 from './pendingSteps/step_3';
import Step_0 from './pendingSteps/step_0';
import { DriversData } from "@/utils/Data/DriversData";

const InitSteps = () => {
    const [step, setStep] = useState(0);
    const userInfo = DriversData[0]

    const zeroTOone = () => {
        setStep(1);
    }

    const oneTOtwo = () => {
        setStep(2);
    }

    const twoTOthree = () => {
        setStep(3);
    }

    return (
        <>
            {userInfo.status === 'pending' && (
                <div className='w-3/4 m-auto'>
                    {step === 0 && <Step_0 zeroTOone={zeroTOone} />}
                    {step === 1 && <Step_1 oneTOtwo={oneTOtwo} />}
                    {step === 2 && <Step_2 twoTOthree={twoTOthree} />}
                    {step === 3 && <Step_3 />}
                </div>
            )}
            {userInfo.status === 'active' && (
                <div>
                    activated ...
                </div>
            )}
        </>
    )
}

export default InitSteps;