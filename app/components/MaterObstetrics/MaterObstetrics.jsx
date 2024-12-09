'use client'

import styles from './MaterObstetrics.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

export default function MaterObstetrics() {
  const [isPrenatalOpen, setIsPrenatalOpen] = useState(false)
  const [isPartnerOpen, setIsPartnerOpen] = useState(false)
  const [isCollectionOpen, setIsCollectionOpen] = useState(false)
  const [isFalseСontractions, setIsFalseСontractions] = useState(false)

  const toggleSection = (section) => {
    if (section === 'prenatal') {
      setIsPrenatalOpen(!isPrenatalOpen)
    } else if (section === 'partner') {
      setIsPartnerOpen(!isPartnerOpen)
    } else if (section === 'collection') {
      setIsCollectionOpen(!isCollectionOpen)
    } else if (section === 'сontractions') {
      setIsFalseСontractions(!isFalseСontractions)
    }
  }

  return (
    <div className={styles.materObstetricsContainer}>
      {/* <div className={styles.headerSection}>
        <h2 className={styles.firstSurgeryName}>Хірургічне відділення №1</h2>
      </div> */}

      {/* Підготовка до пологів */}

      <div className={styles.materObstetricsSection}>
        <h3 onClick={() => toggleSection('prenatal')}>
          Підготовка до пологів <span>{isPrenatalOpen ? '▲' : '▼'}</span>
        </h3>
        {isPrenatalOpen && (
          <div className={styles.materObstetricsTitle}>
            <div className={styles.materObstetricsText}>
              <p>
                Підготуватися до такої важливої події, як пологи необхідно
                заздалегідь. У всіх майбутніх батьків обов’язково виникає
                питання - що взяти з собою в пологовий, щоб і нічого не забути,
                і водночас - не нести зайвого. Ми підготували для вас перелік
                необхідних речей для перебування в нас:
              </p>
              <p>
                Речі необхідно зібрати за 4-5 тижні до передбачуваної дати
                пологів та поставити їх на видне місце, щоб не панікувати у
                потрібний момент.
              </p>

              <h4>Речі для роділлі</h4>
              <ul>
                <li>Паспорт, обмінна карта</li>
                <li>Халат</li>
                <li>Нічна сорочка (2 шт)</li>
                <li>Шкарпетки (2-3 пари)</li>
                <li>Змінне взуття</li>
                <li>Прокладки гігієнічні</li>
                <li>Спідня білизна</li>
                <li> Бюстгальтер для годування</li>
                <li>Пелюшки поглинаючі (10 шт)</li>
                <li>Посуд (чашка, ложка, тарілка)</li>
                <li>Постільна білизна</li>
                <li>Рушник</li>
                <li>Пляшка мінеральної води без газу</li>
                <li> Зубна щітка, зубна паста</li>
              </ul>

              <h4>Речі для малюка</h4>

              <ul>
                <li> Шапочки (4-5шт)</li>
                <li> Шкарпеточки( 3 пари)</li>
                <li> Пелюшки (6-7 шт)</li>
                <li> Повзунки</li>
                <li> Сорочки</li>
                <li> Вологі серветки</li>
                <li> Ковдра ( по погоді)</li>
                <li> Ватні диски</li>
                <li> Дитяче мило рідке з дозатором</li>
                <li> Підгузки</li>
                <li> Термометр електронний</li>
                <li> Ковдра дитяча</li>
              </ul>

              <h4>Речі для партнера</h4>

              <ul>
                <li> Чистий змінний одяг</li>
                <li> Чисте змінне взуття</li>
                <li>
                  {' '}
                  Одноразовий комплект одягу (штани, куртка, шапочка, маска,
                  бахіли)
                </li>
              </ul>

              <h4>
                Розпізнати розвиток ускладнень можна за такими симптомами:
              </h4>

              <p>
                Якщо ви щось забудете, не хвилюйтеся! Все необхідне вам завжди
                зможуть принести близькі.
              </p>
            </div>
            <div className={styles.materObstetricsImage}>
              <img
                src="/images/obstetricsgall/akush22.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush24.jpg" // Шлях до зображення з папки public
                alt="Liver2"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush25.jpg" //
                alt="Liver2"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />

              <img
                src="/images/obstetricsgall/akush27.jpg" // Шлях до зображення з папки public
                alt="Liver2"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush26.jpg" // Шлях до зображення з папки public
                alt="Liver2"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush25.jpg" // Шлях до зображення з папки public
                alt="Liver2"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* Партнерські пологи */}

      <div className={styles.materObstetricsSection}>
        <h3 onClick={() => toggleSection('partner')}>
          Партнерські пологи <span>{isPartnerOpen ? '▲' : '▼'}</span>
        </h3>
        {isPartnerOpen && (
          <div className={styles.materObstetricsTitle}>
            <div className={styles.materObstetricsText}>
              <p>
                Партнерські пологи передбачають присутність близької людини, яка
                допомагає жінці під час пологів. Найчастіше це батько дитини,
                але партнером може бути і мати, сестра або інша близька особа,
                яка забезпечує захист і комфорт. При кесаревому розтині
                партнером може бути лише батько дитини.
              </p>
              <p>
                {' '}
                Моральна підтримка під час пологів зменшує біль і тривожність.
                Партнер може допомогти фізично: подати воду, покликати лікаря,
                зробити масаж або допомогти прийняти зручну позицію.
              </p>

              <p>
                Підготовка і психоемоційне налаштування значно впливають на
                перебіг пологів. Важливо, щоб сімейна пара пройшла підготовку в
                школі відповідального батьківства, читала відповідну літературу
                і консультувалася з фахівцями, щоб процес пологів був зрозумілим
                і усвідомленим.
              </p>

              <p>
                {' '}
                У нашому закладі школу батьківства ведуть не лише лікарі, а й
                психолог, що надає учасникам психологічний супровід з усіх
                важливих тем на шляху до щасливого батьківства.
              </p>

              <p>
                Наш пологовий будинок підтримує практику партнерських пологів.
                Ми маємо затишні індивідуальні пологові зали, оснащені сучасним
                обладнанням, а також покращені палати для сумісного перебування
                матері і дитини.
              </p>

              <h4>Партнер повинен мати:</h4>

              <ul>
                <li>
                  - флюорографію або рентгенографію грудної клітини за останній
                  рік;
                </li>

                <li>- чистий змінний зручний одяг та гумові капці;</li>
                <li>- пляшку води і щось поїсти;</li>
                <li>
                  - хорошее настроение и понимание своей миссии в процессе.
                </li>
              </ul>
            </div>
            <div className={styles.materObstetricsImage}>
              <img
                src="/images/obstetricsgall/akush30.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={800}
                height={800}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush28.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush29.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ Збір */}

      <div className={styles.materObstetricsSection}>
        <h3 onClick={() => toggleSection('collection')}>
          Токсікоз та травматизація родових шляхів
          <span>{isCollectionOpen ? '▲' : '▼'}</span>
        </h3>
        {isCollectionOpen && (
          <div className={styles.materObstetricsTitle}>
            <div className={styles.materObstetricsText}>
              <h4>Токсикоз та як з ним боротися</h4>

              <p>
                Майбутні мами часто стикаються з токсикозом, особливо на ранніх
                термінах вагітності, який суттєво впливає на їхнє самопочуття та
                якість життя в цілому.
              </p>

              <p>
                Що це за симптом і як із ним боротись? Розберімося разом у цьому
                не надто приємному симптомі вагітності та знайдемо способи
                полегшення його проявів.
              </p>

              <p>
                Токсикоз — це комплекс патологічних змін, що можуть виникати на
                ранніх етапах вагітності або протягом всієї вагітності. Один з
                найнеприємніших його проявів — часті епізоди нудоти та блювання.
              </p>

              <p>
                🕒 Найчастіше токсикоз починається на 9-12 день після овуляції і
                випадку після імплантації плідного яйця в ендометрій матки. А
                якщо говорити про завершення проявів токсикозу, то це найчастіше
                відбувається у межах 13 тижня вагітності.
              </p>

              <h4>
                Як боротися з сильним токсикозом на ранніх термінах вагітності?
              </h4>

              <ul>
                <li>
                  Медикаментозно. Але обов’язково приймати тільки по призначенню
                  ведучого лікаря.
                </li>
                <li>
                  Герніопластика місцевим доступом із застосуванням сітчастого
                  імплантанта
                </li>
                <li>
                  - Зменшення ризиків перевтоми та стресу. Майбутній мамі варто
                  частіше перебувати у спокійній атмосфері, утримуватись від
                  стресових ситуації та надмірних навантажень та не забувати про
                  щоденні прогулянки — це допоможе Вам позбавитися нудоти.
                </li>
                <li>
                  - Контроль харчування. Відсутність режиму харчування та
                  принципів здорової їжі може посилювати симптоми токсикозу
                  спровокувати блювання у вагітної жінки.
                </li>
                <li>
                  - Питний режим. Достатнє споживання чистої води допоможуть
                  почуватись краще не тільки вагітним, але й кожній людині.
                </li>
              </ul>
              <p>
                Не забувайте, що самолікування може зашкодити як вам так і
                вашому малюку! Консультуйтеся з лікарем та бережіть себе.
              </p>

              <h2>Що таке пренатальний скринінг❓</h2>

              <p>
                Це допологове обстеження плоду на наявність патологій, спадкових
                і вроджених захворювань. Воно містить проведення УЗД і аналіз
                крові на присутність маркерів. Якщо скринінг показує високий
                ризик будь-якої патології або порушення розвитку плоду, жінку
                відправляють на дообстеження, щоб підтвердити або виключити
                діагноз.
              </p>

              <h5>УЗД в першому триместрі проводиться для того, щоб:</h5>

              <ul>
                <li>
                  визначити точний термін вагітності й передбачувану дату
                  пологів,
                </li>
                <li>
                  оцінити розміри кінцівок, розташування і структуру плаценти,
                </li>
                <li>наявність серцебиття,</li>
                <li>
                  побачити грубі пороки розвитку і/або ознаки генетичних
                  аномалій (які можуть сприяти перериванню вагітності):
                  вимірюють товщину шийно-комірного простору, розміри носових
                  кісток, окружність голови, купреко-тім’яний розмір,
                </li>

                <li>
                  наявність / відсутність грубих вад розвитку головного мозку,
                  серця, скелета, внутрішніх органів. Також на цьому терміні
                  проводиться комбінований скринінг, за допомогою якого лікарі
                  розраховують ризики хромосомних аномалій (синдром Дауна,
                  синдром Патау, синдром Едвардса):
                </li>
                <ul>
                  <li>✔аналіз крові на вільний ХГЧ,</li>
                  <li>✔ РАРР-А.</li>
                </ul>
              </ul>

              <p>
                У разі виявлення у плода аномалій розвитку, може знадобитися
                переривання вагітності за медичними показаннями. Переривання в
                таких термінах менш травматично і безпечно для жінки, ніж в
                пізніх.
              </p>
            </div>

            <div className={styles.materObstetricsImage}>
              <img
                src="/images/obstetricsgall/akush31.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush33.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush32.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />{' '}
              <img
                src="/images/obstetricsgall/akush34.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />{' '}
              <img
                src="/images/obstetricsgall/akush35.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />{' '}
            </div>
          </div>
        )}
      </div>

      {/* розділ Xибні перейми та маловщддя  */}
      <div className={styles.materObstetricsSection}>
        <h3 onClick={() => toggleSection('сontractions')}>
          Xибні перейми та маловщддя{' '}
          <span>{isFalseСontractions ? '▲' : '▼'}</span>
        </h3>
        {isFalseСontractions && (
          <div className={styles.materObstetricsTitle}>
            <div className={styles.materObstetricsText}>
              <h2>Xибні перейми</h2>

              <ul>
                <li> Чим вони загрожують? </li>
                <li>Коли вони відбуваються?</li>
                <li>Коли це не норма?</li>
                <li>І навіщо матці потрібні ці «тренування»?</li>
              </ul>
              <div className={styles.materObstetricsList}>
                <p>
                  Матка це унікальний м’язовий орган, який звичайно, приходить в
                  тонус. Тоді вагітна може відмічати “твердий” животик та
                  незначні больові відчуття. Це і є несправжні, або хибні
                  перейми Брекстона-Хікса.
                </p>

                <p>
                  Тренувальні перейми фізіологічно передбачені нашим організмом.
                  Так матка готується виконати важку роботу в процесі пологів. У
                  нормі, тренувальні перейми з’являються в термінах вагітності,
                  близьких до пологів – після 37 тижня вагітності.
                </p>

                <h4>Але вони, на відміну від справжніх перейм:</h4>
                <ul>
                  <li>
                    не мають регулярності, повторюються через різний проміжок
                    часу;
                  </li>
                  <li>больові відчуття не значні, та вони не наростають;</li>
                  <li>припиняються при зміні положення тіла.</li>
                </ul>

                <p>
                  Тож відрізнити тренувальні від справжніх перейм, що призводять
                  до пологів не складно. Але якщо ви маєте сумніви, то варто
                  все-таки звернутися до лікаря.
                </p>
                <p>
                  <strong>
                    ❗️Тренувальні перейми з больовими відчуттями до 37 тижнів
                    то не норма ❗️
                  </strong>
                </p>

                <p>
                  <em>
                    Якщо у жінки протягом дня періодично повторюються перейми:
                    через годину, через 2, потім знову через годину, (навіть,
                    якщо вони не регулярні), на термінах до 37 тижня – такий
                    тонус повинен насторожити майбутню маму.
                  </em>{' '}
                  Бо це не норма, а загроза передчасних пологів. Це привід
                  звернутися до лікаря та змінити свій ритм життя, вдягнути
                  бандаж.
                </p>
              </div>

              <h2>Маловоддя </h2>
              <p>
                <strong>
                  {' '}
                  <i>
                    — це ускладнення вагітності, при якому кількість
                    навколоплідних вод нижче норми👩‍⚕️
                  </i>
                </strong>
              </p>
              <p>
                При маловодді, об’єм живота у вагітної може бути відчутно меншим
                в порівнянні з терміном вагітності, а болючість при рухах плода
                стає більш вираженою 🤰
              </p>

              <h4>Причинами маловоддя можуть бути:</h4>
              <ul>
                <li>аномалії сечовивідної системи у плода;</li>
                <li>плацентарна дисфункція;</li>
                <li>інфекції;</li>
                <li>цукровий діабет у матері;</li>
                <li> багатоплідна вагітність;</li>
                <li> артеріальна гіпертензія.</li>
              </ul>

              <p>
                Підтікання навколоплідних вод — ще одна з найчастіших причин
                маловоддя на пізніх термінах. Особливо якщо кількість вод
                знизилася раптово на тлі нормального перебігу вагітності
              </p>
              <h4>Чим небезпечне маловоддя?</h4>

              <ul>
                <li>передчасні пологи;</li>
                <li>затримка росту та розвитку плоду;</li>
                <li>деформація скелета;</li>
                <li> внутрішньоутробна загибель плода.</li>
              </ul>

              <h4>Що робити?</h4>

              <p>
                Звертайте увагу на зміну кількості навколоплідних вод. При
                тенденції до зниження, потрібно повторити УЗД через певний час,
                щоб простежити динаміку
              </p>
              <p>
                При тенденції заниженого індексу амніотичної рідини потрібно
                зробити повторне УЗД за призначенням лікаря, щоб відстежити
                динаміку»
              </p>
              <p>
                <i>
                  Вчасно відвідуйте свого лікаря, проходьте необхідні обстеження
                  та дотримуйтесь рекомендацій
                </i>
              </p>
            </div>
            <div className={styles.materObstetricsImage}>
              <img
                src="/images/obstetricsgall/akush36.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush37.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush38.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush39.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush40.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush41.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush42.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/images/obstetricsgall/akush43.jpg"
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
