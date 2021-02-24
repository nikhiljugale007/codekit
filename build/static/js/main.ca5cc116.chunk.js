(this.webpackJsonpcodekit=this.webpackJsonpcodekit||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(36),r=n.n(i),a=(n(49),n(50),n(37)),o=n(38),l=n(44),j=n(43),d=n(7),h=n(14),b=(n.p,n(0)),u=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1,isLogged:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e.handleLogin=function(){e.setState({isLogged:!e.state.isLogged})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"nav-center",children:[Object(b.jsxs)("div",{className:"nav-header",children:[Object(b.jsx)("div",{className:"nav-links",children:Object(b.jsx)(d.b,{to:"/",children:'\ud83d\ude80codeKIT\ud83d\ude80"'})}),Object(b.jsx)("button",{type:"button",className:"nav-btn",onClick:this.handleToggle,children:Object(b.jsx)(h.a,{className:"nav-icon"})})]}),Object(b.jsxs)("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"/problems",children:"Problems"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"/contest",children:"Contest"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"/blogs",children:"Blogs"})})]}),Object(b.jsxs)("div",{className:"nav-links",children:[Object(b.jsx)(d.b,{to:"/",children:this.state.isLogged?"Login":"username"}),Object(b.jsx)("button",{className:"nav-btn-login",onClick:this.handleLogin,children:"login"})]})]})})}}]),n}(s.Component),O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("header",{className:"defaultHero",children:Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsx)("h1",{children:"Everybody Can Code"}),Object(b.jsx)("div",{}),Object(b.jsx)("p",{children:"The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined platform."})]})})})},x=n(12),m=function(){var e=c.a.useState([{name:"Quality Question",description:"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",icon:Object(b.jsx)(h.d,{})},{name:"Integrated IDE",description:"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",icon:Object(b.jsx)(h.c,{})},{name:"Quality Editorials",description:"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",icon:Object(b.jsx)(h.e,{})},{name:"Study Material",description:"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",icon:Object(b.jsx)(h.b,{})}]),t=Object(x.a)(e,2),n=t[0];t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:"services",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("h4",{children:"Features"}),Object(b.jsx)("div",{})]}),Object(b.jsx)("div",{className:"services-center",children:n.map((function(e){return Object(b.jsxs)("article",{className:"service",children:[Object(b.jsx)("span",{children:e.icon}),Object(b.jsx)("h6",{children:e.name}),Object(b.jsxs)("p",{children:[e.description,Object(b.jsx)(d.b,{to:"/rooms",children:"Learn More"})]})]},"item-".concat(e.name))}))})]})})},p=(n(59),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("footer",{class:"footer-container",children:[Object(b.jsx)("div",{className:"footer-links-container",children:Object(b.jsxs)("p",{class:"footer-links",children:[Object(b.jsx)("a",{href:"https://www.google.com/",target:"_blank",children:"Contact Us"}),"|",Object(b.jsx)("a",{href:"https://www.google.com/",target:"_blank",children:"Contribute"}),"|",Object(b.jsx)("a",{href:"https://www.google.com/",target:"_blank",children:"Sponser Us"}),"|",Object(b.jsx)("a",{href:"https://www.google.com/",target:"_blank",children:"Feedback"})]})}),Object(b.jsx)("div",{className:"footer-copyright",children:"copyright@2020 All rights reserved"})]})})}),g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{}),Object(b.jsx)(p,{})]})},f=n(23),v=n.n(f),w=n(40),y=n(90),k=n(91),F=function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(!1),r=Object(x.a)(i,2),a=r[0],o=r[1],l=Object(s.useState)("https://kontests.net/api/v1/all"),j=Object(x.a)(l,2),d=j[0],h=j[1],u=Object(s.useState)(!0),O=Object(x.a)(u,2),m=O[0],p=O[1];function g(){return(g=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d);case 2:e.sent.json().then((function(e){return c(e)}),p(!1)).catch((function(e){return o(a)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[d]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsx)("h1",{children:"Know where you stand"}),Object(b.jsx)("div",{}),Object(b.jsx)("p",{children:"Currentaly we not hosting any contests.But we encourage you to participate in contests going on other platforms. You can filter all running and future contes below:"})]}),Object(b.jsxs)("section",{className:"filter-container",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("p",{children:"Green indicates all running contest and blue indicates upcoming contest"}),Object(b.jsx)("h4",{children:"Filter Contest"}),Object(b.jsx)("div",{})]}),Object(b.jsx)("form",{className:"filter-form",children:Object(b.jsxs)("div",{className:"form-group",style:{width:"500px",margin:"1% auto"},children:[Object(b.jsx)("label",{htmlFor:"tag",children:"Select Platform"}),Object(b.jsxs)("select",{name:"tag",id:"tag",onChange:function(e){p(!0),h(e.target.value)},className:"form-control",children:[Object(b.jsx)("option",{value:"https://kontests.net/api/v1/all",children:"All"}),Object(b.jsx)("option",{value:"https://kontests.net/api/v1/code_chef",children:"CodeChef"}),Object(b.jsx)("option",{value:"https://kontests.net/api/v1/codeforces",children:"CodeForces"}),Object(b.jsx)("option",{value:"https://kontests.net/api/v1/hacker_rank",children:"HackerRank"}),Object(b.jsx)("option",{value:"https://kontests.net/api/v1/hacker_earth",children:"HackerEarth"}),Object(b.jsx)("option",{value:"https://kontests.net/api/v1/top_coder",children:"TopCoder"})]})]})})]}),Object(b.jsx)("div",{style:{marginLeft:"10%",marginRight:"10%"},children:Object(b.jsxs)(y.a,{bordered:!0,hover:!0,shadow:!0,children:[Object(b.jsx)("thead",{class:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsxs)("th",{children:["Start Date ",Object(b.jsx)("br",{})," and Time"]}),Object(b.jsxs)("th",{children:["End Date ",Object(b.jsx)("br",{})," and Time"]}),"https://kontests.net/api/v1/all"==d?Object(b.jsx)("th",{children:"Site"}):Object(b.jsx)("th",{})]})}),m?Object(b.jsx)(k.a,{animation:"border",variant:"primary"}):Object(b.jsx)("tbody",{children:n.map((function(e,t){return Object(b.jsxs)("tr",{scope:"row",onClick:function(){return function(e){window.open(e.url,"_blank").focus()}(e)},style:new Date(e.start_time).getTime()>(new Date).getTime()?{color:"#0000FF"}:{color:"#32CD32"},children:[console.log(new Date(e.start_time).getTime()>(new Date).getTime()),Object(b.jsx)("td",{children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsxs)("td",{children:["Date = ",new Date(e.start_time).getDate(),"/",new Date(e.start_time).getMonth()+1,"/",new Date(e.start_time).getFullYear(),Object(b.jsx)("br",{}),"Time = ",new Date(e.start_time).getHours(),":",new Date(e.start_time).getMinutes()," "]}),Object(b.jsxs)("td",{children:["Date = ",new Date(e.end_time).getDate(),"/",new Date(e.end_time).getMonth(),"/",new Date(e.end_time).getFullYear(),Object(b.jsx)("br",{}),"Time = ",new Date(e.end_time).getHours(),":",new Date(e.end_time).getMinutes()," "]}),Object(b.jsx)("td",{children:Object(b.jsx)("a",{href:e.url,target:"_blank",children:e.site})})]})}))})]})})]})},N=n(94),S=n(95),I=n(92),T=n(93),C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsx)("h1",{children:"Learning is the first step"}),Object(b.jsx)("div",{}),Object(b.jsx)("p",{children:"HandPicked 130 Coding Interview Questions The practice you need to ace the coding interviews.Solve them and Check you knowledge."})]}),Object(b.jsx)(I.a,{fluid:!0,style:{padding:"10px",margin:"10px"},children:Object(b.jsx)(T.a,{children:[{name:"Stack",description:"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",link:"https://www.geeksforgeeks.org/stack-data-structure/"},{name:"Queue",description:"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",link:"https://www.geeksforgeeks.org/queue-data-structure/"},{name:"Stack",description:"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",link:"https://www.geeksforgeeks.org/stack-data-structure/"},{name:"Queue",description:"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",link:"https://www.geeksforgeeks.org/queue-data-structure/"},{name:"Stack",description:"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",link:"https://www.geeksforgeeks.org/stack-data-structure/"},{name:"Queue",description:"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",link:"https://www.geeksforgeeks.org/queue-data-structure/"},{name:"Queue",description:"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",link:"https://www.geeksforgeeks.org/queue-data-structure/"},{name:"Stack",description:"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",link:"https://www.geeksforgeeks.org/stack-data-structure/"},{name:"Queue",description:"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",link:"https://www.geeksforgeeks.org/queue-data-structure/"}].map((function(e,t){return Object(b.jsx)(N.a,{style:{width:"18rem"},children:Object(b.jsxs)(N.a.Body,{children:[Object(b.jsx)(N.a.Title,{children:e.name}),Object(b.jsx)(N.a.Text,{children:e.description}),Object(b.jsx)("a",{href:e.link,target:"_blank",children:Object(b.jsx)(S.a,{variant:"primary",children:"Go somewhere"})})]})})}))})})]})},D=(n(61),function(){var e=function(){console.log("handel change")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:"filter-container",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("h4",{children:"Search Problems"}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("form",{className:"filter-form",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"difficulty",children:"Difficulty Level"}),Object(b.jsxs)("select",{name:"difficulty",id:"difficulty",onChange:e,className:"form-control",children:[Object(b.jsx)("option",{value:"Any",children:"Any"}),Object(b.jsx)("option",{value:"Easy",children:"Easy"}),Object(b.jsx)("option",{value:"Medium",children:"Medium"}),Object(b.jsx)("option",{value:"Hard",children:"Hard"})]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"tag",children:"Select Tag"}),Object(b.jsxs)("select",{name:"tag",id:"tag",onChange:e,className:"form-control",children:[Object(b.jsx)("option",{value:"All",children:"All"}),Object(b.jsx)("option",{value:"Array",children:"Array"}),Object(b.jsx)("option",{value:"String",children:"String"}),Object(b.jsx)("option",{value:"Math",children:"Math"}),Object(b.jsx)("option",{value:"Dynamic Programming",children:"Dynamic Programming"}),Object(b.jsx)("option",{value:"Algorithms",children:"Algorithms"})]})]})]})]})})}),L=function(){var e=c.a.useState([{id:1,name:" Shuffle String",difficulty:"Easy",submission:10},{id:2,name:"1486. XOR Operation in an Array",difficulty:"Medium",submission:10},{id:3,name:"Shuffle the Array",difficulty:"Easy",submission:10},{id:4,name:"Chintu and Pintu Chintu and pintu",difficulty:"Hard",submission:10}]),t=Object(x.a)(e,2),n=t[0];t[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsx)("h1",{children:"Pick > Write > Submit"}),Object(b.jsx)("div",{}),Object(b.jsx)("p",{children:"HandPicked 130 Coding Interview Questions The practice you need to ace the coding interviews.Solve them and Check you knowledge."})]}),Object(b.jsx)(D,{}),Object(b.jsx)("div",{style:{width:"70%",margin:"10px auto"},children:Object(b.jsxs)(y.a,{bordered:!0,hover:!0,shadow:!0,children:[Object(b.jsx)("thead",{class:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Question"}),Object(b.jsx)("th",{children:"Difficulty"}),Object(b.jsx)("th",{children:"Submissions"}),Object(b.jsx)("th",{children:"Status"})]})}),Object(b.jsx)("tbody",{children:n.map((function(e,t){return Object(b.jsxs)("tr",{scope:"row",children:[Object(b.jsx)("td",{children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.difficulty}),Object(b.jsx)("td",{children:e.submission}),Object(b.jsx)("td",{children:Object(b.jsx)(d.b,{to:"/problems/".concat(e.name),children:Object(b.jsx)("button",{type:"button",class:"btn btn-success",children:"Solve"})})})]})}))})]})})]})},A=n(41),_=n(42),Q=n.n(_),q=(n(67),n(68),n(69)),E=function(){var e=c.a.useState(""),t=Object(x.a)(e,2),n=t[0],s=t[1];function i(e){s(e)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"question-cotainer",children:[Object(b.jsx)("div",{className:"question-title",children:"Even Sum"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"question-extras",children:[Object(b.jsx)("div",{className:"question-difficulty",children:"Difficulty: Medium"}),Object(b.jsx)("div",{className:"question-tags",children:"Tags:Resursion"})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"question-description",children:[Object(b.jsx)("h6",{children:"Description:"}),Object(b.jsx)("p",{children:"There are N integers in an array A. Two players take turns alternatively in placing signs (+ or -) before them, and then they all are added. The sign can be placed before any element of the array that has not been assigned a sign yet. All elements must be assigned a sign. Player 1 wins if the resulting sum is even, else player 2 wins. Find out who shall win if they both play optimally."})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Input:"}),Object(b.jsxs)("p",{children:["First line will contain T, number of testcases. Then the testcases follow. ",Object(b.jsx)("br",{}),"Each testcase contains 2 lines of input. ",Object(b.jsx)("br",{}),"First line contains a single integer N, size of the array. ",Object(b.jsx)("br",{}),'Second line contains N space separated integers - A1,A2,\u2026,AN, denoting the array elements"']})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Output:"}),Object(b.jsx)("p",{children:'For each testcase, output in a single line "1", if the first person wins or "2" if the second person wins.'})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Constraint:"}),Object(b.jsxs)("p",{children:["1\u2264T\u226410 ",Object(b.jsx)("br",{})," 1\u2264N\u2264105 ",Object(b.jsx)("br",{})," 1\u2264Ai\u2264109"]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Sample Input:"}),Object(b.jsxs)("p",{children:["3 ",Object(b.jsx)("br",{}),"2 ",Object(b.jsx)("br",{})," 1 2 ",Object(b.jsx)("br",{})," 3 ",Object(b.jsx)("br",{})," 1 1 2 ",Object(b.jsx)("br",{})," 3 ",Object(b.jsx)("br",{})," 1 2 4"]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Sample Output:"}),Object(b.jsxs)("p",{children:["2 ",Object(b.jsx)("br",{}),"1 ",Object(b.jsx)("br",{})," 2"]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"Write Code here:"}),Object(b.jsxs)("div",{className:"editor-container",children:[Object(b.jsx)(Q.a,Object(A.a)({mode:"java",theme:"solarized_dark",onChange:i,name:"editor",fontSize:"18px",width:"80%",height:"600px",placeholder:"write your code here",enableBasicAutocompletion:"true",enableLiveAutocompletion:"true",editorProps:{$blockScrolling:!0},value:n},"onChange",i)),Object(b.jsx)("button",{onClick:function(){var e={compilerId:44,source:n};q.post("https://7f7cf77c.compilers.sphere-engine.com/api/v4/submissions?access_token=d646ebfeb70a973e3f42a085dd0cd1a9",e).then((function(e){console.log(e)}))},className:"btn btn-primary btn-submit",children:"Submit"})]})]}),Object(b.jsx)("hr",{})]})})};b.Fragment;var M=function(){return Object(b.jsx)("div",{children:"Error Page"})},P=n(4);n(88);var H=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)(P.c,{children:[Object(b.jsx)(P.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(P.a,{exact:!0,path:"/problems",component:L}),Object(b.jsx)(P.a,{exact:!0,path:"/contest",component:F}),Object(b.jsx)(P.a,{exact:!0,path:"/blogs",component:C}),Object(b.jsx)(P.a,{exact:!0,path:"/user",component:g}),Object(b.jsx)(P.a,{exact:!0,path:"/problems/:slug",component:E}),Object(b.jsx)(P.a,{component:M})]})]})};r.a.render(Object(b.jsx)(d.a,{children:Object(b.jsx)(H,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ca5cc116.chunk.js.map