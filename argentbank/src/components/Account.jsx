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
 * 
 * @param {object} props : Value of the current account with its type and account number 
 * @returns JSX Code for the Account component in UserPage
 */
function Account({value, accountType, accountNumber}) {
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