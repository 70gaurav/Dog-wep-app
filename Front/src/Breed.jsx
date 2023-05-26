import { useEffect, useState } from 'react';
import axios from 'axios';


function Breed() {
  const [list, setList] = useState([]);
  const [sublist, setSublist] = useState([]);
  const [breed, setBreed] = useState('');
  const [subBreed, setSubBreed] = useState('');
  const [image, setImage] = useState('');

  function getImage() {
    const breedName = subBreed ? `${subBreed}-${breed}` : breed;
    axios
      .get(`http://localhost:3000/breed/${breedName}`)
      .then((result) => {
        console.log(result.data);
        setImage(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  useEffect(() => {
    axios
      .get('http://localhost:3000/list')
      .then((result) => {
        let data = result.data;
        console.log(data);
        setList(Object.entries(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function sublistHandler(e) {
    let name = e.target.value;
    setBreed(name);
    setSubBreed('');
    let sub = list.filter((breed) => breed[0] === name);
    setSublist(sub);
  }

  return (
    <div className='breed'>
      <select onChange={(e) => sublistHandler(e)}>
        <option disabled selected>Select the breed</option>
        {list
          ? list.map((item, index) => (
              <option key={index} value={item[0]}>
                {item[0]}
              </option>
            ))
          : ''}
      </select>

      {/* {sublist.length > 0 && sublist[0][1].length > 0 ? (
        <select onChange={(e) => setSubBreed(e.target.value)}>
          <option disabled selected>Select the sub breed</option>
          {sublist.map((item, index) =>
            item[1].map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))
          )}
        </select>
      ) : null} */}

      {image && (
        <div className='breedimage'>
          <img src={image} alt='Breed' />
        </div>
      )}
      <button onClick={getImage}>Click to get image</button>
    </div>
  );
}

export default Breed;
