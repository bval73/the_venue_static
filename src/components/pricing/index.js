import React, { Component } from 'react';
import NewButton from '../utils/NewButton';

import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc:[
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus ex, sollicitudin nec ligula sed, blandit vehicula orci.',
      'Duis vel massa id sem malesuada viverra et ut nunc.',
      'Fusce in erat lobortis, facilisis augue id, mattis nisi.'
    ],
    linkto: ['http://bvcases.com/ironwerks/', 'http://bvcases.com/ironwerks/parts.php', 'https://github.com/bval73/angular-project'],
    delay: [500, 0, 500]
  }

  showBoxes = () => (  //using () make it a function instead of {}
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
            <NewButton
              text="Purchase"
              bck="#ffa800"
              color="#fff"
              link={this.state.linkto[i]}
              target="_blank"
            />
            </div>

          </div>
        </div>
      </Zoom>
      
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;