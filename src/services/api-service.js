import axios from 'axios';

export default class APIService {
  constructor() {
    this.key = 'f174cbacdc3a2b94891babbfd6b17080';
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  async getTrends() {
    const response = await axios.get(
      `${this.baseURL}trending/all/day?api_key=${this.key}`
    );

    return response.data.results;
  }

  async searchMovieByQuery(query, page) {
    const response = await axios.get(
      `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${page}`
    );

    return response.data;
  }

  async getMovieDetails(id) {
    const response = await axios.get(
      `${this.baseURL}movie/${id}?api_key=${this.key}`
    );

    return response.data;
  }

  async getMovieCast(id) {
    const response = await axios.get(
      `${this.baseURL}movie/${id}/credits?api_key=${this.key}`
    );

    return response.data;
  }

  async getMovieReviews(id) {
    const response = await axios.get(
      `${this.baseURL}movie/${id}/reviews?api_key=${this.key}`
    );

    return response.data;
  }
}
