class r extends HTMLElement{constructor(){super(),this.#s="starlight-synced-tabs__";const t=this.querySelector('[role="tablist"]');if(this.tabs=[...t.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.#t=this.dataset.syncKey,this.#t){const n=r.#e.get(this.#t)??[];n.push(this),r.#e.set(this.#t,n)}this.tabs.forEach((n,c)=>{n.addEventListener("click",e=>{e.preventDefault();const i=t.querySelector('[aria-selected="true"]');e.currentTarget!==i&&this.switchTab(e.currentTarget,c)}),n.addEventListener("keydown",e=>{const i=this.tabs.indexOf(e.currentTarget),s=e.key==="ArrowLeft"?i-1:e.key==="ArrowRight"?i+1:e.key==="Home"?0:e.key==="End"?this.tabs.length-1:null;s!==null&&this.tabs[s]&&(e.preventDefault(),this.switchTab(this.tabs[s],s))})})}static#e=new Map;#t;#s;switchTab(t,n,c=!0){if(!t)return;const e=c?this.getBoundingClientRect().top:0;this.tabs.forEach(s=>{s.setAttribute("aria-selected","false"),s.setAttribute("tabindex","-1")}),this.panels.forEach(s=>{s.hidden=!0});const i=this.panels[n];i&&(i.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),c&&(t.focus(),r.#r(this,t),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-e)}))}#n(t){!this.#t||typeof localStorage>"u"||localStorage.setItem(this.#s+this.#t,t)}static#r(t,n){const c=t.#t,e=r.#i(n);if(!c||!e)return;const i=r.#e.get(c);if(i){for(const s of i){if(s===t)continue;const a=s.tabs.findIndex(o=>r.#i(o)===e);a!==-1&&s.switchTab(s.tabs[a],a,!1)}t.#n(e)}}static#i(t){return t.textContent?.trim()}}customElements.define("starlight-tabs",r);