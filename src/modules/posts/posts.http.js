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
