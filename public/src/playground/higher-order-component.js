// Higher order function (HOC) : A component (HOC) that renders another component
//Reuse Code
//Render hijacking
//Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

//HOC parameter has component to tbe rendered
// It is going to print a message and below it is going render the component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p> This is private info. Please dont share!!</p> }
            {/* ES6 spreader passing all prop values*/}
            <WrappedComponent {...props}/>
        </div>
    )
}
//{props.AuthInfo ? <WrappedComponent {...props}/> : <p> Please give correct info </p> }


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p> Please give correct info </p> }
        </div>
    )
}

//passing jsx object to the Higher Order Component and creating new component
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// render the AdminInfo component
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));