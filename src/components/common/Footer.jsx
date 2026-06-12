import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { sectors } from '../../data/sectors';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'News & Media', path: '/news' },
  { name: 'Investors', path: '/investors' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: FaLinkedinIn, url: 'https://linkedin.com/company/wahmangroup', label: 'LinkedIn' },
  { icon: FaXTwitter, url: 'https://twitter.com/wahmangroup', label: 'X (Twitter)' },
  { icon: FaFacebookF, url: 'https://facebook.com/wahmangroup', label: 'Facebook' },
  { icon: FaInstagram, url: 'https://instagram.com/wahmangroup', label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center">
                <svg viewBox="0 0 44 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="7,0 10,7 7,14 4,7" fill="#1a35b0"/>
                  <polygon points="37,0 40,7 37,14 34,7" fill="#1a35b0"/>
                  <polygon points="15,1 23,17 15,33 7,17" fill="#C9A84C"/>
                  <polygon points="29,1 37,17 29,33 21,17" fill="#C9A84C"/>
                  <polygon points="22,6 30,18 22,30 14,18" fill="#1a35b0"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-heading font-bold text-lg leading-none">WAHMAN ABU</span>
                <span className="text-gold text-xs block mt-0.5 tracking-[0.2em] uppercase">Group</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Investing in Africa's Future. Connecting the World. A diversified conglomerate operating across mining, energy, agriculture, real estate, aviation, and trade.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy-dark transition-all duration-300"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-5">Our Sectors</h4>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.id}>
                  <Link
                    to={`/sectors/${sector.id}`}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: sector.color }}
                    />
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-gold text-lg mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  13 Walpole Street, Freetown,<br />
                  Sierra Leone, West Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-gold text-lg shrink-0" />
                <a
                  href="mailto:info@wahmangroup.com"
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  info@wahmangroup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="text-gold text-lg mt-0.5 shrink-0" />
                <div className="text-white/50 text-sm space-y-1">
                  <a href="tel:+23276920000" className="block hover:text-gold transition-colors">
                    <span className="text-white/30 text-xs mr-1">Africa</span>+232 76 920000
                  </a>
                  <a href="tel:+393293661921" className="block hover:text-gold transition-colors">
                    <span className="text-white/30 text-xs mr-1">Europe</span>+39 329 3661921
                  </a>
                  <a href="tel:+19149185695" className="block hover:text-gold transition-colors">
                    <span className="text-white/30 text-xs mr-1">USA</span>+1 914 918 5695
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {currentYear} WAHMAN ABU Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/30 hover:text-gold text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/30 hover:text-gold text-xs transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
