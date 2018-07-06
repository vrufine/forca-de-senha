const regras = {
  numeroDeCaracteres: (n) => n * 4,
  letrasMaiusculas: (len, n) => ((len - n) * 2),
  letrasMinusculas: (len, n) => ((len - n) * 2),
  numeros: (n) => n * 4,
  simbolos: (n) => n * 6,
  numerosSimbolosIntermediarios: (n) => n * 2,
  requerimentos: (n) => n * 2
}

const avaliarSenha = () => {

  const senhaInformada = document.querySelector('#senha').value
  const retorno = {
    senhaInformada,
    pontuacoes: [
      calcularPontuacaoPorNumeroDeCaracteres(senhaInformada),
      calcularPontuacaoPorNumeroDeLetrasMaiusculas(senhaInformada),
      calcularPontuacaoPorNumeroDeLetrasMinusculas(senhaInformada)
    ]
  }
  document.querySelector('#pontuacao').innerHTML = JSON.stringify(retorno, null, 2)
  return retorno

}

const filtrar = (string, regex) => {
  let filtrados = []
  for (let i = 0; i < string.length; i++) {
    const elemento = string[i]
    if (regex.test(elemento)) {
      filtrados.push(elemento)
    }
  }
  return filtrados
}

const calcularPontuacaoPorNumeroDeCaracteres = senha => {
  return {
    caracteres: senha.length,
    pontos: regras.numeroDeCaracteres(senha.length)
  }
}

const calcularPontuacaoPorNumeroDeLetrasMaiusculas = senha => {
  const letrasMaiusculas = filtrar(senha, /[A-Z]/)
  return {
    letrasMaiusculas,
    pontos: regras.letrasMaiusculas(senha.length, letrasMaiusculas.length)
  }
}

const calcularPontuacaoPorNumeroDeLetrasMinusculas = senha => {
  const letrasMinusculas = filtrar(senha, /[a-z]/)
  return {
    letrasMinusculas,
    pontos: regras.letrasMinusculas(senha.length, letrasMinusculas.length)
  }
}
