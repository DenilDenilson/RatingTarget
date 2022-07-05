// const ratio1 = document.querySelector('#btnControl1')
// const ratio2 = document.querySelector('#btnControl2')
// console.log(ratio1)

// ratio1.addEventListener( 'change', () => {
//   if(ratio1.checked) {
//       // alert('si')
//     ratio1.nextElementSibling.firstElementChild.firstElementChild.style.color = 'var(--White)';
//   }
//   else {
//     // alert('si')
//   ratio1.nextElementSibling.firstElementChild.firstElementChild.style.color = 'var(--Light-Grey)';
//   }
// });

// ratio2.addEventListener( 'change', () => {
//   if(ratio2.checked) {
//       // alert('si')
//     ratio2.nextElementSibling.firstElementChild.firstElementChild.style.color = 'var(--White)';
//   }
//   else {
//     // alert('si')
//   ratio2.nextElementSibling.firstElementChild.firstElementChild.style.color = 'var(--Light-Grey)';
//   }
// });

const ratios = document.querySelectorAll('.ratios');
const block1 = document.querySelector('.main_block')
const block2 = document.querySelector('.second_block')
const submitButton = document.querySelector('#submit')

ratios.forEach(ratio => {
  ratio.addEventListener('change', () => {
    // console.log(ratio.checked)
      if (ratio.checked) {
        // console.log('checked n')
        ratio.nextElementSibling.firstElementChild.firstElementChild.style.color = 'var(--White)'
      }
      if (!ratio.checked) {
        ratio.nextElementSibling.firstElementChild.firstElementChild.style.color = 'var(--Light-Grey)'
      }
  })
})

submitButton.addEventListener('mouseover', () => {

  block1.style.display = 'none'
  block2.remove.style = 'display'
})