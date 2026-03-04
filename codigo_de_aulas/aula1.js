//aula: ciclo de vida de testes com k6

//1. inicialização
import sleep from 'k6';


//2. configuração executado apenas uma vez durante todo ciclo de vida
export const options = {
    vus: 1,
    duration: '10s'
    //  pode ter mais de um bloco que realize mais de uma configuração por exemplo uma requisição previa
}

//  SETUP() — preparação do teste Executa uma única vez antes da carga começar.
// Muito usado para:
// ✅ autenticação
// ✅ criar dados
// ✅ gerar token
// ✅ preparar ambiente

export function setup() {

  const res = http.post('https://api/login', {
    user: 'admin',
    password: '123' ,
    thresholds: {
      http_req_failed: ['rate < 0.01'],
      http_req_duration: ['p(95) < 200']
    }
  });

  return res.json('token');
}

//3. execução // codigo vu
export default function(){
    console.log("testando o k6");
    sleep(1);
} 

//4. desmontagem
export function teardown(data){
    console.log(data)
}
