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
}

