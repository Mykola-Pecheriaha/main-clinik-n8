import React from 'react'
import CardAdresa from '../../components/CardAdresa/CardAdresa'
import Image from 'next/image'
import styles from './ContactsZmkl.module.css'

const hospitalData = [
  {
    name: 'Корпус №1',
    contacts: [
      {
        icon: '/images/icon/free-icon-font-call-outgoing-10484776.png',
        title: 'Телефон',
        text: ['+38 (066) 01-00-103', '+38 (068) 01-00-103', '(0372) 50-66-55'],
      },
      {
        icon: '/images/icon/free-icon-address-3095581.png',
        title: 'Адреса',
        text: 'м. Чернівці, вул. Героїв Майдану, 226 (вхід зі сторони вул.Рівенської)',
      },
      {
        icon: '/images/icon/free-icon-email-16121743.png',
        title: 'Email',
        text: 'cmkl@cmkl.cv.ua',
      },
      {
        icon: '/images/icon/free-icon-work-time-3671952.png',
        title: 'Години роботи',
        text: 'Пн-Пт: 8:00 - 17:00',
      },
    ],
  },
  {
    name: 'Корпус №2',
    contacts: [
      {
        icon: '/images/icon/free-icon-font-call-outgoing-10484776.png',
        title: 'Телефон',
        text: ['+38 (066) 01-00-103', '+38 (068) 01-00-103', '(0372) 50-66-55'],
      },
      {
        icon: '/images/icon/free-icon-address-3095581.png',
        title: 'Адреса',
        text: 'м. Чернівці, вул. Рівенська, 8',
      },
      {
        icon: '/images/icon/free-icon-email-16121743.png',
        title: 'Email',
        text: 'cmkl@cmkl.cv.ua',
      },
      {
        icon: '/images/icon/free-icon-work-time-3671952.png',
        title: 'Години роботи',
        text: 'Пн-Пт: 8:00 - 17:00',
      },
    ],
  },
  {
    name: 'Корпус №3',
    contacts: [
      {
        icon: '/images/icon/free-icon-font-call-outgoing-10484776.png',
        title: 'Телефон',
        text: ['+38 (066) 01-00-103', '+38 (068) 01-00-103', '(0372) 50-66-55'],
      },
      {
        icon: '/images/icon/free-icon-address-3095581.png',
        title: 'Адреса',
        text: 'м. Чернівці, вул. Головна, 100',
      },
      {
        icon: '/images/icon/free-icon-email-16121743.png',
        title: 'Email',
        text: 'cmkl@cmkl.cv.ua',
      },
      {
        icon: '/images/icon/free-icon-work-time-3671952.png',
        title: 'Години роботи',
        text: 'Пн-Пт: 8:00 - 17:00',
      },
    ],
  },
  {
    name: 'Корпус №4',
    contacts: [
      {
        icon: '/images/icon/free-icon-font-call-outgoing-10484776.png',
        title: 'Телефон',
        text: ['+38 (066) 01-00-103', '+38 (068) 01-00-103', '(0372) 50-66-55'],
      },
      {
        icon: '/images/icon/free-icon-address-3095581.png',
        title: 'Адреса',
        text: 'м. Чернівці, вул. І.Підкови, 14',
      },
      {
        icon: '/images/icon/free-icon-email-16121743.png',
        title: 'Email',
        text: 'cmkl@cmkl.cv.ua',
      },
      {
        icon: '/images/icon/free-icon-work-time-3671952.png',
        title: 'Години роботи',
        text: 'Пн-Пт: 8:00 - 17:00',
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
