"use strict";(self.webpackChunkgii=self.webpackChunkgii||[]).push([[919],{35919:function(K,m,i){i.r(m),i.d(m,{Button:function(){return S.default},Divider:function(){return W},Switch:function(){return B}});var S=i(6503),D=i(27424),M=i.n(D),N=i(59400),l=i.n(N),O=i(67294),c=i(41686),Z=i(50888),r=i(85893),b,k,C,P=c.ZP.button(b||(b=l()([`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: `,`;
  height: `,`;
  line-height: `,`;
  padding: 0;
  vertical-align: middle;
  background: `,`;
  border: 0;
  border-radius: 100px;
  cursor: `,`;
  transition: all 0.2s;
  opacity: `,`;

  &:focus {
    outline: none;
  }

  &:hover:not(:disabled) {
    background: `,`;
  }
`])),function(n){return n.$size==="small"?"28px":"44px"},function(n){return n.$size==="small"?"16px":"22px"},function(n){return n.$size==="small"?"16px":"22px"},function(n){return n.$checked?"#1890ff":"rgba(0, 0, 0, 0.25)"},function(n){return n.$disabled||n.$loading?"not-allowed":"pointer"},function(n){return n.$disabled?.4:1},function(n){return n.$checked?"#40a9ff":"rgba(0, 0, 0, 0.45)"}),T=c.ZP.span(k||(k=l()([`
  position: absolute;
  top: `,`;
  left: `,`;
  width: `,`;
  height: `,`;
  background: white;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`])),function(n){return n.$size==="small","2px"},function(n){return n.$size==="small"?n.$checked?"12px":"2px":n.$checked?"22px":"2px"},function(n){return n.$size==="small"?"12px":"18px"},function(n){return n.$size==="small"?"12px":"18px"}),L=c.ZP.span(C||(C=l()([`
  display: block;
  margin: 0 7px 0 `,`;
  color: #fff;
  font-size: `,`;
  transition: margin 0.2s;
`])),function(n){return n.$checked?"7px":"25px"},function(n){return n.$size==="small"?"12px":"14px"}),A=function(e){var t=e.checked,f=e.defaultChecked,g=f===void 0?!1:f,p=e.disabled,$=p===void 0?!1:p,v=e.loading,a=v===void 0?!1:v,s=e.size,d=s===void 0?"default":s,h=e.checkedChildren,u=e.unCheckedChildren,x=e.onChange,E=e.className,F=O.useState(g),j=M()(F,2),w=j[0],G=j[1],o=t!=null?t:w,J=function(){$||a||(t===void 0&&G(!w),x==null||x(!o))};return(0,r.jsxs)(P,{type:"button",role:"switch","aria-checked":o,$checked:o,$disabled:$,$size:d,$loading:a,onClick:J,className:E,children:[(0,r.jsx)(T,{$checked:o,$size:d,children:a&&(0,r.jsx)(Z.Z,{style:{fontSize:d==="small"?"8px":"12px"}})}),(h||u)&&(0,r.jsx)(L,{$checked:o,$size:d,children:o?h:u})]})},B=A,z,y,I=c.ZP.div(z||(z=l()([`
  box-sizing: border-box;
  margin: 24px 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5714285714285714;
  list-style: none;
  font-feature-settings: 'tnum';
  border: none;
  border-top: `,`;

  `,`

  `,`
`])),function(n){return n.$dashed?"1px dashed rgba(5, 5, 5, 0.06)":"1px solid rgba(5, 5, 5, 0.06)"},function(n){return n.$type==="vertical"&&`
    position: relative;
    top: -0.06em;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
    border-top: 0;
    border-left: `.concat(n.$dashed?"1px dashed rgba(5, 5, 5, 0.06)":"1px solid rgba(5, 5, 5, 0.06)",`;
  `)},function(n){return n.$hasChildren&&`
    display: flex;
    align-items: center;
    border-top-color: rgba(5, 5, 5, 0.06);
    
    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: `.concat(n.$dashed?"1px dashed rgba(5, 5, 5, 0.06)":"1px solid rgba(5, 5, 5, 0.06)",`;
    }

    `).concat(n.$orientation==="left"&&`
      &::before {
        width: `.concat(n.$orientationMargin||"0",`;
        min-width: `).concat(n.$orientationMargin||"0",`;
      }
    `),`

    `).concat(n.$orientation==="right"&&`
      &::after {
        width: `.concat(n.$orientationMargin||"0",`;
        min-width: `).concat(n.$orientationMargin||"0",`;
      }
    `),`
  `)}),R=c.ZP.span(y||(y=l()([`
  display: inline-block;
  padding: 0 1em;
  font-weight: `,`;
  font-size: `,`;
  white-space: nowrap;
`])),function(n){return n.$plain?"normal":500},function(n){return n.$plain?"14px":"16px"}),H=function(e){var t=e.type,f=t===void 0?"horizontal":t,g=e.orientation,p=g===void 0?"center":g,$=e.orientationMargin,v=e.className,a=e.children,s=e.dashed,d=s===void 0?!1:s,h=e.plain,u=h===void 0?!1:h;return(0,r.jsx)(I,{className:v,$type:f,$orientation:p,$orientationMargin:$,$hasChildren:!!a,$dashed:d,$plain:u,children:a&&(0,r.jsx)(R,{$plain:u,children:a})})},W=H}}]);
