import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useAxios = (url, options = {}) => {
  const [data, setData] = useState([]);

  async function getData(endpoint = '') {
    try {
      console.log(endpoint);
      const resp = await axios.get(url + endpoint);
      setData((data) => [...data, { ...resp.data, id: uuid() }]);
    } catch (error) {
      console.log(error);
    }
  }
  return [data, getData];
};

export default useAxios;
