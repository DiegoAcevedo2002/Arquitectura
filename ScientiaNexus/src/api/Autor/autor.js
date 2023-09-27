import axios from 'axios';
import { endPoints } from '..';

export const insertAutor = async (data) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.autors.insertAutor, data, config);
  return response.data;
};

export const getAutors = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.autors.getAutors(), config);
  return response.data;
};

export const getOneAutor = async (autorId) => {
    const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
    const response = await axios.get(endPoints.autors.getOneAutor(autorId), config);
    return response.data;
}

export const updateAutor = async (autorId, data) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.autors.updateAutor(autorId), data, config);
  return response.data;
};

export const deleteAutor = async (autorId) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.autors.deleteAutor(autorId), config);
  return response.data;
};
