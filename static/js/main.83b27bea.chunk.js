(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),c=o(6),r=o.n(c),l=o(7),d=o(1),i=o(2),s=o(3),u=o(4),m=(o(13),function(t){var e=t.todos,o=t.deleteTodo,n=e.length?e.map((function(t){return a.a.createElement("div",{className:"todo collection-item",key:t.id},a.a.createElement("span",{onClick:function(){o(t.id)},className:"todo-item center"},t.content))})):a.a.createElement("p",{className:"center"},"You have no todos left! Yay!");return a.a.createElement("div",{className:"todo-list collection"},n)}),h=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todo:{content:""}},t.handleChange=function(e){t.setState({todo:{content:e.target.value}})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.todo),t.setState({todo:{content:""}})},t}return Object(i.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"addtodo-form"},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null,"Enter task todo"),a.a.createElement("input",{type:"text",value:this.state.todo.content,onChange:this.handleChange})))}}]),o}(n.Component),f=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:1,content:"Make react project"},{id:2,content:"Netflix and chill"},{id:3,content:"Eat lots of cheese"},{id:4,content:"Not go out!"}]},t.deleteTodo=function(e){console.log(e);var o=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:o})},t.addTodo=function(e){e.id=t.state.todos.length+1;var o=[].concat(Object(l.a)(t.state.todos),[e]);t.setState({todos:o})},t}return Object(i.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"todo-app container"},a.a.createElement("h1",{className:"blue-text center"},"Quarantine Schedule!"),a.a.createElement(m,{deleteTodo:this.deleteTodo,todos:this.state.todos}),a.a.createElement(h,{addTodo:this.addTodo}))}}]),o}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.83b27bea.chunk.js.map