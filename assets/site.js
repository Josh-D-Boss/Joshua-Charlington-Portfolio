(function(){
var b=document.body,p=b.dataset.page,l=[['index.html','Home'],['about.html','About'],['contact.html','Contact']];
function a(h,t,k){return '<a href="'+h+'"'+(k==p?' class="on" aria-current="page"':'')+'>'+t+'</a>'}
var n=document.createElement('nav');n.className='nav';n.setAttribute('aria-label','Main');
n.innerHTML='<span class="mono">JC</span><a class="brand" href="index.html">Joshua C. Charlington</a>'+a('index.html','Home','home')+a('about.html','About','about')+
'<div class="dd"><button aria-haspopup="true">Portfolio <i class="ri-arrow-down-s-line"></i></button><div class="menu">'+
['designs:Designs','videos:Videos','websites:Websites'].map(function(x){x=x.split(':');return '<a href="gallery.html?type='+x[0]+'">'+x[1]+'</a>'}).join('')+'</div></div>'+
a('contact.html','Contact','contact')+'<button class="tg" aria-label="Toggle theme"><i class="ri-moon-line"></i></button><button class="burger" aria-label="Menu"><i class="ri-menu-line"></i></button>';
b.insertBefore(n,b.firstChild);
function set(t){b.classList.remove('light-mode','dark-mode');b.classList.add(t+'-mode');n.querySelector('.tg i').className=t=='dark'?'ri-sun-line':'ri-moon-line'}
var s;try{s=localStorage.getItem('theme')}catch(e){}set(s||'light');
n.querySelector('.tg').onclick=function(){var t=b.classList.contains('light-mode')?'dark':'light';set(t);try{localStorage.setItem('theme',t)}catch(e){}};
n.querySelector('.burger').onclick=function(){n.classList.toggle('open')};
document.querySelectorAll('[data-count]').forEach(function(e){var t=+e.dataset.count,i=0;(function f(){i=Math.min(t,i+Math.ceil(t/40));e.textContent=i+(e.dataset.plus||'');if(i<t)setTimeout(f,30)})()});
setTimeout(function(){document.querySelectorAll('.bar .t i').forEach(function(e){e.style.width=e.dataset.w+'%'})},200);
var qs=document.querySelectorAll('.qs'),ds=document.querySelectorAll('.dots button');
function sh(i){qs.forEach(function(e,j){e.hidden=j!=i});ds.forEach(function(e,j){e.className=j==i?'on':''})}
ds.forEach(function(d,i){d.onclick=function(){sh(i)}});if(qs.length)sh(0);
})();
