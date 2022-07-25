import '@glint/environment-ember-loose';

import FaIconComponent from '@gavant/glint-template-types/types/@fortawesome/ember-fontawesome/fa-icon';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        FaIcon: typeof FaIconComponent;
    }
}
