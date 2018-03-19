webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* General CSS  */\n\nbody {\n    margin: 0;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    min-height: 100vh;\n    background: #f6f8fa;\n    /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);\n    /* Chrome 10-25, Safari 5.1-6 */\n    /* background: linear-gradient(to left, #0072ff, #00c6ff); */\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n*:focus {\n    outline: none;\n}\n\ninput[type=\"checkbox\"] {\n    position: relative;\n    width: 60px !important;\n    height: 30px !important;\n    -webkit-appearance: none;\n    background: #c6c6c6;\n    outline: none;\n    border-radius: 100px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    border: none;\n}\n\ninput.ng-invalid{\n    border-color: red;\n}\n\ninput:checked[type=\"checkbox\"] {\n    background: #02285a;\n}\n\ninput[type=\"checkbox\"]:before {\n    content: \"\";\n    position: absolute;\n    width: 30px !important;\n    height: 30px !important;\n    border-radius: 50px;\n    top: 0;\n    left: 0;\n    background: white;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n}\n\ninput:checked[type=\"checkbox\"]:before {\n    left: 30px;\n}\n\ninput, select {\n    border-radius: 100px;\n}\n\n::-webkit-input-placeholder {\n    font-family: Raleway, sans-serif;\n    font-size: 1.2em;\n}\n\nbutton, ul li, a, p, h1, h2, h3, h4, h5, h6, th, td, input {\n    font-family: \"Poppins\", sans-serif;\n}\n\np, td {\n    font-family: \"Roboto\", sans-serif;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.icon, button, select {\n    cursor: pointer;\n}\n\nbutton:disabled {\n    background-color: grey;\n}\n\ninput {\n    border: 2px solid #3d464d;\n    outline: none;\n    padding: 10px 20px;\n    color: #3d464d;\n}\n\ninput[type=\"date\"] {\n    color: #006bab;\n    border-color: #006bab;\n    font-size: 0.9em;\n}\n\nbutton {\n    padding: 10px 20px;\n    background: #006cab;\n    border: none;\n    font-size: 1em;\n    color: #ffffff;\n    border-radius: 100px;\n    -webkit-transition: 0.3s ease-in-out;\n    transition: 0.3s ease-in-out;\n    text-transform: uppercase;\n}\n\nselect {\n    padding: 10px 20px;\n    background: white;\n    border: 2px solid #006bab;\n    font-size: 1em;\n    color: #006bab;\n    outline: none;\n}\n\nbutton.active, button:hover {\n    color: white;\n    background: #4dbc9c;\n}\n\n.header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #01285b;\n    height: 60px;\n}\n\n.header .axis-logo {\n    max-height: 70px;\n}\n\n.header nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.header nav h2 {\n    font-size: 1em;\n    color: white;\n    padding: 0 10px;\n    margin: auto;\n    font-weight: 100;\n    -webkit-transition: 0.3s ease-in-out;\n    transition: 0.3s ease-in-out;\n}\n\n.header nav h2:hover {\n    color: #4ebc9b;\n}\n\n.header .profile {\n    margin-left: auto;\n    padding: 0 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n}\n\nheader .profile .drop-down {\n    position: absolute;\n    width: 120px;\n    right: 0;\n    top: 58px;\n    background-color: white;\n    padding: 10px;\n    text-align: left;\n    list-style: none;\n    border: 2px solid grey;\n}\n\nheader .profile .drop-down ul {\n    padding: 0;\n}\n\nheader .profile .drop-down li {\n    list-style: none;\n    padding: 3px;\n    cursor: pointer;\n}\n\n.header .profile .initials {\n    width: 39px;\n    background: #4dbc9c;\n    border-radius: 50%;\n    text-align: center;\n    color: white;\n    font-size: 1em;\n    margin: auto;\n    padding: 7px;\n    font-weight: bold;\n    /* text-align: center; */\n}\n\n.footer {\n    background: #01285c;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 60px;\n}\n\n.footer .footer-content {\n    margin: auto;\n    color: white;\n}\n\n.footer .footer-content h3 {\n    font-size: 1em;\n}\n\n.filter-icon {\n    width: 30px;\n}\n\n.align-right-flex {\n    margin-left: auto !important;\n}\n\n.body-content {\n    max-width: 1170px;\n    margin: auto;\n}\n\n.body-content .client-nav {\n    padding: 50px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.body-content .client-nav>* {\n    margin: 0 10px;\n}\n\n.body-content .client-nav button:first-child {\n    margin-left: 0;\n}\n\n.body-content .client-nav .filter-icon {\n    margin-top: 10px;\n}\n\n.body-content .search-options {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n\n.body-content .search-options .search-bar {\n    visibility: hidden;\n    -ms-flex-preferred-size: 80%;\n    flex-basis: 80%;\n    padding: 10px;\n}\n\n.body-content .three-dot-menu {\n    max-width: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n}\n\n.body-content .three-dot-menu .three-dot-menu.icon {\n    height: 30px;\n    margin: auto;\n}\n\n.body-content .three-dot-menu .options {\n    position: absolute;\n    right: 0;\n    top: 45px;\n    z-index: 1;\n}\n\n.cards-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.cards-area .info-card {\n    -ms-flex-preferred-size: 43%;\n        flex-basis: 43%;\n    padding: 20px;\n    margin: 50px 20px;\n    position: relative; \n    background: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-shadow: 6px 10px 47px -9px rgba(56, 56, 56, 0.74);\n    box-shadow: 6px 10px 47px -9px rgba(56, 56, 56, 0.74);\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.cards-area .info-card .edit-button {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.cards-area .info-card .edit-button .edit.icon {\n    height: 20px;\n}\n\n.cards-area .info-card .card-data {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.cards-area .info-card .card-data .title {\n    -ms-flex-preferred-size: 20%;\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    color: #02285a;\n}\n\n.cards-area .info-card .card-data .content {\n    -ms-flex-preferred-size: 80%;\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    color: #3d464d;\n}\n\n/* Modal */\n\n.modal-wrapper {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    background: #00000080;\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: auto;\n}\n\n.modal-wrapper .modal-content {\n    margin: auto;\n    width: 1170px;\n    min-height: 400px;\n    overflow: auto;\n    background-color: white;\n    position: relative;\n    -webkit-box-shadow: 6px 10px 47px -9px rgba(56, 56, 56, 0.74);\n    box-shadow: 6px 10px 47px -9px rgba(56, 56, 56, 0.74);\n}\n\n.modal-wrapper .modal-content .close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.modal-wrapper .modal-content .close img {\n    height: 20px;\n}\n\n.modal-wrapper .modal-content .navigation-tabs {\n    padding: 20px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #01285b;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n}\n\n.modal-wrapper .modal-content .navigation-tabs button {\n    margin: 0 5px;\n}\n\n.modal-wrapper .modal-content .modal-body-content, .modal-wrapper .modal-content .modal-form-content {\n    padding: 10px;\n}\n\n.modal-wrapper .modal-content .navigation-tabs h3 {\n    color: white;\n}\n\n.modal-wrapper .modal-content .currency-selector {\n    overflow: auto;\n}\n\n.modal-wrapper .modal-content .currency-select {\n    float: right;\n}\n\n.modal-wrapper .modal-content .modal-form {\n    padding: 10px;\n    margin: 10px 0;\n}\n\n.modal-wrapper .modal-content .modal-form .form-element {\n    width: 49%;\n    display: inline-block;\n    position: relative;\n}\n\n.modal-wrapper .modal-content .modal-form .form-element .default-values {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 200px;\n}\n\n.modal-wrapper .modal-content .modal-form .form-element .default-values h3 {\n    margin: auto;\n}\n\n.modal-wrapper .modal-content .modal-form .form-element.full-length {\n    width: 100%;\n    display: block;\n    position: relative;\n    padding: 20px 0;\n}\n\n.modal-wrapper .modal-content .modal-form .form-element p {\n    display: inline-block;\n    width: 40%;\n    color: #545454;\n}\n\n.modal-wrapper .modal-content .modal-form .form-element input, .modal-wrapper .modal-content .modal-form .form-element select {\n    width: 49%;\n    display: inline-block;\n}\n\n.modal-wrapper .modal-content .save-button, .modal-wrapper .modal-content .next-button {\n    overflow: auto;\n}\n\n.modal-wrapper .modal-content .save-button button, .modal-wrapper .modal-content .next-button button {\n    float: right;\n}\n\n.modal-wrapper .modal-content .modal-form .payment-type {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n}\n\n/* Billing Modal*/\n\n.billing-navigation{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.modal-wrapper .modal-content .modal-form .product {\n    background-color: #f1f1f1;\n    padding: 10px;\n    margin: 10px 0;\n}\n\n.modal-content .rule-name {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 10px;\n}\n\n.modal-content .rule-name p {\n    color: #525252;\n    margin-right: 20px;\n}\n\n.modal-content .rule-addition-area .rule .hotel-list-input {\n    min-width: 200px;\n    position: relative;\n}\n\n.modal-content .hotel-list {\n    z-index: 4;\n    position: absolute;\n    background: #fff;\n    padding: 5px 10px;\n    width: 220px;\n    border: 1px solid grey;\n    height: 200px;\n    overflow: auto;\n    top: 114px;\n    left: 25px;\n}\n\n.modal-content .hotel-list ul {\n    padding: 0;\n}\n\n.modal-content .hotel-list ul li {\n    list-style: none;\n    color: grey;\n    padding: 6px 0;\n    cursor: pointer;\n}\n\n.modal-content .hotel-list-selected {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    position: absolute;\n    top: 120px;\n    left: 10px;\n}\n\n.modal-content .hotel-list-selected p {\n    background: #ffc107;\n    margin: 2px;\n    padding: 10px;\n    border-radius: 40px;\n    color: #02285a;\n    width: auto !important;\n}\n\n.modal-content .hotel-list-selected p::after {\n    content: \"  -X-\";\n    cursor: pointer;\n    color: red;\n}\n\n.modal-content .rule-addition-area .rule {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n    margin: 5px 0;\n    padding: 20px 0px;\n    position: relative;\n}\n\n.modal-content .rule-addition-area .input-element p{\n    text-align: center;\n}\n\n.modal-content .rule-addition-area .rule input {\n    width: 60px;\n}\n\n.modal-content .rule-addition-area .rule select {\n    width: 140px;\n}\n\n.modal-content .rule-addition-area div .rule .add-rule {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n}\n\n.modal-content .rule-addition-area div .rule .add-rule .icon{\n    display: none;\n    height: 30px;\n}\n\n.modal-content .rule-addition-area div .rule .add-rule .remove-rule{\n    display: block;\n}\n\n.modal-content .rule-addition-area div:last-child .rule .add-icon{\n    display: block;\n}\n\n/*Invoice Page*/\n\n.modal-wrapper .modal-content.change-due-date {\n    width: auto;\n}\n\n.body-content .invoice-table table {\n    width: 100%;\n    border-spacing: 0;\n    border: 2px solid #032859;\n}\n\n.body-content .invoice-table table th {\n    text-transform: uppercase;\n    font-weight: 100;\n    color: white;\n}\n\n.body-content .invoice-table table tr:first-child {\n    background: #02285a;\n}\n\n.body-content .invoice-table {\n    margin: 20px 0;\n}\n\n.body-content .invoice-table table td {\n    text-align: center;\n    color: #3d464d;\n}\n\nth, td {\n    padding: 15px 10px;\n}\n\ntr:nth-child(odd) {\n    background: #c7c7c757;\n}\n\ntr {\n    border: 3px solid grey;\n}\n\ntable .action-menu {\n    max-height: 25px;\n}\n\ntable .action-dropdown-rel {\n    position: relative;\n}\n\ntable .action-dropdown-rel .action-dropdown {\n    position: absolute;\n    width: 300px;\n    right: 0;\n    background-color: white;\n    padding: 10px;\n    text-align: left;\n    list-style: none;\n    border: 2px solid grey;\n    z-index: 1;\n}\n\ntable .action-dropdown-rel .action-dropdown li {\n    padding: 3px;\n    cursor: pointer;\n}\n\n.body-content .pagination {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 50px 0;\n}\n\n.body-content .pagination ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto;\n}\n\n.body-content .pagination ul li {\n    background: #01285b;\n    list-style: none;\n    padding: 15px;\n    min-width: 15px;\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    margin: 0px 10px;\n    border-radius: 50%;\n    border: 1px solid #032859;\n    cursor: pointer;\n    color: white;\n    -webkit-box-shadow: 6px 10px 47px -9px rgba(56, 56, 56, 0.74);\n    box-shadow: 6px 10px 47px -9px rgba(56, 56, 56, 0.74);\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n/* Supplier Styles */\n\n.body-content .supplier-nav {\n    padding: 50px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.body-content .supplier-nav>* {\n    margin: 0 10px;\n}\n\n.body-content .supplier-nav button:first-child {\n    margin-left: 0;\n}\n\n.body-content .supplier-nav .filter-icon {\n    margin-top: 10px;\n}\n\n.supplier-content-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 50px 0;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    height: 520px;\n}\n\n.supplier-content-area .menu ul {\n    margin: 0px;\n    padding: 0;\n}\n\n.supplier-content-area .menu ul li {\n    padding: 10px 10px;\n    list-style: none;\n    text-transform: uppercase;\n    color: #ffffff;\n    cursor: pointer;\n    padding-left: 30px;\n}\n\n.supplier-content-area .menu ul .active, .supplier-content-area .menu ul li:hover {\n    background: #4dbc9c;\n}\n\n.supplier-content-area .menu-content {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    height: 100%;\n}\n\n.supplier-content-area .menu-content h3 {\n    color: #02285a;\n    margin: 8px 0;\n}\n\n.supplier-content-area .menu-content .tab-title {\n    text-align: center;\n}\n\n.supplier-content-area .menu-content p {\n    color: #525252;\n}\n\n.supplier-content-area .menu-content .title-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.supplier-content-area .menu-content .title-content .title-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.supplier-content-area .menu-content i {\n    margin: auto 15px;\n    cursor: pointer;\n    color: #4ebc9b;\n    text-decoration: underline;\n}\n\n.supplier-content-area .menu-content .title-content .product-names ul {\n    padding: 0 0 0 25px;\n    margin: 0;\n    list-style: none;\n    font-weight: bold;\n    color: #525252;\n}\n\n.supplier-content-area .menu-content .price-details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    width: 50%;\n}\n\n.supplier-content-area .menu-content .auto-renewal div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 200px;\n}\n\n.supplier-content-area .menu-content .auto-renewal div p {\n    margin: auto;\n    display: inline;\n}\n\n.supplier-content-area .menu-content .price-details .total-price p {\n    text-align: center;\n}\n\n/* Invoice Tab */\n\n.supplier-content-area .menu-content .invoice-table {\n    margin: 0;\n}\n\n.supplier-content-area .menu-content .invoice-table table tr td:last-child {\n    text-align: left;\n}\n\n.supplier-content-area .menu-content .pagination {\n    margin: 20px auto;\n}\n\n/* History Tab */\n\n.supplier-content-area .menu-content .history-card {\n    background: #ececec;\n    padding: 20px 10px;\n    margin: 5px 0;\n}\n\n.supplier-content-area .menu-content .history-card p {\n    color: #003156;\n}\n\n.supplier-content-area .menu-content .history-card small {\n    color: #636363;\n    float: right;\n    padding: 0 20px;\n    margin-bottom: 10px;\n    font-style: italic;\n}\n\n/* Details Tab */\n\n.modal-wrapper .modal-content .modal-body-content .product-card {\n    background: #eaeaea;\n    padding: 10px;\n    margin: 20px 20px;\n}\n\n.modal-wrapper .modal-content .modal-body-content .product-card .product-name {\n    color: #02285a;\n    margin: 0;\n}\n\n.modal-wrapper .modal-content .modal-body-content .product-card .hotel-details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 90%;\n    margin: auto;\n}\n\n.modal-wrapper .modal-content .modal-body-content .product-card .hotel-details .hotel-name {\n    -ms-flex-preferred-size: 30%;\n    flex-basis: 30%;\n}\n\n.modal-wrapper .modal-content .modal-body-content .product-card .hotel-details .hotel-rules {\n    color: #4d5d71;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map