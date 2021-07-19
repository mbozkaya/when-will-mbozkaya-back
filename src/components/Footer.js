import React from "react";

const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <p className="text-center"><a href="https://mbozkaya.github.io">mbozkaya</a> © 2021 - {new Date().getFullYear()} </p>
            </div>
        </footer>
    );
};

export default Footer;