// @ts-nocheck

// File import
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";

// CSS Import
import "../styles/components/FeatureItem.css"

// React components import
import React from 'react';

// React proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
FeatureItem.propTypes = {
    iconType: PropTypes.string.isRequired
}

/**
 * 
 * @param {object} iconType to manage for the component
 * @returns JSX Code for the featureItem to display
 */
function FeatureItem({iconType}) {
    let title = "";
    let paragraph = "";

    // Defines which title and paragraph to display according to iconType
    switch (iconType) {
        case "Chat":
            title = "You are our #1 priority";
            paragraph = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
            break;

        case "Money":
            title = "More savings means higher rates";
            paragraph = "The more you save with us, the higher your interest rate will be!";
            break;

        case "Security":
            title = "Security you can trust";
            paragraph = "We use top of the line encryption to make sure your data and money is always safe.";
            break;

        default:
            break;
    }

    return(
        <div className="feature-item">
            {/* Choosing an icon file depending to the prop used */}
            {iconType === "Chat" && <img src={chatIcon} alt="Chat Icon" className="feature-icon"/>}
            {iconType === "Money" && <img src={moneyIcon} alt="Money Icon" className="feature-icon" />}
            {iconType === "Security" && <img src={securityIcon} alt="Security Icon" className="feature-icon" />}

            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
}
export default FeatureItem;