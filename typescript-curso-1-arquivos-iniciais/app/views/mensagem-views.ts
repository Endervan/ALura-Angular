import {View} from "./view.js";

export class MensagemViews extends View{


    template(model: string): string {
        return `
       <p class="alert alert-info">${model}</p>
        `;
    }


}