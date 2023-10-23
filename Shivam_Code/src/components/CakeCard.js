import React from 'react'

export default function CakeCard() {
    return (
        <div>
            CakeCard
            <div className="flex flex-col items-center rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black">
                <img
                    className="mt-6 rounded-3xs w-[14.44rem] h-[15.06rem] object-cover cursor-pointer"
                    alt=""
                    src="/image@2x.png"

                />
                <button className="mt-8 rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]">
                    <div className="leading-[1.08rem] uppercase font-medium inline-block w-[7.25rem] h-[1.06rem]">
                        Starting at 49$
                    </div>
                </button>
            </div>

        </div>
    )
}
