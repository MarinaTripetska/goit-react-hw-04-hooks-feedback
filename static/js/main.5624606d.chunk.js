(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={box:"Statistic_box__Qyji7",title:"Statistic_title__cb70k",elem:"Statistic_elem__1xlNH",elemTxt:"Statistic_elemTxt__3-aWv"}},10:function(e,t,a){e.exports={btn:"FeedbackOptions_btn__JejyO"}},11:function(e,t,a){e.exports={notification:"Notification_notification__3S748"}},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(5),i=a.n(s),o=(a(18),a(6)),r=a(7),l=a(8),d=a(13),b=a(12),u=a(9),j=a.n(u),m=a(0);function x(e){var t=e.title,a=e.children;return Object(m.jsxs)("section",{className:j.a.section,children:[Object(m.jsx)("h1",{children:t}),a]})}var h=a(3),p=a.n(h),v=a(1),O=a.n(v);function f(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(m.jsxs)("div",{className:O.a.box,children:[Object(m.jsx)("h2",{className:O.a.title,children:"Statistics:"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{className:O.a.elem,children:[Object(m.jsx)("span",{className:O.a.elemTxt,children:"Good: "})," ",t]}),Object(m.jsxs)("p",{className:O.a.elem,children:[Object(m.jsx)("span",{className:O.a.elemTxt,children:"Neutral: "})," ",a]}),Object(m.jsxs)("p",{className:O.a.elem,children:[Object(m.jsx)("span",{className:O.a.elemTxt,children:"Bad: "}),c]}),Object(m.jsxs)("p",{className:O.a.elem,children:[Object(m.jsx)("span",{className:O.a.elemTxt,children:"Total: "}),n]}),Object(m.jsxs)("p",{className:O.a.elem,children:[Object(m.jsx)("span",{className:O.a.elemTxt,children:"Positive Feedback: "}),s,"%"]})]})]})}f.prototype={good:p.a.number.isRequired,neutral:p.a.number.isRequired,bad:p.a.number.isRequired,total:p.a.number.isRequired,positivePercentage:p.a.number.isRequired};var g=a(10),k=a.n(g);function _(e){var t=e.options,a=e.leaveFeedback;return Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)("button",{className:k.a.btn,type:"button",name:e,onClick:a,children:e},e)}))})}var N=a(11),T=a.n(N);function F(e){var t=e.message;return Object(m.jsx)("p",{className:T.a.notification,children:t})}var S=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0,sumTotal:0,goodFeedback:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}),e.countTotalFeedback)},e.countTotalFeedback=function(){var t=e.state,a=t.good,c=t.neutral,n=t.bad;e.setState({sumTotal:a+c+n},e.countPositiveFeedbackPercentage)},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,c=t.sumTotal;e.setState({goodFeedback:Math.floor(100*a/c)})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,n=e.sumTotal,s=e.goodFeedback;return Object(m.jsxs)(x,{title:"Please leave feedback",children:[Object(m.jsx)(_,{options:["good","neutral","bad"],leaveFeedback:this.leaveFeedback}),n>0?Object(m.jsx)(f,{good:t,neutral:a,bad:c,total:n,positivePercentage:s}):Object(m.jsx)(F,{message:"No feedback given"})]})}}]),a}(c.Component),P=S;i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={section:"Section_section__1q5Bg"}}},[[22,1,2]]]);
//# sourceMappingURL=main.5624606d.chunk.js.map