(this.webpackJsonpreact_with_typescript_and_tailwindcss_template=this.webpackJsonpreact_with_typescript_and_tailwindcss_template||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),n=a(7),s=a.n(n),c=(a(12),a(4)),o=a(2),l=a(0),d=function(e){var t=e.monster;return Object(l.jsx)("div",{className:"flex justify-center py-8 sm:px-6 px-4",children:Object(l.jsxs)("div",{className:"max-w-sm w-full relative rounded shadow bg-white dark:bg-gray-800 grid place-content-center text-center",children:[Object(l.jsx)("img",{src:t.url,alt:"monster"}),Object(l.jsx)("div",{className:"py-6 px-6 flex md:items-center justify-between",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"sm:text-lg text-base font-semibold leading-5 text-gray-800 dark:text-gray-100",children:t.name}),Object(l.jsx)("p",{className:"sm:text-base text-sm leading-4 pt-3 text-gray-500 dark:text-gray-400",children:t.description})]})})]})})},p=function(e){var t=e.monsters;return Object(l.jsx)("div",{className:"grid grid-cols-4",children:t.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},y=[{id:Object(o.v4)(),name:"Bob",description:"This is a good bald man",url:"https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Dizzy&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Brown"},{id:Object(o.v4)(),name:"Jake",description:"This is a Hat Man",url:"https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Pizza&eyeType=Side&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Yellow"},{id:Object(o.v4)(),name:"Finn",description:"This is a Adventure Man",url:"https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription01&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"}];fetch("https://jsonplaceholder.typicode.com/users").then((function(e){e.json().then((function(e){return console.log(e)}))}));var u=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],n=Object(r.useState)(""),s=Object(c.a)(n,2),o=s[0],d=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:"border-2 border-gray-400",type:"text",onChange:function(e){i((function(t){return y.filter((function(t){return t.name.toString().toLowerCase().trim().includes(e.target.value.toString().toLowerCase().trim())}))})),d(e.target.value)},value:o}),o.toString().trim().toString()?Object(l.jsx)(p,{monsters:a}):Object(l.jsx)(p,{monsters:y})]})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a98b2235.chunk.js.map