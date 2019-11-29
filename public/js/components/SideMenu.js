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
            background: #323759;
            height: 100vh;
            padding: 0 25px;
        }
        #side-menu nav a{
            color: #ccced7;
            text-decoration: none;
            text-transform: capitalize;
            display: block;    
            padding: 10px;
        }
        #side-menu nav a span.icon{
            padding: 10px;
        }
</style>

<section id="side-menu">
    <div class="logo"></div>
    <div class="menu">
    <div class="title"> Contacts </div>
    <nav>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
    </nav>
    </div>
</section>


               `
    }


}

customElements.define('side-menu', SideMenu);