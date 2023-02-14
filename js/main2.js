function iniciarJogo() {
    
    // Obtém o valor do elemento com o ID 'nivel'
    let nivel = document.getElementById('nivel').value;
  
    // Verifica se o valor é vazio
    if (nivel === '') {
      console.log(nivel);
      alert('Escolha um nível'); // Exibe um alerta para o usuário
      return false; // Retorna falso para interromper o fluxo da função
    } 
  
    // Se o valor não for vazio, redireciona o usuário para 'index.html'
    window.location.href = 'index.html?' + nivel;
  }
  