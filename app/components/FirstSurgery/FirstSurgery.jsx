'use client'

import styles from './FirstSurgery.module.css'

import React, { useState } from 'react'

export default function FirstSurgery() {
  const [isLiverOpen, setIsLiverOpen] = useState(false)
  const [isBiliousOpen, setIsBiliousOpen] = useState(false)
  const [isHerniasOpen, setIsHerniasOpen] = useState(false)
  const [isDpkOpen, setIsDpkOpen] = useState(false)
  const [isSpleenOpen, setIsSpleenOpen] = useState(false)
  const [isIntestineOpen, setIsIntestineOpen] = useState(false)

  const [isTumorsOpen, setIsTumorsOpen] = useState(false)
  const [isUrgent, setIsUrgent] = useState(false)

  const [isAbdominoplasty, setIsAbdominoplasty] = useState(false)
  const [isAugmentation, setIsAugmentation] = useState(false)
  const [isRemovalImplants, setIsRemovalImplants] = useState(false)
  const [isGynecomastia, setIsGynecomastia] = useState(false)
  const [isLiposuction, setIsLiposuction] = useState(false)
  const [isCarpalSyndrome, setIsCarpalSyndrome] = useState(false)

  const toggleSection = (section) => {
    if (section === 'liver') {
      setIsLiverOpen(!isLiverOpen)
    } else if (section === 'bilious') {
      setIsBiliousOpen(!isBiliousOpen)
    } else if (section === 'hernias') {
      setIsHerniasOpen(!isHerniasOpen)
    } else if (section === 'dpk') {
      setIsDpkOpen(!isDpkOpen)
    } else if (section === 'spleen') {
      setIsSpleenOpen(!isSpleenOpen)
    } else if (section === 'intestine') {
      setIsIntestineOpen(!isIntestineOpen)
    } else if (section === 'tumors') {
      setIsTumorsOpen(!isTumorsOpen)
    } else if (section === 'urgent') {
      setIsUrgent(!isUrgent)
    } else if (section === 'abdominoplasty') {
      setIsAbdominoplasty(!isAbdominoplasty)
    } else if (section === 'augmentation') {
      setIsAugmentation(!isAugmentation)
    } else if (section === 'removalImplants') {
      setIsRemovalImplants(!isRemovalImplants)
    } else if (section === 'gynecomastia') {
      setIsGynecomastia(!isGynecomastia)
    } else if (section === 'liposuction') {
      setIsLiposuction(!isLiposuction)
    } else if (section === 'carpalSyndrome') {
      setIsCarpalSyndrome(!isCarpalSyndrome)
    }
  }

  return (
    <div className={styles.firstSurgeryContainer}>
      {/* <div className={styles.headerSection}>
        <h2 className={styles.firstSurgeryName}>Хірургічне відділення №1</h2>
      </div> */}

      <div className={styles.firstSurgeryTitle}>
        <div className={styles.firstSurgeryText}>
          <div>
            {/* <p>
              Хірургічне відділення №1 сформовано в результаті реформи медичних
              закладів м.Чернівці, на базі "Міського центру хірургії" а він в
              свою чергу на основі "Хірургічного відділення залізничної лікарні"
              в кінці 2021 року.
            </p> */}
            {/* <p>
              В склад хірургічного відділення №1 на 50 ліжок входять 28 ліжок
              хірургічного профілю, 5 ліжок урологічного профілю, 5 ліжок
              гнійних хірургічних, 5 ліжок судинної хірургії, 3 ліжка
              онкологічного профілю, 4 ліжка паліативних;
            </p> */}
          </div>
        </div>

        {/* <div className={styles.firstSurgeryImage}>
          <img
            src="/Mykola.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={200}
            height={200}
            // className={styles.tunnelImage}
          />
        </div> */}
      </div>

      {/* розділ печінки */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('liver')}>
          Хвороби печінки <span>{isLiverOpen ? '▲' : '▼'}</span>
        </h3>
        {isLiverOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <p>Лікуємо захворювання печінки у вигляді кист та пухлин </p>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ жовчевого міхура */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('bilious')}>
          Хвороби жовчевого міхура та жовчевивідних шляхів{' '}
          <span>{isBiliousOpen ? '▲' : '▼'}</span>
        </h3>
        {isBiliousOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h4>Видалення жовчевого міхура</h4>
              <ul>
                <li>Лапароскопічно</li>
              </ul>
              <p>
                {' '}
                Лапароскопічне видалення жочевого міхура - це видалення його за
                допомогою спеціальних інструментів струменти. Сьогодні це
                "золотий стандарт" для цієї операції. Відіо в реальному часі
                виводиться на монітор з деяким збільшувальним ефектом.
                Хворобиірур за допомогою спеціальних інструментів-маніпуляторів
                виконує операцію по видаленню жовчевого міхура
              </p>
              <h4> Які позитивні - найважливіші моменти</h4>
              <ul>
                <li>Мала травматичність операції</li>
                <li>
                  Гарна видимість для більш прицинзійної техніки операції{' '}
                </li>
                <li>
                  Швидке одуження із за малої травматичності передньої черевної
                  стінки
                </li>
                <li>Профілактика післяопераційних гриж</li>
                <li>Профілактика нагноєнь операційної рани</li>
                <li>Профілактика утворення злук і злукової хвороби</li>
              </ul>
              <h4>Із важких моментів</h4>
              <ul>
                <li>Велика коштовність обладнання для виконання операцій</li>
                <li>Специфічний розхідний матеріал</li>
                <li>Відсутня загальн програма навчань хірургів.</li>
                <li>Дороговізна таких навчань в окремих центрах</li>
                <li></li>
              </ul>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ гриж */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('hernias')}>
          Грижі<span>{isHerniasOpen ? '▲' : '▼'}</span>
        </h3>
        {isHerniasOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h4>Пахові, стегнові, пупкові та інші грижі черевної стінки:</h4>
              <ul>
                <li>
                  Лапароскопічна герніопластика із застосуванням сітчастого
                  імплантанта
                </li>
                <li>
                  Герніопластика місцевим доступом із застосуванням сітчастого
                  імплантанта
                </li>
                <li>Пластика діастазу прямих м’язів живота</li>
              </ul>
              <h4>
                Грижі стравохідного отвору діафрагми (діафрагмальні грижі) та
                ахалазія кардії:
              </h4>
              <ul>
                <li>Лапароскопічна крурорафія з фундоплікацією</li>
                <li>Лапароскопічна кардіоміотомія</li>
              </ul>
            </div>

            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />{' '}
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ ДПК */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('dpk')}>
          Хвороби дванадцятипалої кишки <span>{isDpkOpen ? '▲' : '▼'}</span>
        </h3>
        {isDpkOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <ul>
                <li>
                  Лапароскопічне та традиційне лікування перфорацій порожнистих
                  органів
                </li>
                <li>
                  Лапароскопічне та традиційне оперативне втручання при
                  ускладненій виразковій хворобі шлунку та 12-ти палої кишки
                </li>
                <li>
                  Лапароскопічне та традиційне оперативне втручання при
                  патології тонкого кишківника
                </li>
              </ul>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ селезінки */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('spleen')}>
          Хвороби селезінки <span>{isSpleenOpen ? '▲' : '▼'}</span>
        </h3>
        {isSpleenOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h4>Видалення селезінки - Спленектомія</h4>
              <ul>
                <li>Лапароскопічна спленектомія</li>
                <li>Традиційна спленектомія</li>
              </ul>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ кишкивника */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('intestine')}>
          Хвороби кишкивника <span>{isIntestineOpen ? '▲' : '▼'}</span>
        </h3>
        {isIntestineOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h4>Лікування захворювань товстого кишкивника.</h4>
              <ul>
                <li>Консервативне лікування дивертикульоза</li>
                <li>Хірургічне лікування ускладнень</li>
                <li>
                  Лапароскопічні та традиційні втручання при патології товстого
                  кишківника
                </li>
                <li>
                  Реконструктивні втручання при патології товстого кишківника
                  (колостома)
                </li>
              </ul>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ пухлин */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('tumors')}>
          Доброякісні пухлини м'ягких тканей тулуба та кінцівок.{' '}
          <span>{isTumorsOpen ? '▲' : '▼'}</span>
        </h3>
        {isTumorsOpen && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h4>Доброякісні новоутворення шкіри і підшкірної клітковини</h4>
              <p>
                Вони не загрожують життю людини. Але іноді, під впливом
                негативних факторів вони можуть траснформуватися в злоякісні
                пухлини.
              </p>

              <h5>Характтерні особливості доброякісних новоутворень: </h5>
              <ul>
                <li>новоутворення не проростає в сусідні тканини</li>
                <li>клітинні елементи не поширюються за межі пухлини</li>
                <li>формуються по принципу капсули</li>
                <li>повільно зростає</li>
                <li>збільшується рівномірно</li>
              </ul>

              <h5>НЕВУС</h5>
              <p>
                новоутворення доброякісного характеру, що виникає на шкірі у
                вигляді пігментації.
                <br /> Рекомендовано видаляти їх, якщо вони локалізовані у
                незручних місцях на тілі, або у разі загрози переродження у
                злоякісне новоутворення.
              </p>

              <h5>ПАПІЛОМА</h5>
              <p>
                Доброякісне пухлиноподібне новоутворення на шкірі або на
                слизовій оболонці.
                <br />
                Основна причина виникнення цих пухлин – вірус папіломи.
              </p>

              <h5>АТЕРОМА </h5>
              <p>
                Eпітеліальна кіста – це доброякісне новоутворення сальної
                залози, яке виникає в результаті її закупорки.
              </p>

              <h5>ГЕМАНГІОМА</h5>
              <p>
                оброякісні судинні утворення, які можуть бути наслідком
                порушення розвитку судин в ембріональний період.{' '}
              </p>

              <h5>ЛІПОМА</h5>
              <p>
                Доброякісна жирова пухлина. Це новоутворення, яке формується з
                жирового прошарку, тому його друга назва – «жировик».
              </p>

              <h5>ФІБРОМА</h5>
              <p>
                {' '}
                доброякісна пухлина з волокнистої сполучної тканини.
                <br />
                Часто поєднується з розростанням інших тканин – зокрема м’язової
                (фіброміома), судинної (ангіофіброма), залізистої
                (фіброаденома). Дуже часто її діагностують у молодому віці,
                переважно у жіночої статі. Вона може бути різного кольору : від
                сірого до чорного. Поверхня зазвичай гладка, зростає повільно.
              </p>

              <h4>
                HАСТОРОЖЕННЯ які показують що потрібно негайно звернутися до
                лікаря, якщо новоутворення:
              </h4>

              <ul>
                <li>збільшуються;</li>
                <li>почали випадати волоски з її поверхні;</li>
                <li>змінюють колір, кровоточать, змінюють консистенцію</li>
                <li>зменшуються, змінюють форму, його контур став розмитим;</li>
                <li>
                  приєдналося запалення, свербіж, на його поверхні утворилися
                  тріщини.
                </li>
              </ul>

              <h4>ПРОФІЛАКТИЧНІ ЗАХОДИ</h4>
              <ul>
                <li>Уникайте перебування на сонці</li>
                <li>Своєчасно звертайтеся до лікаря</li>
                <li>
                  Проходьте регулярну діагностику за допомогою ДЕРМАТОСКОПА
                </li>
              </ul>

              <h5>Цифрова дерматоскопія</h5>

              <p>
                Цифрова дерматоскопія – дозволяє розглядати утворення шкіри під
                значним збільшенням, таким чином, що стають видно пігментація і
                будова епідермісу, межа дерми і епідермісу, сосочковий шар і
                виводить зображення на монітор комп'ютера, що дає можливість
                уточнити діагноз
              </p>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <h2 className={styles.firstSurgeryName}>Невідкладна хірургія</h2>
      </div>
      {/* розділ невідкладна хірургія */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('urgent')}>
          Невідкладна хірургія <span>{isUrgent ? '▲' : '▼'}</span>
        </h3>
        {isUrgent && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h4>Ургентні стани</h4>
              <p>
                {' '}
                Це стани які виникають практично на фоні "повного здоров'я" і
                якщо щвидко не звернутися до лікаря, який надасть допомогу,
                можуть привести до смерті пацієнта
              </p>

              <h5>Гострий апендицит</h5>
              <p>
                Біль в правій ділянці живота ближче до паха. Може починатися в
                ділянці шлунка з нудотою чи блювотою, але через деякий час
                преходить в низ живота справа. Біль не проходить самостійно і
                можна її вважати спочатку постійною.{' '}
              </p>
              <p>Треба звернутися до лікаря і чим раніше тим краще</p>

              <h5>Гострий холецистит</h5>
              <p>
                Біль в правому підребіррі. Може бути досить нестерпні у вигляді
                коліки - "печінкова колька." Виникає чаще всього після порушені
                в харчувані (жирна і жарена їжа). Практично постійно біль
                супроводжується нудотою і блювотою. Біль може мати
                приступоподібний характер.
              </p>

              <h5>Гострий панкреатит</h5>
              <p>
                Біль в верхній частині живота "оперізуючого" характера. Може
                бути досить нестерпні по типу "забитого килка". Виникає чаще
                всього після порушені в харчувані (жирна і жарена їжа) і прийому
                алкоголя. Практично постійно біль супроводжується нудотою і
                блювотою, яка може мати харектер "невгамонної", тобто блювота
                яка не припиняється даже якщо порожній шлунок і "блювати вже
                нема чим".
              </p>

              <h5>Перитоніт</h5>
              <p>
                Біль по всьому животу. Живіт стає напружений і часто "як доска".
                Хворий не може дихнути за "рахунок живота". Постійно є нудота і
                блювота. Як правело такий стан виникає як продовження правктично
                всіх невідкладних стані пов'язаний з органами черевної
                порожнини. Це практично слідуюча дость стадія перебігу їх
                захворювання. Ризик для життя дуже значно підвищується даже при
                умові лікування.
              </p>

              <h5>Гостра шлунково-кишкова кровотеча</h5>
              <p>
                Клінічна картина шлунково-кишкової-кровотечі, які б захворювання
                не привели до неї , мають практично одинакові симптоми і
                одинаковий перебіг. Несподівано виникає слабкість та порушення
                зору - потемніння та "бігання мурашок перед очима". Виникає
                блювота у вигляді "кавової гущі". Згодом виникає понос "мелена",
                абсолютно чорного кольору з дуже "специфічним дурним запахом".
                Кровотеча завжди, якщо її не зупинити, приводить до смертельного
                фінішу.
              </p>

              <h5>Защемлені грижі</h5>
              <p>
                Грижеве випинання, про яке хворий знає що в нього воно є,
                перстало вправлятися і почало дуже боліти. Біль чаще досить
                сильна. Цей стан може супроводжуватися нудотою і блювото. Дуже
                важливо щоб хворий чим скоріше звернувся за медичною допомогою.
                Зашемлюватися може любий орган з черевної порожнини. Частіше це
                чепець або кишкивник. У випадку защемлення кишкивника, якщо
                защемлення триває довго (більше 6 годин) виникає омертвіння
                стінки його (некроз) і кишковий вміст виливається в черевну
                порожнину . Виникає її запалення - перетоні. Це дуже небезпечне
                ускладнення яке досить часто приводить до фатального кінця даже
                при його лікуванні. Зашемлені віафрагмальні грижі виникають
                рідко і їх діагностика чиризвичайно важка. Симтоми болю і
                напрохідності такіж як і при зичайні грижі, однак невидно
                випинання.
              </p>

              <h5>Гостра кишкова непрохідність</h5>
              <p>
                Форми кишкової непрохідності є різні, але клінічна картина їх
                практично однотипнію. Захворювання починається з відсутності
                стула та відходження газів. Згодом з'являється роздутість живота
                і біль в животі. Однак непрохідність "механічна", яка виникає
                при спайкових процесів в черевні порожнині, защемлення
                кишкивника в грижовомі мішку та інвагінації, захворювання
                починається з болю. Згодом приєднується нудота і блювота. Є
                такий вислів "чим більше хворий з механічною кишковою
                непрохідністю живе до операції, тим менше він жеве після
                операції". Хворий має бути доправлений в медичний заклад.
              </p>

              <h5>
                Перфоративна виразка шлунку чи ДПК або інши порожнистих органів
                черевної порожнини.
              </h5>
              <p>
                Дуже різький біль в животі з реакцією м'язів живота (вони стають
                як дошка напружені), повинні дуже насторожити хворогоі оточуючих
                хворого людей, щод невідкладно переправити його до лікувального
                закладу. В перші хвилини при перфоративні виразці хворий неможе
                дихнути, настільки виражена реакція на подразненя очеревини
                вмістом шлунка і ДПК(враховуючи їх кислотність). Практично
                "обпалює" очеревину. Згодом більдещо вшухає, однак стан хворого
                дедалі погіршується із за розвитку переоніта (запалення
                очеревини). При відсутності мидичної допомого, досить швидко
                настає фатальний результат.
              </p>

              <h5>Гострі гнійно-некротичні захворювання</h5>
              <p>
                Флегмони різних локалізацій та росповсюдження також можуть
                привести до досить серйозних наслідків для зоров'я хворого та
                його життя. Тому при винекнення такого захворювання треба також
                негайно звертатися до лікаря. Клінічна картина це припухлість та
                почервоніння і біль в ділянці ураження, підвищення температури
                тіла і порушення функції.
              </p>
            </div>

            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600}
                height={600}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <h2 className={styles.firstSurgeryName}>Пластична хірургія</h2>
      </div>

      {/* розділ Абдомынопластика */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('abdominoplasty')}>
          Абдомінопластика <span>{isAbdominoplasty ? '▲' : '▼'}</span>
        </h3>
        {isAbdominoplasty && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h5>Абдомінопластика </h5>
              <p>
                Пластика живота (абдомінопластика) – затребувана пластична
                операція, яка дозволяє отримати ідеально рівний животик і гарну
                талію після пологів та різкого схуднення. Це стає можливим за
                рахунок позбавлення від надлишків шкіри та підшкірного жиру (так
                званий «фартух») і додання тонусу передній черевній стінці.
                Абдомінопластика повертає фігурі стрункість і пропорційність,
                гармонійні контури.
              </p>

              <h4>Види абдомінопластики</h4>
              <h5>Класична абдомінопластика.</h5>
              <p>
                Вона застосовується для усунення шкірно-жирового «фартуха», що
                зайво провисає внизу живота, якому найчастіше супроводжують
                діастаз і грижа. Розріз робиться над пахвинною областю
                (горизонтально) та навколо пупка. Пластичний хірург видаляє
                надлишок шкірного покриву і жирової тканини, вшиває м’язи, що
                розійшлися, і формує нове пупкове кільце. Методика дозволяє
                працювати з великими обсягами фартуха. З її допомогою
                відновлюються властивості м’язового корсета, формується нова
                лінія талії та реконструюються контури тіла.
              </p>

              <h5>Абдомінопластика із вертикальним розрізом.</h5>
              <p>
                Метод відрізняється від попереднього розташування розрізу. Його
                роблять вертикально – по середній лінії живота, а не над
                лобковою областю. Надлишок тканини усувається від боків до
                середини. Розріз розташовуватиметься вертикально. Перевага
                такого хірургічного втручання у меншій травматичності, оскільки
                спеціаліст працює з невеликою зоною.
              </p>

              <h5>Мініабдомінопластика</h5>
              <p>
                Малоінвазивне втручання, показане пацієнтам, які хочуть
                підкоригувати зовнішній вигляд тіла – надати естетичної форми
                нижньому відділу черевної порожнини. Хірург робить розріз у
                ділянці бікіні, відсікає частину шкіри та жирової тканини. Ця
                методика не передбачає перенесення пупка та зміни його форми, а
                також ушивання розтягнутих м’язів.
              </p>

              <h5>Абдомінопластика сполучена з ліпосакцією.</h5>
              <p>
                Для отримання більш вираженого ефекту в деяких випадках пластика
                живота поєднується з ліпосакцією. Перевага полягає в тому, що
                разом із надлишком шкірно-жирового «фартуха» та зміцненням
                м’язів забирається надлишок жиру. Ліпосакцію проводять на
                фланках (боках) через невеликі проколи
              </p>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>
      {/* розділ мамопластика*/}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('augmentation')}>
          Аугметаційна мамопластика - Збільшення грудей
          <span>{isAugmentation ? '▲' : '▼'}</span>
        </h3>
        {isAugmentation && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h3>Збільшення грудей за допомогою імплантів</h3>
              <p>
                Імплантація молочних залоз вважається найбільш популярною
                операцією в області пластичної хірургії. За допомогою
                силіконових імплантів збільшують розмір або коректують форму
                грудей
              </p>
              <p>
                Збільшення грудей за допомогою імплантів показано пацієнткам у
                яких малі розміри молочних залоз є в результаті їх
                індівідуального розвитку, а також як наслідки втрати ваги і в
                післялактаційний період.{' '}
              </p>

              <h4>види збільшувальної мамопластики</h4>
              <p> В залежності від місця встановки імпланта мамопластика є:</p>
              <ul>
                <li>під полочною залозою - субгляндулярно </li>
                <li>під грудним м'язом - субпекторально</li>
              </ul>

              <p>
                В залежності від виконання розрізу для постановки імпліна є:
              </p>

              <h4>на границі ареоли - Параареолярний</h4>

              <p>
                Доступ до грудей через ареоли сосків, при цьому косметичний
                післяопераційний рубець залишається практично непомітним, часто
                такий метод застосовується в поєднанні з круговою підтяжкою
                грудей.
              </p>

              <h4>Субмаммарний</h4>

              <p>
                Найбезпечніший метод, доступ до тканин здійснюється через розріз
                під грудьми в природній складці.
              </p>

              <h4>Аксілярний (пахвовий)</h4>
              <p>
                Доступ до грудей здійснюється через надріз у пахвових западинах,
                тканини молочних залоз за такого методу операції не зачіпаються.
              </p>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* Заміна або видалення імплантів молочних залоз */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('removalImplants')}>
          Заміна або видалення імплантів молочних залоз
          <span>{isRemovalImplants ? '▲' : '▼'}</span>
        </h3>
        {isRemovalImplants && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h3>Причини видалення або заміни імплантів молочної залози</h3>

              <h4>З естетичних міркувань пацієнта.</h4>
              <ul>
                <li>- бажання збільшити або зменшити наявний об’єм грудей.</li>
                <li>
                  - Зміни форми грудей, викликані вагітністю, годуванням,
                  змінами маси тіла, обвисанням.
                </li>
                <li>
                  - Oпущення імплантів після маммопластики (птоз) внаслідок
                  вікових змін;
                </li>
                <li>- заміна на більш сучасну модель;</li>
                <li>- асиметрія грудей після маммопластики;</li>
                <li>
                  - не влаштовує форма грудей у результаті неправильно
                  підібраних імплантів;
                </li>
                <li>- видно чіткі обриси імплантів;</li>
              </ul>

              <h4>По медичним показам</h4>
              <ul>
                <li>- Розвиток сероми.</li>
                <li>- Фіброзно-капсулярна контрактура</li>
                <li>- Рак грудей.</li>
                <li>- Розрив імпланта внаслідок ДТП або травми.</li>
                <li>- інфекції, запалення прилеглих тканин.</li>
                <li>- Реакція організму на матеріал імплантів.</li>
              </ul>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ гінекомастія */}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('gynecomastia')}>
          Гінекомастія <span>{isGynecomastia ? '▲' : '▼'}</span>
        </h3>
        {isGynecomastia && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <p>
                Гінекомастія — захворювання, що проявляється збільшенням у
                розмірах грудних залоз від 1 до 10 см у чоловіків, внаслідок
                розростання жирової або залозистої клітковини.{' '}
              </p>
              <p>
                Захворювання виникає через переважання в чоловічому організмі
                жіночих статевих гормонів.{' '}
              </p>

              <h5>Гінекомастія справжня</h5>
              <p>
                залозиста тканина розростається, що говорить про патологічному
                процесі, який потрібно контролювати та лікувати. У такому разі
                необхідна консультація ендокринолога та мамолога.
              </p>
              <ul>
                <li>Фізіологічна - в підростковому періоді</li>
                <li>
                  патологічна - при порушеннях видалення гормонів (печінкова та
                  ниркова недостатність, пухлини наднирників і тд){' '}
                </li>
              </ul>

              <h5>несправжня</h5>
              <ul>
                <li>помилкова</li>
                <li>жирова</li>
              </ul>

              <p>
                грудний м'яз звисає і «розростається» за рахунок надлишку жиру.
                При схудненні та нормалізації харчування практично відразу
                надлишковий об'єм у грудях зникає
              </p>

              <h5>Змішана</h5>
              <p>
                є як процес розростання залізистої тканини, так і збільшення
                жирового прошарку. Такий тип гінекомастії характерний для
                чоловіків з ожирінням, порушеннями в гормональному обміні та
                харчуванні. Він вимагає комплексного тривалого лікування та
                корекції.
              </p>

              <h5>За характиром зміни тканин</h5>
              <ul>
                <li>Дифузна</li>
                <li>Вузлова</li>
              </ul>

              <h5>За розмірами:</h5>
              <ul>
                <li>
                  I ступінь — найменша субареолярна вузловатість. Розмір
                  збільшених грудей при цьому обмежується районом навколо ареоли{' '}
                </li>
                <li>
                  III ступінь — вузол має розмір ареоли. Сосково-ареолярний
                  комплекс при цьому розташовується вище за лінію субмамарної
                  складки. (до 6 см)
                </li>
                <li>
                  II ступінь — ущільнення менше розміру ареоли. На цьому етапі
                  відзначається розвиток значної гіпертрофії та птозу (опущення)
                  грудей (До 10 см)
                </li>
                <li>
                  IV ступінь — ущільнення більше, ніж пігментована ділянка
                  навколо сосків. На термінальному етапі розвитку гіпертрофія та
                  птоз стають найбільш вираженими.(Більше 10 см){' '}
                </li>
              </ul>

              <p>
                {' '}
                Кроме збільшення грудних залоз присутні такі симптоми як біль та
                ушільнення під соскової ділянки, збільшення ареол.{' '}
              </p>
              <p>
                Гінекомастія може бути початковим симптомом дуже важких і
                небезпечних для здоров'я пацієнта захворюванням, а також може
                перероджуватись в онкологію. Тому при виявленні в себе хоча б
                найманших ознаків такого захворювання слід проконсультуватися у
                лікаря.{' '}
              </p>

              <p>
                Наша лікарня консультує і проводить лікування в разі виявлення
                такого недугу у хворого. У нас є досвдчений ендокринолог та
                КОМАНДА ПЛАСТИЧНИХ ХІРУРГІВ
              </p>
            </div>

            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* розділ ліпоскульптура*/}

      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('liposuction')}>
          Ліпоскульптура - ліпосакція. <span>{isLiposuction ? '▲' : '▼'}</span>
        </h3>
        {isLiposuction && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <h3>Ліпоскульптурування</h3>
              <p>
                {' '}
                — це малотравматична операція, яка полягає в послідовному
                видаленні поверхневих і глибоких шарів жирової тканини і
                допомагає створити атлетичний мишечний рельєф в області життя,
                талії, ягодиць, ніг і т. д.{' '}
              </p>
              <p>
                {' '}
                У медичній літературі можна зустріти інші назви ліпоскульптури —
                «High-Definition Liposculpture» (HDL), «спортивна ліпосакція»,
                «HD-ліпосакція», «3D-ліпоскульптурування».
              </p>

              <h5>Ліпоскульптурування живота </h5>
              <p>
                {' '}
                одна з найпопулярніших зон для ліпоскульптурування. Видалення
                жиру з цієї зони допомагає створити більш плоский і тонкий
                вигляд живота, сформувати кубики преса.
              </p>

              <h5>Ліпоскульптурування боків і талії</h5>
              <p>
                дає змогу сформувати більш чітку лінію талії, що візуально
                покращує пропорції тіла і створює бажану “пісочний годинник”
                фігуру.
              </p>

              <h5>Ліпоскульптурування стегон</h5>
              <p>
                може зменшити “вушка” та інші жирові відкладення, створюючи
                більш гладкий і збалансований силует.
              </p>

              <h5>Ліпомоделювання сідниць </h5>
              <p>
                використовується для збільшення або формування більш округлих і
                підтягнутих сідниць. Жир, отриманий з інших ділянок тіла, може
                бути доданий для збільшення об’єму і поліпшення форми сідниць
              </p>

              <h5>Ліпомоделювання грудних м’язів </h5>
              <p>
                ліпоскульптурування чоловіків допоможе підкреслити рельєф
                грудних м’язів, створюючи більш виражений і атлетичний вигляд.
              </p>

              <h5>Ліпомоделювання внутрішньої частини стегон </h5>
              <p>
                зона часто коригується для усунення тертя і для створення більш
                чіткої розмежованої лінії між стегнами.
              </p>

              <h5>Ліпоскульптурування колін </h5>
              <p>
                жир у ділянці колін може бути прибраний для більш чіткої та
                визначеної форми ніг.
              </p>

              <h5>Ліпоскульптурування щиколоток та литок</h5>
              <p>
                допомагає зменшити “жирові подушки” і сформувати стрункішу
                атлетичну лінію ніг.
              </p>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
            </div>
          </div>
        )}
      </div>
      {/* розділ карпальний синдром */}
      <div className={styles.firstSurgerySection}>
        <h3 onClick={() => toggleSection('carpalSyndrome')}>
          Синдром карпального каналу <span>{isCarpalSyndrome ? '▲' : '▼'}</span>
        </h3>
        {isCarpalSyndrome && (
          <div className={styles.firstSurgeryTitle}>
            <div className={styles.firstSurgeryText}>
              <p>
                <b>Тунельний карпальний синдром</b> <br />
                попри його багато назв ({' '}
                <em>
                  cиндро́м зап'я́стного кана́лу, “синдром друкарки”, хвороба
                  офісних працівників…
                </em>
                ) є там захворюванням яке виникає в людей, чия професія
                пов'язана з одноманітними рухами зап'ястя та незручним
                положенням рук при виконанні роботи
              </p>
              <p className={styles.indentedText}>
                Суть захворювання зводиться до того,що в процесі цих рухів кисті
                поступово виникає{' '}
                <u>потовщення і ушільненя оболонок сухожилків згиначів,</u> які
                проходять з передпліччя на кисть через вузький кнал на запястку.
                Цей канал називається карпальним, є досить обмежений і в зв'язку
                з тим що він утворений з трьох сторін кістками зап'ястка. А з
                однієї сторони досить щільною карпальною з'язкою, яка невзмозі
                розтягуватися. Тому місця в цьому каналі досить обмежено і через
                ці потовшення оболонок сухожилок приводить{' '}
                <u>до стискання нера (серединного) </u>який також там проходить.
              </p>
              <h4>Серединний нерв дозволяє:</h4> <br />
              <ul>
                <li> відчувати перші чотири пальці, </li>
                <li>
                  відповідає за координацію руху кисті, дрібну моторику рук,
                </li>
                <li>
                  звуження і розширення кровоносних судин від дії зовнішніх
                  подразників
                </li>
                <li>регулює роботу потових залоз долоні</li>
              </ul>
              <div className={styles.developList}>
                <h4>Все починається з </h4>
                <p>
                  Першою зазвичай захворює провідна рука (рука яка більше бере
                  на себе навантаження )
                </p>
                <ul>
                  <li>
                    прогресуючого оніміння і болю у руках, особливо вночі;
                  </li>
                  <li>виникає набряклость, нечутливості пальців вранці;</li>
                </ul>
                <h4>Прогресування</h4>
                <p>
                  Якщо захворювання не ліковане то згодом до них додаються такі
                  сиптоми як:
                </p>
                <ul>
                  <li>порушення рухів долонь, слабкість рук;</li>
                  <li>нездатність брати та утримувати дрібні предмети.</li>
                </ul>
                <h4>В фінальні стадії зхворювання</h4>
                <p>
                  Якщо довго не лікувати затискання нерва, це може призвести до
                  незворотнього пошкодження нерва та радикально погіршити якість
                  життя
                </p>
                <ul>
                  <li>
                    порушення чутливості пальців стають дедалі більше вираженими
                  </li>
                  <li>з часом зношуються м’язи долоні</li>
                  <li>
                    долоня втрачає свою силу і зникає здатність виконувати
                    навіть прості повсякденні дії.
                  </li>
                </ul>
                <p>
                  Наведена вище картина приводить до того, що хворий звертається
                  до лікаря.
                </p>
              </div>
            </div>
            <div className={styles.firstSurgeryImage}>
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                // className={styles.tunnelImage}
              />
              <img
                src="/Mykola.jpg" // Шлях до зображення з папки public
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
