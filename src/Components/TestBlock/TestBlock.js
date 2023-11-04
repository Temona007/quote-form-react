import React from "react";

const TestBlock = ({ 
    userInfo,
}) => {
    return(
        <div>
            <h2 className="text-primary">user data:</h2>
            <p>First Name = {userInfo.firstName};  Last Name = {userInfo.lastName}; Email = {userInfo.email};</p>
            <p>Phone = {userInfo.phone};  ZIP code = {userInfo.postCode}; Location = {userInfo.location};</p>

            <ul>
                
            </ul>
        </div>
    );
}

export default TestBlock;