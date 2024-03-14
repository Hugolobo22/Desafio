/* 07 

	- Mini Desafio: Calculadora de Índice de Massa Corporal (IMC) do Centro Médico ALRN
	- Você foi contratado para desenvolver uma calculadora de Índice de Massa Corporal (IMC) para o nosso centro de saúde da ALRN. 
  - O IMC é calculado usando a fórmula: IMC = peso / (altura * altura).
	- Seu programa deve avaliar dois arrays, um que armazena os pesos (em kg) de um conjunto de 15 pacientes e suas respectivas alturas (em metros) e, em seguida, calcular e exibir seu IMC. 
  - Além disso, o programa deve fornecer uma classificação do IMC de acordo com a tabela abaixo:

		-- IMC < 18.5: Abaixo do peso
		-- 18.5 <= IMC < 25: Peso normal
		-- 25 <= IMC < 30: Sobrepeso
		-- IMC >= 30: Obeso
    
Protótipo do código do array - Proposta 01:

let arrayPesos = [];
let arrayAlturas = [];
let arrayNomes = [];
let arrayIMCs = [];

Protótipo do código do array - Proposta 02:

let arrayCompletos = [
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
...

];
- O programa deverá receber os arrays com os dados dos 15 pacientes, você deve criar estes aarrays com dados simulados;
- Ao final da execução o programa deverá imprimir linha por linha as informações de cada paciente, ou seja, teremos 15 linhas de acordo com o seguinte formato:

saída = 

'Paciente (1): Nome: Johny Cage - Peso: 78 Kg - Altura: 1.80 m - IMC: 24.07 - Diagnóstico: Peso normal'
'Paciente (2): Nome: Scorpion - Peso: 98 Kg - Altura: 1.87 m - IMC: 28.02 - Diagnóstico: Sobrepeso'
'Paciente (3): Nome: Joel Miller - Peso: 50 Kg - Altura: 1.80 m - IMC: 15.43 - Diagnóstico: Abaixo do peso'
...
'Paciente (15): Nome: XXX - Peso: YY Kg - Altura: X.X m - IMC: ZZZZ - Diagnóstico: HHHH'

*/

// Primeiramente, colocamos em base 15 personagens (fora as 3 primeiras pessoas que pegamos como base na aula de Terça,
// todas as medidas foram feitas por pesquisas no google e algumas foram especuladas)

console.log('Alunos: Hugo Medeiros e Pedro Felipe')

let arrayPesos = [66.5, 40.0, 66.0, 79.3, 67.0, 50.9, 62.0, 56.0, 80.4, 37.0, 73.0, 140.0, 74.0, 79.0, 29.0];
let arrayAlturas = [1.73, 1.58, 1.77, 1.80, 1.74, 1.66, 1.75, 1.65, 1.81, 0.90, 1.77, 1.69, 1.75, 1.73, 1.59];
let arrayNomes = ['Hugo', 'Maria', 'Teles', 'Satoru gojou', 'Luffy', 'Naruto', 'Goku', 'Vegeta', 'Zoro', 'Chopper', 'Sanji', 'Thaís Carla', 'Megumi', 'Itadori', 'Bob esponja'];
let arrayIMCs = [];
let arrayDiag = []

// Em seguida, fizemos a calculdora de IMC, utilizando o método conhecido e ensinado na sala, usando uma variável "i" como um contador
// que passa de array em array para calcular seu imc

for (let i = 0; i <= arrayPesos.length-1; i++){
arrayIMCs[i] = arrayPesos[i] / (arrayAlturas[i] * arrayAlturas[i])
	if (arrayIMCs[i] <= 18.5){ // Utilizando dos comandos if, else if e else, pegamos o valor do imc e verificamos o seu diagnóstico
		arrayDiag[i] = 'Abaixo do peso' // Armazenamos o diagnóstico numa variável criada por nós, arrayDiag (utilizando ainda o índice "i" mas para armazenar o valor correto na variável correta)
	}
	else if(18.5 < arrayIMCs[i] && arrayIMCs[i] <= 25){ // Repetimos as ações acima para todos os diagnósticos
		arrayDiag[i] = 'Peso normal'
	}
	else if(25 < arrayIMCs[i] && arrayIMCs[i] < 30){
		arrayDiag[i] = 'Sobrepeso'
	}
	else if(30 <= arrayIMCs[i]){	
	arrayDiag[i] = 'Obeso'
	}

	console.log(`Paciente (${i + 1}): Nome: ${arrayNomes[i]} 
	- Peso: ${arrayPesos[i]} Kg - Altura: ${arrayAlturas[i]} m - IMC: ${arrayIMCs[i].toFixed(2)} - Diagnóstico: ${arrayDiag[i]}`)
}
// Ao final, utilizamos de template Strings para exibir todos os dados corretamente (usamos o toFixed para limitar o número do IMC em 2 dígitos após a vírgula)