import React from "react";
import { Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navitem(props) {
  const { src, text, href, active } = props;

  function formatActiveSrc(src) {
    return src.slice(0, -4).concat("-active.svg");
  }

  return (
    <Nav.Item className={active === true ? "active-border" : ""}>
      <Link className="flex-column d-flex align-items-center" to={href}>
        <Image
          src={active === true ? formatActiveSrc(src) : src}
          rounded
          className="sidebar-icon"
        />
        {text && (
          <p className={active === false ? "sidebar-icons-text" : ""}>{text}</p>
        )}
      </Link>
    </Nav.Item>
  );
}
