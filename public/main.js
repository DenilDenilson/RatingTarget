const buttons = document.querySelectorAll('.butons')
const submit = document.querySelector('#submit')
const mainBlock = document.querySelector('.main_block')
const secondBlock = document.querySelector('.second_block')
const ratingText = document.querySelector('.rating')
console.log(ratingText)

let rating = 0

buttons[0].addEventListener('click', () => {

  buttons[0].style.color = 'var(--White)';
  buttons[0].style.backgroundColor = 'var(--Medium-Grey)';
  buttons[1].style.color = 'var(--Light-Grey)';
  buttons[1].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[2].style.color = 'var(--Light-Grey)';
  buttons[2].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[3].style.color = 'var(--Light-Grey)';
  buttons[3].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[4].style.color = 'var(--Light-Grey)';
  buttons[4].style.backgroundColor = 'var(--Dark-Blue)';

  rating = buttons[0].value
  console.log(rating)
})

buttons[1].addEventListener('click', () => {

  buttons[1].style.color = 'var(--White)';
  buttons[1].style.backgroundColor = 'var(--Medium-Grey)';
  buttons[0].style.color = 'var(--Light-Grey)';
  buttons[0].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[2].style.color = 'var(--Light-Grey)';
  buttons[2].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[3].style.color = 'var(--Light-Grey)';
  buttons[3].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[4].style.color = 'var(--Light-Grey)';
  buttons[4].style.backgroundColor = 'var(--Dark-Blue)';

  rating = buttons[1].value
  console.log(rating)
})

buttons[2].addEventListener('click', () => {

  buttons[2].style.color = 'var(--White)';
  buttons[2].style.backgroundColor = 'var(--Medium-Grey)';
  buttons[1].style.color = 'var(--Light-Grey)';
  buttons[1].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[0].style.color = 'var(--Light-Grey)';
  buttons[0].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[3].style.color = 'var(--Light-Grey)';
  buttons[3].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[4].style.color = 'var(--Light-Grey)';
  buttons[4].style.backgroundColor = 'var(--Dark-Blue)';

  rating = buttons[2].value
  console.log(rating)
})

buttons[3].addEventListener('click', () => {

  buttons[3].style.color = 'var(--White)';
  buttons[3].style.backgroundColor = 'var(--Medium-Grey)';
  buttons[1].style.color = 'var(--Light-Grey)';
  buttons[1].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[2].style.color = 'var(--Light-Grey)';
  buttons[2].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[0].style.color = 'var(--Light-Grey)';
  buttons[0].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[4].style.color = 'var(--Light-Grey)';
  buttons[4].style.backgroundColor = 'var(--Dark-Blue)';

  rating = buttons[3].value
  console.log(rating)
})

buttons[4].addEventListener('click', () => {

  buttons[4].style.color = 'var(--White)';
  buttons[4].style.backgroundColor = 'var(--Medium-Grey)';
  buttons[1].style.color = 'var(--Light-Grey)';
  buttons[1].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[2].style.color = 'var(--Light-Grey)';
  buttons[2].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[3].style.color = 'var(--Light-Grey)';
  buttons[3].style.backgroundColor = 'var(--Dark-Blue)';
  buttons[0].style.color = 'var(--Light-Grey)';
  buttons[0].style.backgroundColor = 'var(--Dark-Blue)';

  rating = buttons[4].value
  console.log(rating)
})