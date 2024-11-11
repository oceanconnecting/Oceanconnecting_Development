import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3439.9998006851624!2d-9.564160324431182!3d30.436107574728734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI2JzEwLjAiTiA5wrAzMyc0MS43Ilc!5e0!3m2!1sfr!2sma!4v1731320679871!5m2!1sfr!2sma" style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy" />
        </div>
      </div>
    </div>
  );
}

