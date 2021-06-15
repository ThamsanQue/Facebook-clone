import React from "react";

import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer__">
      <p>
        © {new Date().getFullYear()} Facebook Clone. No rights reserved - cloned
        by
        <a href="/"> Thamsanqa J</a>
      </p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </div>
  );
}

export default Footer;
