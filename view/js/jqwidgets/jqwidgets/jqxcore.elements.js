/*
jQWidgets v5.6.0 (2018-Feb)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/

(function(){var c=[];var a=function(){var d=c;for(var e=0;e<d.length;e++){var g=d[e];var f=false;if(g.element.offsetWidth!==g.width){f=true}if(g.element.offsetHeight!==g.height){f=true}if(f){g.width=g.element.offsetWidth;g.height=g.element.offsetHeight;g.callback()}}};var b=setInterval(function(){a()},100);window.addResizeHandler=function(d,e){c.push({element:d,width:d.offsetWidth,height:d.offsetHeight,callback:e});return};window.removeResizeHandler=function(g){var d=c;var e=-1;for(var f=0;f<d.length;f++){if(d[f].element===g){e=f}}if(e>=0){c.splice(e,1)}return}})();(function(a){if(!a.jqx.elements){a.jqx.elements=new Array()}a.extend(a.event.special,{close:{noBubble:false},open:{noBubble:false},});window.JQXElements={settings:{}};a.jqx.elements.push({name:"jqxCalendar",template:"<div></div>",attributeSync:true,properties:{disabled:{attributeSync:false},width:{type:"length"},height:{type:"length"},min:{type:"date"},max:{type:"date"},value:{type:"date"}}});a.jqx.elements.push({name:"jqxButton",template:"<div></div>"});a.jqx.elements.push({name:"jqxButtonGroup",template:"<div></div>"});a.jqx.elements.push({name:"jqxBulletChart",template:"<div></div>"});a.jqx.elements.push({name:"jqxRadioButton",template:"<div></div>"});a.jqx.elements.push({name:"jqxCheckBox",template:"<div></div>"});a.jqx.elements.push({name:"jqxRepeatButton",template:"<button></button>"});a.jqx.elements.push({name:"jqxSwitchButton",template:"<div></div>"});a.jqx.elements.push({name:"jqxLinkButton",template:"<a></a>"});a.jqx.elements.push({name:"jqxToggleButton",template:"<button></button>"});a.jqx.elements.push({name:"jqxBarGauge",template:"<div></div>"});a.jqx.elements.push({name:"jqxChart",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxColorPicker",template:"<div></div>"});a.jqx.elements.push({name:"jqxComboBox",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxComplexInput",template:"<div><input/><div></div></div>",});a.jqx.elements.push({name:"jqxDraw",template:"<div></div>"});a.jqx.elements.push({name:"jqxDataTable",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxDateTimeInput",template:"<div></div>"});a.jqx.elements.push({name:"jqxDocking",template:"<div></div>"});a.jqx.elements.push({name:"jqxDockPanel",template:"<div></div>"});a.jqx.elements.push({name:"jqxDragDrop",template:"<div></div>"});a.jqx.elements.push({name:"jqxDropDownList",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxDropDownButton",template:"<div></div>"});a.jqx.elements.push({name:"jqxEditor",template:"<div></div>"});a.jqx.elements.push({name:"jqxExpander",template:"<div></div>"});a.jqx.elements.push({name:"jqxFileUpload",template:"<div></div>"});a.jqx.elements.push({name:"jqxFormattedInput",template:"<div><input/><div></div></div>",});a.jqx.elements.push({name:"jqxGauge",template:"<div></div>",propertyMap:{style:"backgroundStyle"}});a.jqx.elements.push({name:"jqxLinearGauge",template:"<div></div>",propertyMap:{style:"backgroundStyle"}});a.jqx.elements.push({name:"jqxGrid",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxPivotGrid",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxPivotDesigner",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxInput",template:"<input/>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxKanban",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxKnob",template:"<div></div>"});a.jqx.elements.push({name:"jqxLayout",template:"<div></div>"});a.jqx.elements.push({name:"jqxDockingLayout",template:"<div></div>"});a.jqx.elements.push({name:"jqxListBox",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxListMenu",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxLoader",template:"<div></div>"});a.jqx.elements.push({name:"jqxMaskedInput",template:"<input/>",});a.jqx.elements.push({name:"jqxMenu",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxNavBar",template:"<div></div>"});a.jqx.elements.push({name:"jqxNavigationBar",template:"<div></div>"});a.jqx.elements.push({name:"jqxNotification",template:"<div></div>",properties:{appendContainer:{type:"string"}}});a.jqx.elements.push({name:"jqxNumberInput",template:"<div></div>"});a.jqx.elements.push({name:"jqxPanel",template:"<div></div>"});a.jqx.elements.push({name:"jqxPasswordInput",template:"<input type='password'/>"});a.jqx.elements.push({name:"jqxPopover",template:"<div></div>",properties:{title:{type:"string"},arrowOffsetValue:{type:"number"},offset:{type:"json"},selector:{type:"string"},initContent:{type:"object"}}});a.jqx.elements.push({name:"jqxProgressBar",template:"<div></div>"});a.jqx.elements.push({name:"jqxRangeSelector",template:"<div></div>"});a.jqx.elements.push({name:"jqxRating",tagName:"jqx-rating",template:"<div></div>"});a.jqx.elements.push({name:"jqxResponsivePanel",template:"<div></div>"});a.jqx.elements.push({name:"jqxRibbon",template:"<div></div>"});a.jqx.elements.push({name:"jqxScheduler",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxSlider",template:"<div></div>"});a.jqx.elements.push({name:"jqxScrollBar",template:"<div></div>"});a.jqx.elements.push({name:"jqxScrollView",template:"<div></div>"});a.jqx.elements.push({name:"jqxSortable",template:"<div></div>",propertyMap:{appendTo:"addTo"}});a.jqx.elements.push({name:"jqxSplitter",template:"<div></div>",properties:{panels:{type:"array"}}});a.jqx.elements.push({name:"jqxTabs",template:"<div></div>"});a.jqx.elements.push({name:"jqxTagCloud",template:"<div></div>"});a.jqx.elements.push({name:"jqxTextArea",template:"<div></div>"});a.jqx.elements.push({name:"jqxToolBar",template:"<div></div>"});a.jqx.elements.push({name:"jqxTooltip",tagName:"jqx-tool-tip",template:"<div></div>"});a.jqx.elements.push({name:"jqxTree",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxTreeGrid",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxTreeMap",template:"<div></div>",properties:{source:{attributeSync:false}}});a.jqx.elements.push({name:"jqxValidator",template:"<div></div>"});a.jqx.elements.push({name:"jqxWindow",template:"<div></div>"});if(document.registerElement){if(!Object.is){Object.is=function(b,c){if(b===c){return b!==0||1/b===1/c}else{return b!==b&&c!==c}}}a(document).ready(function(){a.each(a.jqx.elements,function(){var c=this.name;var j=this;if(!j.tagName){j.tagName=j.name.split(/(?=[A-Z])/).join("-").toLowerCase()}var g=Object.create(HTMLElement.prototype);g.name=c;g.instances=new Array();var i={};var f=(function(){var l={},m=function(p,o,q){if(l[p]===undefined){l[p]={}}l[p][o]=q},n=function(p,o){if(l[p]===undefined||l[p][o]===undefined){return undefined}else{return l[p][o]}},k=function(o){return l[o]};return{addAttributeConfig:m,getAttributeConfig:n,getAttributeList:k}}());if(!a.jqx["_"+c]){return true}var h=a.jqx["_"+c].prototype.defineInstance();if(c=="jqxDockingLayout"){h=a.extend(h,a.jqx._jqxLayout.prototype.defineInstance())}if(c=="jqxToggleButton"||c=="jqxRepeatButton"||c=="jqxLinkButton"){h=a.extend(h,a.jqx._jqxButton.prototype.defineInstance())}if(c=="jqxTreeGrid"){h=a.extend(h,a.jqx._jqxDataTable.prototype.defineInstance())}g.initElement=function(){var k=this;if(!h){console.log(c+" is undefined");return}a.each(h,function(n,m){var l="_"+n;k[l]=m})};if(!h){console.log(c+" is undefined");return}a.each(h,function(n,q){if(!j.properties){j.properties=[]}if(n.indexOf("_")>=0){return true}var o=j.properties[n];var p=n.split(/(?=[A-Z])/).join("-").toLowerCase();var s=typeof q;var m=(o&&o.attributeSync)||j.attributeSync;if(!o&&j.attributeSync===undefined){m=true}var r="_"+n;if(n==="width"||n==="height"){s="length"}if(o&&o.type){s=o.type}var l={defaultValue:q,type:s,propertyName:n,attributeSync:m};f.addAttributeConfig(j.tagName,p,Object.freeze(l));i[n]=p;var k=function(w){var v=this;this[r]=w;if(this.widget){if(j.propertyMap&&j.propertyMap[n]){n=j.propertyMap[n]}var x={};x[n]=w;this.widget[c](x);var u=i[n];var t=f.getAttributeConfig(j.tagName,u);if(t.attributeSync){v.isUpdatingAttribute=true;v.setAttributeTyped(u,t,w);v.isUpdatingAttribute=false}v.propertyUpdated(n,w)}else{this.initialSettings[n]=w}};if(j.propertyMap&&j.propertyMap[n]){n=j.propertyMap[n]}Object.defineProperty(g,n,{configurable:false,enumerable:true,get:function(){return this[r]},set:function(t){k.call(this,t)}})});g.getAttributeTyped=function(k,l){return this.attributeStringToTypedValue(k,l,this.getAttribute(k))};g.setAttributeTyped=function(k,n,m){var o,l;l=this.getAttributeTyped(k,n);o=this.typedValueToAttributeString(m);if(o===undefined){this.removeAttribute(k)}else{this.setAttribute(k,o)}};g.typedValueToAttributeString=function(l){var k=typeof l;if(k==="boolean"){if(l){return""}else{return undefined}}else{if(k==="number"){if(Object.is(l,-0)){return"-0"}else{return l.toString()}}else{if(k==="string"||k==="length"){return l}else{if(k==="object"){return JSON.stringify(l,function(n,m){if(typeof m==="number"){if(isFinite(m)===false){return m.toString()}else{if(Object.is(m,-0)){return"-0"}}}return m})}}}}};g.attributeStringToTypedValue=function(k,l,m){if(l.type==="boolean"){if(m===""||m===k||m==="true"){return true}else{return false}}else{if(l.type==="number"){if(m===null||m===undefined){return undefined}else{return parseFloat(m)}}else{if(l.type==="string"){if(m===null||m===undefined){return undefined}else{return m}}else{if(l.type==="length"){if(m===null){return null}if(m!==null&&m.indexOf("px")>=0){return parseFloat(m)}if(m!==null&&m.indexOf("%")>=0){return m}if(!isNaN(parseFloat(m))){return parseFloat(m)}return m}else{if(l.type==="json"||l.type==="array"){return JSON.parse(m.replace(/'/g,'"'))}else{if(l.type==="object"){return window.JQXElements.settings[m]||window[m]}}}}}}return undefined};g.createdCallback=function(){var k=this;k.isReady=false;k.initialSettings={};k.initElement()};g.setup=function(){var q=this;if(q.isReady){return}q.isReady=true;var q=this;var y=null;var w=null;var t,k,r;var m=[];var E=true;var x=f.getAttributeList(j.tagName);var D=q.settings||{};var l=q.initialSettings;var F=j.template;for(var n in x){if(x.hasOwnProperty(n)&&q.hasAttribute(n)){var B=x[n];var o=q.getAttributeTyped(n,B);var G;if(o===undefined){G=B.defaultValue}else{G=o}D[B.propertyName]=G}}r=q.attributes;for(var n in r){var A=r[n];if(A&&A.name){if(A.name.indexOf("on-")>=0){var v=A.value;var z="";if(v.indexOf("(")>=0){z=v.substring(0,v.indexOf("("))}m.push({name:A.name.substring(3),handler:z})}else{if(A.name.substring(0,2)==="on"){var v=A.value;var z="";if(v.indexOf("(")>=0){z=v.substring(0,v.indexOf("("))}m.push({name:A.name.substring(2),handler:z})}else{if(A.name.indexOf("(")>=0){var v=A.value;var z="";if(v.indexOf("(")>=0){z=v.substring(0,v.indexOf("("))}var p=A.name.replace("(","").replace(")","");m.push({name:p,handler:z})}}}}}var C=function(L){var I=document.createDocumentFragment();var O=document.createElement("div");I.appendChild(O);var N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;var J=/<([\w:]+)/;L=L.replace(N,"<$1></$2>");var H=(J.exec(L)||["",""])[1].toLowerCase();var K=[0,"",""];var M=K[0];O.innerHTML=K[1]+L+K[2];while(M--){O=O.lastChild}L=O.childNodes;O.parentNode.removeChild(O);C=L[0];return C}(F);t=C;var s=function(S){var I=false;if(c==="jqxDragDrop"||c==="jqxPopover"||c==="jqxResponsivePanel"||c==="jqxLoader"||c==="jqxWindow"||c==="jqxSortable"||c==="jqxDraw"||c==="jqxValidator"){I=true;q.style.overflow="visible"}if(c==="jqxExpander"||c==="jqxRibbon"||c==="jqxBulletChart"||c==="jqxComboBox"){q.style.overflow="visible"}if(!I){while(q.childNodes.length){t.appendChild(q.firstChild)}q.appendChild(t)}else{t=q}if(c==="jqxScrollBar"||c==="jqxNotification"){q.style.overflow="visible";q.style.borderLeftWidth="0px";q.style.borderRightWidth="0px";q.style.borderTopWidth="0px";q.style.borderBottomWidth="0px"}a.extend(D,S);var Q=c.toLowerCase();if(F.indexOf("button")>=0||F.indexOf("input")==1||F.indexOf("textarea")>=0||Q.indexOf("button")>=0||Q.indexOf("checkbox")>=0||Q.indexOf("radio")>=0){q.style.display="inline-block"}else{q.style.display="block"}var L=function(Y,Z){if(!E||I){return}if(typeof Z==="string"&&Z.indexOf("%")>=0){q.style[Y]=Z}else{if(typeof Z==="string"&&Z.indexOf("px")>=0){q.style[Y]=2+parseFloat(Z)+"px"}else{if(Z==="auto"){q.style[Y]=Z}else{if(Z){q.style[Y]=2+Z+"px"}else{if(q.style[Y]){q.style[Y]=null}}}}}};if(D.width){L("width",D.width)}if(D.height){L("height",D.height)}k=new jqxBaseFramework(q);k.data(q,"jqxWidget",{element:q});y=k.width();w=k.height();var X=2;if(c==="jqxPivotDesigner"||c==="jqxPivotGrid"||c==="jqxChart"||c==="jqxMenu"||c==="jqxToolBar"){t.style.width=t.style.height="100%"}else{if(!I){if(y&&!D.width&&q.style.width!=="auto"){if(c==="jqxButton"||c==="jqxCheckBox"||c==="jqxToggleButton"||c==="jqxRadioButton"||c==="jqxRepeatButton"||c==="jqxLinkButton"){y+=30}D.width=y-X}if(w&&!D.height&&q.style.height!=="auto"&&w!==q.firstChild.offsetHeight){D.height=w-X}}}var H={};var K={};var M=Object.getOwnPropertyNames(a.jqx["_"+c].prototype);if(c=="jqxDockingLayout"){K=a.extend(K,Object.keys(a.jqx._jqxLayout.prototype));H=a.extend(H,a.jqx._jqxLayout.prototype)}if(c=="jqxToggleButton"||c=="jqxRepeatButton"||c=="jqxLinkButton"){K=a.extend(K,Object.keys(a.jqx._jqxButton.prototype));H=a.extend(H,a.jqx._jqxButton.prototype)}if(c=="jqxTreeGrid"){K=a.extend(K,Object.keys(a.jqx._jqxDataTable.prototype));H=a.extend(H,a.jqx._jqxDataTable.prototype)}H=a.extend(H,a.jqx["_"+c].prototype);K=a.extend(K,Object.getOwnPropertyNames(H));for(var P in K){var V=K[P];if(V.indexOf("_")>=0){continue}if(V==="base"||V==="baseType"){continue}if(V==="onmousemove"||V==="resize"||V==="scrollWidth"||V==="scrollHeight"||V==="constructor"||V==="createInstance"||V==="defineInstance"){continue}if(typeof H[V]!=="function"){continue}var N=function(ac,Z){var aa=Array.prototype.slice.call(arguments,2);var Y=q;var ab=function(){if(Y._isUpdating){return}if(a.event.triggered){return}if(!Y.widget){Y._isUpdating=true;var ae=arguments;var ad=ac.apply(a(t).data().jqxWidget,aa.concat(Array.prototype.slice.call(ae)));Y._isUpdating=false;return ad}if(-1===M.indexOf(Z)){var ad=ac.apply(Y.widget.data().jqxWidget.base,aa.concat(Array.prototype.slice.call(arguments)))}else{var ad=ac.apply(Y.widget.data().jqxWidget,aa.concat(Array.prototype.slice.call(arguments)))}Y._isUpdating=false;return ad};return ab};q[V]=N(H[V],V)}var R=q.widget=a(t)[c](D);if(D.ready){q._isUpdating=false;if(!R.data().jqxWidget._loading){if(!R.data().jqxWidget.isInitialized){D.ready()}}else{var J=setInterval(function(){if(!R.data().jqxWidget._loading){if(!R.data().jqxWidget.isInitialized){D.ready()}clearInterval(J)}},100)}}if(c==="jqxMaskedInput"||c==="jqxPasswordInput"||c==="jqxButtonGroup"||c==="jqxButton"||c==="jqxToggleButton"||c==="jqxRepeatButton"){q.firstChild.style.boxSizing="border-box"}q.propertyUpdated=function(Y,Z){if(Y==="width"||Y==="height"){L(Y,Z)}};if(!I){var W=R.data().jqxWidget;!W.base?W.host.addClass("jqx-element-container"):W.base.host.addClass("jqx-element-container");if(D.multiSelect){q.style.height="auto"}k.addClass("jqx-widget jqx-element");k.addClass("jqx-element-no-border");if(c==="jqxRangeSelector"||c=="jqxButtonGroup"){k.css("overflow","visible")}}for(var O=0;O<m.length;O++){var T=m[O];R.on(T.name,function(Y){if(!Y.args){Y.args={}}if(window.JQXElements.settings[T.handler]&&Y.args){window.JQXElements.settings[T.handler].apply(q,[Y])}else{if(window[T.handler]&&Y.args){window[T.handler].apply(q,[Y])}}})}var U=function(){if(I){return}E=false;y=k.width();w=k.height();var ab=0;if(c==="jqxChart"||c==="jqxPivotGrid"||c==="jqxPivotDesigner"||c==="jqxDraw"){R[0].style.width="100%";R[0].style.height="100%"}else{var ad=parseInt(R.css("padding-left"));var aa=parseInt(R.css("padding-right"));var ac=parseInt(R.css("padding-top"));var Z=parseInt(R.css("padding-bottom"));var Y=q.firstChild?window.getComputedStyle(q.firstChild):null;var ae=true;if(!Y){return}ab=0;if(Y&&Y.boxSizing!=="border-box"){ab=2}if(q.autoheight||q.height===null||q.height==="auto"||q.multiSelect){ae=false}if(c==="jqxBarGauge"){ab=0}R[c]({width:y-ab});if(ae){R[c]({height:w-ab})}}E=true};if(!I){addResizeHandler(q,function(){U()})}};if(q.hasAttribute("settings")){var u=q.getAttribute("settings");l=window.JQXElements.settings[u]||window[u];if(l){a.each(l,function(I,H){q["_"+I]=H})}}if(q.hasAttribute("delayed-create")){q.isCreated=false;q.createElement=function(){if(q.isCreated){return}if(q.hasAttribute("settings")){s(l)}else{s(q.settings)}q.isCreated=true}}else{s(l)}};var b=g.addEventListener;var e=g.addEventListener;g.addEventListener=function(k,l){var m=this;if(m.widget&&m.widget.on){if(c==="jqxDragDrop"||c==="jqxPopover"||c==="jqxResponsivePanel"||c==="jqxLoader"||c==="jqxWindow"||c==="jqxSortable"||c==="jqxDraw"||c==="jqxValidator"){JQXLite(m.parentNode).on(k,l)}else{m.widget.on(k,l)}}else{b.apply(this,[k,l])}};g.removeEventListener=function(k,l){var m=this;if(m.widget&&m.widget.off){if(c==="jqxDragDrop"||c==="jqxPopover"||c==="jqxResponsivePanel"||c==="jqxLoader"||c==="jqxWindow"||c==="jqxSortable"||c==="jqxDraw"||c==="jqxValidator"){JQXLite(m.parentNode).off(k,l)}else{m.widget.off(k,l)}}else{e.apply(this,[k,l])}};g.attachedCallback=function(){var k=this;k.setup()};g.attributeChangedCallback=function(p,m,n){var q=this;var o=f.getAttributeConfig(j.tagName,p);if(!q.isUpdatingAttribute&&o){var k=q.getAttributeTyped(p,o);var l;if(k===undefined){if(currAttrConfig){l=currAttrConfig.defaultValue}else{return}}else{l=k}q[currAttrConfig.propertyName]=l}};var d=document.registerElement(j.tagName,{prototype:g});return d})})}})(jqxBaseFramework);

