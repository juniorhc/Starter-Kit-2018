import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class SideMenu extends LitElement {
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
        #side-menu{
            width: 220px;
            background: #323759;
            
            
        }
        #side-menu nav a{
            color: #ccced7;
            text-decoration: none;
            text-transform: uppercase;    
        }
</style>

<section id="side-menu">
    <div class="logo"></div>
    <div class="menu">
    <div class="title"> Contacts </div>
    <nav>
        <a href="#"> Add Contact </a>
        <a href="#"> Add Contact </a>
        <a href="#"> Add Contact </a>
        <a href="#"> Add Contact </a>
    </nav>
    </div>
</section>


               `
    }


}

customElements.define('side-menu', SideMenu);