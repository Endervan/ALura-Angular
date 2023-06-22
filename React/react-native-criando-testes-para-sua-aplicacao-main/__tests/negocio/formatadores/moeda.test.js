import {formataBrasileiroParaDecimal, formataDecimalParaReal} from "../../../src/negocio/formatadores/moeda";

describe("negocio/fomatadores/moeda", () => {
    describe("formataBrasileiroParaDecimal", () => {
        it("deve retorna 8.59 quando valor for '8,59'", () => {
            const resultado = formataBrasileiroParaDecimal("8,59");
            expect(resultado).toBe(8.59)
            console.log(resultado)
        });
    });


    describe("formataDecimalParaReal", () => {
        it("deve retorna R$ 8,59 quando valor for 8.59", () => {
            const resultado = formataDecimalParaReal(8.59);

            expect(resultado).toMatch(/R\$\s8,59/);
        });
    });
});

