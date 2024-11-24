import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.352009476019!2d8.622686376725891!3d50.135846371533795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd090a2dc6c417%3A0x86cdfff8349cec3!2sPraunheimer%20Landstra%C3%9Fe%2032%2C%2060488%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sma!4v1732481888246!5m2!1sen!2sma"   allowfullscreen="" loading="lazy" style={{ border: 0 }}/>
        </div>
      </div>
    </div>
  );
}

