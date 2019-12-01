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
                background: white;
                padding: 20px;
                width: 800px;
                border-radius: 10px;
            }
            h2{
                font-size: 1.4rem;
                font-weight: 500;
            }
        </style>
        <section class="form-popup">
            <form>
            <h2>Add a new contact</h2>

                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name">
                </div>
                
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name">
                </div>

                <div class="form-group">
                    <label for="address_1">Address #1</label>
                    <input type="text" name="address_1">
                </div>

                <div class="form-group">
                    <label for="address_1">Address #2</label>
                    <input type="text" name="address_2">
                </div>

                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" name="city">
                </div>

                <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" name="state">
                </div>

                <div class="form-group">
                    <label for="zipcode">Zipcode</label>
                    <input type="text" name="zipcode">
                </div>

                <div class="form-group">
                    <button type="submit">Add</button>
                </div>

            </form>
        </section>
    `
    }
}

customElements.define('form-popup', FormPopup);