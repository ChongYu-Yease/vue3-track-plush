var e=function(){return e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},e.apply(this,arguments)},t=function(e){var t=new XMLHttpRequest;if(t.timeout=1e4,!e.baseURL||!e.url)throw new Error("baseUrl属性或者url不能为空!");var n="".concat(e.baseURL?e.baseURL:"").concat(e.url?e.url:""),r=e.method.toUpperCase()||"POST";t.open(r,n,!0),t.withCredentials=!0,t.setRequestHeader("Content-type","application/json;charset=UTF-8"),t.send(JSON.stringify(e.data||{}))},n=function(){function n(e){this.trackPlushConfig=e}return n.prototype.handleClickEvent=function(t){var n=this;if("customize"===t.type){var r=JSON.parse(JSON.stringify(t));delete r.type,this.handleSendTrack(e({userAgent:this.trackPlushConfig.userAgent||navigator.userAgent,pageUrl:this.trackPlushConfig.pageUrl||window.location.href,projectName:this.trackPlushConfig.projectName,actionType:"点击事件"},r))}else t.el.addEventListener("click",(function(){var r=t.VNode.props["track-params"];"string"==typeof r?n.handleSendTrack({buttonName:r,userAgent:n.trackPlushConfig.userAgent||navigator.userAgent,pageUrl:n.trackPlushConfig.pageUrl||window.location.href,projectName:n.trackPlushConfig.projectName,actionType:"点击事件"}):n.handleSendTrack(e({userAgent:n.trackPlushConfig.userAgent||navigator.userAgent,pageUrl:n.trackPlushConfig.pageUrl||window.location.href,projectName:n.trackPlushConfig.projectName,actionType:"点击事件"},r))}))},n.prototype.handleSendTrack=function(e){t({baseURL:this.trackPlushConfig.baseURL,url:this.trackPlushConfig.url,method:this.trackPlushConfig.method||"POST",data:e})},n}(),r=function(){function n(e){this.trackPlushConfig=e}return n.prototype.handleBrowseEvent=function(t){if("customize"===t.type){var n=JSON.parse(JSON.stringify(t));delete n.type,this.handleSendTrack(e({userAgent:this.trackPlushConfig.userAgent||navigator.userAgent,pageUrl:this.trackPlushConfig.pageUrl||window.location.href,projectName:this.trackPlushConfig.projectName,actionType:"浏览事件"},n))}else{var r=t.VNode.props["track-params"];"string"==typeof r?this.handleSendTrack({pageName:r,userAgent:this.trackPlushConfig.userAgent||navigator.userAgent,pageUrl:this.trackPlushConfig.pageUrl||window.location.href,projectName:this.trackPlushConfig.projectName,actionType:"浏览事件"}):this.handleSendTrack(e({userAgent:this.trackPlushConfig.userAgent||navigator.userAgent,pageUrl:this.trackPlushConfig.pageUrl||window.location.href,projectName:this.trackPlushConfig.projectName,actionType:"浏览事件"},r))}},n.prototype.handleSendTrack=function(e){t({baseURL:this.trackPlushConfig.baseURL,url:this.trackPlushConfig.url,method:this.trackPlushConfig.method||"POST",data:e})},n}(),a=["baseURL","url"],o=function(t){var r={};Object.keys(t).forEach((function(e){a.includes(e)||(r[e]=t[e])})),new n(t).handleClickEvent(e(e({},r),{type:"customize"}))},i=function(t){var n={};Object.keys(t).forEach((function(e){a.includes(e)||(n[e]=t[e])})),new r(t).handleBrowseEvent(e(e({},n),{type:"customize"}))},s={install:function(e,t){e.directive("track",{mounted:function(e,a,o){a.arg.split("|").forEach((function(a){"click"===a?new n(t).handleClickEvent({el:e,VNode:o,type:"instruction"}):"browse"===a&&new r(t).handleBrowseEvent({type:"instruction",VNode:o})}))}})}};export{i as browseEvent,o as clickEvent,s as default};
