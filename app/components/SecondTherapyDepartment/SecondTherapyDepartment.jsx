'use client'

import styles from './SecondTherapyDepartment.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

export default function SecondTherapiDepartment() {
  const [isUlcerOpen, setIsUlcerlOpen] = useState(false)
  // const [isBiliousOpen, setIsBiliousOpen] = useState(false)
  // const [isHerniasOpen, setIsHerniasOpen] = useState(false)

  const [isCarpalSyndrome, setIsCarpalSyndrome] = useState(false)

  const toggleSection = (section) => {
    if (section === 'ulcer') {
      setIsUlcerlOpen(!isUlcerOpen)
      // } else if (section === 'bilious') {
      //   setIsBiliousOpen(!isBiliousOpen)
      // } else if (section === 'hernias') {
      //   setIsHerniasOpen(!isHerniasOpen)
      // } else if (section === 'carpalSyndrome') {
      //   setIsCarpalSyndrome(!isCarpalSyndrome)
    }
  }

  return (
    <div className={styles.secondTherapiDepartmentContainer}>
      {/* розділ печінки */}

      <div className={styles.secondTherapiDepartmentSection}>
        <h3 onClick={() => toggleSection('ulcer')}>
          Виразкова хвороба <span>{isUlcerOpen ? '▲' : '▼'}</span>
        </h3>
        {isUlcerOpen && (
          <div className={styles.secondTherapiDepartmentTitle}>
            <div className={styles.secondTherapiDepartmentText}>
              <p>
                Захворювання виразковою хворобою шлунка і дванадцятипалої кишки
                досить поширене ...
              </p>

              <h2>Які ознаки хвороби</h2>

              <ul>
                <li>Часта печія</li>
              </ul>

              <p>Надання домедичної допомоги заключається в наступному:</p>

              <ul>
                <li>
                  1. Скласти загальне враження про травми, попередній стан
                  постраждалого.
                </li>
                <li> життя станів.</li>
                <li>
                  {' '}
                  3. Виконати вторинний огляд - оцінка та визначення наявних
                  травм у постраждалого, що проводиться за умови відсутності
                  загрозливих для його життя станів.
                </li>
              </ul>

              <h4>Що для цього потрібно зробити:</h4>

              <p>
                Перед наданням допомоги переконатися у відсутності небезпеки для
                себе, оточуючих, постраждалого та тільки за її відсутності
                перейти до наступного кроку.
              </p>

              <h5>Первинне враження:</h5>

              <h4>Наші кроки в такій ситуації.</h4>
              <ul>
                <li>негайно здійснити виклик екстреної медичної допомоги</li>
              </ul>

              <h2>Порядок виклику екстреної (швидкої)медичної допомоги</h2>

              <p>
                <b>
                  Для виклику екстреної медичної допомоги треба зателефонувати
                  за номером 103{' '}
                </b>
                (єдиний телефонний номер виклику екстреної медичної допомоги)
                <b>або 112 </b>(єдиний телефонний номер виклику екстреної
                допомоги ). Виклик безоплатний.
              </p>
            </div>
            <div className={styles.secondTherapiDepartmentCorpImage}>
              <Image
                src="/images/secondTherapy/ulcer1.jpg" // Шлях до зображення в папці public
                alt="Liver1"
                width={300}
                height={200}
                // priority
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
              <Image
                src="/images/secondTherapy/ulcer1.jpg" // Шлях до зображення в папці public
                alt="Liver2"
                width={300}
                height={200}
                layout="responsive" // Зберігає пропорції під час зміни розмірів
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
