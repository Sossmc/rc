import React, { Component } from 'react';
import './css/neat.css';
//import './js/neat';
class NeatHome extends Component {
  render() {
    return (
      <div className="o-page">
        <Nheader>
        </Nheader>
        <Ncontainer>
        </Ncontainer>
      </div>
    );
  }
}

class Nheader extends Component {
  render() {
    return (
      <div className="Nheader">
        <header class="c-navbar u-mb-large">
          <a class="c-navbar__brand" href="/">
            <h3>鸡腿茶某猹</h3>
          </a>
          <nav class="c-navbar__nav collapse" id="main-nav"style={{textAlign:"right"}}>
            <ul class="c-navbar__nav-list">
                <li class="c-navbar__nav-item">
                  <a class="c-navbar__nav-link" href="/">Home</a>
                </li>
                <li class="c-navbar__nav-item">
                  <a class="c-navbar__nav-link" href="/Dashboard">Portofolio</a>
                </li>
                <li class="c-navbar__nav-item">
                  <a class="c-navbar__nav-link" href="https://sossmc.github.io/faq">Faq</a></li>
                <li class="c-navbar__nav-item"></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

class Ncontainer extends Component{
  render(){
    return (
      <div className="Ncontainer">
          <div class="container">
            <div class="row u-justify-center">
              <div class="col-lg-6 u-text-center">
                <h2 class="u-mb-small">你好呀！欢迎来到鸡腿茶的面板</h2>
                <p class="u-text-large u-mb-large">
                  This is the homepage of Richard Jei, 
                  welcome and enjoy exploring.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-xl-4 u-ml-auto">
                <div class="c-card is-animated">
                  <span class="c-icon c-icon--large u-mb-small">
                    <i class="feather icon-home"></i>
                  </span>

                  <h5 class="u-mb-xsmall">鸡腿茶的语雀知识库</h5>
                  <p class="u-mb-medium">Some tutorials and simple integration in learning front-end process </p>
                  <a class="c-btn c-btn--info has-arrow" href="https://www.yuque.com/sossmc/front-note">
                    Explore
                    <i class="feather icon-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-xl-4 u-mr-auto">
                <div class="c-card is-animated">
                  <span class="c-icon c-icon--large u-mb-small">
                    <i class="feather icon-anchor"></i>
                  </span>

                  <h5 class="u-mb-xsmall">智能合约生成器</h5>
                  <p class="u-mb-medium">
                    A smart contract online generator for Hyperledger Fabric and solidity.
                  </p>
                  <a class="c-btn c-btn--info has-arrow" href="https://zju-incas.github.io/chaincodedesigner">Start<i class="feather icon-chevron-right"></i></a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-xl-4 u-ml-auto">
                <div class="c-card is-animated">
                  <span class="c-icon c-icon--large u-mb-small">
                    <i class="feather icon-users"></i>
                  </span>

                  <h5 class="u-mb-xsmall">Github Pages项目</h5>
                  <p class="u-mb-medium">It's dev version this site,事実はそが</p>
                  <a href="https://sossmc.zjuqsc.top" class="c-btn c-btn--info has-arrow">
                    More About<i class="feather icon-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-xl-4 u-mr-auto">
                <div class="c-card is-animated">
                  <span class="c-icon c-icon--large u-mb-small">
                    <i class="feather icon-book"></i>
                  </span>

                  <h5 class="u-mb-xsmall">更多项目</h5>
                  <p class="u-mb-medium">See more project from Github.</p>
                  <a href="https://github.com/sossmc" class="c-btn c-btn--info has-arrow">Read More<i class="feather icon-chevron-right"></i></a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <Nfooter />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

class Nfooter extends Component{
  render(){
    return(
      <div className="Nfooter">
        <footer class="c-footer">
          <p>@鸡腿茶, Ind</p>
          <span class="c-footer__divider">|</span>
          <nav>
            <a class="c-footer__link" href="https://github.com/sossmc">Github</a>
            <a class="c-footer__link" href="https://sossmc.github.io/portofolio">Portofolio</a>
            <a class="c-footer__link" href="https://sossmc.github.io/faq">FAQ</a>
            <a class="c-footer__link" href="https://sossmc.github.io/help">Help</a>
          </nav>
        </footer>
      </div>
      
    );
  }
}

export default NeatHome;
