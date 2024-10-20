import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
    <div id="likeButtonContainer"></div>
        `;
  },
  async afterRender() {
    //fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);

    // TODO: tampilkan movie di dalam DOM
    const movieContainer = document.querySelector('#movie');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;