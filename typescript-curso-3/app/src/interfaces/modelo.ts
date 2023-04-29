import {Imprimivel} from "../Utils/imprimivel";
import {Comparavel} from "./comparavel";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {
// Interfaces pode usa qnd extends de interface quiser

    // ja classe na herança so pode usa 1 extends
}
