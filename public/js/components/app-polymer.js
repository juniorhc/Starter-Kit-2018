import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
// import { LitElement, html } from '../lit-element.js?module';
import SideMenu  from '/js/components/SideMenu.js';

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

</style>

<div class="main-page">
    <side-menu></side-menu>
    <section id="content-area">
        <section id="contacts">
            <h2>Contacts</h2>
            <div class="contac"> 
            </div>
            <div class="user-img"> </div>
            <div class="fulname"> 
                Joe Santos Garcia
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
    </section>
</div>
               `
    }


}

customElements.define('counter-comp', CounterComp);