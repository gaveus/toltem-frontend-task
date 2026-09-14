import{n as e}from"./lib-Cfm15nIH.js";import{c as t,i as n,n as r,s as i}from"./dist-Be8URD8b.js";import{t as a}from"./jsx-runtime-BfETmhAO.js";import{Default as o,MobilePreview as s,WithActiveMenu as c,t as l}from"./Header.stories-XRKO943l.js";var u=a();function d(a){let d={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e(),...a.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:l}),`
`,(0,u.jsx)(d.h1,{id:`header-organism`,children:`Header Organism`}),`
`,(0,u.jsxs)(d.p,{children:[`The Toltem header is an `,(0,u.jsx)(d.strong,{children:`organism`}),` in Atomic Design terms: it combines atoms
(`,(0,u.jsx)(d.code,{children:`Wordmark`}),`) and molecules (navigation group, cart control, action button) into
a meaningful, self-contained section that appears on every page.`]}),`
`,(0,u.jsx)(d.h2,{id:`layout`,children:`Layout`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{children:`[ Toltem ]  [ Home | Menu | About | Contact ]  [ Cart · Order Now ]
`})}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsxs)(d.li,{children:[(0,u.jsx)(d.strong,{children:`Left:`}),` Toltem wordmark (white text, clickable to home)`]}),`
`,(0,u.jsxs)(d.li,{children:[(0,u.jsx)(d.strong,{children:`Center:`}),` navigation links with active-state highlighting`]}),`
`,(0,u.jsxs)(d.li,{children:[(0,u.jsx)(d.strong,{children:`Right:`}),` cart indicator + Order Now action`]}),`
`]}),`
`,(0,u.jsx)(d.h2,{id:`mobile-behavior`,children:`Mobile behavior`}),`
`,(0,u.jsx)(d.p,{children:`On screens narrower than 768px the header collapses to:`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{children:`[ Toltem ............ ☰ ]
`})}),`
`,(0,u.jsxs)(d.p,{children:[`Tapping the hamburger opens a `,(0,u.jsx)(d.strong,{children:`full-screen overlay`}),` containing:`]}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsx)(d.li,{children:`Home, Menu, About, Contact`}),`
`,(0,u.jsx)(d.li,{children:`Cart`}),`
`,(0,u.jsx)(d.li,{children:`Order Now`}),`
`,(0,u.jsx)(d.li,{children:`A clearly labeled close control`}),`
`]}),`
`,(0,u.jsx)(d.p,{children:`The overlay:`}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsx)(d.li,{children:`traps focus inside the menu while open`}),`
`,(0,u.jsx)(d.li,{children:`restores focus to the hamburger on close`}),`
`,(0,u.jsx)(d.li,{children:`locks body scroll while open`}),`
`,(0,u.jsx)(d.li,{children:`closes automatically on resize back to desktop width`}),`
`,(0,u.jsx)(d.li,{children:`supports keyboard Escape to close`}),`
`]}),`
`,(0,u.jsx)(d.h2,{id:`active-state`,children:`Active state`}),`
`,(0,u.jsxs)(d.p,{children:[`Pass `,(0,u.jsx)(d.code,{children:`activePath`}),` to highlight the matching navigation item:`]}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{children:`<Header activePath="/menu" />
`})}),`
`,(0,u.jsx)(d.h2,{id:`reusing-the-button-component`,children:`Reusing the Button component`}),`
`,(0,u.jsxs)(d.p,{children:[`The "Order Now" action is currently implemented as a styled `,(0,u.jsx)(d.code,{children:`<button>`}),`. When the
teammate's reusable `,(0,u.jsx)(d.code,{children:`Button`}),` component is ready, replace that element with
`,(0,u.jsx)(d.code,{children:`<Button>Order Now</Button>`}),` and delete the inline styles. The Header is
structured so that swap is a local change — no rest of the organism needs to
move.`]}),`
`,(0,u.jsx)(d.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsxs)(d.li,{children:[`Semantic `,(0,u.jsx)(d.code,{children:`<header>`}),` / `,(0,u.jsx)(d.code,{children:`<nav>`}),` / `,(0,u.jsx)(d.code,{children:`<a>`}),` / `,(0,u.jsx)(d.code,{children:`<button>`}),` elements`]}),`
`,(0,u.jsxs)(d.li,{children:[`Hamburger has `,(0,u.jsx)(d.code,{children:`aria-expanded`}),` and an accessible label`]}),`
`,(0,u.jsx)(d.li,{children:`Close button has an accessible label`}),`
`,(0,u.jsx)(d.li,{children:`Visible focus rings on every interactive control`}),`
`,(0,u.jsx)(d.li,{children:`High contrast white text on the purple brand background`}),`
`]}),`
`,(0,u.jsx)(d.h2,{id:`props`,children:`Props`}),`
`,(0,u.jsx)(n,{}),`
`,(0,u.jsx)(d.h2,{id:`stories`,children:`Stories`}),`
`,(0,u.jsx)(r,{children:(0,u.jsx)(t,{of:o})}),`
`,(0,u.jsx)(r,{children:(0,u.jsx)(t,{of:c})}),`
`,(0,u.jsx)(r,{children:(0,u.jsx)(t,{of:s})})]})}function f(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,u.jsx)(n,{...t,children:(0,u.jsx)(d,{...t})}):d(t)}export{f as default};