import React from "react";

export const Image = ({ title, largeImage, smallImage, websiteUrl, status }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a 
          href={websiteUrl || largeImage} 
          title={title} 
          target={websiteUrl ? "_blank" : "_self"}
          rel={websiteUrl ? "noopener noreferrer" : ""}
          data-lightbox-gallery={websiteUrl ? "" : "gallery1"}
        >
          <div className="hover-text">
            <h4>{title}</h4>
            {status && <div className="status">{status}</div>}
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
