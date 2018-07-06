const obterLetrasMaiusculas = senha => {
  const lista = []
  for (let i = 0; i < senha.length; i++) {
    if ((/[A-Z]/g).test(senha[i])) {
      lista.push(senha[i])
    }
  }
  return lista
}

const obterLetrasMinusculas = senha => {
  const lista = []
  for (let i = 0; i < senha.length; i++) {
    if ((/[a-z]/g).test(senha[i])) {
      lista.push(senha[i])
    }
  }
  return lista
}

const obterNumeros = senha => {
  const lista = []
  for (let i = 0; i < senha.length; i++) {
    if ((/[0-9]/).test(senha[i])) {
      lista.push(senha[i])
    }
  }
  return lista
}

const obterSimbolos = senha => {
  const lista = []
  for (let i = 0; i < senha.length; i++) {
    if ((/[!@#$%¨&*\(\)\\/<>\-_=+'"´`\[\]\^:;\.,]/g).test(senha[i])) {
      lista.push(senha[i])
    }
  }
  return lista
}

const obterPontosRequerimentos = senha => {
  const requerimentos = {
    minimoDeCaracteres: 8,
    minimoLetrasMaiusculas: 3,
    minimoLetrasMinusculas: 3,
    minimoNumeros: 3,
    minimoSimbolos: 3
  }
  let requerimentosAtendidos = 0

  if (senha.length >= requerimentos.minimoDeCaracteres) {
    requerimentosAtendidos++
  }
  if (obterLetrasMaiusculas(senha).length >= requerimentos.minimoLetrasMaiusculas) {
    requerimentosAtendidos++
  }
  if (obterLetrasMinusculas(senha).length >= requerimentos.minimoLetrasMinusculas) {
    requerimentosAtendidos++
  }
  if (obterNumeros(senha).length >= requerimentos.minimoNumeros) {
    requerimentosAtendidos++
  }
  if (obterSimbolos(senha).length >= requerimentos.minimoSimbolos) {
    requerimentosAtendidos++
  }

  return requerimentosAtendidos * 2
}

const adicaoDePontos = senha => {
  const pontosPorLetra = (senha.length * 4)
  document.querySelector('#caracteres').innerHTML = pontosPorLetra

  const pontosPorLetraMaiuscula = (senha.length - obterLetrasMaiusculas(senha).length) * 2
  document.querySelector('#maiusculas').innerHTML = pontosPorLetraMaiuscula

  const pontosPorLetraMinuscula = (senha.length - obterLetrasMinusculas(senha).length) * 2
  document.querySelector('#minuscula').innerHTML = pontosPorLetraMinuscula

  const pontosPorNumeros = obterNumeros(senha).length * 4
  document.querySelector('#numeros').innerHTML = pontosPorNumeros

  const pontosPorSimbolos = obterSimbolos(senha).length * 6
  const pontosRequerimentos = obterPontosRequerimentos(senha)

  return (
    pontosPorLetra +
    pontosPorLetraMaiuscula +
    pontosPorLetraMinuscula +
    pontosPorNumeros +
    pontosPorSimbolos +
    pontosRequerimentos
  )
}

const medirSenha = senha => {
  let pontuacao = 0

  pontuacao += adicaoDePontos(senha)
  // pontuacao -= deducaoDePontos(senha)

  return pontuacao
}

const avaliarSenha = () => {
  const senha = document.querySelector('#senha').value
  const nota = medirSenha(senha)
  const notaDiv = document.querySelector('#nota')
  notaDiv.innerHTML = nota
}
