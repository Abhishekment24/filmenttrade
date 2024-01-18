import React, { useState } from "react";
import Image from "next/image";
import RefferralBg from "../../../public/assest/referral-bg.png";

const Term = () => {
  return (
    <>
      <section className="py-[120px] pool_bg lg:h-[60px] max-[1023px]:overflow-hidden no-scrollbar">
        <div className="referal-bg">
          <Image className="" priority src={RefferralBg} alt="Lock" />
        </div>
        <div className="container mx-auto max-[1023px]:px-4">
          <div className="lg:w-[900px]">
            <p className="pool_font text-[#fff] text-2xl font-semibold tracking-[0.12px]">
              Terms of Use
            </p>
            <span className="pool_font text-[#939191] text-sm font-normal tracking-[0.07px]">
              Last Updated on 3 Jan 2023
            </span>
            <div className="mt-[56px]">
              <p className="pool_font text-[#fff] text-base font-semibold tracking-[0.08px]">
                2.2 As a condition to accessing or using the Services or the
                Site, you acknowledge, understand, and agree to the following:
              </p>
              <p className="pool_font text-[#939191] text-base font-normal tracking-[0.08px] my-[24px]">
                from time to time, the Site and the Services may be inaccessible
                or inoperable for any reason, including: (a) equipment
                malfunctions; (b) periodic maintenance procedures or repairs
                that Filament or any Filament suppliers or contractors may
                undertake from time to time; (c) causes beyond Filament control
                or that Filament could not reasonably foresee; (d) disruptions
                and temporary or permanent unavailability of underlying
                blockchain infrastructure; or (e) unavailability of third-party
                service providers or external partners for any reason;
              </p>
              <p className="pool_font text-[#939191] text-base font-normal tracking-[0.08px]">
                Filament reserves the right to disable or modify access to the
                Site and the Services (such as restricting features of the
                Services) at any time in the event of any breach of these Terms,
                including, if Filament reasonably believes any of your
                representations and warranties may be untrue or inaccurate, and
                Filament will not be liable to you for any losses or damages you
                may suffer as a result of or in connection with the Site or the
                Services being inaccessible to you at any time or for any
                reason;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Term;
