class kith{constructor(e={}){this.v1=e.common||[],this.v2=e.length||8,this.v3=e.rejectScore||0,this.v4=e.checks||{repeated:{score:10,code:"(.)\\1{2}",invert:!0},symbols:{score:20,code:"\\W"},uppercase:{score:20,code:"[A-Z]"},lowercase:{score:10,code:"[a-z]"},numbers:{score:15,code:"[0-9]"}}}addCheck(e,t){this.v4[e]=t}test(e,t={}){let s=Object.keys(this.v4),r=t.common||this.v1,c=0,o={};return null!=this.v2&&(e.length>=this.v2?(o.length=!0,c+=25):o.length=!1),s.forEach(t=>{var s=this.v4[t];RegExp(s.code).test(e)?(o[t]=!0,Boolean(1==s.invert)||(c+=s.score)):(o[t]=!1,1==s.invert&&(c+=s.score))}),{score:c,checks:o,rejected:!!(r.includes(e)||c<this.v3)}}generate(e,t={}){t.characters=t.characters||"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",t.test=t.test||!1;let s="";for(let r=0;r<=e;r++)s+=t.characters.charAt(Math.floor(Math.random()*t.characters.length));return t.test?{test:this.test(s),password:s}:s}}export default kith;export{kith};