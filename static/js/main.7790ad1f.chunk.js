(this["webpackJsonpeurg-website"]=this["webpackJsonpeurg-website"]||[]).push([[0],{127:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(19),r=a.n(i),s=(a(127),a(28)),o=a(29),l=a(35),d=a(33),p=a(96),j=a(2),b=a(58),h=(a(193),a(80)),m=a(17),O=(a(101),a(77)),u=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,x=function(e,t){var a=0===e.name.indexOf("title")?"h1":"div";a=e.href?"a":a;var c="string"===typeof e.children&&e.children.match(u)?n.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(c=n.a.createElement(O.a,Object(j.a)({},e.children))),n.a.createElement(a,Object(j.a)({key:t.toString()},e),c)},g=a(1),v=h.a.Item,f=h.a.SubMenu,w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).phoneClick=function(){var e=!c.state.phoneOpen;c.setState({phoneOpen:e})},c.state={phoneOpen:void 0},c}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.dataSource,c=t.isMobile,n=Object(b.a)(t,["dataSource","isMobile"]),i=this.state.phoneOpen,r=a.Menu.children.map((function(e){var t=e.children,a=e.subItem,c=Object(b.a)(e,["children","subItem"]);return a?Object(g.jsx)(f,Object(j.a)(Object(j.a)({},c),{},{title:Object(g.jsx)("div",Object(j.a)(Object(j.a)({},t),{},{className:"header0-item-block ".concat(t.className).trim(),children:t.children.map(x)})),popupClassName:"header0-item-child",children:a.map((function(e,t){var a=e.children,c=a.href?Object(g.jsx)("a",Object(j.a)(Object(j.a)({},a),{},{children:a.children.map(x)})):Object(g.jsx)("div",Object(j.a)(Object(j.a)({},a),{},{children:a.children.map(x)}));return Object(g.jsx)(v,Object(j.a)(Object(j.a)({},e),{},{children:c}),e.name||t.toString())}))}),e.name):Object(g.jsx)(v,Object(j.a)(Object(j.a)({},c),{},{children:Object(g.jsx)("a",Object(j.a)(Object(j.a)({},t),{},{className:"header0-item-block ".concat(t.className).trim(),children:t.children.map(x)}))}),e.name)})),s=void 0===i?300:null;return Object(g.jsx)(m.a,Object(j.a)(Object(j.a)(Object(j.a)({component:"header",animation:{opacity:0,type:"from"}},a.wrapper),n),{},{children:Object(g.jsxs)("div",Object(j.a)(Object(j.a)({},a.page),{},{className:"".concat(a.page.className).concat(i?" open":""),children:[Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({animation:{x:-30,type:"from",ease:"easeOutQuad"}},a.logo),{},{children:Object(g.jsx)("img",{width:"100%",src:a.logo.children,alt:"img"})})),c&&Object(g.jsxs)("div",Object(j.a)(Object(j.a)({},a.mobileMenu),{},{onClick:function(){e.phoneClick()},children:[Object(g.jsx)("em",{}),Object(g.jsx)("em",{}),Object(g.jsx)("em",{})]})),Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({},a.Menu),{},{animation:c?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!i,children:Object(g.jsx)(h.a,{mode:c?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark",children:r})}))]}))}))}}]),a}(n.a.Component),y=a(197),N=a(34),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,Object(g.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({},e),t.wrapper),{},{children:[Object(g.jsxs)(N.a,Object(j.a)(Object(j.a)({type:["bottom","top"],delay:200},t.textWrapper),{},{children:[Object(g.jsx)("div",Object(j.a)(Object(j.a)({},t.title),{},{children:"string"===typeof t.title.children&&t.title.children.match(u)?Object(g.jsx)("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children}),"title"),Object(g.jsx)("div",Object(j.a)(Object(j.a)({},t.content),{},{children:t.content.children}),"content"),Object(g.jsx)(O.a,Object(j.a)(Object(j.a)({ghost:!0},t.button),{},{children:t.button.children}),"button")]}),"QueueAnim"),Object(g.jsx)(m.a,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",children:Object(g.jsx)(y.a,{})},"icon")]}))}}]),a}(n.a.PureComponent),S=(a(70),a(46)),M=(a(71),a(25)),E=a(31),W=a.n(E),R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(b.a)(e,["dataSource","isMobile"])),c=t.wrapper,n=t.titleWrapper,i=t.page,r=t.OverPack,s=t.childWrapper;return Object(g.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({},a),c),{},{children:Object(g.jsxs)("div",Object(j.a)(Object(j.a)({},i),{},{children:[Object(g.jsx)("div",Object(j.a)(Object(j.a)({},n),{},{children:n.children.map(x)})),Object(g.jsx)(W.a,Object(j.a)(Object(j.a)({},r),{},{children:Object(g.jsx)(N.a,{type:"bottom",leaveReverse:!0,component:S.a,componentProps:s,children:s.children.map((function(e,t){var a=e.children,c=Object(b.a)(e,["children"]);return Object(g.jsx)(M.a,Object(j.a)(Object(j.a)({},c),{},{children:Object(g.jsx)("div",Object(j.a)(Object(j.a)({},a),{},{children:a.children.map(x)}))}),t.toString())}))},"block")}))]}))}))}}]),a}(n.a.PureComponent);var P=function(e){var t=Object.assign({},e),a=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:c?"bottom":"right",one:c?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return Object(g.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({},t),a.wrapper),{},{children:Object(g.jsxs)(W.a,Object(j.a)(Object(j.a)({},a.OverPack),{},{component:S.a,children:[Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({animation:n.one,resetStyle:!0},a.imgWrapper),{},{component:M.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs},children:Object(g.jsx)("span",Object(j.a)(Object(j.a)({},a.img),{},{children:Object(g.jsx)("img",{src:a.img.children,width:"100%",alt:"img"})}))}),"img"),Object(g.jsxs)(N.a,Object(j.a)(Object(j.a)({type:n.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper),{},{component:M.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs},children:[Object(g.jsx)("h2",Object(j.a)(Object(j.a)({},a.title),{},{children:a.title.children}),"h1"),Object(g.jsx)("div",Object(j.a)(Object(j.a)({},a.content),{},{children:a.content.children}),"p")]}),"text")]}))}))};var T=function(e){var t=Object.assign({},e),a=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:c?"bottom":"left",one:c?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"+=30",opacity:0,type:"from",ease:"easeOutQuad"}},i=Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({animation:n.one,resetStyle:!0},a.imgWrapper),{},{component:M.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs},children:Object(g.jsx)("span",Object(j.a)(Object(j.a)({},a.img),{},{children:Object(g.jsx)("img",{src:a.img.children,width:"100%",alt:"img"})}))}),"img");return Object(g.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({},t),a.wrapper),{},{children:Object(g.jsxs)(W.a,Object(j.a)(Object(j.a)({},a.OverPack),{},{component:S.a,children:[c&&i,Object(g.jsxs)(N.a,Object(j.a)(Object(j.a)({type:n.queue,leaveReverse:!0,ease:["easeOutCubic","easeInCubic"]},a.textWrapper),{},{component:M.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs},children:[Object(g.jsx)("h2",Object(j.a)(Object(j.a)({},a.title),{},{children:a.title.children}),"h1"),Object(g.jsx)("div",Object(j.a)(Object(j.a)({},a.content),{},{children:a.content.children}),"p")]}),"text"),!c&&i]}))}))};var C,U=function(e){var t=Object.assign({},e),a=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:c?"bottom":"right",one:c?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return Object(g.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({},t),a.wrapper),{},{children:Object(g.jsxs)(W.a,Object(j.a)(Object(j.a)({},a.OverPack),{},{component:S.a,children:[Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({animation:n.one,resetStyle:!0},a.imgWrapper),{},{component:M.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs},children:Object(g.jsx)("span",Object(j.a)(Object(j.a)({},a.img),{},{children:Object(g.jsx)("img",{src:a.img.children,width:"100%",alt:"img"})}))}),"img"),Object(g.jsxs)(N.a,Object(j.a)(Object(j.a)({type:n.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper),{},{component:M.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs},children:[Object(g.jsx)("h2",Object(j.a)(Object(j.a)({},a.title),{},{children:a.title.children}),"h1"),Object(g.jsx)("div",Object(j.a)(Object(j.a)({},a.content),{},{children:a.content.children}),"p")]}),"text")]}))}))},_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,Object(g.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({},e),t.wrapper),{},{children:Object(g.jsx)(W.a,Object(j.a)(Object(j.a)({},t.OverPack),{},{children:Object(g.jsx)(m.a,Object(j.a)(Object(j.a)({animation:{y:"+=30",opacity:0,type:"from"}},t.copyright),{},{children:t.copyright.children}),"footer")}))}))}}]),a}(n.a.PureComponent),H={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://i.imgur.com/dXkH57i.png"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item koha01z31n-editor_css",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e00",name:"text"}]},subItem:[{name:"sub0",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}},{name:"sub1",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}}]}]},mobileMenu:{className:"header0-mobile-menu"}},G={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title koha0jlubke-editor_css",children:"https://i.imgur.com/Cf6GYuI.png"},content:{className:"banner0-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"A Stablecoin Backed by ETH2.0 Staking and Staking Rewards"})})})},button:{className:"banner0-button",children:"Learn More"}},z={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"What is EURG"})})}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/money-bag_1f4b0.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"1:1 EUR Peg"})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"EURG is a stablecoin cryptocurrency 1:1 pegged to EUR.\xa0"})})}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/gem-stone_1f48e.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"ETH Collateralized"})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Each EURG is minted from the same dollar worth collateralized ETH. Users who deposit $1000 worth ETH can mint the 1000 EURG."})})}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/party-popper_1f389.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Mining While Holding"})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:["Whenever a new EURG is minted, previous holders could get rewards. Rewards come from the new ETH produced in ETH2.0 staking program."," "]})})}]}}]}},F={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://cdn.shopifycdn.net/s/files/1/1061/1924/products/Money_with_Wings_Emoji_large.png?v=1571606064"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"EURG Price Stability"})})})},content:{className:"content1-content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:["Ethereum core developer team is upgrading ETH to make it more scalable, more secure and more sustainable. The Beacon Chain is the first addition to ETH2.0 network, transferring from PoW to PoS. The official ETH2.0 staking reward is 8.1%, and produces new ETH every 6 minutes. The staked ETH and newly produced ETH become the value backing EURG."," "]})})}},I={wrapper:{className:"home-page-wrapper content2-wrapper"},OverPack:{className:"home-page content2",playScale:.3},imgWrapper:{className:"content2-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"},textWrapper:{className:"content2-text",md:14,xs:24},title:{className:"content2-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Mining While Holding"})})},content:{className:"content2-content",children:Object(g.jsxs)("span",{children:[Object(g.jsx)("p",{children:"In the traditional financial world, newly issued currencies create inflation, which results in the reduction of purchasing power per unit of money. Every holder of that currency suffers from a loss of real value."}),Object(g.jsx)("p",{children:"Instead of reducing purchasing power, whenever a new EURG is minted, previous holders could get reward. Again, the rewards are backed by new ETH generated from ETH2.0 staking program. EURG team also creates a model of FTC to further accomplish the goal.\xa0"})]})}},Q={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"First Transfer Contract (FTC)"})})},content:{className:"content1-content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsxs)("p",{children:["After the transfer is broadcasted, the mutual relationship between you and your recipient is forever locked on the blockchain by FTC, and the hierarchy is up to 6 levels."," "]}),Object(g.jsx)("p",{children:"You will get bonus rewards from total EURG of the 6 levels below, currently at 1% APY."}),Object(g.jsx)("p",{children:"Through involving more people in EURG, you could take the bonus in minting every additional EURG."})]})})}},A={wrapper:{className:"home-page-wrapper content2-wrapper"},OverPack:{className:"home-page content2",playScale:.3},imgWrapper:{className:"content2-img",md:10,xs:24},img:{children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/currency-exchange_1f4b1.png"},textWrapper:{className:"content2-text",md:14,xs:24},title:{className:"content2-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Exchange of EURG"})})})},content:{className:"content2-content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsx)("p",{children:"As a stablecoin, EURG is designed as an EUR peg. You can exchange EURG like any other stablecoins."}),Object(g.jsx)("p",{children:"The official way to burn EURG is to exchange EURG to ETH through the official website. There are two exchange options."}),Object(g.jsx)("p",{children:"Option 1: exchange immediately, and there will be a 10% fee."}),Object(g.jsx)("p",{children:"Option 2: Be in the line, and there will be 0 fee."}),Object(g.jsx)("p",{})]})})}},Y={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:"\xa92021 EURG\xa0All Rights Reserved"})})})}};a(191);Object(p.enquireScreen)((function(e){C=e}));var q=("undefined"!==typeof window?window:{}).location,B=void 0===q?{}:q,D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={isMobile:C,show:!B.port},c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.enquireScreen)((function(t){e.setState({isMobile:!!t})})),B.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[Object(g.jsx)(w,{id:"Nav0_0",dataSource:H,isMobile:this.state.isMobile},"Nav0_0"),Object(g.jsx)(k,{id:"Banner0_0",dataSource:G,isMobile:this.state.isMobile},"Banner0_0"),Object(g.jsx)(R,{id:"Content0_0",dataSource:z,isMobile:this.state.isMobile},"Content0_0"),Object(g.jsx)(P,{id:"Content1_0",dataSource:F,isMobile:this.state.isMobile},"Content1_0"),Object(g.jsx)(T,{id:"Feature2_0",dataSource:I,isMobile:this.state.isMobile},"Feature2_0"),Object(g.jsx)(U,{id:"Feature1_0",dataSource:Q,isMobile:this.state.isMobile},"Feature1_0"),Object(g.jsx)(T,{id:"Feature2_1",dataSource:A,isMobile:this.state.isMobile},"Feature2_1"),Object(g.jsx)(_,{id:"Footer0_0",dataSource:Y,isMobile:this.state.isMobile},"Footer0_0")];return Object(g.jsx)("div",{className:"templates-wrapper",ref:function(t){e.dom=t},children:this.state.show&&t})}}]),a}(n.a.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,199)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root")),K()}},[[192,1,2]]]);
//# sourceMappingURL=main.7790ad1f.chunk.js.map