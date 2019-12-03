import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import ContactsList  from '/js/components/ContactsList.js';
import FavoritesList  from '/js/components/FavoritesList.js';

export default class FormPopup extends LitElement {

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

            *{
                box-sizing: border-box;
            }
            .form-popup{
                background: #2b304c;
                height: 100vh;
                width: 100vw;
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            form{
                width: 600px;
                background: white;
                padding: 20px;
                border-radius: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 20px;
            }
            h2{
                font-size: 1.4rem;
                font-weight: 500;
                grid-column: 1/5;
            }
            .form-group{
                padding: 0;
            }
            label{
                font-size: .7rem;
                background: white;
                position: relative;
                top:10px;
                display: inline-block;
                
            }
            input[type="text"]{
                padding: 10px;
                display: block;
                width: 100%;
            }
            .first_name{
                grid-column: 1/3;
            }
            .last-name{
                grid-column: 3/5;
            }
            .address-1{
                grid-column: 1/5;
            }
            .address-2{
                grid-column: 1/5;
            }
        </style>
        <section class="form-popup">
            <form>
                <h2>Add a new contact</h2>
                <div class="form-group first-name">
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name">
                </div>
                
                <div class="form-group last-name">
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name">
                </div>

                <div class="form-group address-1">
                    <label for="address_1">Address #1</label>
                    <input type="text" name="address_1">
                </div>

                <div class="form-group address-2">
                    <label for="address_1">Address #2</label>
                    <input type="text" name="address_2">
                </div>

                <div class="form-group city">
                    <label for="city">City</label>
                    <input type="text" name="city">
                </div>

                <div class="form-group state">
                    <label for="state">State</label>
                    <input type="text" name="state">
                </div>

                <div class="form-group zipcode">
                    <label for="zipcode">Zipcode</label>
                    <input type="text" name="zipcode">
                </div>

                <div class="form-group button">
                    <button type="submit">Add</button>
                </div>

            </form>
        </section>
    `
    }
}

customElements.define('form-popup', FormPopup);