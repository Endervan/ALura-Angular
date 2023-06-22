import {useEffect, useState} from 'react';
import {obtemLeilao} from '../repositorio/leilao';
import {adicionaLance, obtemLancesDoLeilao} from '../repositorio/lance';
import {validaFormatoNumericoDoLance, validaLance} from '../negocio/validadores/lance';
import {formataBrasileiroParaDecimal} from '../negocio/formatadores/moeda';
import {ENVIADO, NAO_ENVIADO, VALIDO} from '../negocio/constantes/estadosLance';

export default function useLeilao(id) {
  const [leilao, setLeilao] = useState({});

  const atualizaLeilao = async () => {
    const leilaoAtualizado = await obtemLeilao(id);
    const lancesAtualizados = await obtemLancesDoLeilao(id);
    setLeilao({ ...leilaoAtualizado, lances: lancesAtualizados });
  };

  const enviaLance = async (valor) => {
    const estadoFormatoLance = validaFormatoNumericoDoLance(valor);
    if (estadoFormatoLance !== VALIDO) {
      return estadoFormatoLance;
    }

    const valorNumerico = formataBrasileiroParaDecimal(valor);
    const estadoLance = validaLance(valorNumerico, leilao);
    if (estadoLance !== VALIDO) {
      return estadoLance;
    }

    const lanceFormatado = {
      valor: valorNumerico,
      leilaoId: leilao.id
    };

    const adicionado = await adicionaLance(lanceFormatado);
    if (adicionado) {
      await atualizaLeilao();
      return ENVIADO;
    }

    return NAO_ENVIADO;
  };

  useEffect(() => {
    atualizaLeilao();
  }, []);

  return [ leilao, atualizaLeilao, enviaLance ];
}

