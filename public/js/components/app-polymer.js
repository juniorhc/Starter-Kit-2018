import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
// import { LitElement, html } from '../lit-element.js?module';
import SideMenu  from '/js/components/SideMenu.js';
import ContentArea  from '/js/components/ContentArea.js';

class CounterComp extends LitElement {
    constructor() {
        super();
        this.total = {
            number: 0
        };
    }

    static get properties() {
        return {
            total: Object
        }
    }

    firstUpdated(changedProperties) {

    }

    render() {
        const { color, background, fontWeight } = this;
        return html`
<style>
        @import '/css/global.css';
        .main-page{
            display: grid;
            grid-template-columns: 250px 1fr;
        }
</style>

<div class="main-page">
    <side-menu></side-menu>
    <content-area></content-area>
</div>
               `
    }


}

customElements.define('counter-comp', CounterComp);