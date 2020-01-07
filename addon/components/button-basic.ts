import { tryInvoke } from '@ember/utils';
import Button from './button';
// @ts-ignore: Ignore import of compiled template
import layout from '../templates/components/button-basic';

class ButtonBasic extends Button {
    layout = layout;
    tagName: string = 'button';
    attributeBindings: string[] = ['button-type:type'];
    classNames: string[] = ['action-button-basic'];
    'button-type': string = 'button';

    click(event: any) {
        //prevent the default browser event from ocurring (e.g native form submissions)
        event.preventDefault();
        //execute the provided click handler action, if one is provided
        tryInvoke(this, 'action', [event]);
        ///prevent bubbling, if set to false. If undefined/true, the event will bubble
        return this.get('bubbles');
    }
}

export default ButtonBasic;
