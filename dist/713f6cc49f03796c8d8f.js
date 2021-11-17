import _asyncToGenerator from"@babel/runtime/helpers/asyncToGenerator";import _regeneratorRuntime from"@babel/runtime/regenerator";import style from"./style.css";import loading from"./assets/oval.svg";import pokeball from"./assets/pokeball.png";var d=document,$main=d.querySelector("main"),$links=d.querySelector(".links"),$logo=d.querySelector(".img-logo"),pokeAPI="https://pokeapi.co/api/v2/pokemon/";function loadPokemons(t){return _loadPokemons.apply(this,arguments)}function _loadPokemons(){return(_loadPokemons=_asyncToGenerator(_regeneratorRuntime.mark((function t(e){var n,a,r,o,s,c,i,l,u;return _regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,$main.innerHTML='<img class="loader" src="'.concat(loading,'" alt="Cargando...">'),t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:if(a=t.sent,r="",n.ok){t.next=11;break}throw{status:n.status,statusText:n.statusText};case 11:c=0;case 12:if(!(c<a.results.length)){t.next=25;break}return i=a.results[c].url,t.prev=14,t.delegateYield(_regeneratorRuntime.mark((function t(){var e,n,a;return _regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i);case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw{status:e.status,statusText:e.statusText};case 8:a=[],n.types.forEach((function(t){a.push(t.type.name)})),r+='\n        <div class="card">\n\t\t\t\t\t<div class="content">\n\n\n\t\t\t\t\t\t<div class="img-container">\n\t\t\t\t\t\t\t<img src="'.concat(n.sprites.front_default,'" alt="').concat(n.name,'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t\t<h3>Pokemon type: <br><span>').concat(a.join(", "),'</span></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="sci">\n\t\t\t\t\t\t<a href="#" class="btn check-poke">Check Pokemon</a>\n\t\t\t\t\t</div>\n        </div>\n        ');case 12:case"end":return t.stop()}}),t)}))(),"t0",16);case 16:t.next=22;break;case 18:t.prev=18,t.t1=t.catch(14),l=t.t1.statusText||"Something went wrong...",r+='\n        <div class="card">\n        <h3>Error '.concat(t.t1.status,": ").concat(l,"</h3>\n        </div>\n        ");case 22:c++,t.next=12;break;case 25:$main.innerHTML=r,o=a.previous?'<a href="'.concat(a.previous,'"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>'):"",s=a.next?'<a href="'.concat(a.next,'"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>'):"",$links.innerHTML=o+""+s,t.next=36;break;case 31:t.prev=31,t.t2=t.catch(0),console.log(t.t2),u=t.t2.statusText||"Something went wrong...",$main.innerHTML="<p>Error ".concat(t.t2.status,": ").concat(u,"</p>");case 36:case"end":return t.stop()}}),t,null,[[0,31],[14,18]])})))).apply(this,arguments)}$logo.innerHTML='<img src="'.concat(pokeball,'" alt="" />'),d.addEventListener("DOMContentLoaded",(function(t){return loadPokemons(pokeAPI)})),d.addEventListener("click",(function(t){t.target.matches(".links a")&&(t.preventDefault(),loadPokemons(t.target.getAttribute("href")))}));