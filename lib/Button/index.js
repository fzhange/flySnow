'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styleInject_es = require('../style-inject.es-a567728c.js');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var css_248z = ".button {\n  padding: 0.5em 1.5em;\n  color: #666;\n  background-color: #fff;\n  border: 1px solid currentColor;\n  border-radius: 0.3em;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.button[disabled] {\n  opacity: 0.35;\n  cursor: default;\n}\n.checks {\n  background-image: linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%);\n  background-size: 16px 16px;\n  background-position: 0 0, 0 8px, 8px -8px, -8px 0px;\n}\n";
styleInject_es.styleInject(css_248z);

/**
 * The only true button.
 */

var Button = /*#__PURE__*/function (_React$Component) {
  styleInject_es.inheritsLoose(Button, _React$Component);

  function Button(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        onClick = _this$props.onClick,
        disabled = _this$props.disabled,
        children = _this$props.children;
    var styles = {
      color: color,
      fontSize: Button.sizes[size]
    };
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "button",
      style: styles,
      onClick: onClick,
      disabled: disabled
    }, children);
  };

  return Button;
}(React__default['default'].Component);
Button.propTypes = {
  /** Button label */
  children: PropTypes__default['default'].node.isRequired,

  /** The color for the button */
  color: PropTypes__default['default'].string,

  /** The size of the button */
  size: PropTypes__default['default'].oneOf(['small', 'normal', 'large']),

  /** Disable button */
  disabled: PropTypes__default['default'].bool,

  /** Gets called when the user clicks on the button */
  onClick: PropTypes__default['default'].func
};
Button.defaultProps = {
  color: '#333',
  size: 'normal',
  onClick: function onClick(event) {
    // eslint-disable-next-line no-console
    console.log('You have clicked me!', event.target);
  }
};
Button.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px'
};

exports.default = Button;
//# sourceMappingURL=index.js.map
