(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),d=n.n(r),u=(n(12),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.today.toUTCString().slice(-12,-4),e=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(d.a.Component);var h=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.clockNameId=0,t.handleWindowClick=function(){t.setState({hasClock:!0})},t.handleWindowContext=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.clockNameId=window.setInterval((function(){var e=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}();t.setState({clockName:e})}),3300),document.addEventListener("click",this.handleWindowClick),document.addEventListener("contextmenu",this.handleWindowContext)}},{key:"componentDidUpdate",value:function(t,e){e.clockName!==this.state.clockName&&void 0===t.clockName&&this.state.hasClock&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.clockNameId),document.removeEventListener("contextmenu",this.handleWindowContext),document.removeEventListener("click",this.handleWindowClick)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(u.jsx)(m,{name:this.state.clockName})]})}}]),n}(d.a.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.39e2d354.chunk.js.map