!function(){var t={bodyBackground:document.querySelector("body"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")},o=null;t.stopButton.disabled=!0,t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,t.stopButton.disabled=!1,o=setInterval((function(){t.bodyBackground.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3)})),t.stopButton.addEventListener("click",(function(){t.startButton.disabled=!1,t.stopButton.disabled=!0,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.e52648bd.js.map
