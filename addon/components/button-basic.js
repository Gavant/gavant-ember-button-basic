import Component from '@ember/component';
import { tryInvoke } from '@ember/utils';
import Button from '../mixins/button';
import layout from '../templates/components/button-basic';

export default Component.extend(Button, {
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
    }
});
