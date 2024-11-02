// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">Digital Project</div>
      <nav>
        <Link href="#main">Main</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#certifications">Certifications</Link>
        <Link href="#contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
