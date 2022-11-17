// @ts-nocheck

// CSS Import
import "../styles/components/Account.css"

// React components import
import React from 'react';

// React proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
Account.propTypes = {
    value: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    accountNumber: PropTypes.number.isRequired
}

/**
 * Account section displayed on user's profile page
 * @param {object} props containing account values and type
 * @param {string} props.value Account current balance
 * @param {string} props.accountType Type of the current account (Checking, savings, credit card, ...)
 * @param {number} props.accountNumber Last 4 number of the current account
 * @returns JSX Code for the Account component
 */
function Account({value, accountType, accountNumber}) {
    
    // Manage balance type according to accoutn ype
    let balanceType = "";
    switch (accountType) {
        case "Credit Card":
            balanceType = "Current";
            break;
    
        default:
            balanceType = "Available";
            break;
    }

    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {accountType + " (x" + accountNumber + ")"}</h3>
                <p className="account-amount">{"$" + value}</p>
                <p className="account-amount-description">
                    {balanceType + " Balance"}
                </p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}
export default Account;