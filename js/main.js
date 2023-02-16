const bestMoivesOfKuma = Array.from(document.querySelectorAll('.best-movies-of-kuma'), (td) => td.getAttribute('data-value'));
const nameInput = document.querySelector('#input-name');
const submitButton = document.querySelector('#submit-button');
const movieCheckBoxes = Array.from(document.querySelectorAll('.movie-checkbox'));

const getNumberOfSameMovieTaste = (movies) => {
  return movies.filter((movie) => bestMoivesOfKuma.includes(movie)).length;
};
submitButton.addEventListener('click', () => {
  alert(`${nameInput.value}님! 저와 ${movieCheckBoxes.filter((movieCheckBox) => movieCheckBox.checked).length}개의 취향이 같으시네요!`);
});
