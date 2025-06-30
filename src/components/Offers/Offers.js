import React from 'react';
import './Offers.css';
import OffCanvas from '../OffCanvas/OffCanvas';

export default function Offers() {
  return (
    <div className='flex flex-col gap-12'>
      {/* --- PAYTM --- */}
      <div className='relative my-2 flex items-center justify-between rounded-xl border px-12 py-16' style={{ backgroundColor: "#F5F8FF", border: "1px solid #BCCFFF" }}>
        <div className='flex w-full items-center justify-between gap-8 md:gap-16'>
          <div className='width-100'>
            <img src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/Paytm-Latest-UPI-Logo.svg" alt="paytm" />
          </div>
          <p className='text-12 xxl:text-14 font-500 text-fnp-500 w-[80%]'>
            Assured Cashback up to Rs.100 using Paytm UPI
          </p>
          <OffCanvas content="Paytm UPI offer: Get assured cashback up to Rs.100 on eligible payments made via Paytm UPI. T&Cs apply." />
        </div>
      </div>

      {/* --- AIRTEL --- */}
      <div className='relative my-2 flex items-center justify-between rounded-xl border px-12 py-16' style={{ backgroundColor: "#FEF6F6", border: "1px solid #FAC2C4" }}>
        <div className='flex w-full items-center justify-between gap-8 md:gap-16'>
          <div className='width-100'>
            <img src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/aritel-logo.png" alt="airtel" />
          </div>
          <p className='text-12 xxl:text-14 font-500 text-fnp-500 w-[80%]'>
            Flat 10% off up to Rs.200 on a minimum transaction of Rs.999
          </p>
          <OffCanvas content="Airtel Payments Bank offer: Flat 10% off up to ₹200 on orders above ₹999. Only applicable via Airtel wallet or linked UPI." />
        </div>
      </div>

      {/* --- MOBIKWIK --- */}
      <div className='relative my-2 flex items-center justify-between rounded-xl border px-12 py-16' style={{ backgroundColor: "#e3e7f2", border: "1px solid #4c72d1" }}>
        <div className='flex w-full items-center justify-between gap-8 md:gap-16'>
          <div className='width-100'>
            <img src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/Mobikwik.png" alt="mobikwik" />
          </div>
          <p className='text-12 xxl:text-14 font-500 text-fnp-500 w-[80%]'>
            Get up to Rs.500 via Wallet or Rs.250 via UPI on eligible MobiKwik payments
          </p>
          <OffCanvas content="MobiKwik SuperCash offer: Up to ₹500 via Wallet or ₹250 via UPI. Valid on eligible orders only. One-time use per user." />
        </div>
      </div>
    </div>
  );
}
