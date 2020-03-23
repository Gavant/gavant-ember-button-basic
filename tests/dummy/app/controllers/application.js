import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @action
    buttonAction() {
        // eslint-disable-next-line no-console
        console.log('Triggered button action!');
    }

    @action
    submit() {
        // eslint-disable-next-line no-console
        console.log('Submitted form!')
    }

    @action
    onMouseDown() {
        // eslint-disable-next-line no-console
        console.log('Triggered mouse down action!');
    }

    @action
    onMouseUp() {
        // eslint-disable-next-line no-console
        console.log('Triggered mouse up action!');
    }

    @action
    onMouseEnter() {
        // eslint-disable-next-line no-console
        console.log('Triggered mouse enter action!');
    }

    @action
    onMouseLeave() {
        // eslint-disable-next-line no-console
        console.log('Triggered mouse leave action!');
    }
}

