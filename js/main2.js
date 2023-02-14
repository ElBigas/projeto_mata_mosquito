/**
 * Essa função é usada para iniciar o jogo, mas antes de iniciar, 
 * verifica se o player selecionou um nível. Isso é feito 
 * verificando se o valor do elemento com ID "nivel" é vazio. Se 
 * o valor for vazio, uma mensagem de alerta é exibida para o 
 * player e a função retorna "false". Se o valor não for vazio, 
 * o player é redirecionado para a página "index.html" com o 
 * valor do nível adicionado como parâmetro na URL.
 * 
 */

function iniciarJogo() {
    
    let nivel = document.getElementById('nivel').value;
  
    if (nivel === '') {
      console.log(nivel);
      alert('Escolha um nível'); 
      return false; 
    } 
  
    window.location.href = 'index.html?' + nivel;
  }
  
