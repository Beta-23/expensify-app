import React from 'react';

// Footer stateless functional component
const Footer = (props) => (
    <div className="footer">
        <div>
            <footer>
            { props.title } | Copyright&copy; 2020
                |<a href="https://alfreddominguez.com" target="_blank">Alfred Domínguez</a>
            </footer>
        </div>  
    </div>
);

Footer.defaultProps = {
    title: 'iLearnx App'
}
export default Footer;

