(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(40)},24:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=(t(24),t(12)),i=t(13),m=t(16),o=t(14),d=t(17),u=t(2),h=t.n(u),E=t(15),g=t.n(E),p=(t(38),function(e){return l.a.createElement(h.a,{duration:200},l.a.createElement("div",{className:"modal is-active"},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-content",style:{width:"auto",height:"auto"}},e.children),l.a.createElement("button",{className:"modal-close is-large",ariaLabel:"close",onClick:e.onClose})))}),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={modal:null,imageIsReady:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=new Image;a.src="img/my_pic.jpg",a.onload=function(){e.setState({imageIsReady:!0})}}},{key:"closeModal",value:function(){this.setState({modal:null})}},{key:"modalRtsrpg",value:function(){var e=this;return l.a.createElement(p,{onClose:function(){return e.closeModal()}},l.a.createElement("div",{style:{width:800,height:500,position:"relative"}},l.a.createElement(g.a,{size:100,color:"#FFF",css:{display:"block",position:"absolute",top:"50%",left:"50%"}}),l.a.createElement("iframe",{title:"game",src:"games/rtsrpg",style:{width:"100%",height:"100%",position:"relative"}})),l.a.createElement("div",{className:"box content"},l.a.createElement("h3",null,"Controls:"),l.a.createElement("p",null,"WASD: Movements"),l.a.createElement("p",null,"Left Click: Select / Move to"),l.a.createElement("p",null,"F1: Select the Ranger"),l.a.createElement("p",null,"F2: Select the Warrior"),l.a.createElement("p",null,"Space: Pause"),l.a.createElement("p",null,"U: Mute / Unmute")))}},{key:"renderModal",value:function(){switch(this.state.modal){case"rtsrpg":return this.modalRtsrpg();default:return null}}},{key:"renderInfo",value:function(){return l.a.createElement("section",{className:"hero is-primary is-fullheight"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement(h.a,null,l.a.createElement("figure",{className:"image",style:{maxWidth:512,margin:"0 auto"}},l.a.createElement("img",{alt:"Yonsh Lin",src:"img/my_pic.jpg",className:"is-rounded"}))),l.a.createElement(h.a,{left:!0,delay:200,distance:"0.6em"},l.a.createElement("h2",{className:"subtitle is-size-4",style:{marginTop:20}},"Hi, I'm")),l.a.createElement(h.a,{left:!0,delay:400,distance:"0.6em"},l.a.createElement("h1",{className:"title is-size-1"},"Yonsh Lin")))))}},{key:"renderProjects",value:function(){var e=this;return l.a.createElement("section",{className:"hero is-warning"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{bottom:!0,distance:"1em",duration:500},l.a.createElement("h1",{className:"title has-text-centered"},"Take a look at some of my indie game projects")),l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement(h.a,{bottom:!0,cascade:!0,distance:"1em"},l.a.createElement("div",{className:"column is-half is-one-third-widescreen"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"img/rtsrpg.jpg",alt:"Placeholder"}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"title"},"Defenders of the Realm"),l.a.createElement("p",{className:"subtitle has-text-grey"},"RTS/RPG"),l.a.createElement("p",null,"A game I made when"," ",l.a.createElement("a",{href:"https://esotericsoftware.com",target:"_blank",rel:"noopener noreferrer"},"Spine")," ","just released."),l.a.createElement("p",{style:{marginBottom:0}},"Features:"),l.a.createElement("ul",{style:{marginTop:0}},l.a.createElement("li",null,"Threat system"),l.a.createElement("li",null,"Can issue commands when paused"),l.a.createElement("li",null,"The warrior has an AI that protects the ranger"),l.a.createElement("li",null,"Spine animation")),l.a.createElement("button",{className:"button is-primary",onClick:function(){return e.setState({modal:"rtsrpg"})}},"Try it out!"))))),l.a.createElement("div",{className:"column is-half is-one-third-widescreen"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder"}))),l.a.createElement("div",{className:"card-content"}))))))))}},{key:"render",value:function(){return this.state.imageIsReady?l.a.createElement("div",{className:"App"},this.renderInfo(),this.renderProjects(),this.renderModal()):null}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.8a64b377.chunk.js.map