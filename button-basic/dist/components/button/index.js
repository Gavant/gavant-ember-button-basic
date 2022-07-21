import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
import Component from '@glimmer/component';

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var TEMPLATE = hbs("<button\n    type={{this.buttonType}}\n    class=\"action-button action-button-basic btn\n        {{this.buttonTypeClass}}\n        {{this.buttonSizeClass}}\n        {{if this.isIconButton \'icon-btn\'}}\n        {{~if @blockLayout \' btn-block\'}}\n        {{~if @wide \' btn-wide\'}}\n        {{~if @slim \' btn-slim\'}}\n        {{~if @rounded \' btn-rounded\'}}\n        {{~if @circle \' btn-circle\'}}\n        {{~if @active \' active\'}}\n        {{~if @disabled \' disabled\'}}\"\n    {{on \"click\" this.onClick}}\n    ...attributes\n>\n    <span class=\"action-button-content\">\n        {{#if @icon}}\n            <FaIcon\n                @icon={{@icon}}\n                @prefix={{@iconPrefix}}\n                @size={{@iconSize}}\n                @rotation={{@iconRotation}}\n                @flip={{@iconFlip}}\n                @spin={{@iconSpin}}\n                @border={{@iconBorder}}\n                @fixedWidth={{@iconFixedWidth}}\n                class=\"action-button-icon {{@iconClass}}\"\n            />\n        {{/if}}\n        {{#if @label}}\n            <span class=\"action-button-lbl\">{{@label}}</span>\n        {{/if}}\n    </span>\n    {{yield}}\n</button>");

var _class;
let Button = (_class = class Button extends Component {
  /**
   * The button's HTML `type` attribute value
   */
  get buttonType() {
    return this.args.buttonType || 'button';
  }
  /**
   * Bootstrap button style type (e.g. primary, info, danger)
   */


  get type() {
    return this.args.type || 'secondary';
  }
  /**
   * Bootstrap button style class (e.g. btn-primary, btn-outline-success)
   */


  get buttonTypeClass() {
    let btnClass = '';

    if (this.args.outline) {
      btnClass = `btn-outline-${this.type}`;
    } else {
      btnClass = `btn-${this.type}`;
    }

    return btnClass;
  }
  /**
   * Bootstrap size class (e.g. btn-lg, btn-sm)
   */


  get buttonSizeClass() {
    return this.args.size ? `btn-${this.args.size}` : '';
  }
  /**
   * Buttons are given a custom class if they only contain an icon
   */


  get isIconButton() {
    return this.args.iconOnly && this.args.icon;
  }
  /**
   * Handles button click events
   * @param {Event} event
   */


  onClick(event) {
    if (this.args.preventDefault) {
      event.preventDefault();
    }

    if (this.args.stopPropagation) {
      event.stopPropagation();
    }

    if (this.args.action) {
      this.args.action(event);
    }
  }

}, (_applyDecoratedDescriptor(_class.prototype, "onClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
setComponentTemplate(TEMPLATE, Button);

export { Button as default };
