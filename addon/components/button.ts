import Component from '@ember/component';
import { set, get, computed, observer } from '@ember/object';
import { and, notEmpty } from '@ember/object/computed';
import { isEmpty, tryInvoke } from '@ember/utils';

//@ts-ignore
import layout from '../templates/components/button';

export default Component.extend({
    layout,
    tagName: 'button',
    attributeBindings: ['button-type:type'],
    classNames: ['action-button-basic'],
    'button-type': 'button',

    click(event) {
        //prevent the default browser event from ocurring (e.g native form submissions)
        event.preventDefault();
        //execute the provided click handler action, if one is provided
        tryInvoke(this, 'action', [event]);
        ///prevent bubbling, if set to false. If undefined/true, the event will bubble
        return this.get('bubbles');
    },

    attributeBindings: [
        'disabled',
        'title',
        'tabindex',
        'autofocus'
    ],

    classNames: [
        'action-button',
        'btn'
    ],

    classNameBindings: [
        'buttonStyle',
        'buttonSize',
        'iconBtn',
        'block:btn-block',
        'rounded:btn-rounded',
        'circle:btn-circle',
        'wide:btn-wide',
        'slim:btn-slim',
        'active',
        'disabled',
    ],

    'button-class': null,
    disabled: false,
    active: false,
    title: null,
    tabindex: null,
    autofocus: null,
    label: null,
    //lg|md|sm|xs
    size: null,
    //specify a material icon name (e.g. "person") to create an icon-only button
    icon: null,
    //set to true for a border/background-less button that only displays the given icon
    'icon-only': false,
    outline: false,
    light: false,
    rounded: false,
    circle: false,
    block: false,
    wide: false,
    slim: false,
    //primary|secondary|success|info|warning|danger|link
    type: 'secondary',
    bubbles: true,

    hasIcon: notEmpty('icon'),
    iconBtn: and('icon-only', 'hasIcon'),

    buttonStyle: computed('type', 'outline', 'light', function() {
        const type = this.get('type');
        const outline = this.get('outline');
        const light = this.get('light');
        let style = '';

        if(outline) {
        style = `btn-outline-${type}`;
        } else if(light) {
        style = `btn-light-${type}`;
        } else {
        style = `btn-${type}`;
        }

        return style;
    }),

    buttonSize: computed('size', function() {
        const size = this.get('size');
        return !isEmpty(size) ? `btn-${size}` : null;
    })
});
