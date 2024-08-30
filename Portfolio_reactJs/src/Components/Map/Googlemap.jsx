import React from "react";
import Style from "../Map/Map.module.CSS";
const Googlemap = () => {
  return (
    <>
      <address  className={Style.address}>
        <h1 className="text-center text-gray-400 p-2  font-semibold text-3xl">Saray Kazi Varansi (up)</h1>
      </address>
      <div className={Style.mapdiv}>
      
        <div>
        <iframe
        className={Style.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14417.337607625066!2d82.8869502341582!3d25.393614691355886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd3577645bb5b%3A0x9a39f2a169bd5d54!2sSarai%20Kazi%2C%20Uttar%20Pradesh%20221105!5e0!3m2!1sen!2sin!4v1723975062300!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </>
  );
};

export default Googlemap;
