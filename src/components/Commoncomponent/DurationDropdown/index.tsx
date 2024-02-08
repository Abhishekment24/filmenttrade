import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
//import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Yeardata = [
    {
        name: "Jan",

        pv: 10,
        amt: 0,
    },
    {
        name: "Feb",

        pv: 5,
        amt: 5,
    },
    {
        name: "Mar",

        pv: 3,
        amt: 10,
    },
    {
        name: "Apr",

        pv: 5,
        amt: 15,
    },
    {
        name: "Jun",

        pv: 7,
        amt: 20,
    },
    {
        name: "Jul",

        pv: 8,
        amt: 25,
    },
    {
        name: "Aug",

        pv: 10,
        amt: 30,
    },
    {
        name: "Sep",

        pv: 11,
        amt: 35,
    },
    {
        name: "Oct",

        pv: 6,
        amt: 40,
    },
    {
        name: "Nov",
        pv: 6,
        amt: 40,
    },
    {
        name: "Dec",

        pv: 6,
        amt: 40,
    },
];
const MonthData = [
    {
        name: "Jan",

        pv: 10,
        amt: 0,
    },
    {
        name: "Feb",

        pv: 5,
        amt: 5,
    },
    {
        name: "Mar",

        pv: 3,
        amt: 10,
    },
    {
        name: "Apr",

        pv: 5,
        amt: 15,
    },
    {
        name: "May",

        pv: 7,
        amt: 20,
    },
    {
        name: "Jun",

        pv: 8,
        amt: 25,
    },

];
const WeekData = [
    {
        name: "Sun",
        pv: 10,
        amt: 0,
    },
    {
        name: "Mon",

        pv: 5,
        amt: 5,
    },
    {
        name: "Tue",

        pv: 3,
        amt: 10,
    },
    {
        name: "Wed",

        pv: 5,
        amt: 15,
    },
    {
        name: "Thus",

        pv: 7,
        amt: 20,
    },
    {
        name: "Fri",

        pv: 8,
        amt: 25,
    },
    {
        name: "Sat",
        pv: 10,
        amt: 30,
    },
];
const oneDayData = [
    {
        name: "2",

        pv: 10,
        amt: 0,
    },
    {
        name: "4",

        pv: 5,
        amt: 5,
    },
    {
        name: "6",

        pv: 3,
        amt: 10,
    },
    {
        name: "8",

        pv: 5,
        amt: 15,
    },
    {
        name: "10",

        pv: 7,
        amt: 20,
    },
    {
        name: "12",

        pv: 8,
        amt: 25,
    },
    {
        name: "14",

        pv: 10,
        amt: 30,
    },
    {
        name: "16",

        pv: 11,
        amt: 35,
    },
    {
        name: "18",

        pv: 6,
        amt: 40,
    },
    {
        name: "20",

        pv: 6,
        amt: 40,
    },
    {
        name: "22",

        pv: 6,
        amt: 40,
    },
    {
        name: "24",

        pv: 6,
        amt: 40,
    },
];


interface dropDownInterface {
    selectedDuration: { name: string },
    durationData: { name: string }[],
    setselectedDuration: React.Dispatch<React.SetStateAction<{ name: string }>>;
    setgraphAxis: React.Dispatch<React.SetStateAction<{
        name: string,
        pv: number,
        amt: number,
    }[]>>
}

const Dropdown: React.FC<dropDownInterface> = ({ setgraphAxis, durationData, selectedDuration, setselectedDuration }) => {


    return (
        <div className="">
            <Listbox value={selectedDuration} onChange={e => {
                console.log(e, "<<<<<target")
                let { name } = e
                setselectedDuration(e)
                if (name == "1 Week") setgraphAxis(WeekData)
                if (name == "1 Year") setgraphAxis(Yeardata)
                if (name == "6 Months") setgraphAxis(MonthData)
                if (name == "1 Day") setgraphAxis(oneDayData)
            }}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default py-[6px] px-[12px] gap-[20px] bg-[#26282C] border-[#34363C] pool_charts_box border-[1px] border-solid rounded-[8px]  pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate  pool_font text-[#BABABA] text-base font-normal">
                            {selectedDuration.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <div className="">
                                <IoMdArrowDropup
                                    aria-hidden="true"
                                    className="text-[#BABABA] text-base"
                                />

                                <IoMdArrowDropdown
                                    aria-hidden="true"
                                    className="text-[#BABABA] text-base mt-[-10px]"
                                />
                            </div>
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full z-[10] overflow-auto bg-[#26282C] border-[#34363C] pool_charts_box border-[1px] border-solid rounded-[8px] py-1 text-base  ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {durationData.map((dur, idx) => (
                                <Listbox.Option
                                    key={idx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-4 ${active ? "bg-[#34363C] text-[#fff]" : "text-[#fff]"
                                        }`
                                    }
                                    value={dur}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                    }`}
                                            >
                                                {dur.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};
export default Dropdown;
