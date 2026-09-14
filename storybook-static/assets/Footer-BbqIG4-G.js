import{n as e}from"./lib-Cfm15nIH.js";import{c as t,i as n,n as r,s as i}from"./dist-Be8URD8b.js";import{t as a}from"./jsx-runtime-BfETmhAO.js";import{Default as o,Minimal as s,WithCustomInfo as c,t as l}from"./Footer.stories-B5NSqIF8.js";var u=a();function d(a){let d={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e(),...a.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:l}),`
`,(0,u.jsx)(d.h1,{id:`footer-organism`,children:`Footer Organism`}),`
`,(0,u.jsxs)(d.p,{children:[`The Toltem footer is an `,(0,u.jsx)(d.strong,{children:`organism`}),` in Atomic Design terms: it combines atoms
(`,(0,u.jsx)(d.code,{children:`Wordmark`}),`) and molecules (navigation group, contact items, social links) into a
self-contained page section that appears on every page.`]}),`
`,(0,u.jsx)(d.h2,{id:`layout`,children:`Layout`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{children:`[ Brand ]       [ Navigation ]    [ Contact ]       [ Social ]
Toltem           Home              Address           Instagram
description      Menu              Phone             Facebook
                                   Email             X / Twitter

© Toltem Restaurant · All rights reserved.
`})}),`
`,(0,u.jsx)(d.h2,{id:`brand-consistency`,children:`Brand consistency`}),`
`,(0,u.jsxs)(d.p,{children:[`The footer reuses the same `,(0,u.jsx)(d.code,{children:`Wordmark`}),` atom as the header so the brand stays
visually identical across the site. Do not introduce a second logo variation.`]}),`
`,(0,u.jsx)(d.h2,{id:`placeholder-strategy`,children:`Placeholder strategy`}),`
`,(0,u.jsx)(d.p,{children:`Business details (address, phone, email, description, social accounts) are
configurable props with clearly-marked defaults. None of these are fake real
business information — they are placeholders that can be replaced when the
actual data is available:`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`<Footer
  description="Farm-to-table dishes crafted daily."
  address="456 Food Avenue, Metropolis"
  phone="+1 (555) 123-4567"
  email="reservations@toltem.example"
/>
`})}),`
`,(0,u.jsx)(d.h2,{id:`reusing-the-button-component`,children:`Reusing the Button component`}),`
`,(0,u.jsxs)(d.p,{children:[`The footer does not currently contain an action button. If an action is ever
needed (for example a newsletter subscribe), plug in the teammate's `,(0,u.jsx)(d.code,{children:`Button`}),`
component the same way the header will.`]}),`
`,(0,u.jsx)(d.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsxs)(d.li,{children:[`Semantic `,(0,u.jsx)(d.code,{children:`<footer>`}),` / `,(0,u.jsx)(d.code,{children:`<section>`}),` / `,(0,u.jsx)(d.code,{children:`<a>`}),` elements`]}),`
`,(0,u.jsxs)(d.li,{children:[`Each section has an `,(0,u.jsx)(d.code,{children:`aria-label`})]}),`
`,(0,u.jsxs)(d.li,{children:[`Social links have descriptive `,(0,u.jsx)(d.code,{children:`aria-label`}),`s since the icons are placeholders`]}),`
`,(0,u.jsxs)(d.li,{children:[`Email is a real `,(0,u.jsx)(d.code,{children:`mailto:`}),` link`]}),`
`,(0,u.jsx)(d.li,{children:`Visible focus rings on every interactive control`}),`
`]}),`
`,(0,u.jsx)(d.h2,{id:`props`,children:`Props`}),`
`,(0,u.jsx)(n,{}),`
`,(0,u.jsx)(d.h2,{id:`stories`,children:`Stories`}),`
`,(0,u.jsx)(r,{children:(0,u.jsx)(t,{of:o})}),`
`,(0,u.jsx)(r,{children:(0,u.jsx)(t,{of:c})}),`
`,(0,u.jsx)(r,{children:(0,u.jsx)(t,{of:s})})]})}function f(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,u.jsx)(n,{...t,children:(0,u.jsx)(d,{...t})}):d(t)}export{f as default};