(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});
  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
  document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
  window.addEventListener('load',()=>document.querySelector('.loader')?.classList.add('done'));
  if(reduceMotion){ document.querySelectorAll('.reveal,.reveal-card').forEach(el=>el.style.visibility='visible'); return; }
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy .eyebrow',{y:25,opacity:0,duration:.8,delay:.25,ease:'power3.out'});
  gsap.from('.hero h1',{y:55,opacity:0,duration:1.05,delay:.38,ease:'power4.out'});
  gsap.from('.hero-sub',{y:25,opacity:0,duration:.8,delay:.55,ease:'power3.out'});
  gsap.from('.hero-actions',{y:20,opacity:0,duration:.8,delay:.68,ease:'power3.out'});
  gsap.to('.hero-bg',{scale:1.08,yPercent:7,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('.escape-bg',{yPercent:7,ease:'none',scrollTrigger:{trigger:'.escape',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.utils.toArray('.reveal').forEach(el=>gsap.fromTo(el,{y:35,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 84%',once:true}}));
  gsap.utils.toArray('.reveal-card').forEach((el,i)=>gsap.fromTo(el,{y:30,opacity:0},{y:0,opacity:1,duration:.65,delay:(i%4)*.08,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
  document.querySelectorAll('.facility-card,.activity-card,.experience-card').forEach(card=>{
    card.addEventListener('pointerenter',()=>gsap.to(card.querySelector('img'),{scale:1.05,duration:.55,ease:'power2.out'}));
    card.addEventListener('pointerleave',()=>gsap.to(card.querySelector('img'),{scale:1,duration:.55,ease:'power2.out'}));
  });
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-75,behavior:'smooth'});}
  }));
})();
