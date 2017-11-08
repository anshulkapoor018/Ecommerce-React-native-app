import 'whatwg-fetch';

class HttpService {
//ES6 way of writing a function
  getProducts = () => {
    var promise = new Promise ((resolve, reject) => {
      fetch('http://localhost:3004/product')
      .then((response) => {
        resolve(response.json());
      })
    });
    return promise;
  }
}

//ES6 way of module.exports
export default HttpService;
