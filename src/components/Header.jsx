import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <Link to="/">
            <header style={headerStyles}>
                <div className="container">
                    <h3>{text}</h3>
                </div>
            </header>
        </Link>
    );
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

Header.propTypes = {
    text: PropTypes.string,
};

export default Header;
