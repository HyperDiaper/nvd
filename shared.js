/* NVD GROUP — shared.js */

// ══ UPDATE SOCIAL LINKS HERE ══
const SITE={
  facebook:'https://www.facebook.com/NavedAkramNVD',
  instagram:'https://www.instagram.com/navedakramnvd',
  linkedin:'https://www.linkedin.com/in/navedakram/',
  youtube:'https://www.youtube.com/@NVDGROUP',
  whatsapp:'https://wa.me/919730266903',
  email:'mailto:freelance.nvd@gmail.com',
  phone:'tel:+919730266903',
  pmc_site:'#',   // ← replace with PMC website URL when ready
  exim_site:'#',  // ← replace with Exim website URL when ready
};

// Building silhouette SVG
const BLDG='<svg viewBox="0 0 1400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;position:absolute;bottom:0;pointer-events:none"><rect x="0" y="200" width="55" height="100" fill="currentColor" opacity=".05"/><rect x="20" y="170" width="18" height="30" fill="currentColor" opacity=".05"/><rect x="60" y="120" width="85" height="180" fill="currentColor" opacity=".05"/><rect x="150" y="170" width="38" height="130" fill="currentColor" opacity=".05"/><rect x="193" y="95" width="65" height="205" fill="currentColor" opacity=".05"/><rect x="265" y="150" width="48" height="150" fill="currentColor" opacity=".05"/><rect x="318" y="70" width="75" height="230" fill="currentColor" opacity=".05"/><rect x="400" y="130" width="52" height="170" fill="currentColor" opacity=".05"/><rect x="458" y="45" width="105" height="255" fill="currentColor" opacity=".05"/><rect x="568" y="100" width="62" height="200" fill="currentColor" opacity=".05"/><rect x="636" y="140" width="48" height="160" fill="currentColor" opacity=".05"/><rect x="690" y="75" width="88" height="225" fill="currentColor" opacity=".05"/><rect x="784" y="165" width="44" height="135" fill="currentColor" opacity=".05"/><rect x="834" y="105" width="72" height="195" fill="currentColor" opacity=".05"/><rect x="912" y="155" width="52" height="145" fill="currentColor" opacity=".05"/><rect x="970" y="85" width="82" height="215" fill="currentColor" opacity=".05"/><rect x="1058" y="135" width="48" height="165" fill="currentColor" opacity=".05"/><rect x="1112" y="105" width="68" height="195" fill="currentColor" opacity=".05"/><rect x="1186" y="165" width="52" height="135" fill="currentColor" opacity=".05"/><rect x="1244" y="95" width="76" height="205" fill="currentColor" opacity=".05"/><rect x="1326" y="145" width="74" height="155" fill="currentColor" opacity=".05"/></svg>';

// Social icon paths
const SI={
  fb:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  ig:'<rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="2"/>',
  li:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  yt:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>',
  wa:'<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>',
};

function mkMetalBtn(text,href){
  return`<a href="${href}" class="btn-metal"><div class="btn-metal-outer"><div class="btn-metal-inner"></div><div class="btn-metal-face"><div class="btn-metal-shine"></div>${text}</div></div></a>`;
}

function buildNav(active){
  const ps=[['index.html','NVD Group','home'],['builders.html','Builders & Dev','builders'],['pmc.html','PMC','pmc'],['exim.html','Exim','exim'],['contact.html','Contact','contact']];
  const links=ps.slice(0,4).map(([h,l,id])=>`<li><a href="${h}"${id===active?' class="active"':''}>${l}</a></li>`).join('');
  return`<nav class="nav" id="siteNav"><div class="nav-inner"><a href="index.html" class="nav-logo"><img src="img/bd_logo_transparent.png" alt="NVD Group" style="height:120px;width:auto"/></a><ul class="nav-links">${links}</ul><div class="nav-right"><div class="nav-divider"></div><div class="nav-cta-wrap">${mkMetalBtn('Book Free Consult','contact.html')}</div></div><button class="nav-toggle" id="navToggle"><span></span><span></span><span></span></button></div></nav><div class="mobile-nav" id="mobileNav">${ps.map(([h,l])=>`<a href="${h}">${l}</a>`).join('')}<a href="contact.html" class="mobile-nav-cta" style="font-family:'DM Sans',sans-serif;font-size:.8rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-top:1.5rem;padding:.75rem 2.5rem;border:1.5px solid var(--blue);border-radius:100px;color:var(--blue)">Book Free Consult</a></div>`;
}

function buildFooter(){
  const yr=new Date().getFullYear();
  const soc=(href,lbl,path)=>`<a href="${href}" target="_blank" rel="noopener" class="f-soc" aria-label="${lbl}"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">${path}</svg></a>`;
  return`<footer class="footer"><div class="wrap"><div class="footer-top"><div><div class="f-name">NVD Group</div><span class="f-tag">Build · Consult · Grow</span><p class="f-desc">A multi-disciplinary group of companies in Amravati, Maharashtra — delivering construction, project management and trade solutions across India and the Middle East.</p><div class="f-socials">${soc(SITE.facebook,'Facebook',SI.fb)}${soc(SITE.instagram,'Instagram',SI.ig)}${soc(SITE.linkedin,'LinkedIn',SI.li)}${soc(SITE.youtube,'YouTube',SI.yt)}${soc(SITE.whatsapp,'WhatsApp',SI.wa)}</div></div><div class="footer-col"><div class="f-col-h">Companies</div><ul><li><a href="builders.html">NVD Builders & Developers</a></li><li><a href="pmc.html">NVD Project Management</a></li><li><a href="exim.html">NVD Exim</a></li></ul></div><div class="footer-col"><div class="f-col-h">Quick Links</div><ul><li><a href="index.html">Home</a></li><li><a href="builders.html#projects">Projects</a></li><li><a href="pmc.html#international">International Work</a></li><li><a href="contact.html">Book Free Consult</a></li></ul></div><div class="footer-col"><div class="f-col-h">Contact</div><address>186, AMC 50/91, Frezarpura<br>Amravati, Maharashtra — 444602<br>India<br><br><a href="${SITE.email}">freelance.nvd@gmail.com</a><br><a href="${SITE.phone}">+91 97302 66903</a></address></div></div><div class="f-bottom"><p>© ${yr} NVD Group. All rights reserved. Amravati · Maharashtra · India</p><p>Build · Consult · Grow</p></div></div></footer><a href="contact.html" class="consult-fab"><div class="fab-pulse"></div><span>Book Free Consult</span></a>`;
}

function initPage(active){
  // Nav + footer
  document.body.insertAdjacentHTML('afterbegin',buildNav(active));
  document.body.insertAdjacentHTML('beforeend',buildFooter());

  // Silhouettes
  document.querySelectorAll('.bldg-bg').forEach(el=>el.innerHTML=BLDG);

  // Nav scroll
  const nav=document.getElementById('siteNav');
  const onScroll=()=>nav.classList.toggle('solid',scrollY>50);
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  // Mobile menu
  const tog=document.getElementById('navToggle'),mob=document.getElementById('mobileNav');
  tog.addEventListener('click',()=>{
    const o=mob.classList.toggle('open');tog.classList.toggle('open',o);
    document.body.style.overflow=o?'hidden':'';
  });
  mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mob.classList.remove('open');tog.classList.remove('open');document.body.style.overflow='';
  }));

  // Metal button press effect
  document.querySelectorAll('.btn-metal').forEach(btn=>{
    btn.addEventListener('mousedown',()=>btn.classList.add('pressed'));
    btn.addEventListener('mouseup',()=>btn.classList.remove('pressed'));
    btn.addEventListener('mouseleave',()=>btn.classList.remove('pressed'));
  });

  // Spotlight card mouse tracking
  document.querySelectorAll('.spotlight-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',(e.clientX-r.left)+'px');
      card.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  });

  // Scroll reveal
  const obs=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}})},{threshold:.07,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  // Counters
  document.querySelectorAll('[data-count]').forEach(el=>{
    const co=new IntersectionObserver(en=>{en.forEach(e=>{if(!e.isIntersecting)return;
      const t=+el.dataset.count,s=el.dataset.suffix||'',d=1800,s0=performance.now();
      const tick=n=>{const p=Math.min((n-s0)/d,1);el.textContent=Math.round((1-Math.pow(1-p,3))*t)+s;if(p<1)requestAnimationFrame(tick)};
      requestAnimationFrame(tick);co.unobserve(el)})},{threshold:.5});
    co.observe(el);
  });
}
