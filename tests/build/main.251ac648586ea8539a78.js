(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2paa":function(e,n,t){var s=t("mp5j");e.exports=(s.default||s).template({1:function(e,n,t,s,r){var a=e.lambda,o=e.escapeExpression,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <li>\n            <input type="radio" id="'+o(a(n,n))+'" name="answer'+o(a(null!=n?i(n,"numberOfQuestion"):n,n))+'"/>\n            <label for="'+o(a(n,n))+'">'+o(a(n,n))+"</label>\n        </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,s,r){var a,o=e.lambda,i=e.escapeExpression,l=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"<fieldset>\n    <legend>Question "+i(o(null!=n?l(n,"numberOfQuestion"):n,n))+":<br/>"+i(o(null!=n?l(n,"question"):n,n))+"</legend>\n    <ul>\n"+(null!=(a=l(t,"each").call(null!=n?n:e.nullContext||{},null!=n?l(n,"answers"):n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:4,column:8},end:{line:9,column:17}}}))?a:"")+'    </ul>\n    <div>\n        <button type="submit" name="next" disabled>Next</button>\n    </div>\n</fieldset>'},useData:!0})},DZZo:function(e,n,t){var s=t("mp5j");e.exports=(s.default||s).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,s,r){return'<p id="totalScore">TotalScore: '+e.escapeExpression(e.lambda(n,n))+"%</p>"},useData:!0})},L1EO:function(e,n,t){},NLh8:function(e,n,t){var s=t("mp5j");e.exports=(s.default||s).template({1:function(e,n,t,s,r,a,o){var i,l,u=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,p=e.escapeExpression,d=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"<fieldset>\n    <legend>Question "+p("function"==typeof(l=null!=(l=d(t,"numberOfQuestion")||(null!=n?d(n,"numberOfQuestion"):n))?l:c)?l.call(u,{name:"numberOfQuestion",hash:{},data:r,loc:{start:{line:3,column:21},end:{line:3,column:41}}}):l)+":<br/>"+p("function"==typeof(l=null!=(l=d(t,"question")||(null!=n?d(n,"question"):n))?l:c)?l.call(u,{name:"question",hash:{},data:r,loc:{start:{line:3,column:47},end:{line:3,column:59}}}):l)+"</legend>\n    <ul>\n"+(null!=(i=d(t,"each").call(u,null!=n?d(n,"answers"):n,{name:"each",hash:{},fn:e.program(2,r,0,a,o),inverse:e.noop,data:r,loc:{start:{line:5,column:8},end:{line:9,column:17}}}))?i:"")+"    </ul>\n</fieldset>\n"},2:function(e,n,t,s,r,a,o){var i=e.lambda,l=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <li>\n            <p id="'+l(i(null!=o[1]?u(o[1],"numberOfQuestion"):o[1],n))+l(i(n,n))+'">'+l(i(n,n))+"</p>\n        </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,s,r,a,o){var i;return null!=(i=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,r,0,a,o),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:12,column:9}}}))?i:""},useData:!0,useDepths:!0})},QfWi:function(e,n,t){"use strict";t.r(n);t("RtS0"),t("IvQZ"),t("lmye"),t("3dw1"),t("L1EO");var s,r,a=[{question:"Что не является HTML-тегом?",answers:["<i></i>","<b></b>","<a></a>","<c></c>"],answer:"",answerIsOk:!1,trueAnswer:"<c></c>"},{question:"Блочный элемент от строчного отличается тем что...",answers:["Внутри нельзя размещать другой блочный элемент","Ширина определяется контентом","Не обязан начинаться с новой строки","Занимает всю доступную ширину родителя"],answer:"",answerIsOk:!1,trueAnswer:"Занимает всю доступную ширину родителя"},{question:"Выберите верное описание поведения потока выполнения документа для европейских стран.",answers:["Сверху вниз, слева направо и смена направления при переходе на новую строку","Сверху вниз, справа налево","Сверху вниз, слева направо","Снизу вверх, справа налево"],answer:"",answerIsOk:!1,trueAnswer:"Сверху вниз, слева направо"},{question:"Какой тег может быть вложен непосредственно внутрь списков (ol и ul)?",answers:["только строчные","только блочные теги","только li","любой"],answer:"",answerIsOk:!1,trueAnswer:"только li"},{question:"Что не является атрибутом тега a?",answers:["href","title","alt","target"],answer:"",answerIsOk:!1,trueAnswer:"alt"},{question:"Какой из примеров кода пройдет валидацию?",answers:['<img src = "" alt = "">',"<b>Hello <b>World!</b></b>","Не один из примеров не пройдет валидацию","<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ratione, omnis eveniet deleniti, error earum blanditiis ullam doloribus repudiandae esse cumque corrupti perspiciatis sit rerum, sapiente nulla modi placeat aut?</p>"],answer:"",answerIsOk:!1,trueAnswer:'<img src = "" alt = "">'},{question:"Может ли на странице быть больше одно тега h1?",answers:["Да, HTML5 спецификация это позволяет.","Да, HTML5 спецификация это позволяет, но это не рекомендуется.","Нет, HTML5 спецификация этого не позволяет."],answer:"",answerIsOk:!1,trueAnswer:"Да, HTML5 спецификация это позволяет, но это не рекомендуется."},{question:"Является ли следующая разметка валидной? <div>\n        <p>\n          <div>\n          <p>\n          </p>\n        </p>\n          </div>\n      </div>",answers:["Да","Нет"],answer:"",answerIsOk:!1,trueAnswer:"Нет"},{question:"Выберите валидный HTML комментрий:",answers:["/* this is a comment */","# this is a comment","\x3c!-- this is a comment --\x3e","// this is a comment"],answer:"",answerIsOk:!1,trueAnswer:"\x3c!-- this is a comment --\x3e"},{question:"Какой из этих тегов не строчный?",answers:["<a></a>","<b></b>","<i></i>","<p></p>"],answer:"",answerIsOk:!1,trueAnswer:"<p></p>"}],o=t("2paa"),i=t.n(o),l=t("NLh8"),u=t.n(l),c=t("DZZo"),p=t.n(c),d=0,m=0,f=[],w={body:document.querySelector("body"),testList:document.querySelector(".js-testList"),startBtn:document.querySelector('button[name="start"]'),nextBtn:document.querySelector('button[name="next"]')};function h(e){var n=e.length;return Math.floor(Math.random()*n)}function b(e){for(var n=[];n.length!==e.length;){var t=h(e);n.includes(t)||n.push(t)}return n}w.body.addEventListener("click",(function(e){if("INPUT"===e.target.nodeName){var n=e.target.id;f[d-1].answer=n,document.querySelector('button[name="next"]').disabled=!1}if("BUTTON"===e.target.nodeName){e.target===w.startBtn&&(w.startBtn.classList.add("highButton"),s=b(a)),f.length<a.length&&(r=b(a[s[d]].answers));var t=a[s[d]];if(f.length===a.length){console.log("test is finish!"),w.testList.innerHTML="",w.startBtn.classList.remove("highButton"),d=0,s.length=0,r.length=0;var o=f.map((function(e,n,t){return e.score=0,e.answer===e.trueAnswer&&(e.answerIsOk=!0,e.score=100/t.length),e}));o.forEach((function(e){m+=e.score}));w.testList.insertAdjacentHTML("beforeend",p()(m)),w.testList.insertAdjacentHTML("beforeend",u()(o));var l=document.querySelectorAll("p");return o.forEach((function(e,n){l.forEach((function(n,t){"totalScore"===n.id&&(m>=80?n.classList.add("success"):n.classList.add("unSuccess")),""+e.numberOfQuestion+e.answer===n.id&&(e.answerIsOk?n.classList.add("success"):n.classList.add("unSuccess"))}))})),a.forEach((function(e){return e.answerIsOk=!1})),m=0,void(f.length=0)}d+=1,t.answers=t.answers.map((function(e,n,t){return t[n=r[n]]})),t.numberOfQuestion=d,f.push(t),w.testList.innerHTML="",w.testList.insertAdjacentHTML("beforeend",i()(t))}}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.251ac648586ea8539a78.js.map