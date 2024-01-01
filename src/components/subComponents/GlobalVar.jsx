export default class GlobalVar{ //Variaveis Globais
  
  static getLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave))
  }

  static setLocalStorage(chave, valor){
    return localStorage.setItem(chave,JSON.stringify(valor));
  }

  static converterDataISOParaFormatoBR(dataISO) {
    const meses = [
      'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
      'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
    ];
    const data = new Date(dataISO);
    const dia = data.getUTCDate();
    const mes = meses[data.getUTCMonth()];
    const ano = data.getUTCFullYear();
    return `${dia.toString().padStart(2, '0')} ${mes} ${ano}`;
  }

  static converterDataDMA(dataISO) {
    let data = new Date(dataISO);
    let dia = data.getUTCDate();
    let mes = data.getUTCMonth() + 1; // Os meses começam do 0, então adicionamos 1.
    let ano = data.getUTCFullYear();

    // Adiciona um zero à esquerda se o dia ou o mês for menor que 10.
    if(dia < 10) dia = '0' + dia;
    if(mes < 10) mes = '0' + mes;

    return `${dia}/${mes}/${ano}`;
  }
}

