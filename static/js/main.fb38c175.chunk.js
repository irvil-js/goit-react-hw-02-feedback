(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={section:"Section_section__QSek1",title:"Section_title__2wCez"}},,,,function(t,e,n){t.exports={statList:"Statistics_statList__1PJaG",list:"Statistics_list__3IJM3"}},function(t,e,n){t.exports={buttonContainer:"FeedbackOptions_buttonContainer__1lTIA",button:"FeedbackOptions_button__2EYCJ"}},function(t,e,n){t.exports={notification:"Notification_notification__3HP78"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(6),o=n.n(i),s=n(2),r=n(4),l=n(7),b=n(8),u=n(13),d=n(12),j=n(5),h=n.n(j),O=n(0),f=function(t){var e=t.title,n=t.children;return Object(O.jsxs)("section",{className:h.a.section,children:[Object(O.jsx)("h2",{className:h.a.title,children:e}),n]})},k=n(9),x=n.n(k),g=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(O.jsxs)("ul",{className:x.a.list,children:[Object(O.jsxs)("li",{children:["Good: ",e]}),Object(O.jsxs)("li",{children:["Neutral: ",n]}),Object(O.jsxs)("li",{children:["Bad: ",a]}),Object(O.jsxs)("li",{children:["Total: ",c]}),Object(O.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})},p=n(10),_=n.n(p),v=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(O.jsx)(O.Fragment,{children:e.map((function(t){return Object(O.jsx)("button",{className:_.a.button,type:"button",name:t,onClick:n,children:t},t)}))})},m=n(11),F=n.n(m),P=function(t){var e=t.message;return Object(O.jsx)("p",{className:F.a.notification,children:e})},C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleClick=function(e){var n=e.target.name;t.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},n,t.state[n]+1))}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return t.state.good?Math.round(t.state.good/t.countTotalFeedback()*100):0},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{title:"Please leave feedback",children:Object(O.jsx)(v,{options:Object.keys(this.state),onLeaveFeedback:this.handleClick})}),this.countTotalFeedback()?Object(O.jsx)(f,{title:"Statistics",children:Object(O.jsx)(g,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(O.jsx)(P,{message:"No feedback given"})]})}}]),n}(a.Component);n(19);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fb38c175.chunk.js.map