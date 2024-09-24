// Tarefa 1: Mudar cor do texto
function changeTextColor() {
  const text = document.getElementById('text');
  text.style.color = text.style.color === 'blue' ? 'black' : 'blue'; // Alterna entre azul e preto
}

// Tarefa 2: Cálculos
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const results = `
      Soma: ${num1 + num2}<br>
      Subtração: ${num1 - num2}<br>
      Multiplicação: ${num1 * num2}<br>
      Divisão: ${num2 !== 0 ? (num1 / num2) : 'Divisão por zero não é permitida'}
  `;
  document.getElementById('results').innerHTML = results;
}

// Tarefa 3: Adicionar e remover texto
function addTask() {
  const taskText = document.getElementById('new-task').value.trim();
  if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.onclick = function() {
          li.remove();
      };

      li.appendChild(removeButton);
      document.getElementById('task-list').appendChild(li);
      document.getElementById('new-task').value = ''; // Limpa o campo de entrada
  } else {
      alert('Por favor, insira uma tarefa!');
  }
}
