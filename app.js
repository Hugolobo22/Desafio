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

let arrayPesos = [66.5, 40.0, 66.0];
let arrayAlturas = [1.73, 1.58, 1.77];
let arrayNomes = ['Hugo', 'Maria', 'Teles'];
let arrayIMCs = [];

for (let i = 0; i <= arrayPesos.length-1; i++){
arrayIMCs[i] = arrayPesos[i] / (arrayAlturas[i] * arrayAlturas[i])
console.log(arrayIMCs)
}