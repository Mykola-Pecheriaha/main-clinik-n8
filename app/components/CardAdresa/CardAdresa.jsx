import React from 'react'
import Image from 'next/image'
import styles from './CardAdresa.module.css'

const CardAdresa = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      {Array.isArray(text) ? (
        <ul className={styles.textList}>
          {text.map((item, index) => (
            <li key={index} className={styles.text}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.text}>{text}</p>
      )}
    </div>
  )
}

export default CardAdresa
