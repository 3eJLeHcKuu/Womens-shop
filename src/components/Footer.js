import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="navigation">
        <ul>
          Information
          <li>About Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          Support Service
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>Help Center</li>
        </ul>
        <ul>
          Social Media
          <li>
            <FaInstagramSquare /> Instagram
          </li>
          <li>
            <FaTelegram /> Telegram
          </li>
          <li>
            <FaFacebook /> Facebook
          </li>
        </ul>
        <ul>
          Our Contact
          <li>Address</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </div>
      <h3>Copyright © 2024</h3>
    </footer>
  );
}
