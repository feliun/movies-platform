import React from 'react';
import Link from 'next/link';

const linkStyle = { marginRight: 15 };

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>
        <i className="fas fa-home" />
      </a>
    </Link>
  </div>
);

export default Header;
