import Component from '@glimmer/component';
import { action } from '@ember/object';

export interface ButtonArgs {
    //this needs to be an arg and not just passed in as an HTML element like `type="submit"` due to an open bug
    //@see https://github.com/emberjs/ember.js/issues/18232
    buttonType?: 'button' | 'submit' | 'reset';
    type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link' | 'light' | 'dark';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    blockLayout?: boolean;
    wide?: boolean;
    outline?: boolean;
    rounded?: boolean;
    circle?: boolean;
    iconOnly?: boolean;
    active?: boolean;
    disabled?: boolean;
    label?: string;
    icon?: string;
    iconPrefix?: string;
    iconClass?: string;
    iconSize?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x'|  '7x' | '8x' | '9x' | '10x';
    iconFlip?: 'horizontal' | 'vertical' | 'both';
    iconRotation?: 90 | 180 | 270;
    iconSpin?: boolean;
    iconBorder?: boolean;
    iconFixedWidth?: boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    action?: (event: Event) => void;
}

export default class Button<T extends ButtonArgs> extends Component<T> {
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
        if(this.args.outline) {
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
    @action
    onClick(event: Event) {
        if(this.args.preventDefault) {
            event.preventDefault();
        }

        if(this.args.stopPropagation) {
            event.stopPropagation();
        }

        if(this.args.action) {
            this.args.action(event);
        }
    }
}
