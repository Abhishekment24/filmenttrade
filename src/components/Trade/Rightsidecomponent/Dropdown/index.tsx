import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
//import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { IoIosArrowDown } from "react-icons/io";

const people = [{ name: "$" }, { name: "%" }];
interface DropDownInterface {
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}
const Dropdown: React.FC<DropDownInterface> = ({ setCurrency }) => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={(e: any) => {
        setCurrency(e.name)
        setSelected(e)
      }}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer py-[6px] px-[12px] gap-[20px]      pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate  pool_font text-[#BABABA] text-base font-normal">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <div className="">
                <IoIosArrowDown
                  aria-hidden="true"
                  className="text-[#9CA3AF] text-[15px]"
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
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${active ? "bg-[#34363C] text-[#fff]" : "text-[#fff]"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                          }`}
                      >
                        {person.name}
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
    </div >
  );
};
export default Dropdown;
