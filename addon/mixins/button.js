import Mixin from '@ember/object/mixin';
import { set, get, computed, observer } from '@ember/object';
import { and, notEmpty } from '@ember/object/computed';
import { isEmpty, tryInvoke } from '@ember/utils';

// eslint-disable-next-line
export default Mixin.create({
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
    tooltip: null,
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
    'tooltip-animation': 'perspective',
    'tooltip-arrow': true,
    'tooltip-hide-on': 'mouseleave blur escapekey',

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
    }),

    tooltipDidChange: observer('tooltip', function() {
        const tooltipApi = get(this, 'tooltipApi');
        //if the tooltip content dynamically changes while the tooltip is open,
        //we need to manually force a positioning update
        if(tooltipApi) {
            tryInvoke(tooltipApi, 'scheduleUpdate');
        }
    }),

    actions: {
        onTooltipApiChange(tooltipApi) {
            set(this, 'tooltipApi', tooltipApi);
        }
    }
});
