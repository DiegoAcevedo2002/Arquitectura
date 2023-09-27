const API = 'http://localhost:5050';

export const endPoints = {
  auth: {
    login: `${API}/login`,
  },
  users: {
    profile: (userId) => `${API}/profile/${userId}`,
    createUser: `${API}/signup`,
  },
  articles: {
    insertArticle: `${API}/article`,
    getArticles: () => `${API}/article/list`,
    getOneArticle: (articleId) => `${API}/article/one/${articleId}`,
    updateArticle: (articleId) => `${API}/article/update/${articleId}`,
    deleteArticle: (articleId) => `${API}/article/delete/${articleId}`
  },
  autors: {
    insertAutor: `${API}/autor`,
    getAutors: () => `${API}/autor/list`,
    getOneAutor: (autorId) => `${API}/autor/one/${autorId}`,
    updateAutor: (autorId) => `${API}/autor/update/${autorId}`,
    deleteAutor: (autorId) => `${API}/autor/delete/${autorId}`
  },
};
