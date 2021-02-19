import React from 'react'
import Div100vh from 'react-div-100vh'

import Helmet from 'components/Helmet'
import Frame from 'components/Frame'
import ExternalLink from 'components/ExternalLink'

import Header from 'components/Header'

import Heads from 'sections/Heads'
import About from 'sections/About'
import Closed from 'sections/Closed'

import 'styles/index.sass'
import MainScene from 'sections/MainScene'


const data = [
  {
    name: "Иван Демидкин",
    text: <span>
       — концептмейкер, куратор и театральный критик. Автор подкаста «<ExternalLink newTab to="https://we.fo/1473455023?p=page">Против театра</ExternalLink>» и телеграм-канала «<ExternalLink newTab to="https://t.me/pshperform">пиши перформенс</ExternalLink>». Соавтор <ExternalLink newTab to="http://meyerhold.ru/kruzhok-cifrovogo-teatra/">Кружка цифрового театра</ExternalLink> и спектакля «<ExternalLink newTab to="http://meyerhold.ru/rakety-vzletayut/">Ракеты взлетают и разбиваются рассыпаются в воздухе</ExternalLink>» в Центре им. Вс. Мейерхольда. Делает перформансы, читает лекции и пишет тексты. Закончил программу Литературы на ф-те Свободных искусств и наук СПбГУ и Bard College.
       <br /><br />
      «Я вошел в lead-группу «Перфобуфета», чтобы ручками делать театр с друзьями по любви. Ну а если серьезно, то мне просто кажется важным одновременно развивать и теоретический, и практический подходы к театру, каждый из которых формирует материал для другого. Думаю, главный инструмент, с которым я работаю из раза в раз — это знание: академические и личное, то есть знание о себе, о другом и незнание о каждом из них. Придумывать знание,отрицать знание, делать знание событием. С этим я и работаю как в компании, так и вне ее. Коллеги говорят, что я — рисерч-машина. Цитата Сюзанны: «Ты — активатор реальности / Индивидуальный стиль / Сплошной роман, пиздец / Или полный штиль», — это про меня».
    </span>,
    social: {
      inst: "vnchkaa",
      vk: "vnchkaa",
      fb: "vnchkaa",
    }
  },
  {
    name: "Ваня Наумов",
    text: <span>
       — медиа-художник, куратор, методический сотрудник Музея стрит-арта, где водит <ExternalLink newTab to="https://streetartmuseum.ru/excursions-2/">экскурсии</ExternalLink> по выходным. Студент программы Кино и видео ф-та Свободных искусств и наук СПБГУ и Bard College. Также известен под псевдонимом Freestyler. Читает лекции, пишет о культуре и медиа, курирует междисциплинарные проекты как в коммерческих, так и культурно-просветительских целях. 
       <br /><br />
      Свой профессиональный путь начал в 12 лет, устроившись расклейщиком объявлений “ВИП-Сауна 24 часа”, однако тогда Ваню “кинули на 2 косаря”, что толкнуло его к поиску иных возможностей трудоустройства. Так, по-настоящему его карьера началась с должности PR-менеджера в одном из крупнейших рекламных агентств России. Культурный форум, Чемпионат мира, Baltic Weekend — неполный список по-настоящему “культовых” проектов, к которым Ваня приложил руку. Поработав с такими “гигантами русского маркетинга” как Мегафон, General Electrics, Министерство культуры и Посольство РФ в Австрии, Ваня понял, что из отечественного пиара нужно бежать. Тогда спустя пару лет метаний по миру и проектам, попробовав себя в роли управляющего отелем на Шри-Ланке, организовав один из крупнейших патриотических форумов Росмолодежи и отработав гардеробщиком в “Танцплощадке”, Ваня оказался в Перфобуфете, где по сей день отвечает за его визуальное лицо. Также у Вани за спиной работа над выставкой - номинантом на премию им. Сергея Курехина, инсталляцией для пивного фестиваля в Севкабеле и создание бота-аудио-гида для Музея стрит-арта.
    </span>,
    social: {
      inst: "freestyler_13",
      vk: "ivnmv",
      fb: "ivnmv",
    }
  },
  {
    name: "Артём Томилов",
    text: <span>
       — театромейкер с широким кругом идентичностей. На данный момент уже стало довольно проблематичным составить короткий CV Артёма, который отразит ориентированность его art face: в списке есть проекты в качестве концепт-мейкера, режиссёра, драматурга, актёра, перформера, педагога, куратора, художника по свету, критика, лектора, подкастера, тиктокера и точно ещё кого-то . Многое об этом он пишет в своём телеграм-канале «<ExternalLink newTab to="https://t.me/atomaflex">атомарный флекс</ExternalLink>». 
       <br /><br />
      «Мои творческие корни располагаются гораздо глубже, чем обучение профессии режиссёра в ОмГУ и РГИСИ. По ходу занятий футболом, флорболом, рисованием, татуировкой, квартирным рэпом, а также локальным бизнесом - мойкой машин у обочины, продажей записанных сборников музыки на кассетах с дизайнерским оформлением обложек, собиранием чёрного и цветного металла, росла моя художественная универсальность. Одновременное соединение в себе разных статусов вошло в жизнь пацана ещё с самого детства, и так, чувствуя свою силу и уникальность, я стал принимать смелые и необдуманные решения, за которые априори готов был отвечать в будущем. Например, вместо профессии инженера незадолго до окончания школы мой выбор пал на режиссуру, я просто ситуативно пошёл за другом, для меня что-то сошлось тогда в интуитивном ощущении мира. С тех пор много воды утекло, многое сделано, накоплена репутация и осмыслена свобода выбора в творчестве; и вот одним из самых ярких результатов столь многосоставной судьбы стало участие в основании театральной компании «Перфобуфет». Этот проект - органическое следствие зревшего во мне желания сделать что-то вмещающее в себя всё лучшее, что есть у интеллектуального багажа искусства. Просто взять и «разъебать этот движ». Энергия рождения «Перфобуфета» основывалась во многом на нежелании мириться с косностью, тупостью, бумерством и хилостью контекста вокруг. Мы создали компанию, соблюдая законы которой, можно длить её жизнь вечно, передавая из рук в руки; наверное, моя главная мечта это увидеть как «Перфобуфет» делают другие, реализуя природу ума и красоты своего времени, а я бы приходил туда зрителем или соучастником; между делом рассказывал бы как обстоят дела в бизнесе по выращиванию овощей».
    </span>,
    social: {
      inst: "arttomilov",
      vk: "art_tomilov",
      fb: "artem.tomilov.9",
    }
  },
  {
    name: "Дмитрий Белыш",
    text: <span>
       - актёр, перформер , перформансист, концепт-мейкер, педагог, человек в жёлтом спортивном костюме.
      <br /><br />
      “У меня есть большой и красивый диплом СПбГУ по специальности «Актёр драм. театра и кино». Начиная с 2011 года он дал мне возможность поработать бок о бок с профессионалами в области исполнительских искусств в государственных и независимых театрах России. На моём счету 24 сыгранные роли, не считая участий в различных лабораториях на тер-ии РФ. Ха, забавно, что в спектакле «Билли Миллиган» Такого театра я играл человека с диагнозом «расстройство множественной личности» и личностей было 24.<br />
      С этим всё стало, в принципе, понятно. <br />
      Поэтому, в 2018 г. я начал заниматься перформансом и создал перфоперсону – человека в жёлтом спортивном костюме, появление которого было синхронизировано с показом синтетического проекта «Аватарка-заманушка». Ух. Делал перф в шавермочной, акт-контакт с Пушкиным на месте его дуэли, «Ванпачмена» в ТикТоке, #PFVPN в библиотеке. Всегда делал не один. Было прикольно.<br />
      Мне нравится исследовать отсутствие обозначенных границ между искусством и не искусством. <br />
      Кмк, в Перфобуфете я отвечаю за самые масштабные проекты. Например, мы с Ромой Хузиным были концептмейкерами первого ивента новой ветки событий «Opening» - Лахта-центр, которое не состоялось из-за пандемии. <br />
    </span>,
    social: {
      inst: "belysh2022",
      vk: "dmitry_belysh",
      fb: "dmitry.belysh",
    }
  },
  {
    name: "Рома Хузин",
    text: <span>
      Актёр, концепт-мейкер, перформер, педагог
    </span>,
    social: {
      inst: "romkahuz",
      vk: "romkahuz",
      fb: "100009869591122",
    }
  },

]


class App extends React.Component {
  state = {
    index: Math.floor(Math.random() * 4.9),
  }

  sceneRef = React.createRef()

  setIndex = _index => {
    this.setState({ index: _index })
    this.sceneRef?.current?.scene?.scene?.units?.head?.setIndex?.( _index )
  }

  renderDesc = person =>
    <div className="desc">
      <div className="desc__card">
        <div className="desc__card__title">
          <h1 className="desc__card__title__h1">
              {person.name}
          </h1>
          <div className="desc__card__title__links">
            <ExternalLink newTab to={`https://instagram.com/${person.social.inst}`}>
              <div className="desc__card__title__links__item desc__card__title__links__item--inst" />
            </ExternalLink>
            <ExternalLink newTab to={`https://vk.com/${person.social.vk}`}>
              <div className="desc__card__title__links__item desc__card__title__links__item--vk" />
            </ExternalLink>
            <ExternalLink newTab to={`https://facebook.com/${person.social.fb}`}>
              <div className="desc__card__title__links__item desc__card__title__links__item--fb" />
            </ExternalLink>
          </div>
        </div>
        <div className="desc__text">
          {person.text}
        </div>
      </div>

      <div
        onClick={() => this.setIndex( (this.state.index + 1) % 5 )}
        className="desc__arrow desc__arrow--left"
      />
      <div
        onClick={() => this.setIndex( (this.state.index + 4) % 5 )}
        className="desc__arrow desc__arrow--right"
      />
    </div>

  render = () =>
    <Div100vh>
      <Helmet />
      <MainScene
        sceneRef={this.sceneRef}
        react={{
          index: this.state.index
        }}
      />
      <div className="App">
        <Frame clouds />
        <Frame clouds>
          {this.renderDesc(data[this.state.index])}
        </Frame>
        <Frame>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 pt-4 px-4">
              Наша театральная компания ориентированана творчество в максимально широком смысле: кроме перформансов и спектаклей, мы делаем прогулки и вечеринки, лаборатории и акции, лекции и челленджи. Используя процесс создания искусства, мы пытаемся понять, как это искусство создавать, поэтому «Перфобуфет» — это эксперимент над самими собой и той культурой, которая складывается вокруг него.
              <br /><br />
              Все участники нашей компании воспринимают себя как независимых арт-практиков, тогда как «Перфобуфет» — зонтичное понятие для всего спектра того, что мы делаем вместе, а также тех, кто это делает с нами.
              <br /><br />
              Мы ценим горизонтальные отношения, внутри которых открыты и к вертикалям, исходя из задач проектов, а также интересов  
            </div>
            <div className="col-12 col-md-4 pt-4 px-4">
              и возможностей каждого к обучению и сотрудничеству. У нас есть даже формула на этот счет: ресурс = производство. При этом, мы стремимся к эмансипации “Перфобуфета” от нас самих, потому что считаем настоящим проектом тот, что производит себя и стимулирует среду вокруг, не замыкаясь на участниках группы.
              <br /><br />
              Для нас каждый проект — это важный проект, который достоин того, чтобы быть точно описанным, поэтому выработка языка для разговора о театре является еще одной частью «Перфобуфета». В каждом проекте мы экспериментируем с языком, пытаясь обозначить сделанное. По сути, это метатеатральный процесс: производство речи о театре и самих себе в нем наравне с производством театра.
              <br /><br />
              «Перфобуфет» — это модель нашей коллективной мечты о том, как работает театральная компания сегодня. 
            </div>
          </div>
        </Frame>
      </div>
    </Div100vh>
}

export default App
