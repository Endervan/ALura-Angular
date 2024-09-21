import { CanDeactivateFn } from '@angular/router';
import ServicosPrestadosComponent from "../pages/servicos-prestados/servicos-prestados.component";

export const canDeactivateGuard: CanDeactivateFn<ServicosPrestadosComponent> = (component, currentRoute, currentState, nextState) => {

  // canDeactivateGuard -. bloqueia retorno para alguma rota .tipo validar formulario
  // console.log(component, currentState,currentRoute,nextState);
  if (component.form.get('name')?.dirty){
    console.log("formulario esta sujo foi tocado",component.form.get('name')?.dirty)
  }

  return true;
};
