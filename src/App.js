import React from 'react';
import './App.css';
import siteLogo from './img/Sitelogo.jpg';
import SliderOne from './components/SliderOne/SliderOne.js';
import SliderTwo from './components/SliderTwo/SliderTwo.js';
import SliderVideos from './components/SliderVideos/SliderVideos.js';

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      isHovered: false,
    };
  }
  handleEnter(){
    this.setState({
      isHovered: true
    });
  }
  handleLeave(){
    this.setState({
      isHovered: false
    });
  }

  render(){
    return(
      <div className="allDiv">
          <div className="siteHead">
            <div className="headText">
              <div
                onMouseEnter={this.handleEnter.bind(this)}
                onMouseLeave={this.handleLeave.bind(this)}
                className="langChange">
                <div>
                  RU↓
                </div>
                {this.state.isHovered ?(
                  <nav className="listLang">
                  <ul>
                      <li><a href="">RU</a></li>
                      <li><a href="">BY</a></li>
                      <li><a href="">EN</a></li>
                    </ul>
                </nav>
                ):(
                  <div/>
                )}
              </div> 
              <nav className="navHead">
                <ul>
                  <li><a href="">Специальности</a></li>
                  <li><a href="">Студентам</a></li>
                  <li><a href="">Сотрудникам</a></li>
                  <li><a href="">Выпускникам</a></li>
                  <li><a href="">Партнёрам</a></li>
                  <li><a href="">Креативное образование</a></li>
                  <li><a href="">Одно окно</a></li>
                  <li><a href=""></a>📞</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mainAreaOne">
            <div className="mainString">
              <div className="mainStringCenter">
                <div className="blockLogo">
                  <img className="menuLogo" src={siteLogo}></img>
                </div>
                <div className="mainMenu">
                  <ul>
                    <li><a href="">Лицей</a></li>
                    <li><a href="">Событие</a></li>
                    <li><a href="">Абитуриентам</a></li>
                    <li><a href="">Образование</a></li>
                    <li><a href="">Наука</a></li>
                    <li><a href="">Международные связи</a></li>
                    <li><a href="">🔎</a></li>
                  </ul>
                </div>  
              </div>
            </div>
            <div className="mainSliderOne">
              <SliderOne />
            </div>
          </div>
          <div className="newsBlock">
            <div className="newsBlockMini">
              <div className="newsTitle">
                Новости
              </div>
              <div className="newsTitleList">
                <ul>
                    <li><a href="">Все</a></li>
                    <li><a href="">Новости</a></li>
                    <li><a href="">События</a></li>
                    <li><a href="">Анонсы</a></li>
                    <li><a href="">Достижения</a></li>
                    <li><a href="">Наука</a></li>
                    <li><a href="">Студенческая жизнь</a></li>
                    <li><a href="">Поступающим</a></li>
                </ul>
              </div>
              <div className="newsMainBlock">
                <div className="newsMainBlockLeft">
                  <div className="newsSlider">
                  <SliderTwo />
                  </div>
                  <div className="newsEventsList">
                    <div className="newsEvents">
                      <div className="newsEventsImg"></div>
                      <div className="newsEventsText">
                      Книжная выставка «Беларусь i ЮНЕСКА – шлях да мiру праз зблiжэнне культур i ведаў» открылась в БГУ
                      </div>
                    </div>
                    <div className="newsEvents">
                      <div className="newsEventsImg"></div>
                      <div className="newsEventsText">
                      Книжная выставка «Беларусь i ЮНЕСКА – шлях да мiру праз зблiжэнне культур i ведаў» открылась в БГУ
                      </div>
                    </div>
                    <div className="newsEvents">
                      <div className="newsEventsImg"></div>
                      <div className="newsEventsText">
                      Книжная выставка «Беларусь i ЮНЕСКА – шлях да мiру праз зблiжэнне культур i ведаў» открылась в БГУ
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newsMainBlockRight">
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blockVideo">
            <div className='verticalText'>Видео</div>
            <div className="sectionsVideo">
              <ul>
                <li><a href="">Видеотека ректора</a></li>
                <li><a href="">БГСПЛ. Память сердца</a></li>
                <li><a href="">Абитуриентам БГСПЛ</a></li>
                <li><a href="">Мероприятия</a></li>
                <li><a href="">Наука и производство</a></li>
                <li><a href="">Креативное образование</a></li>
                <li><a href="">Иностранные студенты о БГСПЛ</a></li>                  
                <li><a href="">Выпускники о БГСПЛ</a></li>
              </ul>
            </div>
            <div className='sliderVideos'>
              <SliderVideos />
            </div>
            
          </div>
      </div>
    )
  }
}
export default App;


