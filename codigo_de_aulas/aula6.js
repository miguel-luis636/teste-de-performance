import http from 'k6/http';
import { group, sleep } from 'k6';

export default function () {

  group('Login API', function () {
    http.post('https://api.site.com/login');
  });

  group('Listar Produtos', function () {
    http.get('https://api.site.com/products');
  });

  sleep(1);
}
