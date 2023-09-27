import axios from 'axios';
import { endPoints } from '..';

export const insertArticle = async (data) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.articles.insertArticle, data, config);
  return response.data;
};

export const getArticles = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.articles.getArticles(), config);
  return response.data;
};

export const getOneArticle = async (articleId) => {
    const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
    const response = await axios.get(endPoints.articles.getOneArticle(articleId), config);
    return response.data;
}

export const updateArticle = async (articleId, data) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.articles.updateArticle(articleId), data, config);
  return response.data;
};

export const deleteArticle = async (articleId) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.articles.deleteArticle(articleId), config);
  return response.data;
};
