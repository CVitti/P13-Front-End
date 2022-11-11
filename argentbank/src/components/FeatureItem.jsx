// @ts-nocheck

// File import
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";

// React components import
import React from 'react';

// React proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
FeatureItem.propTypes = {
    iconType: PropTypes.string.isRequired
}

function FeatureItem({iconType}) {
    const chatTitle = "You are our #1 priority";
    const chatText = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
    const moneyTitle = "More savings means higher rates";
    const moneyText = "The more you save with us, the higher your interest rate will be!";
    const securityTitle = "Security you can trust";
    const securityText = "We use top of the line encryption to make sure your data and money is always safe.";

    return(
        <div className="feature-item">
            {iconType === "Chat" && <img src={chatIcon} alt="Chat Icon" className="feature-icon" />}
            {iconType === "Money" && <img src={moneyIcon} alt="Money Icon" className="feature-icon" />}
            {iconType === "Security" && <img src={securityIcon} alt="Security Icon" className="feature-icon" />}

            {iconType === "Chat" && <h3 className="feature-item-title">{chatTitle}</h3>}
            {iconType === "Money" && <h3 className="feature-item-title">{moneyTitle}</h3>}
            {iconType === "Security" && <h3 className="feature-item-title">{securityTitle}</h3>}

            {iconType === "Chat" && <p>{chatText}</p>}
            {iconType === "Money" && <p>{moneyText}</p>}
            {iconType === "Security" && <p>{securityText}</p>}
        </div>
    );
}
export default FeatureItem;