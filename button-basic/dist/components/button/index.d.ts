import Component from '@glimmer/component';
interface ButtonArgs {
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
    iconSize?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    iconFlip?: 'horizontal' | 'vertical' | 'both';
    iconRotation?: 90 | 180 | 270;
    iconSpin?: boolean;
    iconBorder?: boolean;
    iconFixedWidth?: boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    action?: (event: Event) => void;
}
declare class Button<T extends ButtonArgs> extends Component<T> {
    /**
     * The button's HTML `type` attribute value
     */
    get buttonType(): "button" | import("@glimmer/component/-private/component").Args<T>["buttonType"];
    /**
     * Bootstrap button style type (e.g. primary, info, danger)
     */
    get type(): "secondary" | import("@glimmer/component/-private/component").Args<T>["type"];
    /**
     * Bootstrap button style class (e.g. btn-primary, btn-outline-success)
     */
    get buttonTypeClass(): string;
    /**
     * Bootstrap size class (e.g. btn-lg, btn-sm)
     */
    get buttonSizeClass(): string;
    /**
     * Buttons are given a custom class if they only contain an icon
     */
    get isIconButton(): import("@glimmer/component/-private/component").Args<T>["icon"] | undefined;
    /**
     * Handles button click events
     * @param {Event} event
     */
    /**
     * Handles button click events
     * @param {Event} event
     */
    onClick(event: Event): void;
}
export { ButtonArgs, Button as default };
