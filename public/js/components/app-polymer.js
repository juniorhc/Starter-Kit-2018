import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
// import { LitElement, html } from '../lit-element.js?module';

class CounterComp extends LitElement {
    constructor() {
        super();
        this.total = {
            number: 0
        };
        this.clickMethod = this.clickMethod.bind(this);
    }

    static get properties() {
        return {
            total: Object,
            color: String,
            background: String,
            fontWeight: String
        }
    }

    clickMethod(e) {
        console.log(e);
        console.log('Click click click 1');
    }

    firstUpdated(changedProperties) {
        this.shadowRoot.getElementById('add-btn')
            .addEventListener('click', e => {
                console.log(`current state: ${this.total.number}`);
                this.total.number += 1;
                this.requestUpdate();
                console.log(`new state: ${this.total.number}`);
            });

        this.shadowRoot.getElementById('sub-btn')
            .addEventListener('click', e => {
                this.total.number -= 1;
                this.requestUpdate();
                console.log(`new state: ${this.total.number}`);
            });
    }

    render() {
        const { color, background, fontWeight } = this;
        return html`
                  <style>
                      #add-btn {
                        background: blue;
                        padding: 15px 25px;
                        display: inline-block;
                      }
                      #sub-btn {
                        background: black;
                        padding: 15px 25px;
                        display: inline-block;
                        color: white;
                      }
                  </style>
                  <div class="total" > ${this.total.number}  </div>
                  <div id="add-btn" > +  </div>
                  <div id="sub-btn" > - </div>
               `
    }


}

customElements.define('counter-comp', CounterComp);