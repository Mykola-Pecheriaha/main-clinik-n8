import React from 'react'
import CardAdresa from '../../components/CardAdresa/CardAdresa'
import styles from './ContactsZmkl.module.css'

const hospitalData = [
  {
    name: 'Корпус №1',
    contacts: [
      {
        icon: '/icons/phone-icon.png',
        title: 'Телефон',
        text: 'кол.центр - +38 (050) 123-45-67',
      },
      {
        icon: '/icons/address-icon.png',
        title: 'Адреса',
        text: 'м. Чернівці, вул. Героїв Майдану, 226 (вхід зі сторони вул.Рівенської)',
      },
      {
        icon: '/icons/email-icon.png',
        title: 'Email',
        text: 'cmkl@cmkl.cv.ua',
      },
      {
        icon: '/icons/clock-icon.png',
        title: 'Години роботи',
        text: 'Пн-Пт: 9:00 - 18:00',
      },
    ],
  },
  {
    name: 'Корпус №2',
    contacts: [
      {
        icon: '/icons/phone-icon.png',
        title: 'Телефон',
        text: '+38 (067) 987-65-43',
      },
      {
        icon: '/icons/address-icon.png',
        title: 'Адреса',
        text: 'м. Чернівці, вул. Героїв Майдану, 226',
      },
      {
        icon: '/icons/email-icon.png',
        title: 'Email',
        text: 'lviv@clinic.com',
      },
      {
        icon: '/icons/clock-icon.png',
        title: 'Години роботи',
        text: 'Пн-Пт: 10:00 - 19:00',
      },
    ],
  },
  {
    name: 'Корпус №3',
    contacts: [
      {
        icon: '/icons/phone-icon.png',
        title: 'Телефон',
        text: '+38 (073) 543-21-00',
      },
      {
        icon: '/icons/address-icon.png',
        title: 'Адреса',
        text: 'м. Одеса, вул. Дерибасівська, 10',
      },
      {
        icon: '/icons/email-icon.png',
        title: 'Email',
        text: 'odesa@clinic.com',
      },
      {
        icon: '/icons/clock-icon.png',
        title: 'Години роботи',
        text: 'Пн-Сб: 9:00 - 20:00',
      },
    ],
  },
  {
    name: 'Корпус №4',
    contacts: [
      {
        icon: '/icons/phone-icon.png',
        title: 'Телефон',
        text: '+38 (073) 543-21-00',
      },
      {
        icon: '/icons/address-icon.png',
        title: 'Адреса',
        text: 'м. Одеса, вул. Дерибасівська, 10',
      },
      {
        icon: '/icons/email-icon.png',
        title: 'Email',
        text: 'odesa@clinic.com',
      },
      {
        icon: '/icons/clock-icon.png',
        title: 'Години роботи',
        text: 'Пн-Сб: 9:00 - 20:00',
      },
    ],
  },
]

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Наші Контакти</h2>
      {hospitalData.map((hospital, index) => (
        <div key={index} className={styles.hospitalSection}>
          <h3 className={styles.hospitalName}>{hospital.name}</h3>
          <div className={styles.cards}>
            {hospital.contacts.map((contact, idx) => (
              <CardAdresa
                key={idx}
                icon={contact.icon}
                title={contact.title}
                text={contact.text}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contacts
