import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
        `;
  },
  async afterRender() {
    //fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);

    // TODO: tampilkan movie di dalam DOM
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;