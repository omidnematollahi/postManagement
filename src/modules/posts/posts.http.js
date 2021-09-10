import axios from 'axios';

export const getPosts = (model) => {
  let params = '?';
  params += Object.keys(model)
    .map((value) => {
      return model[value] ? '' + value + '=' + model[value] : '';
    })
    .filter((item) => item !== '')
    .join('&');
  return axios({
    method: 'GET',
    url: '/posts' + params,
  });
};
export const addPost = (model) => {
  return axios({
    method: 'POST',
    url: '/posts',
    data: model,
  });
};

export const postDetail = (id) => {
  return axios({
    method: 'GET',
    url: '/posts/' + id,
  });
};
