import React from "react";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>123 E-Commerce St, City, Country</p>
        <p>Phone: +123 456 7890</p>
        <p>Email: info@ecommerce.com</p>
        <div className="flex justify-center mt-4">
          <a href="https://facebook.com" className="mx-2">
            <Facebook />
          </a>
          <a href="https://twitter.com" className="mx-2">
            <Twitter />
          </a>
          <a href="https://linkedin.com" className="mx-2">
            <LinkedIn />
          </a>
          <a href="https://github.com" className="mx-2">
            <GitHub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
