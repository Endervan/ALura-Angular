import {View} from "./view.js";

export class MensagemViews extends View<string>{


  protected  template(model: string): string {
        return `
       <p class="alert alert-info">${model}</p>
        `;
    }


}


