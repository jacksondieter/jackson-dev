import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Made with <FaHeart className="heart" /> by{" "}
        <a href="http://jacksondieter.github.io">Dieter Jackson</a>.
      </div>
    </footer>
  );
}
