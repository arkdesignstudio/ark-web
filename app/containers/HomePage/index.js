
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from 'components/Button';
import ButtonContainer from './ButtonContainer';
import Logo from 'components/Logo';
import LogoContainer from './LogoContainer';
import StepAnimation from 'components/StepAnimation';
import StepAnimationContainer from './StepAnimationContainer';

import Background from './Background';
import BackgroundUnder from './BackgroundUnder';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
        hover: false,
        transitionSlide : 1,
        backgroundOpacity: 1, 
    };
    this.hoverAnimation = this.hoverAnimation.bind(this);
    this.outAnimation = this.outAnimation.bind(this);
    this.transition = this.transition.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', () => this.forceUpdate())//triggers a state change whenever the display size is altered
  }
  hoverAnimation(){
    this.setState({hover: true});
  }
  outAnimation(){
    // alert("bye");
    this.setState({hover: false});
  }
  incrementSlide(){
    
  }
  jumpToPortfolio(){
      window.location = "http://arkdesignstudio.github.io/old-site";
  }
  transition(){

    this.setState({transitionSlide: this.state.transitionSlide + 1});
    this.setState({backgroundOpacity: 0});

    setTimeout(function() {
      this.setState({transitionSlide: this.state.transitionSlide + 1});
    }.bind(this), 1600);

    setTimeout(function() {
      this.setState({transitionSlide: this.state.transitionSlide + 1})
    }.bind(this), 3000);

    this.setState({hover: false});
  }
  render() {

  	const href = '#';
  	const children = (<h3>E X P L O R E</h3>);
    var hover = false;
    var hoverAnimation = (function (){
        hover = true;
    });
    return (
    	<article>
    		<Helmet
    			title="ARK Studio"
    			meta={[
    				{ name: 'description', content: 'we build cool stuff.' }
    			]}
    		/>
    		<div>
          <Background opacity={this.state.backgroundOpacity}>
            <LogoContainer onMouseOver={this.outAnimation}>
			         <Logo />
            </LogoContainer>

            <StepAnimationContainer onMouseOver={this.outAnimation}>
                <StepAnimation hover={this.state.hover} slide={this.state.transitionSlide}/>
            </StepAnimationContainer>

      			<ButtonContainer onMouseOut={this.outAnimation}>
                <Button href={href} onClick={this.transition} onMouseOver={this.hoverAnimation} hover={this.state.hover}>
                    {children}
                </Button>
            </ButtonContainer>
          </Background>
          <BackgroundUnder></BackgroundUnder>
		

    		</div>
    	</article>
    );
  }
}

                    // <Button href={href}>
                    //     {children}
                    // </Button>
