!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}__webpack_require__(1);var _calc=__webpack_require__(5),_calc2=_interopRequireDefault(_calc),_toolbar=__webpack_require__(7),_toolbar2=_interopRequireDefault(_toolbar),_ruling=__webpack_require__(9),_ruling2=_interopRequireDefault(_ruling);angular.module("dit-calculator",["ngMaterial"],["$locationProvider",function($locationProvider){$locationProvider.html5Mode(!0)}]).component("calc",_calc2["default"]).component("toolbar",_toolbar2["default"]).component("ruling",_ruling2["default"])},function(module,exports,__webpack_require__){var content=__webpack_require__(2);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(4)(content,{});content.locals&&(module.exports=content.locals)},function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(),exports.push([module.id,".report-value{font-weight:700;text-align:right}.title{position:relative;line-height:13px}.motto{font-style:italic;opacity:.6}.github-alt,.motto{display:inline-block}.github-alt{width:25px;height:25px;background-size:25px 25px;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03MDQgMTIxNnEwIDQwLTEyLjUgODJ0LTQzIDc2LTcyLjUgMzQtNzIuNS0zNC00My03Ni0xMi41LTgyIDEyLjUtODIgNDMtNzYgNzIuNS0zNCA3Mi41IDM0IDQzIDc2IDEyLjUgODJ6bTY0MCAwcTAgNDAtMTIuNSA4MnQtNDMgNzYtNzIuNSAzNC03Mi41LTM0LTQzLTc2LTEyLjUtODIgMTIuNS04MiA0My03NiA3Mi41LTM0IDcyLjUgMzQgNDMgNzYgMTIuNSA4MnptMTYwIDBxMC0xMjAtNjktMjA0dC0xODctODRxLTQxIDAtMTk1IDIxLTcxIDExLTE1NyAxMXQtMTU3LTExcS0xNTItMjEtMTk1LTIxLTExOCAwLTE4NyA4NHQtNjkgMjA0cTAgODggMzIgMTUzLjV0ODEgMTAzIDEyMiA2MCAxNDAgMjkuNSAxNDkgN2gxNjhxODIgMCAxNDktN3QxNDAtMjkuNSAxMjItNjAgODEtMTAzIDMyLTE1My41em0yMjQtMTc2cTAgMjA3LTYxIDMzMS0zOCA3Ny0xMDUuNSAxMzN0LTE0MSA4Ni0xNzAgNDcuNS0xNzEuNSAyMi0xNjcgNC41cS03OCAwLTE0Mi0zdC0xNDcuNS0xMi41LTE1Mi41LTMwLTEzNy01MS41LTEyMS04MS04Ni0xMTVxLTYyLTEyMy02Mi0zMzEgMC0yMzcgMTM2LTM5Ni0yNy04Mi0yNy0xNzAgMC0xMTYgNTEtMjE4IDEwOCAwIDE5MCAzOS41dDE4OSAxMjMuNXExNDctMzUgMzA5LTM1IDE0OCAwIDI4MCAzMiAxMDUtODIgMTg3LTEyMXQxODktMzlxNTEgMTAyIDUxIDIxOCAwIDg3LTI3IDE2OCAxMzYgMTYwIDEzNiAzOTh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+)}.start-from{font-size:12px}.start-from .md-checked{font-size:34px}",""])},function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _calc=__webpack_require__(6),_calc2=_interopRequireDefault(_calc),calcComponent={template:_calc2["default"],controller:function($scope,$location){function getTaxRates(ratesYear,socialSecurity){var taxRates={2015:{normal:[.365,.42,.42,.52],withoutSocial:[.0835,.1385,.42,.52],over64:[.186,.241,.42,.52]},2016:{normal:[.3655,.404,.404,.52],withoutSocial:[.0835,.1385,.404,.52],over64:[.186,.225,.404,.52]},2017:{normal:[.3655,.408,.408,.52],withoutSocial:[.0835,.1385,.408,.52],over64:[.1865,.229,.408,.52]}},currentTaxRates=taxRates[ratesYear].normal;return socialSecurity||(currentTaxRates=taxRates[ratesYear].withoutSocial),currentTaxRates}function getTaxAmountPeriods(year){var taxAmountPeriods={2015:[19822,13767,23996,1/0],2016:[19922,13793,32697,1/0],2017:[19981,13807,33282,1/0]};return taxAmountPeriods[year]}function getTaxAmount(taxableIncome,socialSecurity,ratesYear){for(var taxAmountPeriods=getTaxAmountPeriods(ratesYear),taxRates=getTaxRates(ratesYear,socialSecurity),taxAmount=0,i=0;i<taxRates.length;i++){if(taxableIncome-taxAmountPeriods[i]<0){taxAmount+=Math.floor(taxableIncome*taxRates[i]);break}taxAmount+=Math.floor(taxAmountPeriods[i]*taxRates[i]),taxableIncome-=taxAmountPeriods[i]}return taxAmount}function getArbeidskorting(salary){return salary<9147?1.793*salary/100:salary<19758?164+27.698*(salary-9147)/100:salary<34015?3103:salary<111590?3103-4*(salary-39015)/100:0}function getAlgemeneHeffingskorting(salary){return salary<19922?2242:salary<66417?2242-4.822*(salary-19922)/100:0}var _this=this;this.year=2016,$location.search().year&&[2015,2016].indexOf(+$location.search().year)!==-1&&(this.year=+$location.search().year),this.startFrom="year",["year","month"].indexOf($location.search().startFrom)!==-1&&(this.startFrom=$location.search().startFrom),this.salary={grossYear:0,grossMonth:0,netYear:0,netMonth:0,taxRate:0,ruling:!!+$location.search().ruling||!1,socialSecurity:!angular.isDefined($location.search().socialSecurity)||"0"!==$location.search().socialSecurity,allowance:!!+$location.search().allowance||!1},this.salary.grossYear=36e3,+$location.search().salary&&(this.salary.grossYear=+$location.search().salary),this.salaryOutputOptions={taxableYear:"Taxable Income",incomeTax:"Income Tax",generalCredit:"General Tax Credit",labourCredit:"Labour Tax Credit",netYear:"Year net income",netMonth:"Monthly net income"},$scope.$watchGroup(["$ctrl.startFrom","$ctrl.salary.ruling","$ctrl.salary.socialSecurity","$ctrl.salary.grossYear","$ctrl.salary.allowance","$ctrl.year"],function(){$location.search("startFrom",_this.startFrom),$location.search("salary",_this.salary.grossYear),$location.search("ruling",+_this.salary.ruling),$location.search("socialSecurity",+_this.salary.socialSecurity),$location.search("year",_this.year),$location.search("allowance",+_this.salary.allowance);var grossYear=_this.salary.grossYear||0;_this.salary.allowance&&(grossYear/=1.08),_this.salary.taxableYear=grossYear,_this.salary.ruling&&(_this.salary.taxableYear=.7*_this.salary.taxableYear),_this.salary.generalCredit=getAlgemeneHeffingskorting(_this.salary.taxableYear),_this.salary.labourCredit=getArbeidskorting(_this.salary.taxableYear),_this.salary.grossMonth=~~(grossYear/12),_this.salary.netYear=grossYear-getTaxAmount(_this.salary.taxableYear,_this.salary.socialSecurity,_this.year),_this.salary.netYear+=_this.salary.generalCredit+_this.salary.labourCredit,_this.salary.netMonth=~~(_this.salary.netYear/12),_this.salary.incomeTax=getTaxAmount(_this.salary.taxableYear,_this.salary.socialSecurity,_this.year)})}};exports["default"]=calcComponent},function(module,exports){var ngModule,angular=window.angular;try{ngModule=angular.module(["ng"])}catch(e){ngModule=angular.module("ng",[])}var v1='<md-content layout-lg="column" layout-gt-lg="column" layout-align="center"> <md-input-container class="md-display-1" layout-margin> <label>Annual gross income</label> <input type="number" ng-model="$ctrl.salary.grossYear" autofocus> </md-input-container> <div layout-lg="row" layout-gt-lg="row" layout-margin> <div flex="40"> <div layout="row" layout-margin ng-repeat-start="(salaryOptionKey,  salaryOptionTitle) in $ctrl.salaryOutputOptions"> <div flex> {{::salaryOptionTitle}} </div> <div flex class="report-value"> {{$ctrl.salary[salaryOptionKey] | number:0}} </div> </div> <md-divider ng-if="!$last" ng-repeat-end></md-divider> </div> <div flex> <md-content class="md-body-1"> <div layout="column" layout-margin> <md-radio-group ng-model="$ctrl.year"> <md-radio-button value="2015">for 2015</md-radio-button> <md-radio-button value="2016">for 2016</md-radio-button> <md-radio-button value="2017">for 2017</md-radio-button> </md-radio-group> </div> </md-content> <md-content class="md-body-1"> <div layout="column" layout-margin>  <md-checkbox ng-model="$ctrl.salary.allowance" aria-label="Holiday allowance is included in gross">Holiday allowance included </md-checkbox> <md-checkbox ng-model="$ctrl.salary.socialSecurity" aria-label="Social security in the Netherlands">Social security </md-checkbox> <md-checkbox ng-model="$ctrl.salary.ruling" aria-label="I have 30% ruling">I have 30% ruling</md-checkbox> </div> </md-content> </div> </div> </md-content>';ngModule.run(["$templateCache",function(c){c.put("src/calc/calc.html",v1)}]),module.exports=v1},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _toolbar=__webpack_require__(8),_toolbar2=_interopRequireDefault(_toolbar),toolbarComponent={template:_toolbar2["default"]};exports["default"]=toolbarComponent},function(module,exports){var ngModule,angular=window.angular;try{ngModule=angular.module(["ng"])}catch(e){ngModule=angular.module("ng",[])}var v1='<md-toolbar class="md-active"> <div class="md-toolbar-tools"> <h2 class="md-headline md-margin title" flex="90"> Dutch Income Tax Calculator\n<span class="motto md-caption">makes your work easy, actual for 2016 and 2017</span> </h2> <a href="https://github.com/stevermeister/dutch-tax-income-calculator" flex="10" layout="row" layout-align="end center"> <span class="github-alt"> <md-tooltip md-direction="left"> Fork me on GitHub </md-tooltip> </span> </a> </div> </md-toolbar>';ngModule.run(["$templateCache",function(c){c.put("src/toolbar/toolbar.html",v1)}]),module.exports=v1},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _ruling=__webpack_require__(10),_ruling2=_interopRequireDefault(_ruling),rulingComponent={template:_ruling2["default"]};exports["default"]=rulingComponent},function(module,exports){var ngModule,angular=window.angular;try{ngModule=angular.module(["ng"])}catch(e){ngModule=angular.module("ng",[])}var v1='<md-content layout-padding class="md-caption"> <md-card> <md-card-content> <h2 class="md-title">About 30% Ruling</h2> <p> The salary criteria for the <b>30%-ruling</b> as per January 2017 are as follows:<br> <ul> <li>The annual taxable salary for an employee must be more than <b>EUR 37,000</b> (2015: 36,889).</li> <li>The taxable salary for an employee with a master’s degree and who is younger than 30 years, must be more than\n<b>EUR 28,125</b> (2015: EUR 28,041). </li> </ul> </p> </md-card-content> </md-card> </md-content>';ngModule.run(["$templateCache",function(c){c.put("src/ruling/ruling.html",v1)}]),module.exports=v1}]);
//# sourceMappingURL=app.js.map