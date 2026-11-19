(function(){
try{if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})});if(window.caches)caches.keys().then(function(k){k.forEach(function(x){caches.delete(x)})})}}catch(e){}
var $=function(i){return document.getElementById(i)};
var b=$('burger');
function t(o){document.body.classList.toggle('open',o);b.setAttribute('aria-expanded',o)}
b.addEventListener('click',function(){t(!document.body.classList.contains('open'))});
$('menu').addEventListener('click',function(e){if(e.target.tagName==='A')t(false)});
var boxes=[].slice.call(document.querySelectorAll('#cl input')),prog=$('prog'),K='tusti-docs';
if(boxes.length){
try{var s=JSON.parse(localStorage.getItem(K)||'[]');boxes.forEach(function(x,i){x.checked=!!s[i]})}catch(e){}
var up=function(){var n=boxes.filter(function(x){return x.checked}).length;
prog.textContent=n===boxes.length?'All documents ready. Call us to book your seat.':n+' of '+boxes.length+' ready';
try{localStorage.setItem(K,JSON.stringify(boxes.map(function(x){return x.checked})))}catch(e){}};
boxes.forEach(function(x){x.addEventListener('change',up)});up()}
var HI={"Explore":"देखें","Everything you need":"आपको जो कुछ चाहिए","Gallery":"गैलरी","Photos":"फ़ोटो","About":"हमारे बारे में","Alumni":"पूर्व छात्र","Your path from training to a job":"प्रशिक्षण से नौकरी तक का आपका रास्ता","Common questions":"आम सवाल","Call now":"अभी कॉल करें","Apply":"आवेदन करें","Benefits":"लाभ","Eligibility":"पात्रता","Documents":"दस्तावेज़","Contact":"संपर्क","Start a hotel and airline career. For free.":"होटल और एयरलाइन में करियर बनाएँ। बिल्कुल मुफ़्त।","Admissions are open for the Guest Service Executive (Front Office) course. It is a government-certified, fully sponsored course with free residential training for rural youth in Nagaland.":"गेस्ट सर्विस एक्ज़ीक्यूटिव (फ्रंट ऑफिस) कोर्स में प्रवेश शुरू हैं। यह सरकार द्वारा प्रमाणित, पूरी तरह प्रायोजित कोर्स है, जिसमें नागालैंड के ग्रामीण युवाओं के लिए मुफ़्त आवासीय प्रशिक्षण है।","Book your seat":"अपनी सीट बुक करें","See documents needed":"ज़रूरी दस्तावेज़ देखें","No fees":"कोई फ़ीस नहीं","No hidden charges":"कोई छिपा शुल्क नहीं","Free uniform & materials":"मुफ़्त यूनिफ़ॉर्म और सामग्री","Placement support":"प्लेसमेंट सहायता","What you get":"आपको क्या मिलेगा","Everything is sponsored. You learn, live and train at no cost.":"सब कुछ प्रायोजित है। आप बिना खर्च के सीखते, रहते और प्रशिक्षण लेते हैं।","Free skill training":"मुफ़्त कौशल प्रशिक्षण","Placement support":"प्लेसमेंट सहायता","On-the-Job Training":"ऑन-द-जॉब ट्रेनिंग","Soft skills, English and IT":"सॉफ़्ट स्किल्स, अंग्रेज़ी और आईटी","Uniforms and materials":"यूनिफ़ॉर्म और सामग्री","Who can apply":"कौन आवेदन कर सकता है","How to join":"कैसे जुड़ें","Documents to bring":"साथ लाने वाले दस्तावेज़","Where our trainees work":"हमारे प्रशिक्षु कहाँ काम करते हैं","Book your seat now":"अभी अपनी सीट बुक करें","Send on WhatsApp":"व्हाट्सऐप पर भेजें","Full name":"पूरा नाम","Phone number":"फ़ोन नंबर","Age":"उम्र","Highest education":"सर्वोच्च शिक्षा","Village / town":"गाँव / शहर"};
var lb=$('lang'),hi=false,els=[].slice.call(document.querySelectorAll('nav.links a,.bar a,.eyebrow,h1,h2,.lead,.sub,.btn,.free span,.item h3,label')),orig=new Map();
els.forEach(function(e){var n=e.firstChild;while(n&&n.nodeType!==3)n=n.nextSibling;if(n&&HI[n.nodeValue.trim()])orig.set(e,[n,n.nodeValue])});
function setLang(x){hi=x;orig.forEach(function(v,e){v[0].nodeValue=x?HI[v[1].trim()]:v[1]});document.documentElement.lang=x?'hi':'en';lb.textContent=x?'English':'हिन्दी';try{localStorage.setItem('tusti-lang',x?'hi':'en')}catch(e){}}
lb.addEventListener('click',function(){setLang(!hi)});
try{if(localStorage.getItem('tusti-lang')==='hi')setLang(true)}catch(e){}
var f=$('apply');
if(f)f.addEventListener('submit',function(ev){ev.preventDefault();var g=function(i){return $(i).value.trim()},er=$('err');
var ph=g('fp').replace(/\D/g,'');
if(!g('fn')){er.textContent='Enter your full name.';return}
if(ph.length<10){er.textContent='Enter a 10-digit phone number.';return}
var a=+g('fa');if(!a||a<18||a>35){er.textContent='This course is for ages 18 to 35.';return}
er.textContent='';
var tx='Hello, I want to apply for the Guest Service Executive (Front Office) course.\nName: '+g('fn')+'\nPhone: '+g('fp')+'\nAge: '+a+'\nEducation: '+g('fe')+'\nVillage/town: '+g('fv');
window.open('https://wa.me/918731002934?text='+encodeURIComponent(tx),'_blank','noopener')});
var sl=$('slides');
if(sl){var raw=sl.getAttribute('data-src'),urls=raw?raw.split(','):[].slice.call(document.querySelectorAll('.gal img')).map(function(i){return i.src}),S=[],hd=$('hdots'),cur=0,tm;
urls.forEach(function(u,i){var e=document.createElement('div');e.className='s'+(i?'':' on');e.style.backgroundImage='url("'+u+'")';sl.appendChild(e);S.push(e);
var bt=document.createElement('button');bt.type='button';bt.setAttribute('aria-label','Photo '+(i+1));bt.className=i?'':'on';bt.addEventListener('click',function(){show(i);auto()});hd.appendChild(bt)});
var show=function(i){i=(i+S.length)%S.length;if(i===cur)return;var a=S[cur],n=S[i];n.classList.add('nt');n.classList.remove('out');void n.offsetWidth;n.classList.remove('nt');a.classList.remove('on');a.classList.add('out');n.classList.add('on');cur=i;[].slice.call(hd.children).forEach(function(x,k){x.className=k===i?'on':''})};
var auto=function(){clearInterval(tm);if(S.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)tm=setInterval(function(){show(cur+1)},5000)};
var x0=null;sl.parentNode.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
sl.parentNode.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>50){show(cur+(dx<0?1:-1));auto()}},{passive:true});
auto()}
var d=$('lb');
if(d){var im=d.querySelector('img');
document.querySelectorAll('.gal .g').forEach(function(x){x.addEventListener('click',function(){var m=x.querySelector('img');im.src=m.src;im.alt=m.alt;if(d.showModal)d.showModal()})});
d.addEventListener('click',function(){d.close()})}
})();