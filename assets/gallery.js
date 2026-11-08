const GOOGLE_API_KEY = 'AIzaSyCqdRB_gUilyG8HmcfNOmrdvrhxhA52_uI';

        const projectFolders = {
            // Design project folders
            'trino-studio': '12iIRo4pJ9LurSxHWdenoJ_nBtHs6Is9e',
            'film-posters': '1EQvx6YGjXM5Jgs5hEmyzA06HR96YBNmc',
            'brand-identity': '1yIW1nJ7DtubWbqJ2wwwbLmGXHshT09ef',
            'mockups': '1UXP_LOqh_WQYf-IY6BchpxJKVnEIZXI-',
            'logo-designs': '1S7d36odrggflfV-hqfQWVXkiyS-vGIDo',
            'freelance': '1n9_ATSmYvondTUpP3vhqugvcv4Whg8B-',
            'mystash-ng': '1iPD60vFpp6GNDUWJ2ibj3h60uOIKYrsR',
            'elm-digital-agency': '1t4C6JIIypHZm1qSYAhlkWGu0S-Yjewxy',
            'portogolf-hotel-suites': '1OWvePdaSOV7zPHo-IQ-A_7i8kX9pSiJH',
            'vantage-edge': '11fgZ3f-4zusJzImRsCq8TyH6ysW6rNfX',
            'others': '1lfaQXH1yZixe-vP5hmVyO44XnAIzteXU',
        };

        // VIDEO FOLDERS CONFIGURATION
        // Each folder ID here will create ONE video category card
        // To add more video categories: Just add a new line with your folder ID
        const videoFolders = {
            'Educational/ Informative Ads': '1rX4pjRBjIVOVaY6PMGI849PEwjBkKNLw',
            'Motion Graphics': '1pxCE4FuGCR-HL5ioRva5uFMAB4XmInnm',
            'Promotional Ads': '1TYmYTkNybcWI5hZ0MjRxwD3ccz8kGHXa',
            'Event Highlights': '1PcWd5WjEfdkrliKlM0juswcb0MSTgj0J',
            'Products Ads': '140iGuuSgU8i36zF_aAcifd3Opzy0ZBm1',
            'Behind The Scene': '1fuM-_8ipepJEod8sxI134ZTTl20G1rRV',
            'Social Media Videos': '1_fd8wwdpTnrw6yQbzkwApbXD2omsMU_f'
            // Example additional folder
            // Add more folders here: 'folder-name': 'FOLDER_ID'
        };
        // ========================================
        // ✅ WEB DEV PROJECTS CONFIGURATION
        // Add/edit your web projects here
        // ========================================
        const webProjects = [
            {
                title: 'Dreamscape Events - Event Planning Website',
                description: 'A modern event planning website designed to showcase services, highlight past events, and make clients inquiries seamlessly through a clean, responsive and user-friendly interface.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                github: 'https://github.com/Josh-D-Boss/dreamscape-events',
                live: 'https://dreamscape-events.vercel.app/',
                image: 'img/DreamScape.png'
            },
            {
                title: 'Mounts Black — Wristwatch Brand Landing Page',
                description: 'A sleek luxury landing page built to showcase Mounts Black’s premium wristwatch collection with a clean, conversion-focused layout.',
                tech: ['HTML5', 'CSS3 (Vanilla CSS)', 'JavaScript'],
                github: 'https://github.com/Josh-D-Boss/jaymontblac-project',
                live: 'https://jaymontblac-project.vercel.app/',
                image: 'img/MontBlac.png'
            },

            {
                title: 'Lounge One — Lifestyle Lounge Landing Page',
                description: 'A modern, responsive landing page designed to highlight Lounge One’s brand, atmosphere, and customer experience.',
                tech: ['HTML5', 'CSS3 (Modular CSS)', 'JavaScript'],
                github: 'https://github.com/Josh-D-Boss/Project-Lounge-One',
                live: 'https://project-lounge-one.vercel.app',
                image: 'img/LoungeOne.png'
            },
            {
                title: 'Web Development Portfolio',
                description: 'A clean and responsive web development portfolio built to showcase projects, skills, and web work. Designed for easy customization and deployment.',
                tech: ['HTML5', 'CSS3 (Custom Vanilla CSS)', 'JavaScript'],
                github: 'https://github.com/Josh-D-Boss/Josh-Web-Design-Portfolio',
                live: 'https://josh-d-boss.github.io/Josh-Web-Design-Portfolio/',
                image: 'img/Portfolio.png' // add a screenshot of the template homepage here
            },

            {
                title: 'myStash — Financial Savings Landing Page',
                description: 'A simple, responsive landing page for myStash, a savings and personal finance platform designed to help users manage and grow their money with clarity and ease.',
                tech: ['HTML5', 'CSS3 (Responsive CSS)', 'JavaScript'],
                github: 'https://github.com/Josh-D-Boss/Project-myStash',
                live: 'https://project-my-stash.vercel.app',
                image: 'img/myStash.png'
            }


            // ✅ TO ADD MORE WEB PROJECTS: Just copy the structure above
        ];
const designs=[{"img": "img/Trino-Studio DP.png", "tag": "Design • Branding", "title": "Trino Studio", "sub": "2025 - Present", "key": "trino-studio"}, {"img": "img/Film-Posters DP.png", "tag": "Design • Branding", "title": "Film Posters", "sub": "Present", "key": "film-posters"}, {"img": "img/Brand-Identity DP.png", "tag": "Design • Branding", "title": "Brand Identity", "sub": "2025 - Present", "key": "brand-identity"}, {"img": "img/Mockups DP.png", "tag": "Design • Branding", "title": "Mockups", "sub": "Present", "key": "mockups"}, {"img": "img/Logo-Designs DP.png", "tag": "Design • Branding", "title": "Logo Designs", "sub": "Present", "key": "logo-designs"}, {"img": "img/Freelance DP.png", "tag": "Design • Various", "title": "Freelance", "sub": "2025", "key": "freelance"}, {"img": "img/myStash DP.jpg", "tag": "Design • Product", "title": "myStash.ng", "sub": "2024 - Present", "key": "mystash-ng"}, {"img": "img/ELM.jpg", "tag": "Design • Agency", "title": "ELM Digital Agency", "sub": "2024", "key": "elm-digital-agency"}, {"img": "img/Portogolf DP.jpg", "tag": "Design • Hospitality", "title": "Portogolf Hotel & Suites", "sub": "2023", "key": "portogolf-hotel-suites"}, {"img": "img/Vantage.jpg", "tag": "Design • Business", "title": "Vantage Edge", "sub": "2021 - 2022", "key": "vantage-edge"}, {"img": "img/Others DP.jpg", "tag": "Design • Various", "title": "Others", "sub": "2023", "key": "others"}];

const $=s=>document.querySelector(s),esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const types={designs:'Designs',videos:'Videos',websites:'Websites'};
let type=new URLSearchParams(location.search).get('type');if(!types[type])type='designs';
const grid=$('#grid'),modal=$('#modal'),mb=$('#mb');
function drive(folder,mime,fields){return fetch('https://www.googleapis.com/drive/v3/files?q='+encodeURIComponent("'"+folder+"' in parents and mimeType contains '"+mime+"'")+'&fields='+encodeURIComponent('files('+fields+')')+'&orderBy=createdTime%20desc&pageSize=200&key='+GOOGLE_API_KEY).then(r=>{if(!r.ok)throw new Error('Google Drive error '+r.status);return r.json()}).then(d=>d.files||[])}
$('#tabs').innerHTML=Object.keys(types).map(k=>'<a href="gallery.html?type='+k+'"'+(k==type?' class="on"':'')+'>'+types[k]+'</a>').join('');
document.title=types[type]+' | Joshua C. Charlington';$('#ttl').textContent=types[type];
const note=m=>'<p class="note">'+m+'</p>';
function card(img,tag,title,sub,foot,play){return '<article class="pc"><div class="th">'+(img?'<img src="'+esc(img)+'" alt="'+esc(title)+'" loading="lazy">':'<i class="ri-video-line"></i>')+(play?'<span class="pl-b"><i class="ri-play-fill"></i></span>':'')+'</div><div class="pb"><span class="tg2">'+esc(tag)+'</span><h3>'+esc(title)+'</h3><p>'+sub+'</p>'+foot+'</div></article>'}
function openM(title,count){$('#mt').textContent=title;$('#mc').textContent=count||'';mb.innerHTML='<div class="spin"></div>';modal.classList.add('open');document.body.style.overflow='hidden'}
function closeM(){modal.classList.remove('open');document.body.style.overflow='';mb.innerHTML=''}
$('#mx').onclick=closeM;document.addEventListener('keydown',e=>{if(e.key=='Escape')closeM()});
if(type=='designs'){
 grid.innerHTML=designs.map(d=>card(d.img,d.tag,d.title,esc(d.sub),'<button class="btn" data-k="'+esc(d.key)+'" data-t="'+esc(d.title)+'">View Project</button>')).join('');
 grid.onclick=async e=>{const b=e.target.closest('button[data-k]');if(!b)return;openM(b.dataset.t);
  try{const f=await drive(projectFolders[b.dataset.k],'image/','id,name');if(!f.length){mb.innerHTML=note('No images in this project yet.');return}
   $('#mc').textContent=f.length+' design'+(f.length>1?'s':'');
   mb.innerHTML='<div class="ig">'+f.map(x=>'<a href="https://drive.google.com/thumbnail?id='+x.id+'&sz=w2000" target="_blank" rel="noopener"><img src="https://drive.google.com/thumbnail?id='+x.id+'&sz=w1000" alt="'+esc(x.name)+'" loading="lazy"></a>').join('')+'</div>'}
  catch(err){mb.innerHTML=note('Could not load this project. '+esc(err.message))}}}
else if(type=='websites'){
 grid.innerHTML=webProjects.map(p=>card(p.image,'Web • Development',p.title,esc(p.description)+'<small>'+esc(p.tech.join(' • '))+'</small>','<div class="two"><a class="btn dk" href="'+esc(p.github)+'" target="_blank" rel="noopener"><i class="ri-github-line"></i>Code</a><a class="btn" href="'+esc(p.live)+'" target="_blank" rel="noopener"><i class="ri-external-link-line"></i>Live demo</a></div>')).join('')}
else{
 grid.innerHTML=note('Loading videos…');
 Promise.all(Object.entries(videoFolders).map(([n,id])=>drive(id,'video/','id,name,thumbnailLink').then(f=>({n,id,f})).catch(()=>({n,id,f:[]})))).then(r=>{
  grid.innerHTML=r.map((c,i)=>card(c.f[0]&&c.f[0].thumbnailLink,'Video',c.n,c.f.length+' video'+(c.f.length!=1?'s':''),'<button class="btn" data-i="'+i+'"><i class="ri-play-line"></i>Watch videos</button>',1)).join('');
  grid.onclick=e=>{const b=e.target.closest('button[data-i]');if(!b)return;const c=r[b.dataset.i];openM(c.n,c.f.length+' video'+(c.f.length!=1?'s':''));
   if(!c.f.length){mb.innerHTML=note('No videos in this category yet.');return}
   mb.innerHTML='<div class="vp"><div><div class="fr"></div><h3 id="vt"></h3></div><div class="vl">'+c.f.map((v,j)=>'<button data-j="'+j+'"><i class="ri-play-circle-line"></i><span>'+esc(v.name)+'</span></button>').join('')+'</div></div>';
   const play=j=>{$('.fr').innerHTML='<iframe src="https://drive.google.com/file/d/'+c.f[j].id+'/preview" allow="autoplay; encrypted-media" allowfullscreen></iframe>';$('#vt').textContent=c.f[j].name;mb.querySelectorAll('.vl button').forEach((x,k)=>x.classList.toggle('on',k==j))};
   mb.querySelector('.vl').onclick=ev=>{const x=ev.target.closest('button');if(x)play(+x.dataset.j)};play(0)}})}
