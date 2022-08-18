import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 text-center md:grid-cols-4 gap-10 md:px-32 py-14 bg-gray-100 ">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real website</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Instant Book</p>
        <p>Gift Cards</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>I am looking for </p>
        <p>A cool job</p>
        <p>Feel free to</p>
        <p>Contact me if</p>
        <p>You have an offer</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help center</p>
        <p>24/24</p>
        <p>Travel credits</p>
        <p>Responsible Hosting</p>
        <p>Terms & Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
