let row13 = document.querySelector('.link_r13');
let row16 = document.querySelector('.link_r16');
let row17 = document.querySelector('.link_r17');
let row18 = document.querySelector('.link_r18');
let row19 = document.querySelector('.link_r19');
let row20 = document.querySelector('.link_r20');
let row21 = document.querySelector('.link_r21');

let radiuss13 = document.querySelector('.radius-13');
let radiuss16 = document.querySelector('.radius-16');
let radiuss17 = document.querySelector('.radius-17');
let radiuss18 = document.querySelector('.radius-18');
let radiuss19 = document.querySelector('.radius-19');
let radiuss20 = document.querySelector('.radius-20');
let radiuss21 = document.querySelector('.radius-21');

document.querySelector('.select_radius').addEventListener('click', () =>{

   if (document.querySelector('.select_radius').value == '1option'){
      row13.classList.toggle('marked');
      row16.classList.remove('marked');
      row17.classList.remove('marked');
      row18.classList.remove('marked');
      row19.classList.remove('marked');
      row20.classList.remove('marked');
      row21.classList.remove('marked');
      radiuss13.classList.toggle('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.remove('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '2option') {
      row13.classList.remove('marked');
      row16.classList.toggle('marked');
      row17.classList.remove('marked');
      row18.classList.remove('marked');
      row19.classList.remove('marked');
      row20.classList.remove('marked');
      row21.classList.remove('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.toggle('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.remove('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '3option') {
      row13.classList.remove('marked');
      row16.classList.remove('marked');
      row17.classList.toggle('marked');
      row18.classList.remove('marked');
      row19.classList.remove('marked');
      row20.classList.remove('marked');
      row21.classList.remove('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.toggle('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.remove('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '4option') {
      row13.classList.remove('marked');
      row16.classList.remove('marked');
      row17.classList.remove('marked');
      row18.classList.toggle('marked');
      row19.classList.remove('marked');
      row20.classList.remove('marked');
      row21.classList.remove('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.toggle('open');
      radiuss19.classList.remove('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '4option') {
      row13.classList.remove('marked');
      row16.classList.remove('marked');
      row17.classList.remove('marked');
      row18.classList.remove('marked');
      row19.classList.toggle('marked');
      row20.classList.remove('marked');
      row21.classList.remove('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.toggle('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '5option') {
      row13.classList.remove('marked');
      row16.classList.remove('marked');
      row17.classList.remove('marked');
      row18.classList.remove('marked');
      row19.classList.toggle('marked');
      row20.classList.remove('marked');
      row21.classList.remove('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.toggle('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '6option') {
      row13.classList.remove('marked');
      row16.classList.remove('marked');
      row17.classList.remove('marked');
      row18.classList.remove('marked');
      row19.classList.remove('marked');
      row20.classList.toggle('marked');
      row21.classList.remove('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.remove('open');
      radiuss20.classList.toggle('open');
      radiuss21.classList.remove('open');
   }
   if (document.querySelector('.select_radius').value == '7option') {
      row13.classList.remove('marked');
      row16.classList.remove('marked');
      row17.classList.remove('marked');
      row18.classList.remove('marked');
      row19.classList.remove('marked');
      row20.classList.remove('marked');
      row21.classList.toggle('marked');
      radiuss13.classList.remove('open');
      radiuss16.classList.remove('open');
      radiuss17.classList.remove('open');
      radiuss18.classList.remove('open');
      radiuss19.classList.remove('open');
      radiuss20.classList.remove('open');
      radiuss21.classList.toggle('open');
   }
})