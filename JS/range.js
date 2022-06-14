let r13 = document.querySelector('.link_r13');
let r16 = document.querySelector('.link_r16');
let r17 = document.querySelector('.link_r17');
let r18 = document.querySelector('.link_r18');
let r19 = document.querySelector('.link_r19');
let r20 = document.querySelector('.link_r20');
let r21 = document.querySelector('.link_r21');

let radius13 = document.querySelector('.radius-13');
let radius16 = document.querySelector('.radius-16');
let radius17 = document.querySelector('.radius-17');
let radius18 = document.querySelector('.radius-18');
let radius19 = document.querySelector('.radius-19');
let radius20 = document.querySelector('.radius-20');
let radius21 = document.querySelector('.radius-21');

document.querySelector('.test').addEventListener('input', () => {
   let data = document.querySelector('.test').value;

   if(data == 1){
      r13.classList.toggle('marked');
      r16.classList.remove('marked');
      r17.classList.remove('marked');
      r18.classList.remove('marked');
      r19.classList.remove('marked');
      r20.classList.remove('marked');
      r21.classList.remove('marked');
      radius13.classList.toggle('open');
      radius16.classList.remove('open');
      radius17.classList.remove('open');
      radius18.classList.remove('open');
      radius19.classList.remove('open');
      radius20.classList.remove('open');
      radius21.classList.remove('open');
   }
   
   if (data == 2){
      r16.classList.toggle('marked');
      r13.classList.remove('marked');
      r17.classList.remove('marked');
      r18.classList.remove('marked');
      r19.classList.remove('marked');
      r20.classList.remove('marked');
      r21.classList.remove('marked');
      radius16.classList.toggle('open');
      radius13.classList.remove('open');
      radius17.classList.remove('open');
      radius18.classList.remove('open');
      radius19.classList.remove('open');
      radius20.classList.remove('open');
      radius21.classList.remove('open');
   }
   if (data == 3) {
      r17.classList.toggle('marked');
      r13.classList.remove('marked');
      r16.classList.remove('marked');
      r18.classList.remove('marked');
      r19.classList.remove('marked');
      r20.classList.remove('marked');
      r21.classList.remove('marked');
      radius17.classList.toggle('open');
      radius16.classList.remove('open');
      radius13.classList.remove('open');
      radius18.classList.remove('open');
      radius19.classList.remove('open');
      radius20.classList.remove('open');
      radius21.classList.remove('open');
   }
   if(data == 4){
      r18.classList.toggle('marked');
      r13.classList.remove('marked');
      r16.classList.remove('marked');
      r17.classList.remove('marked');
      r19.classList.remove('marked');
      r20.classList.remove('marked');
      r21.classList.remove('marked');
      radius18.classList.toggle('open');
      radius16.classList.remove('open');
      radius17.classList.remove('open');
      radius13.classList.remove('open');
      radius19.classList.remove('open');
      radius20.classList.remove('open');
      radius21.classList.remove('open');
   }
   if(data == 5) {
      r19.classList.toggle('marked');
      r13.classList.remove('marked');
      r16.classList.remove('marked');
      r17.classList.remove('marked');
      r18.classList.remove('marked');
      r20.classList.remove('marked');
      r21.classList.remove('marked');
      radius19.classList.toggle('open');
      radius16.classList.remove('open');
      radius17.classList.remove('open');
      radius18.classList.remove('open');
      radius13.classList.remove('open');
      radius20.classList.remove('open');
      radius21.classList.remove('open');
   }
   if(data == 6) {
      r20.classList.toggle('marked');
      r13.classList.remove('marked');
      r16.classList.remove('marked');
      r17.classList.remove('marked');
      r18.classList.remove('marked');
      r19.classList.remove('marked');
      r21.classList.remove('marked');
      radius20.classList.toggle('open');
      radius16.classList.remove('open');
      radius17.classList.remove('open');
      radius18.classList.remove('open');
      radius19.classList.remove('open');
      radius13.classList.remove('open');
      radius21.classList.remove('open');
   }
   if(data == 7){
      r21.classList.toggle('marked');
      r13.classList.remove('marked');
      r16.classList.remove('marked');
      r17.classList.remove('marked');
      r18.classList.remove('marked');
      r19.classList.remove('marked');
      r20.classList.remove('marked');
      radius21.classList.toggle('open');
      radius16.classList.remove('open');
      radius17.classList.remove('open');
      radius18.classList.remove('open');
      radius19.classList.remove('open');
      radius20.classList.remove('open');
      radius13.classList.remove('open');
   }
   
   //document.querySelector('.out5').innerHTML = data;
});

r13.onclick = function () {
   document.querySelector('.test').addEventListener('input', (1));
}
/*
r13.onclick = function () {
   r13.classList.toggle('marked');
   r16.classList.remove('marked');
   r17.classList.remove('marked');
   r18.classList.remove('marked');
   r19.classList.remove('marked');
   r20.classList.remove('marked');
   r21.classList.remove('marked');
   radius13.classList.toggle('open');
   radius16.classList.remove('open');
   radius17.classList.remove('open');
   radius18.classList.remove('open');
   radius19.classList.remove('open');
   radius20.classList.remove('open');
   radius21.classList.remove('open');
}

r16.onclick = function () {
   r16.classList.toggle('marked');
   r13.classList.remove('marked');
   r17.classList.remove('marked');
   r18.classList.remove('marked');
   r19.classList.remove('marked');
   r20.classList.remove('marked');
   r21.classList.remove('marked');
   radius16.classList.toggle('open');
   radius13.classList.remove('open');
   radius17.classList.remove('open');
   radius18.classList.remove('open');
   radius19.classList.remove('open');
   radius20.classList.remove('open');
   radius21.classList.remove('open');
}

r17.onclick = function () {
   r17.classList.toggle('marked');
   r13.classList.remove('marked');
   r16.classList.remove('marked');
   r18.classList.remove('marked');
   r19.classList.remove('marked');
   r20.classList.remove('marked');
   r21.classList.remove('marked');
   radius17.classList.toggle('open');
   radius16.classList.remove('open');
   radius13.classList.remove('open');
   radius18.classList.remove('open');
   radius19.classList.remove('open');
   radius20.classList.remove('open');
   radius21.classList.remove('open');
}

r18.onclick = function () {
   r18.classList.toggle('marked');
   r13.classList.remove('marked');
   r16.classList.remove('marked');
   r17.classList.remove('marked');
   r19.classList.remove('marked');
   r20.classList.remove('marked');
   r21.classList.remove('marked');
   radius18.classList.toggle('open');
   radius16.classList.remove('open');
   radius17.classList.remove('open');
   radius13.classList.remove('open');
   radius19.classList.remove('open');
   radius20.classList.remove('open');
   radius21.classList.remove('open');
}

r19.onclick = function () {
   r19.classList.toggle('marked');
   r13.classList.remove('marked');
   r16.classList.remove('marked');
   r17.classList.remove('marked');
   r18.classList.remove('marked');
   r20.classList.remove('marked');
   r21.classList.remove('marked');
   radius19.classList.toggle('open');
   radius16.classList.remove('open');
   radius17.classList.remove('open');
   radius18.classList.remove('open');
   radius13.classList.remove('open');
   radius20.classList.remove('open');
   radius21.classList.remove('open');
}

r20.onclick = function () {
   r20.classList.toggle('marked');
   r13.classList.remove('marked');
   r16.classList.remove('marked');
   r17.classList.remove('marked');
   r18.classList.remove('marked');
   r19.classList.remove('marked');
   r21.classList.remove('marked');
   radius20.classList.toggle('open');
   radius16.classList.remove('open');
   radius17.classList.remove('open');
   radius18.classList.remove('open');
   radius19.classList.remove('open');
   radius13.classList.remove('open');
   radius21.classList.remove('open');
}

r21.onclick = function () {
   r21.classList.toggle('marked');
   r13.classList.remove('marked');
   r16.classList.remove('marked');
   r17.classList.remove('marked');
   r18.classList.remove('marked');
   r19.classList.remove('marked');
   r20.classList.remove('marked');
   radius21.classList.toggle('open');
   radius16.classList.remove('open');
   radius17.classList.remove('open');
   radius18.classList.remove('open');
   radius19.classList.remove('open');
   radius20.classList.remove('open');
   radius13.classList.remove('open');
}
*/