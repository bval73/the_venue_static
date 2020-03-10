import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import NewButton from '../utils/NewButton';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd:30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={() => this.percentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before Dec. 1st</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus ex, sollicitudin nec ligula sed, blandit vehicula orci. Duis vel massa id sem malesuada viverra et ut nunc. Fusce in erat lobortis, facilisis augue id, mattis nisi. Cras quis neque et nunc faucibus tincidunt. Maecenas eu hendrerit nulla, a aliquam est. In hac habitasse platea dictumst. Etiam ultricies tortor in quam tristique posuere. Suspendisse ante ipsum, ullamcorper a viverra id, ullamcorper sit amet urna. Aliquam nulla eros, tempor a pretium eu, dictum sed justo. Donec posuere urna enim, a molestie nisl molestie eu.
              </p>

              <NewButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#fff"
                link="https://github.com/bval73"
                target="_blank"
              />
            </div>
          </Slide>
          
        </div>
      </div>
    );
  }
}

export default Discount;