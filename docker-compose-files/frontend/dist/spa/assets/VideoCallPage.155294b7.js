import{Z as $,r as v,o as D,z as n,A as S,B as c,F as U,H as u,$ as B,a0 as d,C as N,Q as y,a4 as g,a1 as m,a3 as E,a2 as J}from"./index.785636a8.js";import{u as L,a as F,c as R,b as q,Q as z,S as H,d as T,v as Y}from"./socket.0528c22d.js";import{a as Z}from"./axios.6e1fcf85.js";const G=$("users",{state:()=>({users:Array()}),getters:{getUsers:f=>f.users},actions:{setUsers(f){this.users=f}}}),I={class:""},K={class:"full-width row items-center justify-evenly"},W={key:0},X={key:1},oe={__name:"VideoCallPage",setup(f){const h=v(),V=v(),k=v(),a=L(),l=F(),P="api.chat.jemsit.net/ws",b=G(),r=v(!1);let C;D(()=>{navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(e=>{h.value=e,V.value.srcObject=e,l.setVideo=e}),O(),C=R(),q.on("refresh-users",()=>{O(),j()})});const O=()=>{Z.get("api.chat.jemsit.net/users").then(e=>{let s=a.getUsername;var t=e.data.indexOf(s);t!==-1&&e.data.splice(t,1),console.log(e.data),b.setUsers(e.data)})},A=(e,s,t)=>{const p=new H(P);let _=T.over(p);_.debug=null;const i=new SimplePeer({initiator:!0,stream:s,trickle:!1});i.on("error",o=>{console.error("Peer error:",o)}),i.on("signal",o=>{console.log("Data is this=>",o),Y(o,e,t)}),i.on("stream",o=>{console.log("in the stream peer"),k.value.srcObject=o}),l.setConnection(i);const x={};_.connect(x,()=>{_.subscribe("/topic/answer",o=>{const w=JSON.parse(o.body);console.log("sender=> ",w.sender),console.log("username=> ",a.getUsername),w.sender!=a.getUsername&&(i.signal(w.signal),console.log("peer signal is sent"),r.value=!0)},x)},o=>{console.log("error is=>",o)})},M=()=>{console.log("inside get Remote function");const e=new SimplePeer({initiator:!1,stream:h.value,trickle:!1});e.on("error",s=>{console.error("Peer error:",s)}),e.on("signal",s=>{Q(s)}),e.signal(l.getSignal),e.on("stream",s=>{console.log("in the stream peer"),k.value.srcObject=s}),l.setConnection(e),r.value=!0};function Q(e){C.debug=null;const s={},t={signal:e};try{C.send("/app/answer.videoCall",s,JSON.stringify(t))}catch(p){console.log("Error in answer function",p)}a.setSomeOneCalling(!1)}function j(){r.value=!1,l.getConnection.destroy()}return(e,s)=>(n(),S(z,{class:"row items-center justify-evenly"},{default:c(()=>[U("h3",I,[u(" Your username: "+B(d(a).getUsername)+" ",1),N(y,{"no-caps":"",color:"info",to:"/chat"},{default:c(()=>[u("Back to chat")]),_:1})]),U("div",K,[U("video",{width:"600",height:"500",ref_key:"myVideo",ref:V,autoplay:"",playsinline:""},null,512),d(a).getSomeOneCalling?(n(),S(y,{key:0,color:"secondary",onClick:s[0]||(s[0]=t=>M())},{default:c(()=>[u(" Answer-call ")]),_:1})):g("",!0),r.value?(n(),m("video",{key:1,width:"600",height:"500",ref_key:"userVideo",ref:k,autoplay:"",playsinline:""},null,512)):g("",!0)]),r.value?g("",!0):(n(),m("div",W,[(n(!0),m(E,null,J(d(b).getUsers,t=>(n(),m("div",{key:t,style:{display:"inline"},class:"q-mr-lg"},[d(a).getUsername!=t?(n(),S(y,{key:0,color:"primary","no-caps":"",onClick:p=>A(t,h.value,d(a).getUsername)},{default:c(()=>[u("Call - "+B(t),1)]),_:2},1032,["onClick"])):g("",!0)]))),128))])),r.value?(n(),m("div",X,[N(y,{onClick:s[1]||(s[1]=t=>j()),color:"negative"},{default:c(()=>[u("End Call")]),_:1})])):g("",!0)]),_:1}))}};export{oe as default};