import axios from 'axios';

const getUniversities = async () => {
  const response = await axios.get(`http://universities.hipolabs.com/search?country=Finland`);
  return response.data; // Palauta response.datan arvo
};

getUniversities().then((value) => {
    console.log('Names', value.map((value:any) => value.name))
  return value;
});