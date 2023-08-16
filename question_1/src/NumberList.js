import React, { useState, useEffect } from 'react';
import axios from 'axios'; // to create HTTP requests that are present externally we are using axios:)

const NumberList = ({ urls }) => {
    const [numbers, setMynumbers] = useState([]);  // useState Hook allows us to track state in a function component:)
  
    /*useEffect Hook allows us to perform side effects in our components:) */
  
    useEffect(() => {
      const accessData = async () => { //async makes a function return a Promise:)
          try 
          {
          const responses = await Promise.all(urls.map(url => axios.get(url)));
          const numbersMerging = responses
              .filter(response => response.status === 200)
              .map(response => response.data.numbers).flat().filter((num, index, self) => self.indexOf(num) === index)
              .sort((a, b) => a - b);  /* sorting:) */
  
          setMynumbers(numbersMerging);
          } 
          catch (error) 
          {
          console.error('Error fetching data:', error);
          }
      };
      accessData(); // Calling fetchData component:)
    }, [urls]);
  
    return (
      <div>
        <h2 className="text-center ">Server API'S</h2>
        <ul className="d-flex justify-content-center">
          {numbers.map((num, index) => (
            <div className='text-success h5 me-4 mt-5' key={index}>{num}</div>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NumberList;
  