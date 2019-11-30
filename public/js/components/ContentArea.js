import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import ContactsList  from '/js/components/ContactsList.js';

export default class ContentArea extends LitElement {
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
        #content-area{
            background: #fcfdff;
            padding: 50px 80px;
        }
</style>
<section id="content-area">
        <contacts-list>
        </contacts-list>
</section>
`
    }


}

customElements.define('content-area', ContentArea);