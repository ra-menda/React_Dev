import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstname + " " + user.lastName;
}

const user = {
    firstname: "ramen",
    lastName: "Nazomaster"
};

const element =(
    <h1>
        Hello,{formatName(user)}!
    </h1>
);


ReactDOM.render(
   element,
    document.getElementById('root'),
    
  );
