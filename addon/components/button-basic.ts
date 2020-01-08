import { tryInvoke } from '@ember/utils';
import Button from './button';
// @ts-ignore: Ignore import of compiled template
import layout from '../templates/components/button-basic';

class ButtonBasic extends Button {
    layout = layout;
    tagName: string = 'button';
    attributeBindings: string[] = ['disabled', 'title', 'tabindex', 'autofocus', 'button-type:type'];
    classNames: string[] = ['action-button-basic', 'action-button', 'btn'];
    classNameBindings: string[] = [
        'buttonStyle',
        'buttonSize',
        'iconBtn',
        'block:btn-block',
        'rounded:btn-rounded',
        'circle:btn-circle',
        'wide:btn-wide',
        'slim:btn-slim',
        'active',
        'disabled'
    ];
    'button-type': string = 'button';

    click(event: any): boolean {
        //prevent the default browser event from ocurring (e.g native form submissions)
        event.preventDefault();
        //execute the provided click handler action, if one is provided
        tryInvoke(this, 'action', [event]);
        ///prevent bubbling, if set to false. If undefined/true, the event will bubble
        return this.get('bubbles');
    }
}

export default ButtonBasic;
