gavant-ember-button-basic
==============================================================================

A simple and flexible `<Button>` Glimmer component, with built-in Bootstrap 4 and FontAwesome 5 integration.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install @gavant/ember-button-basic
```

**NOTE:** This addon uses FontAwesome 5 ([@fortawesome/ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome)) for icon support. However it does NOT install any icon set packages. You must install these separately, following the addon's installation guide, e.g.
```
yarn add --dev @fortawesome/free-solid-svg-icons
```


Usage
------------------------------------------------------------------------------

An example `<Button>` usage, with all available arguments used. None of the component arguments are required, but in most cases you'll either want to provide a `@label` and/or `@icon`, or block content, and a click `@action`.

```hbs
<Button
    @action={{function}}
    @label={{string}}
    @buttonType={{'button' | 'submit' | 'reset'}}
    @type={{'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link' | 'light' | 'dark'}}
    @size={{'lg' | 'md' | 'sm' | 'xs'}}
    @blockLayout={{true | false}}
    @wide={{true | false}}
    @outline={{true | false}}
    @rounded={{true | false}}
    @circle={{true | false}}
    @iconOnly={{true | false}}
    @active={{true | false}}
    @disabled={{true | false}}
    @preventDefault={{true | false}}
    @stopPropagation={{true | false}}
    @icon={{string}}
    @iconPrefix={{string}}
    @iconClass={{string}}
    @iconSize={{'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x'|  '7x' | '8x' | '9x' | '10x'}}
    @iconFlip={{'horizontal' | 'vertical' | 'both'}}
    @iconRotation={{90 | 180 | 270}}
    @iconSpin={{true | false}}
    @iconBorder={{true | false}}
    @iconFixedWidth={{true | false}}
/>

{{!-- block form is supported too --}}
<Button @action={{this.someAction}}>
    Look ma, block content!
</Button>
```

Using standard Glimmer component conventions, you can easily extend this component to add more advanced functionality. For example:

```hbs
{{!-- app/components/button-with-tooltip --}}
<Button 
    @action={{@action}}
    @label={{@label}} 
    @type={{@type}}
    ...attributes
>
    {{yield}}
    {{#if @tooltip}}
        <EmberTooltip @side="right">
            {{@tooltip}}
        </EmberTooltip>
    {{/if}}
</Button>


{{!-- elsewhere in your app.., --}}
<ButtonWithTooltip @label="I have a toolip" @tooltip="This is the tooltip!" />
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
