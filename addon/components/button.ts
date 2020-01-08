import Component from '@ember/component';
import { set, get, computed, action } from '@ember/object';
import { and, bool } from '@ember/object/computed';
import { isEmpty, tryInvoke } from '@ember/utils';
import { observes } from '@ember-decorators/object';

class Button extends Component {
    tagName: string = '';
    'button-class': string | null = null;
    disabled: boolean = false;
    active: boolean = false;
    title: string | null = null;
    tabindex: string | null = null;
    autofocus: boolean | null = null;
    tooltip: string | null = null;
    tooltipApi: any = null;
    label: string | null = null;
    //lg|md|sm|xs
    size: string | null = null;
    //specify a material icon name (e.g. "person") to create an icon-only button
    icon: string | null = null;
    //set to true for a border/background-less button that only displays the given icon
    'icon-only': boolean = false;
    outline: boolean = false;
    light: boolean = false;
    rounded: boolean = false;
    circle: boolean = false;
    block: boolean = false;
    wide: boolean = false;
    slim: boolean = false;
    //primary|secondary|success|info|warning|danger|link
    type: string = 'secondary';
    bubbles: boolean = true;
    'tooltip-animation': string = 'perspective';
    'tooltip-arrow': boolean = true;
    'tooltip-hide-on': string = 'mouseleave blur escapekey';

    @bool('icon') hasIcon: boolean | undefined;
    @and('icon-only', 'hasIcon') iconBtn: boolean | undefined;

    @computed('type', 'outline', 'light')
    get buttonStyle(): string {
        const type = get(this, 'type');
        const outline = get(this, 'outline');
        const light = get(this, 'light');
        let style: string = '';

        if (outline) {
            style = `btn-outline-${type}`;
        } else if (light) {
            style = `btn=light-${type}`;
        } else {
            style = `btn-${type}`;
        }

        return style;
    }

    @computed('size')
    get buttonSize(): string | null {
        const size = get(this, 'size');
        return !isEmpty(size) ? `btn-${size}` : null;
    }

    @observes('tooltip')
    tooltipDidChange() {
        const tooltipApi: any = get(this, 'tooltipApi');
        //if the tooltip content dynamically changes while the tooltip is open,
        //we need to manually force a positioning update
        if (tooltipApi) {
            tryInvoke(tooltipApi, 'scheduleUpdate');
        }
    }

    @action
    onTooltipApiChange(tooltipApi: object) {
        return set(this, 'tooltipApi', tooltipApi);
    }
}

export default Button;
