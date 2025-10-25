
(function(){
  const btn=document.querySelector('#themeToggle');
  const saved=localStorage.getItem('theme');
  if(saved){document.documentElement.setAttribute('data-theme',saved);}
  if(btn){btn.addEventListener('click',()=>{
    const cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',cur);localStorage.setItem('theme',cur);
  })}
  const menuBtn=document.querySelector('#menuToggle');const links=document.querySelector('.nav-links');
  if(menuBtn&&links){menuBtn.addEventListener('click',()=>links.classList.toggle('open'));}
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===path){a.classList.add('active');}});
})();
