import React, {useState, useEffect} from 'react';
import './App.css'



function App() {
  const [numero1, apNumero1] = useState(0);
  const [numero2, apNumero2] = useState(0);
  const [resultado, apResult] = useState(0);
  const [operacao, apOperacao] = useState('Somar')

  let calculo = () =>{
    if(operacao == "Somar"){
      return parseFloat(numero1) + parseFloat(numero2);
    }
    else if(operacao == "Subtrair"){
      return parseFloat(numero1) - parseFloat(numero2)
    }
    else if(operacao == "Multiplicar"){
      return parseFloat(numero1) * parseFloat(numero2)
    }
    else{
      return parseFloat(numero1) / parseFloat(numero2)
    }
  }

  useEffect(() =>{
    apResult(calculo())
  }, [numero1, numero2, operacao])

  return (
    <div className='app'>
      <h3 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Calculadora React.js Loopscape</h3>

      <div class="col-span-6 sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-700">Primeiro Numero</label>
            <input type="number" name="primeiro-numero" id="primeiro-numero" autocomplete="" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={numero1}
            onChange={(e) => apNumero1(e.target.value)}/>
      </div>

      <div class="col-span-6 sm:col-span-3">
            <label for="first-name" class="block text-sm font-mediun text-gray-700">Segundo Numero</label>
            <input type="number" name="segundo-numero" id="segundo numero-numero" autocomplete="" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={numero2}
            onChange={(e) => apNumero2(e.target.value)}/>
      </div>


      <select onChange={(e) => apOperacao(e.target.value)}>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>

      <label>Resultado {resultado}</label>
    </div>    
  );
}

export default App;
