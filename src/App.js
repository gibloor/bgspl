import React from 'react';
import './App.css';
import siteLogo from './img/Sitelogo.jpg';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';




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


  componentDidMount(){
    this.swiper=new Swiper('.swiper-container',{...})
    //add necessary parameters required by checking the offical docs of swiper
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
              <img className="Logo" src={siteLogo}></img>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">Slide 1</div>
                  <div className="swiper-slide">Slide 1</div>
                  <div className="swiper-slide">Slide 1</div>
                  <div className="swiper-slide">Slide 1</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default App;


