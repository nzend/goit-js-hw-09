function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function x(e){return c=e,f=setTimeout(j,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function j(){var e=v();if(h(e))return S(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,o-(e-c)):n}(e))}function S(e){return f=void 0,p&&r?y(e):(r=i=void 0,a)}function T(){var e=v(),n=h(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=g(t)||0,b(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:S(v())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};y.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===y.textarea.value.trim()||""===y.input.value.trim())return alert("Please fill in all the fields!");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.form.addEventListener("input",e(t)((function(e){const t={email:y.form.email.value,message:y.form.message.value},n=JSON.stringify(t);localStorage.setItem("feedback-form-state",n)}),0)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.textarea.value=e.message,y.input.value=e.email)}();
//# sourceMappingURL=03-feedback.0679993f.js.map