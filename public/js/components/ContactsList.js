import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class ContactsList extends LitElement {
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

</style>
    <section id="contacts">
        <h2>Contacts</h2>
        <div class="contac"> 
        </div>
        <div class="user-img"> </div>
        <div class="fulname"> 
            Joe Santos Garcia 123
        </div>
        <div class="number"> 
            123 - 456 - 789
        </div>
        <div class="state"> 
            NY
        </div>
        <div class="category"> 
            family
        </div>
    </section>
`
    }


}

customElements.define('contacts-list', ContactsList);