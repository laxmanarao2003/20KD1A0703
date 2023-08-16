import React from 'react';
import NumberList from './NumberList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  const urls = [
    'http://20.244.56.144/numbers/primes',
    'http://20.244.56.144/numbers/fibo',
    'http://20.244.56.144/numbers/odd'
  ];

  return (
    <div className="container">
      <h1 className="text-center text-primary pt-4"> Management http Microservice</h1>
      <NumberList urls={urls} />
    </div>
  );
};

export default App;
