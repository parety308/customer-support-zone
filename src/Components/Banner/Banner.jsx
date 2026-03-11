import React from "react";
import BgVector from "../../assets/vector1.png";
import BgVec from "../../assets/vector2.png";

const Banner = ({ InProgress, resolved }) => {
    return (
        <div className="mx-20">
            <div className="flex flex-col justify-between gap-3 lg:flex-row">
                <div
                    className="relative rounded-2xl p-6 flex flex-col text-center text-white shadow-lg w-full h-[200px] items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(90deg, #632EE3 0%, #9F62F2 100%)' }}
                >
                    <img
                        src={BgVector}
                        alt=""
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-1/3 h-full object-cover scale-125"
                    />
                    <img
                        src={BgVec}
                        alt=""
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-1/3 h-full object-cover scale-125"
                    />

                    <p className="text-2xl opacity-80 font-bold z-10">In Progress</p>
                    <h1 className="text-5xl font-bold z-10">{InProgress.length}</h1>
                </div>


                <div
                    className="relative rounded-2xl p-6 flex flex-col text-center text-white shadow-lg w-full h-[200px] items-center justify-center"
                    style={{ background: 'linear-gradient(90deg, #54CF68 0%, #00827A 100%)' }}
                >
                    <img
                        src={BgVector}
                        alt=""
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-1/3 h-full object-cover scale-125"
                    />
                    <img
                        src={BgVec}
                        alt=""
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-1/3 h-full object-cover scale-125"
                    />
                    <p className="text-2xl opacity-80 font-bold z-10">Resolved</p>
                    <h1 className="text-5xl font-bold z-10">{resolved.length}</h1>
                </div>
            </div>
        </div>

    );
};

export default Banner;