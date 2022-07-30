import {AbstractControl} from "@angular/forms";

// control.value as string usando cast pra tipa o value
export function minusculoValidator(control: AbstractControl) {
  const valor = control.value as string;
  if (valor !== valor.toLowerCase()) {
    return {minusculo: true}
  } else {
    return null;
  }
}
