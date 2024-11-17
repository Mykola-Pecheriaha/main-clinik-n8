import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  const contacts = {
    phone: '+1234567890',
    email: 'example@example.com',
    address: 'м.Чернівці. вул.Героїв Майдану 226. (вхід з вул.Рівенська)',
    socials: {
      facebook: 'https://www.facebook.com/profile.php?id=100083562030873',
      instagram: 'https://instagram.com',
      telegram: 'https://telegram.org',
      youtube: 'https://youtube.com',
    },
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
        </nav>
      </div>
      <div className={styles.column}>
        <div className={styles.contactInfo}>
          <p>Phone: {contacts.phone}</p>
          <p>
            Email: <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </p>
          <p>Address: {contacts.address}</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.socials}>
          <a
            href={contacts.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook
          </a>
          <a
            href={contacts.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
          <a
            href={contacts.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Telegram
          </a>
          <a
            href={contacts.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            YouTube
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Mykola. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
