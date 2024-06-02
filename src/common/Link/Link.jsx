import "./Link.scss";
import classNames from "classnames";

const Link = ({ className, url, text, Icon, title }) => {

    return (
        <a className={classNames("Link-custom", className)} href={url} target={"_blank"} rel="noopener noreferrer" title={title}>{text}<Icon className="Link-custom__icon"/></a>
    );
};

export default Link;