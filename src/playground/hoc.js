// HOC - a component (HOC) that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>Your Info: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>Private info...don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AdminInfo isAdmin={true} info='My DOB' />, document.getElementById('app'));
