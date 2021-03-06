import React from 'react';
import ClassNames from 'classnames';
import FontIcon from '../font_icon';
import Ripple from '../ripple';
import style from './style';

class Button extends React.Component {
  static propTypes = {
    accent: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    flat: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    href: React.PropTypes.string,
    icon: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    label: React.PropTypes.string,
    mini: React.PropTypes.bool,
    onMouseLeave: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    primary: React.PropTypes.bool,
    raised: React.PropTypes.bool,
    type: React.PropTypes.string
  };

  static defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    primary: false,
    raised: false
  };

  handleMouseUp = () => {
    this.refs.button.blur();
    if (this.props.onMouseUp) this.props.onMouseUp();
  };

  handleMouseLeave = () => {
    this.refs.button.blur();
    if (this.props.onMouseLeave) this.props.onMouseLeave();
  };

  render () {
    const { accent, children, className, flat, floating, href, icon,
            inverse, label, mini, primary, raised, ...others} = this.props;
    const element = href ? 'a' : 'button';
    const level = primary ? 'primary' : accent ? 'accent' : 'neutral';
    const shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';

    const classes = ClassNames([ style[shape], style[level] ], {
      [style.mini]: mini,
      [style.inverse]: inverse
    }, className);

    const props = {
      ...others,
      href,
      ref: 'button',
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      'data-react-toolbox': 'button'
    };

    return React.createElement(element, props,
      icon ? <FontIcon className={style.icon} value={icon}/> : null,
      label,
      children
    );
  }
}

export default Ripple({centered: false})(Button);
