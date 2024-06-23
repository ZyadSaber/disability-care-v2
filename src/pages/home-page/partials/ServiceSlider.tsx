import { memo } from "react";
import { servicesArr } from "../constants"

const ServiceSlider = memo(() => {
    const renderView =
        servicesArr.map((title: string, index: number) => (
            <div className="flex flex-col w-max text-center p-3 py-10" key={index}>
                <p className="font-light text-xl">{title}</p>
            </div>
        ))

    return (
        <div className="relative m-auto overflow-hidden w-auto flex flex-col justify-center ">
            <div className="flex group ">
                <div className="flex animate-loop-scroll w-fit group-hover:paused">
                    {renderView}
                </div>
                <div className="flex animate-loop-scroll w-fit group-hover:paused" aria-hidden="true">
                    {renderView}
                </div>
            </div>
        </div>
    )
})

export default ServiceSlider;