import _asyncToGenerator from"@babel/runtime/helpers/asyncToGenerator";import _regeneratorRuntime from"@babel/runtime/regenerator";import style from"./style.css";alert("workin");var d=document,$main=d.querySelector("main"),$links=d.querySelector(".links"),pokeAPI="https://pokeapi.co/api/v2/pokemon/";function loadPokemons(e){return _loadPokemons.apply(this,arguments)}function _loadPokemons(){return(_loadPokemons=_asyncToGenerator(_regeneratorRuntime.mark((function e(t){var n,a,r,s,o,c,i,u,l;return _regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,$main.innerHTML='<img class="loader" src="./assets/oval.svg" alt="Cargando...">',e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(a=e.sent,r="",n.ok){e.next=11;break}throw{status:n.status,statusText:n.statusText};case 11:c=0;case 12:if(!(c<a.results.length)){e.next=25;break}return i=a.results[c].url,e.prev=14,e.delegateYield(_regeneratorRuntime.mark((function e(){var t,n,a;return _regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i);case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw{status:t.status,statusText:t.statusText};case 8:a=[],n.types.forEach((function(e){a.push(e.type.name)})),r+='\n        <div class="card">\n          <div class="card-header">\n            <h2>'.concat(n.name.toUpperCase(),'</h3>\n            <button class="btn star"><i class="far fa-star" aria-hidden="true"></i></button>\n          </div>\n\n          <div class="img-container">\n            <div class="square"></div>\n            <img src="').concat(n.sprites.front_default,'" alt="').concat(n.name,'">\n          </div>\n          <div class="info">\n            <h4>Pokemon type: ').concat(a.join(", "),'.</h3>\n          </div>\n\n          <button class="btn check-poke">Check Pokemon</button>\n        </div>\n        ');case 12:case"end":return e.stop()}}),e)}))(),"t0",16);case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(14),u=e.t1.statusText||"Something went wrong...",r+='\n        <div class="card">\n        <h3>Error '.concat(e.t1.status,": ").concat(u,"</h3>\n        </div>\n        ");case 22:c++,e.next=12;break;case 25:$main.innerHTML=r,s=a.previous?'<a href="'.concat(a.previous,'"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>'):"",o=a.next?'<a href="'.concat(a.next,'"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>'):"",$links.innerHTML=s+""+o,e.next=36;break;case 31:e.prev=31,e.t2=e.catch(0),console.log(e.t2),l=e.t2.statusText||"Something went wrong...",$main.innerHTML="<p>Error ".concat(e.t2.status,": ").concat(l,"</p>");case 36:case"end":return e.stop()}}),e,null,[[0,31],[14,18]])})))).apply(this,arguments)}d.addEventListener("DOMContentLoaded",(function(e){return loadPokemons(pokeAPI)})),d.addEventListener("click",(function(e){e.target.matches(".links a")&&(e.preventDefault(),loadPokemons(e.target.getAttribute("href")))}));