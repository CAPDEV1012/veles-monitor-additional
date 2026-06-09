const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BFzAkhkJ.js","./telegram-CkGfd2IC.js","./transformers-Qs6dBVVC.js","./index-DS8a2JlM.js","./index-DL6sCQoF.js","./index-D4oPLzFy.js","./index-CobzX_Vk.js","./BigInteger-DgnHfEKM.js","./webllm-DUWib-Ix.js"])))=>i.map(i=>d[i]);
var Qt=Object.defineProperty;var o=(e,t)=>Qt(e,"name",{value:t,configurable:!0});import{o as xt}from"./idb-BcTBU_Le.js";o(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}o(a,"getFetchOpts");function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}o(s,"processPreload")},"polyfill")();const St=Symbol("trusted-html");function f(e){return{[St]:!0,value:e}}o(f,"raw");function Qe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}o(Qe,"escapeHtml$2");function kt(e){return e==null||e===!1||e===!0?"":typeof e=="string"||typeof e=="number"?Qe(String(e)):Array.isArray(e)?e.map(kt).join(""):typeof e=="object"&&St in e?e.value:Qe(String(e))}o(kt,"renderValue");function k(e,...t){let a="";e.forEach((r,i)=>{a+=r,i<t.length&&(a+=kt(t[i]))});const s=document.createElement("template");s.innerHTML=a.trim();const n=s.content.firstElementChild;if(!n)throw new Error("html`` produced empty DOM");return n}o(k,"html");function _(e,t){e.replaceChildren(),t&&e.appendChild(t)}o(_,"mount");const E={app:{name:"Veles Monitor",version:"0.1.0",tagline:"Intel · Telegram · AI",booting:"Завантаження…"},status:{online:"Онлайн",offline:"Офлайн",connecting:"З'єднання…",scanning:"Сканування",idle:"Очікування"},tabs:{monitoring:"Моніторинг",comments:"Аналіз коментарів",calibration:"Калібровка",settings:"Налаштування"},common:{save:"Зберегти",cancel:"Скасувати",close:"Закрити",confirm:"Підтвердити",delete:"Видалити",edit:"Редагувати",add:"Додати",remove:"Видалити",next:"Далі",back:"Назад",finish:"Завершити",retry:"Спробувати знову",loading:"Завантаження…",error:"Помилка",success:"Готово"},monitoring:{pageTitle:"Моніторинг каналів",eyebrow:"real-time intelligence",placeholder:"Тут буде налаштування моніторингу та лента знайдених публікацій."},comments:{pageTitle:"Аналіз коментарів",eyebrow:"stance distribution",placeholder:"Тут буде вставка URL поста та звіт по стенсу коментарів."},settings:{pageTitle:"Налаштування",eyebrow:"configuration",placeholder:"Тут будуть секції акаунту, ШІ, сповіщень і даних."},calibration:{pageTitle:"Калібровка точності",eyebrow:"ground-truth labelling",placeholder:"Увімкніть режим у налаштуваннях і запустіть моніторинг — тут з'являться рішення моделі для маркування."},onboarding:{welcomeTitle:"Веб-вузол спостереження",welcomeBody:"Підключи акаунт Telegram, обери канали і теми — застосунок розшукує релевантні публікації та класифікує коментарі під будь-яким постом.",placeholderTitle:"Onboarding-майстер",placeholderBody:"Тут буде покрокове підключення Telegram, налаштування пароля та вибір каналів."},toast:{webgpuMissing:"WebGPU недоступний — працюємо у гібридному режимі.",settingsSaved:"Налаштування збережено.",sessionCleared:"Сесію очищено.",copied:"Скопійовано"}};function Yt(){const e=k`
    <header class="app-header">
      <a class="app-logo" href="#" data-vm-logo>
        <img src="./icons/logo-wordmark.svg" alt="${E.app.name}" />
      </a>

      <div class="app-header-spacer"></div>

      <div class="row gap-4">
        <div class="row gap-2" data-vm-user style="display:none;">
          <span style="color: var(--fg-muted)">${""}</span>
          <span class="text-mono" style="font-size: var(--fs-xs); color: var(--fg-secondary);" data-vm-user-name></span>
        </div>

        <div class="app-status" data-vm-status>
          <span class="led led-idle" data-vm-status-led></span>
          <span data-vm-status-label>${E.status.idle}</span>
        </div>
      </div>
    </header>
  `,t=e.querySelector("[data-vm-status-led]"),a=e.querySelector("[data-vm-status-label]"),s=e.querySelector("[data-vm-user]"),n=e.querySelector("[data-vm-user-name]");return{el:e,setStatus(r){t.className="led "+(r==="online"?"led-success":r==="connecting"?"led-warning":r==="offline"?"led-danger":r==="scanning"?"led-warning":"led-idle"),a.textContent=r==="online"?E.status.online:r==="connecting"?E.status.connecting:r==="offline"?E.status.offline:r==="scanning"?E.status.scanning:E.status.idle},setUser(r){if(!r){s.style.display="none";return}s.style.display="",n.textContent=r.name+(r.phone?`  ·  ${r.phone}`:"")}}}o(Yt,"buildHeader");function C(e,t=16,a="0 0 24 24"){return f(`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="${a}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`)}o(C,"svg");const b={radar:o((e=16)=>C('<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M22 12A10 10 0 1 1 12 2"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path d="M12 12L16.24 7.76"/>',e),"radar"),scope:o((e=16)=>C('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>',e),"scope"),comments:o((e=16)=>C('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',e),"comments"),settings:o((e=16)=>C('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',e),"settings"),shield:o((e=16)=>C('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',e),"shield"),power:o((e=16)=>C('<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>',e),"power"),play:o((e=16)=>C('<polygon points="5 3 19 12 5 21 5 3"/>',e),"play"),stop:o((e=16)=>C('<rect x="6" y="6" width="12" height="12" rx="1"/>',e),"stop"),download:o((e=16)=>C('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',e),"download"),trash:o((e=16)=>C('<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1.4 14a2 2 0 0 1-2 1.8H8.4a2 2 0 0 1-2-1.8L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',e),"trash"),plus:o((e=16)=>C('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',e),"plus"),check:o((e=16)=>C('<polyline points="20 6 9 17 4 12"/>',e),"check"),x:o((e=16)=>C('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',e),"x"),alert:o((e=16)=>C('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',e),"alert"),info:o((e=16)=>C('<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',e),"info"),link:o((e=16)=>C('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.71"/>',e),"link"),copy:o((e=16)=>C('<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',e),"copy"),search:o((e=16)=>C('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',e),"search"),filter:o((e=16)=>C('<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',e),"filter"),hash:o((e=16)=>C('<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',e),"hash"),user:o((e=16)=>C('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',e),"user"),brain:o((e=16)=>C('<path d="M12 2a4 4 0 0 0-4 4v1.5A2.5 2.5 0 1 0 6 11.5v1A2.5 2.5 0 1 0 8 17v1a4 4 0 0 0 8 0v-1a2.5 2.5 0 1 0 2-4.5v-1A2.5 2.5 0 1 0 16 7.5V6a4 4 0 0 0-4-4z"/>',e),"brain"),bell:o((e=16)=>C('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',e),"bell"),folder:o((e=16)=>C('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',e),"folder"),logout:o((e=16)=>C('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',e),"logout"),lock:o((e=16)=>C('<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',e),"lock"),refresh:o((e=16)=>C('<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/>',e),"refresh"),chevronRight:o((e=16)=>C('<polyline points="9 18 15 12 9 6"/>',e),"chevronRight"),chevronLeft:o((e=16)=>C('<polyline points="15 18 9 12 15 6"/>',e),"chevronLeft")},Jt=[{id:"monitoring",label:E.tabs.monitoring,icon:"radar"},{id:"comments",label:E.tabs.comments,icon:"comments"},{id:"calibration",label:E.tabs.calibration,icon:"scope"},{id:"settings",label:E.tabs.settings,icon:"settings"}];function Zt(){const e=k`<nav class="app-tabs" role="tablist"></nav>`,t=[],a=new Map;for(const s of Jt){const n=k`
      <button class="app-tab" role="tab" data-vm-tab="${s.id}" aria-controls="page-${s.id}">
        <span>${b[s.icon](14)}</span>
        <span>${s.label}</span>
      </button>
    `;n.addEventListener("click",()=>{t.forEach(r=>r(s.id))}),a.set(s.id,n),e.appendChild(n)}return{el:e,setActive(s){for(const[n,r]of a.entries())r.classList.toggle("active",n===s),r.setAttribute("aria-selected",String(n===s))},onChange(s){t.push(s)}}}o(Zt,"buildTabs");function Xt(){const e=k`
    <div class="splash">
      <div class="splash-content">
        <div class="splash-logo">
          <img src="./icons/wolf-scope.svg" width="160" height="160" alt="Veles" />
        </div>
        <div class="splash-text">
          <h1>${E.app.name}</h1>
          <p data-vm-splash-status>v${E.app.version} · ${E.app.tagline}</p>
        </div>
      </div>
    </div>
  `,t=e.querySelector("[data-vm-splash-status]");return{el:e,setStatus(a){t.textContent=a},hide(){return new Promise(a=>{e.style.transition="opacity 220ms",e.style.opacity="0",window.setTimeout(()=>{e.remove(),a()},240)})}}}o(Xt,"buildSplash");function ea(){const e=k`
    <div class="app-main">
      <section class="page" style="max-width: 720px;">
        <header class="page-header">
          <div>
            <div class="page-eyebrow">${E.onboarding.placeholderTitle}</div>
            <h1 class="page-title">${E.onboarding.welcomeTitle}</h1>
          </div>
        </header>

        <div class="panel">
          <div class="row gap-4" style="align-items: flex-start;">
            <div style="color: var(--accent); flex-shrink: 0;">${f(b.shield(28).value)}</div>
            <div>
              <p class="text-secondary" style="margin-bottom: 16px;">${E.onboarding.welcomeBody}</p>
              <p class="text-muted" style="font-size: var(--fs-sm);">${E.onboarding.placeholderBody}</p>
            </div>
          </div>
        </div>

        <div class="row end">
          <button class="btn btn-primary" data-vm-start-onboarding>
            ${f(b.power(14).value)}
            <span>Підключити Telegram</span>
          </button>
        </div>
      </section>
    </div>
  `,t=[];return e.querySelector("[data-vm-start-onboarding]")?.addEventListener("click",()=>{t.forEach(a=>a())}),{el:e,onComplete(a){t.push(a)}}}o(ea,"buildWelcomePage");const ta=3500;let W=null;function aa(){return W||(W=document.createElement("div"),W.className="toast-container",document.body.appendChild(W),W)}o(aa,"ensureContainer");function sa(e){switch(e){case"success":return b.check(16);case"warning":return b.alert(16);case"danger":return b.alert(16);default:return b.info(16)}}o(sa,"iconFor");function le(e,t,a={}){const s=aa(),n=k`
    <div class="toast toast-${e}" role="status">
      <span style="color: var(--${e==="info"?"accent":e})">${sa(e)}</span>
      <span style="flex:1;">${t}</span>
      <button class="btn-ghost btn-sm" data-vm-dismiss aria-label="Закрити">
        ${b.x(14)}
      </button>
    </div>
  `;s.appendChild(n);const r=o(()=>{n.isConnected&&(n.style.opacity="0",n.style.transform="translateY(4px)",n.style.transition="opacity 160ms, transform 160ms",window.setTimeout(()=>n.remove(),200))},"dismiss");n.querySelector("[data-vm-dismiss]")?.addEventListener("click",r);const i=a.duration??ta;i>0&&window.setTimeout(r,i)}o(le,"show");const S={info:o((e,t)=>le("info",e,t),"info"),success:o((e,t)=>le("success",e,t),"success"),warning:o((e,t)=>le("warning",e,t),"warning"),error:o((e,t)=>le("danger",e,t),"error")},$t="veles-monitor",na=1;let F=null;function ee(){return F||(F=xt($t,na,{upgrade(e){e.objectStoreNames.contains("meta")||e.createObjectStore("meta"),e.objectStoreNames.contains("secure")||e.createObjectStore("secure"),e.objectStoreNames.contains("settings")||e.createObjectStore("settings"),e.objectStoreNames.contains("configs")||e.createObjectStore("configs"),e.objectStoreNames.contains("channels")||e.createObjectStore("channels"),e.objectStoreNames.contains("history")||e.createObjectStore("history"),e.objectStoreNames.contains("reports")||e.createObjectStore("reports")},blocked(){console.warn("[IDB] DB blocked — інша вкладка тримає стару версію")},blocking(){Et()},terminated(){console.warn("[IDB] DB connection terminated unexpectedly"),F=null}}),F)}o(ee,"openDB");async function Et(){if(!F)return;(await F).close(),F=null}o(Et,"closeDB");async function ra(){await Et(),await new Promise((e,t)=>{const a=indexedDB.deleteDatabase($t);a.onsuccess=()=>e(),a.onerror=()=>t(a.error),a.onblocked=()=>{console.warn("[IDB] deleteDB blocked")}})}o(ra,"deleteDB");const oa=25e4,ia="SHA-256",la=256,ca=16,J=12,Ct=1,be=o(()=>{if(!globalThis.crypto?.subtle)throw new Error("Web Crypto API недоступний — потрібен HTTPS або localhost");return globalThis.crypto.subtle},"subtle");function da(){return globalThis.crypto.getRandomValues(new Uint8Array(ca))}o(da,"generateSalt");function ua(){return globalThis.crypto.getRandomValues(new Uint8Array(J))}o(ua,"generateIv");async function Lt(e,t){const a=new TextEncoder,s=await be().importKey("raw",a.encode(e),"PBKDF2",!1,["deriveKey"]);return be().deriveKey({name:"PBKDF2",salt:t,iterations:oa,hash:ia},s,{name:"AES-GCM",length:la},!1,["encrypt","decrypt"])}o(Lt,"deriveKey");async function pa(e,t){const a=ua(),s=await be().encrypt({name:"AES-GCM",iv:a},e,t),n=new Uint8Array(s),r=new Uint8Array(1+J+n.length);return r[0]=Ct,r.set(a,1),r.set(n,1+J),r}o(pa,"encrypt");async function ma(e,t){if(t.length<1+J+16)throw new Error("Зашифрований блоб занадто короткий");if(t[0]!==Ct)throw new Error(`Непідтримувана версія шифроблоба: ${t[0]}`);const a=t.subarray(1,1+J),s=t.subarray(1+J),n=await be().decrypt({name:"AES-GCM",iv:a},e,s);return new Uint8Array(n)}o(ma,"decrypt");async function O(e,t){const a=JSON.stringify(t);return pa(e,new TextEncoder().encode(a))}o(O,"encryptJson");async function D(e,t){const a=await ma(e,t);return JSON.parse(new TextDecoder().decode(a))}o(D,"decryptJson");function va(e){return e instanceof Error?e.name==="OperationError"||/OperationError|tag/i.test(e.message):!1}o(va,"isAuthError");const ye="salt",ha="schemaVersion",fa="createdAt",ga="kdf",Ce="telegramSession",Le="apiCreds",Be="app",Re={aiMode:"hybrid",accuracy:2,threshold:.5,notifications:{browser:!0,faviconBadge:!0},monitoring:{throttleMode:"queue"},ui:{theme:"dark",locale:"uk"},media:{folderHandleSaved:!1},labelling:{enabled:!1}};async function ba(){return await(await ee()).get("meta",ye)?"locked":"empty"}o(ba,"vaultStatus");async function ya(e){if(e.length<6)throw new Error("Пароль має містити щонайменше 6 символів");const t=await ee();if(await t.get("meta",ye))throw new Error("Vault уже ініціалізовано — використайте unlockVault()");const s=da(),n=await Lt(e,s),r=t.transaction("meta","readwrite");await r.store.put(s,ye),await r.store.put(1,ha),await r.store.put(Date.now(),fa),await r.store.put({kdf:"PBKDF2",iterations:25e4,hash:"SHA-256"},ga),await r.done;const i=new At(t,n);return await i.settings.set(Re),i}o(ya,"initVault");async function wa(e){const t=await ee(),a=await t.get("meta",ye);if(!a)throw new Error("Vault не ініціалізовано — викликайте initVault()");const s=await Lt(e,a);try{const n=await t.get("settings",Be);n&&await D(s,n)}catch(n){if(va(n))return null;throw n}return new At(t,s)}o(wa,"unlockVault");async function Tt(){await ra()}o(Tt,"wipeVault");class At{static{o(this,"OpenVault")}secure;settings;configs;channels;history;reports;constructor(t,a){this.secure=new xa(t,a),this.settings=new Sa(t,a),this.configs=new ka(t,a),this.channels=new $a(t,a),this.history=new Ea(t,a),this.reports=new Ca(t,a)}async logout(){await this.secure.clearSession(),await this.secure.clearApiCreds()}}class xa{static{o(this,"SecureStore")}constructor(t,a){this.db=t,this.key=a}async getSession(){const t=await this.db.get("secure",Ce);return t?D(this.key,t):null}async setSession(t){const a=await O(this.key,t);await this.db.put("secure",a,Ce)}async clearSession(){await this.db.delete("secure",Ce)}async getApiCreds(){const t=await this.db.get("secure",Le);return t?D(this.key,t):null}async setApiCreds(t){const a=await O(this.key,t);await this.db.put("secure",a,Le)}async clearApiCreds(){await this.db.delete("secure",Le)}}class Sa{static{o(this,"SettingsStore")}constructor(t,a){this.db=t,this.key=a}async get(){const t=await this.db.get("settings",Be);if(!t)return Re;const a=await D(this.key,t);return{...Re,...a}}async set(t){const a=await O(this.key,t);await this.db.put("settings",a,Be)}async update(t){const a=await this.get(),s={...a,...t,notifications:{...a.notifications,...t.notifications??{}},monitoring:{...a.monitoring,...t.monitoring??{}},ui:{...a.ui,...t.ui??{}},media:{...a.media,...t.media??{}},labelling:{...a.labelling??{enabled:!1},...t.labelling??{}}};return await this.set(s),s}}class ka{static{o(this,"ConfigsStore")}constructor(t,a){this.db=t,this.key=a}async list(){const t=await this.db.getAll("configs"),a=[];for(const s of t)a.push(await D(this.key,s));return a.sort((s,n)=>n.updatedAt-s.updatedAt)}async get(t){const a=await this.db.get("configs",t);return a?D(this.key,a):null}async upsert(t){const a=await O(this.key,t);await this.db.put("configs",a,t.id)}async delete(t){await this.db.delete("configs",t)}}class $a{static{o(this,"ChannelsStore")}constructor(t,a){this.db=t,this.key=a}async list(){const t=await this.db.getAll("channels"),a=[];for(const s of t)a.push(await D(this.key,s));return a.sort((s,n)=>s.title.localeCompare(n.title,"uk"))}async upsert(t){const a=await O(this.key,t);await this.db.put("channels",a,t.id)}async delete(t){await this.db.delete("channels",t)}async setMany(t){const a=this.db.transaction("channels","readwrite");await a.store.clear();for(const s of t){const n=await O(this.key,s);await a.store.put(n,s.id)}await a.done}}const Ye=500;class Ea{static{o(this,"HistoryStore")}constructor(t,a){this.db=t,this.key=a}async append(t){const a=`${t.postedAt}_${t.channelId}_${t.messageId}`,s=await O(this.key,t);await this.db.put("history",s,a);const n=await this.db.getAllKeys("history");if(n.length>Ye){const i=n.sort().slice(0,n.length-Ye),l=this.db.transaction("history","readwrite");for(const d of i)await l.store.delete(d);await l.done}}async list(){const t=await this.db.getAll("history"),a=[];for(const s of t)a.push(await D(this.key,s));return a.sort((s,n)=>n.postedAt-s.postedAt)}async clear(){const t=this.db.transaction("history","readwrite");await t.store.clear(),await t.done}}class Ca{static{o(this,"ReportsStore")}constructor(t,a){this.db=t,this.key=a}async save(t){const a=`${t.analyzedAt}_${btoa(t.postUrl).slice(0,16)}`,s=await O(this.key,t);return await this.db.put("reports",s,a),a}async list(){const t=await this.db.getAll("reports"),a=[];for(const s of t)a.push(await D(this.key,s));return a.sort((s,n)=>n.analyzedAt-s.analyzedAt)}async get(t){const a=await this.db.get("reports",t);return a?D(this.key,a):null}async delete(t){await this.db.delete("reports",t)}async clear(){const t=this.db.transaction("reports","readwrite");await t.store.clear(),await t.done}}function La(){const e=k`
    <div class="app-main">
      <section class="page" style="max-width: 520px;">
        <header class="page-header" style="border: none; padding-bottom: 0;">
          <div>
            <div class="page-eyebrow">vault · setup</div>
            <h1 class="page-title">Захист даних</h1>
          </div>
          <div style="color: var(--accent);">${f(b.shield(28).value)}</div>
        </header>

        <div class="panel">
          <p class="text-secondary" style="margin-bottom: 20px;">
            Придумайте пароль — він шифрує Telegram-сесію та налаштування. Кожного разу при відкритті
            застосунку доведеться вводити його заново. <strong style="color: var(--warning);">Пароль ніде не зберігається
            і не відновлюється</strong> — якщо забудете, доведеться чистити дані й логінитись з нуля.
          </p>

          <form data-vm-setpw class="col gap-4">
            <div class="field">
              <label class="field-label" for="vm-pw1">Новий пароль</label>
              <input
                type="password"
                id="vm-pw1"
                class="input input-mono"
                placeholder="Не менше 6 символів"
                autocomplete="new-password"
                required
                minlength="6"
                autofocus
              />
            </div>
            <div class="field">
              <label class="field-label" for="vm-pw2">Підтвердження</label>
              <input
                type="password"
                id="vm-pw2"
                class="input input-mono"
                placeholder="Введіть пароль ще раз"
                autocomplete="new-password"
                required
                minlength="6"
              />
              <div class="field-error hidden" data-vm-error></div>
            </div>

            <div class="row gap-3">
              <button type="button" class="btn btn-ghost" data-vm-back>
                ${f(b.chevronLeft(14).value)}
                <span>Назад</span>
              </button>
              <div class="grow"></div>
              <button type="submit" class="btn btn-primary btn-lg" data-vm-submit>
                <span>Створити та продовжити</span>
                ${f(b.chevronRight(16).value)}
              </button>
            </div>
          </form>
        </div>

        <div class="text-muted" style="font-size: var(--fs-xs); line-height: 1.6;">
          Шифрування: <span class="text-mono">AES-GCM 256</span>,
          ключ виводиться з пароля через <span class="text-mono">PBKDF2-HMAC-SHA256, 250 000 ітерацій</span>.
          Сіль зберігається локально, ключ — лише в памʼяті до закриття вкладки.
        </div>
      </section>
    </div>
  `,t=e.querySelector("[data-vm-setpw]"),a=e.querySelector("#vm-pw1"),s=e.querySelector("#vm-pw2"),n=e.querySelector("[data-vm-error]"),r=e.querySelector("[data-vm-submit]"),i=e.querySelector("[data-vm-back]"),l=[],d=[],u=o(c=>{c?(n.textContent=c,n.classList.remove("hidden")):n.classList.add("hidden")},"showError");return t.addEventListener("submit",async c=>{if(c.preventDefault(),u(null),a.value!==s.value){u("Паролі не співпадають"),s.select();return}if(a.value.length<6){u("Мінімальна довжина — 6 символів");return}r.disabled=!0,r.querySelector("span").textContent="Створюємо ключ…";try{const m=await ya(a.value);S.success("Vault створено"),l.forEach(p=>p(m))}catch(m){u(`Не вдалося створити vault: ${m.message}`)}finally{r.disabled=!1,r.querySelector("span").textContent="Створити та продовжити"}}),i.addEventListener("click",()=>{d.forEach(c=>c())}),{el:e,onCreated(c){l.push(c)},onBack(c){d.push(c)}}}o(La,"buildSetPasswordScreen");function qt(e){const t=k`<div class="modal-scrim" role="dialog" aria-modal="true"></div>`,a=k`
    <div class="modal" style="${e.width?`width: ${e.width}px;`:""}">
      <div class="modal-header">
        <div class="modal-title">${e.title}</div>
        ${e.closable!==!1?f(`<button class="btn-ghost btn-sm" data-vm-modal-close aria-label="Закрити">${b.x(14).value}</button>`):""}
      </div>
      <div class="modal-body" data-vm-modal-body></div>
      <div class="modal-footer" data-vm-modal-footer></div>
    </div>
  `;t.appendChild(a);const s=a.querySelector("[data-vm-modal-body]");typeof e.body=="string"?s.textContent=e.body:_(s,e.body);const n=a.querySelector("[data-vm-modal-footer]");if(e.actions&&e.actions.length>0)for(const l of e.actions){const d=document.createElement("button");d.className=`btn btn-${l.kind??"secondary"}`,d.textContent=l.label,d.addEventListener("click",async()=>{try{await l.onClick?.()}finally{l.closeOnClick!==!1&&r()}}),n.appendChild(d)}else n.remove();document.body.appendChild(t),document.body.style.overflow="hidden";const r=o(()=>{t.isConnected&&(t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",i))},"close"),i=o(l=>{l.key==="Escape"&&e.closable!==!1&&r()},"onKey");return document.addEventListener("keydown",i),t.addEventListener("click",l=>{l.target===t&&e.closable!==!1&&r()}),a.querySelector("[data-vm-modal-close]")?.addEventListener("click",r),r}o(qt,"openModal");function H(e){return new Promise(t=>{qt({title:e.title,body:e.body,actions:[{label:e.cancelLabel??"Скасувати",kind:"ghost",onClick:o(()=>t(!1),"onClick")},{label:e.confirmLabel??"Підтвердити",kind:e.danger?"danger":"primary",onClick:o(()=>t(!0),"onClick")}]})})}o(H,"confirm");function Ta(){const e=k`
    <div class="app-main">
      <section class="page" style="max-width: 460px;">
        <header class="page-header" style="border: none; padding-bottom: 0;">
          <div>
            <div class="page-eyebrow">vault · locked</div>
            <h1 class="page-title">Розблокування</h1>
          </div>
          <div style="color: var(--accent);">${f(b.lock(28).value)}</div>
        </header>

        <div class="panel">
          <div class="text-secondary" style="margin-bottom: 20px;">
            Введіть пароль для розшифрування Telegram-сесії та налаштувань. Пароль не зберігається —
            при закритті вкладки потрібно буде ввести знову.
          </div>

          <form data-vm-unlock class="col gap-4">
            <div class="field">
              <label class="field-label" for="vm-password">Пароль</label>
              <input
                type="password"
                id="vm-password"
                class="input input-mono"
                placeholder="••••••••"
                autocomplete="current-password"
                autofocus
                required
                minlength="6"
              />
              <div class="field-error hidden" data-vm-error></div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block" data-vm-submit>
              ${f(b.power(16).value)}
              <span>Розблокувати</span>
            </button>
          </form>
        </div>

        <div class="row between" style="font-size: var(--fs-sm);">
          <button class="btn btn-ghost btn-sm" data-vm-forgot>
            Забули пароль?
          </button>
          <span class="text-muted text-mono" style="font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">
            AES-GCM 256 · PBKDF2
          </span>
        </div>
      </section>
    </div>
  `,t=e.querySelector("[data-vm-unlock]"),a=e.querySelector("#vm-password"),s=e.querySelector("[data-vm-error]"),n=e.querySelector("[data-vm-submit]"),r=e.querySelector("[data-vm-forgot]"),i=[],l=[],d=o(u=>{u?(s.textContent=u,s.classList.remove("hidden")):s.classList.add("hidden")},"showError");return t.addEventListener("submit",async u=>{u.preventDefault(),d(null);const c=a.value;if(c){n.disabled=!0,n.querySelector("span").textContent="Розшифровуємо…";try{const m=await wa(c);if(!m){d("Невірний пароль"),a.select();return}i.forEach(p=>p(m))}catch(m){console.error("[unlock] failed:",m),d(`Помилка: ${m.message}`)}finally{n.disabled=!1,n.querySelector("span").textContent="Розблокувати"}}}),r.addEventListener("click",async()=>{if(await H({title:"Очистити всі дані?",body:"Telegram-сесія, налаштування, історія і збережені звіти — все буде безповоротно видалено. Після цього доведеться пройти onboarding з нуля. Продовжити?",confirmLabel:"Так, очистити все",cancelLabel:"Скасувати",danger:!0}))try{await Tt(),S.success(E.toast.sessionCleared),l.forEach(c=>c())}catch(c){S.error(`Не вдалося очистити: ${c.message}`)}}),{el:e,onUnlocked(u){i.push(u)},onWiped(u){l.push(u)}}}o(Ta,"buildLockScreen");const Aa="modulepreload",qa=o(function(e,t){return new URL(e,t).href},"assetsURL"),Je={},B=o(function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){let i=o(function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))},"allSettled2");const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");n=i(a.map(c=>{if(c=qa(c,s),c in Je)return;Je[c]=!0;const m=c.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(!!s)for(let y=l.length-1;y>=0;y--){const w=l[y];if(w.href===c&&(!m||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":Aa,m||(h.as="script"),h.crossOrigin="",h.href=c,u&&h.setAttribute("nonce",u),document.head.appendChild(h),m)return new Promise((y,w)=>{h.addEventListener("load",y),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o(r,"handlePreloadError"),n.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},"preload");let we=null;const De=new Set;function Ze(e){we=e;for(const t of De)t(e)}o(Ze,"setVault");function It(){return we}o(It,"getVault");function q(){if(!we)throw new Error("Vault не відкритий — користувач не авторизований");return we}o(q,"requireVault");function Mt(e){return De.add(e),()=>De.delete(e)}o(Mt,"onVaultChange");let ce=null;async function _t(){return ce||(ce=(async()=>{const[e,t,a,s,n]=await Promise.all([B(()=>import("./index-BFzAkhkJ.js").then(r=>r.i),__vite__mapDeps([0,1,2]),import.meta.url),B(()=>import("./index-DS8a2JlM.js").then(r=>r.i),__vite__mapDeps([3,1,2]),import.meta.url),B(()=>import("./index-DL6sCQoF.js").then(r=>r.i),__vite__mapDeps([4,1,2]),import.meta.url),B(()=>import("./index-D4oPLzFy.js").then(r=>r.i),__vite__mapDeps([5,1,2]),import.meta.url),B(()=>import("./index-CobzX_Vk.js").then(r=>r.i),__vite__mapDeps([6,1,2]),import.meta.url)]);return{TelegramClient:e.TelegramClient,StringSession:t.StringSession,Api:a.Api,errors:n,events:s}})(),ce)}o(_t,"loadGramJs");let se=null,Z=null,X=null;async function z(e){return Z||se||(se=(async()=>{const t=q(),a=e??await Ia();if(!a)throw new Error("Telegram-облікові дані відсутні у vault — потрібен onboarding");const{TelegramClient:s,StringSession:n}=await _t(),r=new n(a.sessionString),i=new s(r,a.apiId,a.apiHash,{connectionRetries:5,useWSS:!0,autoReconnect:!0,requestRetries:2,deviceModel:"Veles Monitor Web",systemVersion:typeof navigator<"u"&&navigator.platform?navigator.platform:"Web",appVersion:"0.1.0",langCode:"uk",systemLangCode:"uk",baseLogger:ne("warn")});return await i.connect(),Z=i,Ma(t,a.sessionString,()=>i.session.save()),i})(),se)}o(z,"getTelegramClient");async function Ia(){const e=q(),[t,a]=await Promise.all([e.secure.getApiCreds(),e.secure.getSession()]);return t?{apiId:t.apiId,apiHash:t.apiHash,sessionString:a??""}:null}o(Ia,"loadCredsFromVault");async function Ma(e,t,a){let s=t;X&&clearInterval(X),X=setInterval(async()=>{try{const n=a();n&&n!==s&&(await e.secure.setSession(n),s=n)}catch(n){console.warn("[tg] session persist failed:",n)}},5e3)}o(Ma,"persistSessionIfChanged");async function _a(){if(X&&(clearInterval(X),X=null),!!Z){try{await Z.disconnect()}catch{}Z=null,se=null}}o(_a,"disconnectTelegram");async function Q(){return _t()}o(Q,"getGramJs");function ne(e){const t={error:0,warn:1,info:2,debug:3},a=t[e];return{log:o((s,n)=>{(t[s]??4)<=a&&console.log(`[gram.js ${s}]`,n)},"log"),error:o(s=>ne("error").log("error",s),"error"),warn:o(s=>ne("warn").log("warn",s),"warn"),info:o(s=>ne("info").log("info",s),"info"),debug:o(s=>ne("debug").log("debug",s),"debug"),canSend:o(s=>(t[s]??4)<=a,"canSend"),setLevel:o(()=>{},"setLevel"),getDateTime:o(()=>new Date().toISOString(),"getDateTime")}}o(ne,"makeLogger");class Pa{static{o(this,"AuthFlow")}phone=null;phoneCodeHash=null;nextCodeType=null;async setApiCredentials(t,a){if(!Number.isInteger(t)||t<=0)throw new Error("api_id має бути цілим числом");if(!/^[a-f0-9]{32}$/i.test(a))throw new Error("api_hash має бути 32-символьним hex-рядком");await q().secure.setApiCreds({apiId:t,apiHash:a});const n=await z({apiId:t,apiHash:a,sessionString:""});n.connected||await n.connect()}async sendLoginCode(t){const a=t.trim().replace(/\s+/g,"");if(!/^\+?\d{8,15}$/.test(a))throw new Error("Невірний формат телефону (приклад: +380501234567)");this.phone=a.startsWith("+")?a:`+${a}`;const s=await z(),r=await q().secure.getApiCreds();if(!r)throw new Error("api_id/api_hash ще не задано");const{Api:i}=await Q(),l=await s.invoke(new i.auth.SendCode({phoneNumber:this.phone,apiId:r.apiId,apiHash:r.apiHash,settings:new i.CodeSettings({allowFlashcall:!1,currentNumber:!1,allowAppHash:!0,allowMissedCall:!1})}));this.phoneCodeHash=l.phoneCodeHash,this.nextCodeType=l.nextType?.className??null;const d=l.type?.className??"unknown";return console.info("[VM][auth] sendCode:",{type:d,nextType:this.nextCodeType,timeout:l.timeout}),{codeType:d,destination:et(d),nextType:this.nextCodeType,canResend:this.nextCodeType!=null}}async resendCode(){if(!this.phone||!this.phoneCodeHash)throw new Error("Спочатку викличте sendLoginCode()");if(!this.nextCodeType)throw new Error("Повторне надсилання недоступне. Telegram надіслав код у застосунок Telegram — відкрий службовий чат «Telegram» на пристрої, де ти вже залогінений (також глянь «Збережені повідомлення»). SMS у цьому випадку Telegram не надсилає.");const t=await z(),{Api:a}=await Q();try{const s=await t.invoke(new a.auth.ResendCode({phoneNumber:this.phone,phoneCodeHash:this.phoneCodeHash}));this.phoneCodeHash=s.phoneCodeHash,this.nextCodeType=s.nextType?.className??null;const n=s.type?.className??"unknown";return{codeType:n,destination:et(n),nextType:this.nextCodeType,canResend:this.nextCodeType!=null}}catch(s){const n=s?.errorMessage??s?.message??String(s);if(/SEND_CODE_UNAVAILABLE/i.test(n))throw this.nextCodeType=null,new Error("Telegram не може надіслати код іншим каналом. Код уже у застосунку Telegram (службовий чат «Telegram») на пристрої, де ти залогінений.");const r=n.match(/FLOOD_WAIT_(\d+)/i);throw r?new Error(`Забагато спроб. Зачекай ${r[1]} с і спробуй знову.`):s}}async submitLoginCode(t){if(!this.phone||!this.phoneCodeHash)throw new Error("Спочатку викличте sendLoginCode()");const a=t.trim().replace(/\s+/g,"");if(!/^\d{5,7}$/.test(a))throw new Error("Невірний формат коду");const s=await z(),{Api:n}=await Q();try{const i=(await s.invoke(new n.auth.SignIn({phoneNumber:this.phone,phoneCodeHash:this.phoneCodeHash,phoneCode:a})))?.user;return await Xe(),Fe(i,this.phone)}catch(r){const i=r?.className??r?.constructor?.name??"",l=r?.errorMessage??r?.message??"";if(i==="SessionPasswordNeededError"||i==="RPCError"&&/SESSION_PASSWORD_NEEDED/i.test(l)||/SESSION_PASSWORD_NEEDED/i.test(l)||/Two-steps verification is enabled/i.test(l))return"two-factor-needed";throw r}}async submitTwoFactorPassword(t){const a=String(t??"");if(!a)throw new Error("Пароль не може бути порожнім");const s=this.phone??"",n=await z(),{Api:r}=await Q(),{computeSrp2:i,toUint8:l}=await B(async()=>{const{computeSrp2:M,toUint8:P}=await import("./srp2-Csg3ZR3V.js");return{computeSrp2:M,toUint8:P}},[],import.meta.url),d=await n.invoke(new r.account.GetPassword),u=d.currentAlgo??d.current_algo,c=d.srpB??d.srp_B??d.srp_b,m=d.srpId??d.srp_id,p=[];if(u||p.push("currentAlgo (algo об'єкт PBKDF2)"),c||p.push("srpB (server ephemeral)"),m||p.push("srpId"),p.length>0){const M={pwInfoType:d?.constructor?.name,keys:Object.keys(d||{}),hasPassword:d?.hasPassword,algoClassName:d?.currentAlgo?.className};throw new Error(`2FA: відсутні поля [${p.join(", ")}]. Dump: ${JSON.stringify(M)}`)}const v=u.salt1??u.salt_1,h=u.salt2??u.salt_2,y=u.g,w=u.p,$=[];if(v||$.push("salt1"),h||$.push("salt2"),y==null&&$.push("g"),w||$.push("p"),$.length>0)throw new Error(`2FA algo: відсутні [${$.join(", ")}]. Algo keys: ${Object.keys(u).join(", ")}, className: ${u.className??"n/a"}`);const A=await i({srpId:m,srpB:l(c),algo:{salt1:l(v),salt2:l(h),g:Number(y),p:l(w)}},a),L=(await B(async()=>{const{default:M}=await import("./BigInteger-DgnHfEKM.js").then(P=>P.B);return{default:M}},__vite__mapDeps([7,1,2]),import.meta.url)).default,{Buffer:x}=await B(async()=>{const{Buffer:M}=await import("./transformers-Qs6dBVVC.js").then(P=>P.i);return{Buffer:M}},[],import.meta.url),I=(await n.invoke(new r.auth.CheckPassword({password:new r.InputCheckPasswordSRP({srpId:L(A.srpId),A:x.from(A.A),M1:x.from(A.M1)})})))?.user;if(!I)throw new Error("Telegram повернув порожнього user — невдала авторизація");return await Xe(),Fe(I,s)}}async function Na(){const e=q();try{const t=await z(),{Api:a}=await Q();await t.invoke(new a.auth.LogOut).catch(()=>{})}catch{}await _a(),await e.logout()}o(Na,"logout");async function Pt(){try{const t=await(await z()).getMe();return t?Fe(t,t.phone?`+${t.phone}`:""):null}catch{return null}}o(Pt,"getMe");async function Xe(){const t=(await z()).session.save();await q().secure.setSession(t)}o(Xe,"persistSession");function et(e){const t=e.replace(/^.*\./,"");return{SentCodeTypeApp:"у застосунку Telegram (службовий чат «Telegram»)",SentCodeTypeSms:"у SMS",SentCodeTypeCall:"вхідним дзвінком (диктують код)",SentCodeTypeFlashCall:"flash-call (останні цифри номера = код)",SentCodeTypeMissedCall:"пропущеним дзвінком (останні цифри = код)",SentCodeTypeEmailCode:"на email",SentCodeTypeSetUpEmailRequired:"потрібно спершу налаштувати email-логін у застосунку Telegram",SentCodeTypeFragmentSms:"у Fragment (анонімний номер)"}[t]??`(тип: ${e})`}o(et,"describeCodeDestination");function Fe(e,t){return{id:Number(e?.id?.toString()??e?.id??0),phone:t,firstName:e?.firstName,lastName:e?.lastName,username:e?.username}}o(Fe,"mapUser");async function za(e){const a=await(await z()).getDialogs({limit:300,archived:!1}),s=[];for(const n of a){const r=n.entity;if(!r)continue;const l=(r.className??"")==="Channel";if(!l)continue;const d=String(r.id?.toString?.()??r.id),u=r.accessHash?String(r.accessHash.toString?.()??r.accessHash):void 0;s.push({id:d,accessHash:u,title:r.title??r.firstName??"(без назви)",username:r.username??void 0,isChannel:l,isPrivate:!r.username,participantsCount:r.participantsCount??void 0})}return s}o(za,"listDialogs");async function Ba(e){const t=e.replace(/^@/,"").replace(/^https?:\/\/t\.me\//i,"").split("/")[0];if(!t)throw new Error("Невірний username");const s=await(await z()).getEntity(t);if(!s)throw new Error("Канал не знайдено");const n=s.className??"",r=n==="Channel";if(!r&&n!=="Chat")throw new Error(`Це не канал і не група: ${n}`);return{id:String(s.id?.toString?.()??s.id),accessHash:s.accessHash?String(s.accessHash.toString?.()):void 0,title:s.title??t,username:s.username??t,isChannel:r,isPrivate:!s.username,participantsCount:s.participantsCount??void 0}}o(Ba,"resolveByUsername");async function Ra(e){const t=await z();if(e.username)return t.getEntity(e.username);if(e.channelInternalId!==void 0){const a=e.channelInternalId;return t.getEntity(a)}throw new Error("Неможливо визначити канал з ref")}o(Ra,"resolvePostPeer");async function Da(e,t){const a=await z(),{events:s}=await Q(),n=new Map;for(const i of e)n.set(i.id,i);const r=o(async i=>{try{const l=i?.message;if(!l)return;const d=Ha(l.peerId);if(!d)return;const u=n.get(d);if(!u)return;const c={channelId:d,channelTitle:u.title,channelUsername:u.username,messageId:l.id,postedAt:(l.date??Math.floor(Date.now()/1e3))*1e3,rawText:l.message??l.text??"",hasMedia:!!l.media,raw:l};await t(c)}catch(l){console.error("[monitor] handler error:",l)}},"handler");return a.addEventHandler(r,new s.NewMessage({incoming:!0})),{async stop(){try{a.removeEventHandler(r,new s.NewMessage({incoming:!0}))}catch{}}}}o(Da,"startMonitoring");async function Fa(e,t,a,s){const n=await z(),r=Date.now()-t*3600*1e3,i=Math.floor(r/1e3),l=new Map;try{const d=await n.getDialogs({limit:200,archived:!1});for(const u of d){const c=u.entity;c&&c.id!=null&&l.set(String(c.id.toString?.()??c.id),c)}}catch(d){console.warn("[monitor] getDialogs prime failed:",d)}for(const d of e){if(s?.aborted)return;try{const u=l.get(d.id)??await n.getEntity(d.id);for await(const c of n.iterMessages(u,{limit:500})){if(s?.aborted)return;if((c.date??0)<i)break;!c.message&&!c.text||await a({channelId:d.id,channelTitle:d.title,channelUsername:d.username,messageId:c.id,postedAt:(c.date??i)*1e3,rawText:c.message??c.text??"",hasMedia:!!c.media,raw:c})}}catch(u){console.warn(`[monitor] history scan failed for ${d.title}:`,u)}}}o(Fa,"scanRecentHistory");function Ha(e){if(!e)return null;const t=e.channelId??e.chatId??e.userId;return t!=null?String(t.toString?.()??t):null}o(Ha,"extractPeerId");async function Oa(e,t,a){const s=await z(),n=await Ra(e),i=(await s.getMessages(n,{ids:[e.messageId]}))?.[0];if(!i)throw new Error("Пост не знайдено або він видалений");const l=n.title??n.username??"(без назви)",d=i.message??i.text??"",u=[];let c=0,m=0;try{for await(const p of s.iterMessages(n,{replyTo:e.messageId,reverse:!0,limit:void 0})){if(a?.aborted)break;if(!p)continue;const v=p.message??p.text??"";!v&&!p.media||(u.push({id:p.id,authorId:p.fromId?.userId?Number(p.fromId.userId.toString?.()):void 0,authorName:Va(p),text:v,postedAt:(p.date??0)*1e3,hasMedia:!!p.media}),c++,c-m>=50&&(m=c,t?.({fetched:c})))}}catch(p){const v=String(p?.message??p);if(!/MSG_ID_INVALID|CHAT_INVALID|PEER_ID_INVALID|no discussion/i.test(v))throw p}return t?.({fetched:u.length}),{postText:d,postAuthor:l,comments:u}}o(Oa,"fetchPostAndComments");function Va(e){const t=e.sender;if(t)return t.firstName||t.lastName?[t.firstName,t.lastName].filter(Boolean).join(" "):t.title??t.username}o(Va,"extractAuthorName");const tt=/^(?:https?:\/\/)?(?:www\.)?t\.me\//i;function Ua(e){const t=e.trim();if(!t)return null;let a;if(tt.test(t))a=t.replace(tt,"");else if(/^@?[A-Za-z0-9_]{4,32}\/\d+/.test(t))a=t.replace(/^@/,"");else return null;const n=a.split(/[?#]/,1)[0].split("/").filter(Boolean);if(n.length<2)return null;if(n[0]==="c"){if(n.length<3)return null;const l=BigInt(n[1]),d=Number(n[2]);return!Number.isFinite(d)||d<=0?null:{channelInternalId:l,messageId:d}}const r=n[0];if(!/^[A-Za-z][A-Za-z0-9_]{3,31}$/.test(r))return null;const i=Number(n[1]);return!Number.isFinite(i)||i<=0?null:{username:r,messageId:i}}o(Ua,"parseTelegramUrl");function ja(e){const t=k`
    <div class="col gap-4">
      <div class="panel">
        <h3 style="margin-bottom: 12px;">Telegram API ключі</h3>
        <p class="text-secondary" style="margin-bottom: 16px;">
          Якщо ще не маєте — авторизуйтесь на
          <a href="https://my.telegram.org" target="_blank" rel="noreferrer">my.telegram.org</a>,
          відкрийте розділ <span class="text-mono">API development tools</span>, створіть application.
          Поля <span class="text-mono">App api_id</span> і <span class="text-mono">App api_hash</span> — введіть нижче.
        </p>
        <form class="col gap-4" data-vm-form>
          <div class="field">
            <label class="field-label" for="vm-api-id">api_id</label>
            <input
              type="text"
              id="vm-api-id"
              class="input input-mono"
              placeholder="напр. 1234567"
              inputmode="numeric"
              autocomplete="off"
              value="${e.apiId??""}"
              required
            />
          </div>
          <div class="field">
            <label class="field-label" for="vm-api-hash">api_hash</label>
            <input
              type="text"
              id="vm-api-hash"
              class="input input-mono"
              placeholder="32 hex-символи"
              autocomplete="off"
              value="${e.apiHash??""}"
              required
            />
            <div class="field-error hidden" data-vm-error></div>
          </div>
          <div class="row end">
            <button type="submit" class="btn btn-primary btn-lg" data-vm-submit>
              <span>Продовжити</span>
              ${f(b.chevronRight(16).value)}
            </button>
          </div>
        </form>
      </div>

      <div class="text-muted" style="font-size: var(--fs-xs);">
        api-ключі зберігаються лише в IndexedDB вашого браузера, зашифровані вашим паролем.
      </div>
    </div>
  `,a=[],s=t.querySelector("[data-vm-form]"),n=t.querySelector("[data-vm-error]"),r=t.querySelector("[data-vm-submit]");return s.addEventListener("submit",async i=>{i.preventDefault(),n.classList.add("hidden");const l=s.querySelector("#vm-api-id").value.trim(),d=s.querySelector("#vm-api-hash").value.trim(),u=Number(l);if(!Number.isInteger(u)||u<=0){n.textContent="api_id має бути цілим числом",n.classList.remove("hidden");return}if(!/^[a-f0-9]{32}$/i.test(d)){n.textContent="api_hash має бути 32-символьним hex-рядком",n.classList.remove("hidden");return}r.disabled=!0,r.querySelector("span").textContent="Підключаємось…";try{await e.authFlow.setApiCredentials(u,d),a.forEach(c=>c({apiId:u,apiHash:d}))}catch(c){S.error(`Не вдалося підключитися: ${c.message}`)}finally{r.disabled=!1,r.querySelector("span").textContent="Продовжити"}}),{el:t,onNext(i){a.push(i)}}}o(ja,"buildApiCredsStep");function Wa(e){const t=k`
    <div class="panel">
      <h3 style="margin-bottom: 12px;">Номер телефону</h3>
      <p class="text-secondary" style="margin-bottom: 16px;">
        Введіть номер, до якого привʼязано Telegram-акаунт. Telegram надішле код підтвердження
        в офіційний додаток (або SMS, якщо ви давно не заходили).
      </p>
      <form class="col gap-4" data-vm-form>
        <div class="field">
          <label class="field-label" for="vm-phone">Телефон</label>
          <input
            type="tel"
            id="vm-phone"
            class="input input-mono"
            placeholder="+380501234567"
            autocomplete="tel"
            inputmode="tel"
            value="${e.phone??""}"
            required
          />
          <div class="field-error hidden" data-vm-error></div>
        </div>
        <div class="row between">
          <button type="button" class="btn btn-ghost" data-vm-back>
            ${f(b.chevronLeft(14).value)}
            <span>Назад</span>
          </button>
          <button type="submit" class="btn btn-primary btn-lg" data-vm-submit>
            <span>Надіслати код</span>
            ${f(b.chevronRight(16).value)}
          </button>
        </div>
      </form>
    </div>
  `,a=[],s=[],n=t.querySelector("[data-vm-form]"),r=t.querySelector("[data-vm-error]"),i=t.querySelector("[data-vm-submit]"),l=t.querySelector("[data-vm-back]");return n.addEventListener("submit",async d=>{d.preventDefault(),r.classList.add("hidden");const u=n.querySelector("#vm-phone").value.trim();i.disabled=!0,i.querySelector("span").textContent="Надсилаємо…";try{const c=await e.authFlow.sendLoginCode(u);e.lastCodeDestination=c.destination,e.lastCanResend=c.canResend,e.lastNextType=c.nextType,S.success(`Код надіслано ${c.destination}`,{duration:7e3}),a.forEach(m=>m({phone:u}))}catch(c){r.textContent=c.message,r.classList.remove("hidden")}finally{i.disabled=!1,i.querySelector("span").textContent="Надіслати код"}}),l.addEventListener("click",()=>s.forEach(d=>d())),{el:t,onBack(d){s.push(d)},onNext(d){a.push(d)}}}o(Wa,"buildPhoneStep");function Ka(e){const t=e.lastCodeDestination??"у Telegram-додатку або SMS",a=e.lastCanResend!==!1,s=at(e.lastNextType,a),n=k`
    <div class="panel">
      <h3 style="margin-bottom: 12px;">Код підтвердження</h3>
      <div class="row gap-3" style="background: var(--info-soft); border-left: 3px solid var(--info); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 16px; align-items: flex-start;">
        <span style="color: var(--info); flex-shrink: 0; margin-top: 2px;">${f(b.info(16).value)}</span>
        <div>
          <div style="margin-bottom: 4px;"><strong>Код прийшов ${t}</strong></div>
          <div class="text-secondary" style="font-size: var(--fs-sm);">
            На номер <span class="text-mono">${e.phone??"—"}</span>.
            Якщо це Telegram-додаток — відкрийте чат з <span class="text-mono">@Telegram</span> (службовий акаунт).
          </div>
        </div>
      </div>
      <form class="col gap-4" data-vm-form>
        <div class="field">
          <label class="field-label" for="vm-code">Код (5-7 цифр)</label>
          <input
            type="text"
            id="vm-code"
            class="input input-mono"
            placeholder="12345"
            inputmode="numeric"
            autocomplete="one-time-code"
            maxlength="7"
            required
            autofocus
          />
          <div class="field-error hidden" data-vm-error></div>
        </div>
        <div class="row between">
          <button type="button" class="btn btn-ghost" data-vm-back>
            ${f(b.chevronLeft(14).value)}
            <span>Інший номер</span>
          </button>
          <button type="button" class="btn btn-secondary" data-vm-resend>
            ${f(b.refresh(14).value)}
            <span>${s}</span>
          </button>
          <button type="submit" class="btn btn-primary btn-lg" data-vm-submit>
            <span>Підтвердити</span>
            ${f(b.chevronRight(16).value)}
          </button>
        </div>
      </form>
    </div>
  `,r=[],i=[],l=[],d=n.querySelector("[data-vm-form]"),u=n.querySelector("[data-vm-error]"),c=n.querySelector("[data-vm-submit]"),m=n.querySelector("[data-vm-back]"),p=n.querySelector("[data-vm-resend]");return p.addEventListener("click",async()=>{if(e.lastCanResend===!1){S.warning("Telegram надіслав код у застосунок Telegram (службовий чат «Telegram») на пристрої, де ти вже залогінений. Іншим каналом, зокрема SMS, код зараз недоступний.",{duration:9e3});return}const v=p.querySelector("span");p.disabled=!0,v.textContent="Надсилаємо…";try{const h=await e.authFlow.resendCode();e.lastCodeDestination=h.destination,e.lastCanResend=h.canResend,e.lastNextType=h.nextType,S.success(`Новий код надіслано ${h.destination}`,{duration:7e3})}catch(h){S.error(`Не вдалося: ${h.message}`,{duration:9e3})}finally{p.disabled=!1,v.textContent=at(e.lastNextType,e.lastCanResend!==!1)}}),d.addEventListener("submit",async v=>{v.preventDefault(),u.classList.add("hidden");const h=d.querySelector("#vm-code").value.trim();c.disabled=!0,c.querySelector("span").textContent="Перевіряємо…";try{const y=await e.authFlow.submitLoginCode(h);y==="two-factor-needed"?i.forEach(w=>w()):r.forEach(w=>w(y))}catch(y){const w=y.message;/PHONE_CODE_INVALID/i.test(w)?u.textContent="Невірний код":/PHONE_CODE_EXPIRED/i.test(w)?u.textContent="Код протух. Поверніться на крок «Телефон» і запросіть новий.":u.textContent=w,u.classList.remove("hidden")}finally{c.disabled=!1,c.querySelector("span").textContent="Підтвердити"}}),m.addEventListener("click",()=>l.forEach(v=>v())),{el:n,onBack(v){l.push(v)},onSignedIn(v){r.push(v)},onTwoFactorRequired(v){i.push(v)}}}o(Ka,"buildCodeStep");function at(e,t){return t?e?/Sms/i.test(e)?"Надіслати код у SMS":/MissedCall/i.test(e)?"Код пропущеним дзвінком":/Call/i.test(e)?"Подзвонити з кодом":"Надіслати код знову":"Надіслати код знову":"Код у застосунку Telegram"}o(at,"resendButtonLabel");function Ga(e){const t=k`
    <div class="panel">
      <h3 style="margin-bottom: 12px;">Cloud password (2FA)</h3>
      <p class="text-secondary" style="margin-bottom: 16px;">
        Ваш Telegram-акаунт захищений двоетапною перевіркою. Введіть пароль, що ви використовуєте
        для входу в Telegram (це <strong>не</strong> код з SMS).
      </p>
      <form class="col gap-4" data-vm-form>
        <div class="field">
          <label class="field-label" for="vm-2fa">Cloud password</label>
          <input
            type="password"
            id="vm-2fa"
            class="input input-mono"
            placeholder="••••••••"
            autocomplete="current-password"
            required
            autofocus
          />
          <div class="field-error hidden" data-vm-error></div>
        </div>
        <div class="row between">
          <button type="button" class="btn btn-ghost" data-vm-back>
            ${f(b.chevronLeft(14).value)}
            <span>Назад</span>
          </button>
          <button type="submit" class="btn btn-primary btn-lg" data-vm-submit>
            <span>Підтвердити</span>
            ${f(b.chevronRight(16).value)}
          </button>
        </div>
      </form>
    </div>
  `,a=[],s=[],n=t.querySelector("[data-vm-form]"),r=t.querySelector("[data-vm-error]"),i=t.querySelector("[data-vm-submit]"),l=t.querySelector("[data-vm-back]");return n.addEventListener("submit",async d=>{d.preventDefault(),r.classList.add("hidden");const u=n.querySelector("#vm-2fa").value;i.disabled=!0,i.querySelector("span").textContent="Перевіряємо…";try{const c=await e.authFlow.submitTwoFactorPassword(u);a.forEach(m=>m(c))}catch(c){const m=c.message;/PASSWORD_HASH_INVALID/i.test(m)||/password_invalid/i.test(m)?r.textContent="Невірний пароль":r.textContent=m,r.classList.remove("hidden")}finally{i.disabled=!1,i.querySelector("span").textContent="Підтвердити"}}),l.addEventListener("click",()=>s.forEach(d=>d())),{el:t,onBack(d){s.push(d)},onSignedIn(d){a.push(d)}}}o(Ga,"buildTwoFactorStep");function Qa(e){const t=new Set(e.selectedChannelIds??[]),a=e.dialogs??[],s=k`
    <div class="col gap-4">
      <div class="panel">
        <div class="row between" style="margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <h3 style="margin: 0;">Канали для моніторингу</h3>
          <div class="row gap-2">
            <button type="button" class="btn btn-secondary btn-sm" data-vm-add-manual>
              ${f(b.plus(14).value)}
              <span>Додати @username</span>
            </button>
          </div>
        </div>

        <div class="row gap-2" style="margin-bottom: 12px;">
          <div style="flex: 1; position: relative;">
            <input
              type="search"
              class="input"
              placeholder="Пошук за назвою або @username…"
              data-vm-search
              style="padding-left: 36px;"
            />
            <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--fg-muted);">
              ${f(b.search(16).value)}
            </span>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" data-vm-select-all>Усі</button>
          <button type="button" class="btn btn-ghost btn-sm" data-vm-clear>Скинути</button>
          <button type="button" class="btn btn-ghost btn-sm" data-vm-invert>Інвертувати</button>
        </div>

        <div class="text-secondary" style="font-size: var(--fs-sm); margin-bottom: 8px;">
          Знайдено: <span data-vm-total>${a.length}</span> ·
          Обрано: <span class="text-accent" data-vm-selected-count>${t.size}</span>
        </div>

        <div class="vm-channels-list" data-vm-list></div>
      </div>

      <div class="row between">
        <button type="button" class="btn btn-ghost" data-vm-back>
          ${f(b.chevronLeft(14).value)}
          <span>Назад</span>
        </button>
        <button type="button" class="btn btn-primary btn-lg" data-vm-next>
          <span>Зберегти і продовжити</span>
          ${f(b.chevronRight(16).value)}
        </button>
      </div>
    </div>
  `;Za();const n=s.querySelector("[data-vm-list]"),r=s.querySelector("[data-vm-search]"),i=s.querySelector("[data-vm-total]"),l=s.querySelector("[data-vm-selected-count]"),d=s.querySelector("[data-vm-select-all]"),u=s.querySelector("[data-vm-clear]"),c=s.querySelector("[data-vm-invert]"),m=s.querySelector("[data-vm-add-manual]"),p=s.querySelector("[data-vm-next]"),v=s.querySelector("[data-vm-back]");let h=[...a];const y=o(()=>{l.textContent=String(t.size)},"refreshCount"),w=o(()=>{if(h.length===0){n.replaceChildren(k`
        <div class="text-muted center" style="min-height: 100px; padding: 16px; text-align: center;">
          Каналів не знайдено. Спробуйте інший пошук або додайте вручну через @username.
        </div>
      `);return}n.replaceChildren();for(const x of h){const T=k`
        <label class="vm-channel-row" data-vm-row="${x.id}">
          <input type="checkbox" data-vm-cb ${t.has(x.id)?"checked":""} />
          <div class="vm-channel-avatar">${Ya(x.title)}</div>
          <div class="vm-channel-info">
            <div class="vm-channel-title">${x.title}</div>
            <div class="vm-channel-sub">
              ${x.username?"@"+x.username:x.isPrivate?"приватний":"без username"}
              ${x.participantsCount?" · "+Ja(x.participantsCount)+" учасників":""}
            </div>
          </div>
          <div class="vm-channel-tag">
            ${x.isChannel?"канал":"група"}
          </div>
        </label>
      `,I=T.querySelector("[data-vm-cb]");I.addEventListener("change",()=>{I.checked?t.add(x.id):t.delete(x.id),y()}),n.appendChild(T)}},"renderList"),$=o(x=>{const T=x.trim().toLowerCase();T?h=a.filter(I=>I.title.toLowerCase().includes(T)||(I.username??"").toLowerCase().includes(T)):h=[...a],i.textContent=String(h.length),w()},"applyFilter");r.addEventListener("input",()=>$(r.value)),d.addEventListener("click",()=>{h.forEach(x=>t.add(x.id)),y(),w()}),u.addEventListener("click",async()=>{t.size===0||!await H({title:"Скинути вибір?",body:`Зняти позначки з усіх обраних каналів (${t.size})?`,confirmLabel:"Так",cancelLabel:"Скасувати"})||(t.clear(),y(),w())}),c.addEventListener("click",()=>{for(const x of h)t.has(x.id)?t.delete(x.id):t.add(x.id);y(),w()}),m.addEventListener("click",()=>{const x=k`
      <div class="field">
        <label class="field-label" for="vm-add-username">@username або посилання</label>
        <input
          type="text"
          id="vm-add-username"
          class="input input-mono"
          placeholder="@channelname або https://t.me/channelname"
          autofocus
        />
      </div>
    `;qt({title:"Додати канал вручну",body:x,actions:[{label:"Скасувати",kind:"ghost"},{label:"Додати",kind:"primary",closeOnClick:!1,onClick:o(async()=>{const T=x.querySelector("#vm-add-username"),I=T.value.trim();if(I)try{const M=await Ba(I);a.find(P=>P.id===M.id)||(a.push(M),$(r.value)),t.add(M.id),y(),w(),S.success(`Додано: ${M.title}`),T.closest(".modal-scrim")?.remove(),document.body.style.overflow=""}catch(M){S.error(M.message)}},"onClick")}]})}),v.addEventListener("click",()=>A.forEach(x=>x())),p.addEventListener("click",()=>{if(t.size===0){H({title:"Без обраних каналів",body:"Жоден канал не вибрано. Без них моніторинг не запрацює. Все одно продовжити? Канали можна додати пізніше в Налаштуваннях.",confirmLabel:"Продовжити",cancelLabel:"Повернутися"}).then(x=>{x&&L.forEach(T=>T(t))});return}L.forEach(x=>x(t))}),i.textContent=String(a.length),w();const A=[],L=[];return{el:s,onBack(x){A.push(x)},onNext(x){L.push(x)}}}o(Qa,"buildChannelsStep");function Ya(e){return e.split(/\s+/).slice(0,2).map(t=>t[0]??"").join("").toUpperCase()||"·"}o(Ya,"initials");function Ja(e){return e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":String(e)}o(Ja,"formatCount");let st=!1;function Za(){if(st)return;st=!0;const e=document.createElement("style");e.textContent=`
    .vm-channels-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-height: 420px;
      overflow-y: auto;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 6px;
      background: var(--bg-base);
    }
    .vm-channel-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 10px;
      border-radius: var(--radius-xs);
      cursor: pointer;
      transition: background var(--t-fast);
    }
    .vm-channel-row:hover { background: var(--bg-elevated); }
    .vm-channel-row input[type="checkbox"] {
      appearance: none;
      width: 18px; height: 18px;
      border: 1.5px solid var(--border-base);
      border-radius: var(--radius-xs);
      background: var(--bg-surface);
      display: grid; place-content: center;
      flex-shrink: 0;
    }
    .vm-channel-row input[type="checkbox"]:checked {
      background: var(--accent); border-color: var(--accent);
    }
    .vm-channel-row input[type="checkbox"]:checked::after {
      content: ''; width: 10px; height: 6px;
      border-left: 2px solid var(--fg-inverse); border-bottom: 2px solid var(--fg-inverse);
      transform: rotate(-45deg) translate(1px, -1px);
    }
    .vm-channel-avatar {
      width: 36px; height: 36px;
      border-radius: var(--radius-sm);
      background: var(--bg-elevated);
      border: 1px solid var(--border-subtle);
      display: grid; place-items: center;
      font-family: var(--font-mono);
      font-size: var(--fs-sm);
      font-weight: 600;
      color: var(--accent);
      flex-shrink: 0;
    }
    .vm-channel-info { flex: 1; min-width: 0; }
    .vm-channel-title {
      font-size: var(--fs-base);
      color: var(--fg-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .vm-channel-sub {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      color: var(--fg-muted);
      letter-spacing: var(--tracking-wide);
    }
    .vm-channel-tag {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      letter-spacing: var(--tracking-wide);
      text-transform: uppercase;
      color: var(--fg-muted);
      padding: 2px 8px;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xs);
    }
  `,document.head.appendChild(e)}o(Za,"injectListStyles");function Xa(e){const t=e.user,a=e.selectedChannelIds?.size??0,s=k`
    <div class="panel">
      <div class="row gap-4" style="align-items: flex-start;">
        <div style="color: var(--success); flex-shrink: 0;">${f(b.check(28).value)}</div>
        <div style="flex: 1;">
          <h3 style="margin: 0 0 12px 0;">Готово!</h3>
          <p class="text-secondary" style="margin-bottom: 16px;">
            Telegram-акаунт підключено, канали збережено. Зараз перейдемо до головного інтерфейсу.
          </p>

          <div class="col gap-2" style="font-size: var(--fs-sm);">
            <div class="row gap-2">
              <span class="text-muted text-mono" style="min-width: 120px; font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">Користувач</span>
              <span class="text-primary">
                ${t?`${t.firstName??""} ${t.lastName??""}`.trim():"—"}
                ${t?.username?` (@${t.username})`:""}
              </span>
            </div>
            <div class="row gap-2">
              <span class="text-muted text-mono" style="min-width: 120px; font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">Телефон</span>
              <span class="text-mono">${t?.phone??"—"}</span>
            </div>
            <div class="row gap-2">
              <span class="text-muted text-mono" style="min-width: 120px; font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">Каналів обрано</span>
              <span class="text-accent text-mono">${a}</span>
            </div>
          </div>

          <div class="row end" style="margin-top: 24px;">
            <button type="button" class="btn btn-primary btn-lg" data-vm-done>
              ${f(b.power(16).value)}
              <span>Запустити Veles Monitor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,n=[];return s.querySelector("[data-vm-done]")?.addEventListener("click",()=>{n.forEach(r=>r())}),{el:s,onDone(r){n.push(r)}}}o(Xa,"buildFinishStep");const nt=[{id:"api",label:"API"},{id:"phone",label:"Телефон"},{id:"code",label:"Код"},{id:"twofa",label:"2FA"},{id:"channels",label:"Канали"},{id:"finish",label:"Готово"}];function es(){const e={authFlow:new Pa},t=[],a=k`
    <div class="app-main">
      <section class="page" style="max-width: 720px;">
        <header class="page-header" style="border: none; padding-bottom: 0;">
          <div>
            <div class="page-eyebrow">onboarding · підключення</div>
            <h1 class="page-title">Налаштування акаунту</h1>
          </div>
          <div style="color: var(--accent);">${f(b.power(28).value)}</div>
        </header>

        <nav class="wizard-stepper" data-vm-stepper></nav>

        <div data-vm-step-slot></div>
      </section>
    </div>
  `;as();const s=a.querySelector("[data-vm-stepper]"),n=a.querySelector("[data-vm-step-slot]"),r=o((d,u)=>{s.replaceChildren();const c=u?nt.filter(p=>p.id!=="twofa"):nt,m=c.findIndex(p=>p.id===d);c.forEach((p,v)=>{const h=v===m,y=v<m,w=k`
        <div class="wizard-step ${h?"current":""} ${y?"done":""}">
          <div class="wizard-step-num">
            ${y?f(b.check(12).value):String(v+1)}
          </div>
          <div class="wizard-step-label">${p.label}</div>
        </div>
      `;s.appendChild(w),v<c.length-1&&s.appendChild(k`<div class="wizard-step-divider ${y?"done":""}"></div>`)})},"renderStepper");let i=!0;const l=o(async d=>{r(d,d==="twofa"?!1:i);let u;switch(d){case"api":{const c=ja(e);c.onNext(({apiId:m,apiHash:p})=>{e.apiId=m,e.apiHash=p,l("phone")}),u=c.el;break}case"phone":{const c=Wa(e);c.onBack(()=>l("api")),c.onNext(({phone:m})=>{e.phone=m,l("code")}),u=c.el;break}case"code":{const c=Ka(e);c.onBack(()=>l("phone")),c.onTwoFactorRequired(()=>{i=!1,l("twofa")}),c.onSignedIn(m=>{e.user=m,i=!0,l("channels")}),u=c.el;break}case"twofa":{const c=Ga(e);c.onBack(()=>l("code")),c.onSignedIn(m=>{e.user=m,l("channels")}),u=c.el;break}case"channels":{if(!e.dialogs){n.replaceChildren(k`
            <div class="panel center" style="min-height: 240px;">
              <div class="col gap-2" style="align-items: center;">
                <div class="led led-warning" style="width: 12px; height: 12px;"></div>
                <div class="text-secondary">Завантажуємо список каналів акаунту…</div>
              </div>
            </div>
          `);try{e.dialogs=await za()}catch(m){S.error(`Не вдалося завантажити канали: ${m.message}`),e.dialogs=[]}}const c=Qa(e);c.onBack(()=>l("code")),c.onNext(async m=>{e.selectedChannelIds=m,await ts(e),l("finish")}),u=c.el;break}case"finish":{const c=Xa(e);c.onDone(()=>{t.forEach(m=>m())}),u=c.el;break}}_(n,u)},"go");return l("api"),{el:a,onFinished(d){t.push(d)}}}o(es,"buildOnboardingWizard");async function ts(e){if(!e.dialogs||!e.selectedChannelIds)return;const t=q(),a=e.dialogs.filter(s=>e.selectedChannelIds.has(s.id));await t.channels.setMany(a)}o(ts,"persistSelectedChannels");let rt=!1;function as(){if(rt)return;rt=!0;const e=document.createElement("style");e.textContent=`
    .wizard-stepper {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 16px 0;
    }
    .wizard-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      min-width: 60px;
    }
    .wizard-step-num {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: var(--bg-elevated);
      border: 1.5px solid var(--border-base);
      color: var(--fg-muted);
      font-family: var(--font-mono);
      font-size: var(--fs-sm);
      font-weight: 600;
      transition: all var(--t-base);
    }
    .wizard-step.current .wizard-step-num {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--fg-inverse);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }
    .wizard-step.done .wizard-step-num {
      background: var(--success-soft);
      border-color: var(--success);
      color: var(--success);
    }
    .wizard-step-label {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      letter-spacing: var(--tracking-wide);
      text-transform: uppercase;
      color: var(--fg-muted);
    }
    .wizard-step.current .wizard-step-label { color: var(--accent); }
    .wizard-step.done .wizard-step-label    { color: var(--success); }
    .wizard-step-divider {
      flex: 1;
      height: 1.5px;
      background: var(--border-base);
      margin-bottom: 18px;
      transition: background var(--t-base);
    }
    .wizard-step-divider.done { background: var(--success); }
  `,document.head.appendChild(e)}o(as,"injectStepperStyles");let R=null,ae=null;async function Nt(){return R||ae||(ae=(async()=>{if(typeof navigator>"u"||!("gpu"in navigator))return R={available:!1,reason:"navigator.gpu відсутній — браузер не підтримує WebGPU"},R;try{const e=await navigator.gpu.requestAdapter();if(!e)return R={available:!1,reason:"GPU адаптер недоступний (можливо, відключений в браузері)"},R;const t=await e.requestAdapterInfo?.().catch(()=>null)??{};return R={available:!0,adapter:{vendor:t.vendor??"unknown",architecture:t.architecture,description:t.description}},R}catch(e){return R={available:!1,reason:`WebGPU помилка: ${e.message}`},R}finally{ae=null}})(),ae)}o(Nt,"checkWebGpu");const me="Xenova/multilingual-e5-small",ot="passage: ";let de=null,Te=null;async function ke(e){return Te?Ae(Te):de?Ae(await de):(de=(async()=>{const{pipeline:t,env:a}=await B(async()=>{const{pipeline:n,env:r}=await import("./transformers-Qs6dBVVC.js").then(i=>i.t);return{pipeline:n,env:r}},[],import.meta.url);a.allowLocalModels=!1,a.useBrowserCache=!0;const s=await t("feature-extraction",me,{dtype:"q8",progress_callback:o(n=>{e?.({model:me,file:n?.file,status:n?.status,progress:n?.progress,loaded:n?.loaded,total:n?.total})},"progress_callback")});return Te=s,e?.({model:me,status:"ready"}),s})(),Ae(await de))}o(ke,"loadEmbeddings");function Ae(e){return{dimension:384,modelId:me,async embed(t){const a=Array.isArray(t)?t.map(u=>ot+u):[ot+t],s=await e(a,{pooling:"mean",normalize:!0}),n=s.dims,r=n[0],i=n[1],l=s.data;if(!Array.isArray(t))return new Float32Array(l.buffer,l.byteOffset,i);const d=[];for(let u=0;u<r;u++)d.push(new Float32Array(l.buffer,l.byteOffset+u*i*4,i));return d}}}o(Ae,"wrap$2");function zt(e,t){let a=0;const s=Math.min(e.length,t.length);for(let n=0;n<s;n++)a+=e[n]*t[n];return a}o(zt,"cosineSimilarity");const ve="Xenova/mDeBERTa-v3-base-xnli-multilingual-nli-2mil7";let ue=null,qe=null;async function Oe(e){return qe?Ie(qe):ue?Ie(await ue):(ue=(async()=>{const{pipeline:t,env:a}=await B(async()=>{const{pipeline:n,env:r}=await import("./transformers-Qs6dBVVC.js").then(i=>i.t);return{pipeline:n,env:r}},[],import.meta.url);a.allowLocalModels=!1,a.useBrowserCache=!0;const s=await t("zero-shot-classification",ve,{dtype:"q8",progress_callback:o(n=>{e?.({model:ve,file:n?.file,status:n?.status,progress:n?.progress,loaded:n?.loaded,total:n?.total})},"progress_callback")});return qe=s,e?.({model:ve,status:"ready"}),s})(),Ie(await ue))}o(Oe,"loadNli");function Ie(e){return{modelId:ve,async classify(t,a,s={}){const n=await e(t,a,{hypothesis_template:s.hypothesisTemplate??"Цей текст про {}.",multi_label:s.multiLabel??!1});return{labels:n.labels,scores:n.scores}}}}o(Ie,"wrap$1");const ss=/https?:\/\/\S+/g,ns=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+/gu,rs=/@[A-Za-z0-9_]{3,32}/g,os=/#[\p{L}0-9_]+/gu;function V(e,t={}){let a=e;return a=a.replace(ss," "),a=a.replace(ns," "),t.keepMentions||(a=a.replace(rs," ")),t.keepHashtags||(a=a.replace(os," ")),a=a.replace(/\s+/g," ").trim(),a}o(V,"cleanText");function $e(e,t=256){if(e.split(/\s+/).length<=t)return[e];const s=e.split(/(?<=[.!?…])\s+/),n=[];let r="",i=0;for(const l of s){const d=l.split(/\s+/).length;if(i+d>t&&r&&(n.push(r.trim()),r="",i=0),d>t){const u=l.split(/\s+/);for(let c=0;c<u.length;c+=t)n.push(u.slice(c,c+t).join(" "));continue}r+=(r?" ":"")+l,i+=d}return r.trim()&&n.push(r.trim()),n}o($e,"chunkText");function is(e,t=3){const a=new Set,s=e.toLowerCase().match(/\p{L}{1,}/gu)??[];for(const n of s)n.length>=t&&a.add(n);return[...a]}o(is,"extractUniqueWords");const He={1:{level:1,label:"Швидко",description:"Один швидкий прохід по початку тексту. Мінімум навантаження — для слабких пристроїв і великого потоку.",topicThreshold:.34,topicChunkSize:384,topicMaxChunks:1,topicEnsemble:!1,topicRecheck:!1,wordsThreshold:.79,stanceRecheck:!1,stanceEnsemble:!1},2:{level:2,label:"Збалансовано",description:"За замовчуванням. Аналізує до двох фрагментів тексту і перевіряє неоднозначні коментарі.",topicThreshold:.32,topicChunkSize:320,topicMaxChunks:2,topicEnsemble:!1,topicRecheck:!1,wordsThreshold:.78,stanceRecheck:!0,stanceEnsemble:!1},3:{level:3,label:"Максимальна точність",description:"Усі нюанси: багато фрагментів, ансамбль формулювань і контрольна перевірка. Найточніше, але повільніше й більше навантаження.",topicThreshold:.3,topicChunkSize:224,topicMaxChunks:4,topicEnsemble:!0,topicRecheck:!0,wordsThreshold:.76,stanceRecheck:!0,stanceEnsemble:!0}};function he(e){return He[e]??He[2]}o(he,"getAccuracyProfile");let Bt=He[2];function xe(e){Bt=he(e)}o(xe,"setActiveAccuracy");function ie(){return Bt}o(ie,"getActiveProfile");const ls=["повсякденні новини, побут і життя міста","розваги, спорт, дозвілля, їжа","реклама, акції та оголошення","погода, дороги і транспорт","нейтральні новини про дії влади або офіційні події"];async function Rt(e,t,a,s=!1,n,r,i=ie()){const l=a??i.wordsThreshold,d=V(e);if(!d||t.length===0)return{matched:!1,maxScore:0,perKeyword:[]};const u=n??await ke(r),c=is(d,3);if(c.length===0)return{matched:!1,maxScore:0,perKeyword:[]};const m=[...c,...t.map(L=>L.toLowerCase().trim()).filter(Boolean)],p=await u.embed(m),v=p.slice(0,c.length),h=p.slice(c.length),y=[];let w=0;for(let L=0;L<t.length;L++){const x=t[L],T=h[L];let I=-1,M;for(let P=0;P<c.length;P++){const g=zt(T,v[P]);g>I&&(I=g,M=c[P])}y.push({keyword:x,score:I,matchedWord:M}),I>w&&(w=I)}const $=y.map(L=>L.score>=l);return{matched:s?$.every(Boolean):$.some(Boolean),maxScore:w,perKeyword:y}}o(Rt,"matchByWords");const it=["Ця публікація про {}.","Цей текст стосується теми «{}»."];async function cs(e,t,a,s,n,r=ie()){const i=V(e);if(!i||!t.trim())return{matched:!1,score:0,chunkScores:[]};const l=s??await Oe(n),d=a??r.topicThreshold,u=[t,...ls],c=$e(i,r.topicChunkSize).slice(0,r.topicMaxChunks),m=r.topicEnsemble?it:[it[0]],p=[];for(const h of c){let y=0;for(const w of m){const $=await l.classify(h,u,{hypothesisTemplate:w,multiLabel:!1}),A=$.labels.findIndex(L=>L===t);y+=A>=0?$.scores[A]:0}p.push(y/m.length)}let v=p.length?Math.max(...p):0;if(r.topicRecheck&&v>=d&&c.length>0){const h=c[p.indexOf(v)],y=await l.classify(h,u,{hypothesisTemplate:"Цей текст НЕ стосується теми «{}».",multiLabel:!1}),w=y.labels.findIndex(A=>A===t),$=w>=0?y.scores[w]:0;$>v&&(v=Math.min(v,1-$))}return{matched:v>=d,score:v,chunkScores:p}}o(cs,"matchByTopic");async function ds(e,t,a=.35,s){const n=V(e);if(!n||!t)return{passes:!1,cosine:0};const r=await ke(),[i,l]=await r.embed([n.slice(0,1e3),t]),d=zt(i,l);return{passes:d>=a,cosine:d}}o(ds,"quickTopicPrefilter");const K={support:"погоджується",oppose:"спростовує або критикує",unrelated:"не стосується теми"},us="Автор коментаря {} з позицією, висловленою в публікації.",ps="Щодо думки в публікації, автор коментаря {}.";async function ms(e,t,a,s,n=ie()){const r=V(e),i=V(t),l=a??await Oe(s),u=`Публікація: ${$e(r,220)[0]??""}
Коментар: ${i}`,c=[K.support,K.oppose,K.unrelated],m=o(async w=>{const $=await l.classify(u,c,{hypothesisTemplate:w,multiLabel:!1}),A=o(L=>{const x=$.labels.findIndex(T=>T===L);return x>=0?$.scores[x]:0},"pick");return{support:A(K.support),oppose:A(K.oppose),unrelated:A(K.unrelated)}},"runOnce");let p=await m(us);const v=[p.support,p.oppose,p.unrelated].sort((w,$)=>$-w),h=v[0]-v[1]<.15;if(n.stanceEnsemble||n.stanceRecheck&&h){const w=await m(ps);p={support:(p.support+w.support)/2,oppose:(p.oppose+w.oppose)/2,unrelated:(p.unrelated+w.unrelated)/2}}let y="unrelated";return p.support>p.oppose&&p.support>p.unrelated?y="support":p.oppose>p.support&&p.oppose>p.unrelated&&(y="oppose"),{stance:y,scores:p}}o(ms,"classifyStance");const oe="Qwen2.5-1.5B-Instruct-q4f16_1-MLC";let re=null,fe=null;async function Ee(e){return fe?Me(fe):re?Me(await re):(re=(async()=>{const a=(await B(()=>import("./webllm-DUWib-Ix.js"),__vite__mapDeps([8,2]),import.meta.url)).CreateMLCEngine;if(!a)throw new Error("WebLLM API не знайдено — оновіть @mlc-ai/web-llm");const s=await a(oe,{initProgressCallback:o(n=>{e?.({model:oe,status:n?.progress>=1?"done":"progress",progress:typeof n?.progress=="number"?Math.round(n.progress*100):void 0,file:n?.text})},"initProgressCallback")});return fe=s,e?.({model:oe,status:"ready"}),s})(),Me(await re))}o(Ee,"loadQwen");function Me(e){return{modelId:oe,async chat({system:t,user:a,temperature:s=0,maxTokens:n=60,stop:r}){const i=[];t&&i.push({role:"system",content:t}),i.push({role:"user",content:a});const d=(await e.chat.completions.create({messages:i,temperature:s,max_tokens:n,stop:r}))?.choices?.[0]?.message?.content??"";return String(d).trim()},async unload(){try{await e.unload?.()}catch{}fe=null,re=null}}}o(Me,"wrap");const vs=oe,hs=`Ти класифікатор тем. Оцінюєш, наскільки текст стосується вказаної теми.
Відповідай ТІЛЬКИ одним цілим числом від 0 до 100, де 100 = текст повністю про цю тему, а 0 = зовсім не про неї. Без пояснень і без інших символів.
Приклади: 92, 5, 60`;async function fs(e,t,a,s){const n=V(e);if(!n||!t.trim())return{matched:!1,score:0,chunkScores:[]};const r=s??await Ee(),i=ie(),l=$e(n,i.topicChunkSize).slice(0,i.topicMaxChunks),u=a??{1:.5,2:.55,3:.58}[i.level]??.55,c=[];for(const p of l){const v=await r.chat({system:hs,user:`Тема: «${t}»
Текст: «${p}»

Оцінка (0-100):`,temperature:0,maxTokens:8,stop:[`
`]}),h=gs(v);c.push(h)}const m=c.length?Math.max(...c):0;return{matched:m>=u,score:m,chunkScores:c}}o(fs,"qwenMatchByTopic");function gs(e){const t=e.replace(",",".").match(/(\d?\.?\d+)/);if(!t)return 0;const a=Number(t[1]);return!Number.isFinite(a)||a<0?0:a>1?a>100?0:a/100:a}o(gs,"parseScoreReply");const bs=`Класифікуй позицію коментаря щодо думки публікації ОДНИМ словом: ПІДТРИМУЄ, СПРОСТОВУЄ або НЕ_СТОСУЄТЬСЯ.

Правила:
ПІДТРИМУЄ — щиро погоджується, хвалить, дякує по суті, або підтверджує думку.
СПРОСТОВУЄ — не згоден, критикує, висміює, іронізує, саркастично "погоджується", або наводить контрприклад. Іронія = СПРОСТОВУЄ.
НЕ_СТОСУЄТЬСЯ — коментар не оцінює думку публікації: питання, побут, спам, реклама, побажання, привітання.

Приклади (вивчи патерни):
Публікація: «Новий парк дуже гарний» Коментар: «Супер, давно чекали!» => ПІДТРИМУЄ
Публікація: «Влада робить багато для людей» Коментар: «Та яка там влада, одна брехня» => СПРОСТОВУЄ
Публікація: «У місті відкрили парк» Коментар: «А коли вже дощ закінчиться?» => НЕ_СТОСУЄТЬСЯ
Публікація: «Президент великий лідер» Коментар: «Ну да, спаситель, ага, дякую за ціни» => СПРОСТОВУЄ
Публікація: «Дорогу відремонтували за рекордні строки» Коментар: «Через місяць знов розіб'ється» => СПРОСТОВУЄ
Публікація: «Закон підтримує бізнес» Коментар: «Чий бізнес? Своїх друзів?» => СПРОСТОВУЄ
Публікація: «Гарна ініціатива міськради» Коментар: «Так, нарешті щось корисне зробили» => ПІДТРИМУЄ
Публікація: «Президент відвідав фронт» Коментар: «Будь обережним, дякуємо за відвагу» => ПІДТРИМУЄ
Публікація: «Влада обіцяє підвищення зарплат» Коментар: «Скільки можна обіцяти? Покажіть результат» => СПРОСТОВУЄ
Публікація: «У парку відкрилось кафе» Коментар: «Хто власник?» => НЕ_СТОСУЄТЬСЯ
Публікація: «Цей чиновник зробив багато для міста» Коментар: «Ага, для свого міста — Дубаю» => СПРОСТОВУЄ
Публікація: «Підтримуємо армію» Коментар: «Слава ЗСУ, тримаймося!» => ПІДТРИМУЄ`;async function ys(e,t,a){const s=$e(V(e),200)[0]??"",n=V(t),i=await(a??await Ee()).chat({system:bs,user:`Публікація: «${s}» Коментар: «${n}» =>`,temperature:0,maxTokens:10,stop:[`
`]});return ws(i)}o(ys,"qwenClassifyStance");function ws(e){const t=e.toUpperCase().replace(/[^A-ZА-ЯЇІЄҐ_\s]/giu,"").trim(),a=t.split(/[\s_]+/).slice(0,4).join(" ");let s="unrelated";return/НЕ_СТОСУЄТЬСЯ|НЕСТОСУЄТЬСЯ|НЕ СТОСУЄТЬСЯ|ІНШЕ|СПАМ/i.test(a)?s="unrelated":/^СПРОСТОВУЄ|^СПРОСТОВ|^ПРОТИ|^КРИТИК|ДИСКРЕДИТ|НЕ ПІДТРИМ|НЕ\sПІДТРИМ/i.test(a)?s="oppose":/^ПІДТРИМУЄ|^ПІДТРИМ|^ЗГОДЕН|^ЗГОДНИ/i.test(a)?s="support":/СПРОСТОВ|КРИТИК/i.test(t)?s="oppose":/ПІДТРИМ/i.test(t)&&!/НЕ_?\s?ПІДТРИМ/i.test(t)&&(s="support"),{stance:s,scores:{support:s==="support"?1:0,oppose:s==="oppose"?1:0,unrelated:s==="unrelated"?1:0},raw:e}}o(ws,"parseStanceReply");let Y=null,Se=null;Mt(()=>{Y=null,Se=null});async function Dt(){const e=It(),t=e?await e.settings.get():null,a=t?.aiMode??"hybrid";if(t?.accuracy&&xe(t.accuracy),Y&&Se===a)return Y;let s=a;return a==="qwen"&&((await Nt()).available||(s="hybrid",S.warning(E.toast.webgpuMissing))),Se=a,Y=s==="qwen"?Ss(a):xs(a,s),Y}o(Dt,"getAiRouter");function xs(e,t){let a=null,s=null;const n=o(async i=>(a||(a=await ke(i)),a),"ensureEmb"),r=o(async i=>(s||(s=await Oe(i)),s),"ensureNli");return{mode:e,effectiveMode:t,async matchByWords(i,l,d={}){const u=await n();return Rt(i,l,d.threshold,d.requireAll,u)},async matchByTopic(i,l,d={}){const u=await r();return cs(i,l,d.threshold,u)},async classifyStance(i,l){const d=await r(),u=await ms(i,l,d);return{stance:u.stance,scores:u.scores}},async preload(i){await Promise.all([n(i),r(i)])}}}o(xs,"buildHybridRouter");function Ss(e){let t=null,a=null;const s=o(async r=>(t||(t=await ke(r)),t),"ensureEmb"),n=o(async r=>(a||(a=await Ee(r)),a),"ensureQwen");return{mode:e,effectiveMode:"qwen",async matchByWords(r,i,l={}){const d=await s();return Rt(r,i,l.threshold,l.requireAll,d)},async matchByTopic(r,i,l={}){const d=await n();return fs(r,i,l.threshold,d)},async classifyStance(r,i){const l=await n(),d=await ys(r,i,l);return{stance:d.stance,scores:d.scores}},async preload(r){await n(r)}}}o(Ss,"buildQwenRouter");function ks(){Y=null,Se=null}o(ks,"resetAiRouter");const $s=/[.*+?^${}()|[\]\\]/g;function Es(e){return e.replace($s,"\\$&")}o(Es,"escapeRegex");function lt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}o(lt,"escapeHtml$1");function Cs(e,t){if(!e)return"";if(t.length===0)return lt(e);const a=[...new Set(t.filter(Boolean))].sort((n,r)=>r.length-n.length),s=new RegExp("("+a.map(Es).join("|")+")","gi");return lt(e).replace(s,'<mark class="vm-mark">$1</mark>')}o(Cs,"highlightHtml");class Ls{static{o(this,"AsyncQueue")}constructor(t=1){this.concurrency=t}queue=[];active=0;idleWaiters=[];enqueue(t){return new Promise((a,s)=>{this.queue.push({task:t,resolve:a,reject:s}),this.tick()})}get size(){return this.queue.length}get inflight(){return this.active}clear(){const t=this.queue.splice(0);for(const a of t)a.reject(new Error("Queue cleared"));this.tick()}onIdle(){return this.active===0&&this.queue.length===0?Promise.resolve():new Promise(t=>{this.idleWaiters.push(t)})}tick(){for(;this.active<this.concurrency&&this.queue.length>0;){const t=this.queue.shift();this.active++,t.task().then(a=>t.resolve(a)).catch(a=>t.reject(a)).finally(()=>{this.active--,this.tick()})}if(this.active===0&&this.queue.length===0&&this.idleWaiters.length>0){const t=this.idleWaiters;this.idleWaiters=[];for(const a of t)a()}}}const Ts="veles-labels",As=1,ct=5e3;let pe=null;function te(){return pe||(pe=xt(Ts,As,{upgrade(e){if(!e.objectStoreNames.contains("entries")){const t=e.createObjectStore("entries",{keyPath:"id"});t.createIndex("by-ts","ts"),t.createIndex("by-task","task")}e.objectStoreNames.contains("meta")||e.createObjectStore("meta")}}),pe)}o(te,"openLabelsDB");let Ft=!1;function Ht(e){Ft=e}o(Ht,"setLabellingEnabled");function Ve(){return Ft}o(Ve,"isLabellingEnabled");async function Ot(e){const t=e.id??Ns(e),a={...e,id:t,ts:Date.now(),userVerdict:null},s=await te();return await s.put("entries",a),await Bs(s),t}o(Ot,"addEntry");async function qs(e,t){const a=await te(),s=await a.get("entries",e);s&&(s.userVerdict=t,await a.put("entries",s))}o(qs,"setVerdict");async function Ue(e={}){const t=await te();let a;return e.task?a=await t.getAllFromIndex("entries","by-task",e.task):a=await t.getAll("entries"),a.sort((s,n)=>n.ts-s.ts),e.onlyLabelled&&(a=a.filter(s=>s.userVerdict)),e.limit&&a.length>e.limit&&(a=a.slice(0,e.limit)),a}o(Ue,"listEntries");async function Is(){const t=(await te()).transaction("entries","readwrite");await t.store.clear(),await t.done}o(Is,"clearAll");async function Ms(e){await(await te()).delete("entries",e)}o(Ms,"deleteEntry");async function _s(){const t=await(await te()).getAll("entries");return{total:t.length,labelled:t.filter(a=>a.userVerdict).length}}o(_s,"countEntries");async function Ps(e={}){return(await Ue({task:e.task,onlyLabelled:e.onlyLabelled})).map(a=>JSON.stringify(a)).join(`
`)}o(Ps,"exportJsonl");function Ns(e){if(e.channelId&&typeof e.messageId=="number")return`${e.task}_${e.mode}_a${e.accuracy}_${e.channelId}_${e.messageId}`;const t=`${e.task}|${e.mode}|${e.accuracy}|${e.topic??""}|${e.text.slice(0,200)}`;return`${e.task}_${e.mode}_a${e.accuracy}_${zs(t).toString(36)}`}o(Ns,"makeId");function zs(e){let t=5381;for(let a=0;a<e.length;a++)t=(t<<5)+t+e.charCodeAt(a)>>>0;return t}o(zs,"djb2");async function Bs(e){const t=await e.count("entries");if(t<=ct)return;const n=(await e.getAll("entries")).filter(i=>!i.userVerdict).sort((i,l)=>i.ts-l.ts).slice(0,t-ct),r=e.transaction("entries","readwrite");for(const i of n)await r.store.delete(i.id);await r.done}o(Bs,"enforceLimit");const Rs={topic:{min:.2,max:.55,step:.01},words:{min:.6,max:.9,step:.01},stance:{min:.3,max:.6,step:.01}};async function Ds(e){const t=Rs[e.task],a=e.min??t.min,s=e.max??t.max,n=e.step??t.step,i=(await Ue({task:e.task,onlyLabelled:!0})).filter(c=>c.mode===e.mode&&c.accuracy===e.accuracy),l=[];for(let c=a;c<=s+1e-9;c+=n){const m=Math.round(c*100)/100,p=Fs(i,m);l.push(p)}const d=l.reduce((c,m)=>m.f1>c.f1?m:c,l[0]);let u;if(e.targetRecall!==void 0){const c=l.filter(m=>m.recall>=e.targetRecall);c.length&&(u=c.reduce((m,p)=>p.precision>m.precision?p:m,c[0]))}return{points:l,bestF1:d,bestPrecisionGivenRecall:u,sampleSize:i.length,meta:{task:e.task,mode:e.mode,accuracy:e.accuracy,min:a,max:s,step:n}}}o(Ds,"sweep");function Fs(e,t){let a=0,s=0,n=0,r=0;for(const m of e){const p=m.score>=t,v=m.userVerdict==="tp"||m.userVerdict==="fn";p&&v?a++:p&&!v?s++:!p&&v?n++:r++}const i=a+s===0?0:a/(a+s),l=a+n===0?0:a/(a+n),d=i+l===0?0:2*i*l/(i+l),u=a+s+n+r,c=u===0?0:(a+r)/u;return{threshold:t,tp:a,fp:s,fn:n,tn:r,precision:i,recall:l,f1:d,accuracy:c}}o(Fs,"evaluate");async function dt(e="topic"){const t=["hybrid","qwen"],a=[1,2,3],s=[];for(const n of t)for(const r of a){const i=await Ds({task:e,mode:n,accuracy:r});s.push(i)}return s}o(dt,"sweepAll");function ut(e){const t=[];t.push("=== CALIBRATION SWEEP REPORT ===");for(const a of e){if(t.push(""),t.push(`[${a.meta.task} | ${a.meta.mode} | accuracy=${a.meta.accuracy}]  N=${a.sampleSize}`),a.sampleSize<5){t.push("  (sample size < 5 — недостатньо для висновку)");continue}const s=a.bestF1;if(t.push(`  best F1 = ${s.f1.toFixed(3)} @ threshold ${s.threshold.toFixed(2)} (P=${s.precision.toFixed(2)}, R=${s.recall.toFixed(2)}, TP=${s.tp}, FP=${s.fp}, FN=${s.fn})`),a.bestPrecisionGivenRecall){const n=a.bestPrecisionGivenRecall;t.push(`  best precision (R≥${.7}) = ${n.precision.toFixed(3)} @ threshold ${n.threshold.toFixed(2)}`)}}return t.join(`
`)}o(ut,"formatSweepReport");class Hs{static{o(this,"MonitoringEngine")}subscription=null;abortController=null;queue=new Ls(1);listeners={status:new Set,post:new Set,error:new Set};status="idle";currentOptions;startedAt;matchedCount=0;processedCount=0;isRunning(){return this.status!=="idle"&&this.status!=="stopping"}snapshot(){return{status:this.status,startedAt:this.startedAt,options:this.currentOptions,matchedCount:this.matchedCount,processedCount:this.processedCount,queueSize:this.queue.size}}on(t,a){return this.listeners[t].add(a),()=>this.listeners[t].delete(a)}async start(t){this.isRunning()&&await this.stop(),this.currentOptions=t,this.matchedCount=0,this.processedCount=0,this.startedAt=Date.now(),this.setStatus("starting"),t.accuracy&&xe(t.accuracy);try{const a=await Dt();await a.preload(),typeof t.historyHours=="number"?(this.setStatus("scanning"),this.abortController=new AbortController,await Fa(t.channels,t.historyHours,s=>this.handleMessage(s,t,a),this.abortController.signal),await this.queue.onIdle(),this.setStatus("idle")):(this.setStatus("live"),this.subscription=await Da(t.channels,s=>this.handleMessage(s,t,a)))}catch(a){throw this.setStatus("idle"),this.emit("error",a),a}}async stop(){if(this.status!=="idle"){this.setStatus("stopping");try{await this.subscription?.stop()}catch{}this.subscription=null,this.abortController?.abort(),this.abortController=null,this.queue.clear(),this.setStatus("idle")}}setStatus(t){this.status=t,this.emit("status",this.snapshot())}emit(t,a){for(const s of this.listeners[t])try{s(a)}catch(n){console.error("[engine] listener error:",n)}}async handleMessage(t,a,s){if(!t.rawText.trim())return;const n=o(async()=>{if(this.processedCount++,this.emit("status",this.snapshot()),a.ignoreWords?.trim()){const h=a.ignoreWords.split(",").map(w=>w.trim().toLowerCase()).filter(Boolean),y=t.rawText.toLowerCase();if(h.some(w=>y.includes(w)))return}if(a.mode==="topic"&&a.throttleMode==="prefilter"&&a.topic&&!(await ds(t.rawText,a.topic,.3)).passes)return;let r=!1,i=0,l="";const d=ie(),u=a.accuracy??2,c=s.effectiveMode,m=t.channelUsername?`https://t.me/${t.channelUsername}/${t.messageId}`:`tg://openmessage?chat_id=${t.channelId}&message_id=${t.messageId}`;let p=null;if(a.mode==="words"){const h=(a.words??"").split(",").map(w=>w.trim()).filter(Boolean);if(h.length===0)return;const y=await s.matchByWords(t.rawText,h,{requireAll:a.requireAll});if(r=y.matched,i=y.maxScore,p={perKeyword:y.perKeyword,thresholdUsed:d.wordsThreshold,keywordsLogged:h},r){const w=y.perKeyword.filter($=>$.matchedWord).map($=>$.matchedWord);l=Cs(t.rawText,w.length?w:h)}}else{if(!a.topic?.trim())return;const h=await s.matchByTopic(t.rawText,a.topic);r=h.matched,i=h.score,p={chunkScores:h.chunkScores,thresholdUsed:d.topicThreshold},r&&(l=t.rawText)}if(Ve()&&p)try{await Ot({task:a.mode,mode:c,accuracy:u,threshold:p.thresholdUsed,text:t.rawText.slice(0,800),topic:a.topic,keywords:p.keywordsLogged,score:i,chunkScores:p.chunkScores,perKeyword:p.perKeyword,modelDecision:r?"matched":"unmatched",channelId:t.channelId,channelTitle:t.channelTitle,messageId:t.messageId,url:m})}catch(h){console.warn("[labelling] addEntry failed:",h)}if(!r)return;this.matchedCount++;const v={number:this.matchedCount,channelId:t.channelId,channelTitle:t.channelTitle,channelUsername:t.channelUsername,messageId:t.messageId,postedAt:t.postedAt,rawText:t.rawText,highlightedHtml:l||t.rawText,hasMedia:t.hasMedia,url:t.channelUsername?`https://t.me/${t.channelUsername}/${t.messageId}`:`tg://openmessage?chat_id=${t.channelId}&message_id=${t.messageId}`,score:i};this.emit("post",v),this.emit("status",this.snapshot());try{await q().history.append(v)}catch(h){console.warn("[engine] history append failed:",h)}},"job");this.queue.enqueue(n).catch(r=>{console.error("[engine] job error:",r),this.emit("error",r)})}}let _e=null;function Vt(){return _e||(_e=new Hs),_e}o(Vt,"getMonitoringEngine");function Os(){Us();const e=k`
    <section class="page" id="page-monitoring" role="tabpanel" style="max-width: var(--max-content-w);">
      <header class="page-header">
        <div>
          <div class="page-eyebrow">${E.monitoring.eyebrow}</div>
          <h1 class="page-title">${E.monitoring.pageTitle}</h1>
        </div>
        <div class="row gap-2" data-vm-status-badges></div>
      </header>

      <div class="vm-monitor-grid">
        <aside class="vm-monitor-left">
          <div class="panel" data-vm-channels-block></div>
          <div class="panel" data-vm-form-block></div>
          <div class="panel" data-vm-status-block></div>
        </aside>

        <section class="vm-monitor-right">
          <div class="panel" style="height: 100%; display: flex; flex-direction: column; padding: 0;">
            <div class="vm-results-header">
              <div class="text-eyebrow">Знайдені публікації</div>
              <div class="row gap-2">
                <span class="badge" data-vm-results-count>0</span>
                <button class="btn btn-ghost btn-sm" data-vm-clear-results title="Очистити">
                  ${f(b.trash(14).value)}
                </button>
              </div>
            </div>
            <div class="vm-results-list" data-vm-results></div>
          </div>
        </section>
      </div>
    </section>
  `,t=Vt();let a=[];const s={mode:"topic",words:"",ignoreWords:"",topic:"",accuracy:2,requireAll:!1,throttleMode:"queue",historyHours:0},n=e.querySelector("[data-vm-channels-block]");o(async()=>{try{a=await q().channels.list()}catch{a=[]}n.replaceChildren(k`
      <div>
        <div class="row between" style="margin-bottom: 8px;">
          <div class="text-eyebrow">Канали моніторингу</div>
          <span class="text-mono text-accent" style="font-size: var(--fs-xs);">${a.length}</span>
        </div>
        ${a.length===0?f('<div class="text-muted" style="font-size: var(--fs-sm);">Жодного каналу не обрано. Додайте в <strong>Налаштуваннях</strong>.</div>'):f(`<div class="vm-mini-channels">
              ${a.slice(0,8).map(g=>`<span class="vm-mini-channel" title="${g.username?"@"+g.username:g.title}">${g.title}</span>`).join("")}
              ${a.length>8?`<span class="vm-mini-channel" style="background: var(--bg-base);">+${a.length-8}</span>`:""}
            </div>`)}
      </div>
    `)},"renderChannels")();const i=e.querySelector("[data-vm-form-block]"),l=k`
    <div class="col gap-4">
      <div class="text-eyebrow">Конфігурація</div>

      <div class="field">
        <label class="field-label">Режим</label>
        <div class="vm-segmented">
          <label class="vm-seg">
            <input type="radio" name="vm-mode" value="topic" ${s.mode==="topic"?"checked":""} />
            <span>За темою (AI)</span>
          </label>
          <label class="vm-seg">
            <input type="radio" name="vm-mode" value="words" ${s.mode==="words"?"checked":""} />
            <span>За словами</span>
          </label>
        </div>
      </div>

      <div class="field" data-vm-topic-field>
        <label class="field-label" for="vm-topic">Тема публікації</label>
        <input
          type="text"
          id="vm-topic"
          class="input"
          placeholder="напр. «дискредитація місцевої влади»"
          value="${s.topic}"
        />
      </div>

      <div class="field" data-vm-words-field style="display:none;">
        <label class="field-label" for="vm-words">Ключові слова (через кому, фрази у "лапках")</label>
        <input
          type="text"
          id="vm-words"
          class="input"
          placeholder='напр. влада, корупція, "погана дорога"'
          value="${s.words}"
        />
        <label class="checkbox" style="margin-top: 8px;">
          <input type="checkbox" id="vm-require-all" ${s.requireAll?"checked":""} />
          <span class="text-secondary">Тільки якщо ВСІ слова знайдено</span>
        </label>
      </div>

      <div class="field">
        <label class="field-label" for="vm-ignore">Ігнорувати, якщо містить (через кому)</label>
        <input
          type="text"
          id="vm-ignore"
          class="input"
          placeholder="реклама, спам"
          value="${s.ignoreWords}"
        />
      </div>

      <div class="field">
        <label class="field-label">
          Точність визначення: <span data-vm-acc-name class="text-accent text-mono">${he(s.accuracy).label}</span>
        </label>
        <input type="range" id="vm-accuracy" min="1" max="3" step="1" value="${s.accuracy}" style="width: 100%;" />
        <div class="text-muted" data-vm-acc-desc style="font-size: var(--fs-xs); margin-top: 4px;">${he(s.accuracy).description}</div>
      </div>

      <div class="field">
        <label class="field-label">Часовий діапазон</label>
        <select class="select" id="vm-history">
          <option value="0">Реальний час (real-time)</option>
          <option value="1">За останню годину</option>
          <option value="3">За останні 3 години</option>
          <option value="6">За останні 6 годин</option>
          <option value="12">За останні 12 годин</option>
          <option value="24">За останні 24 години</option>
        </select>
      </div>

      <div class="field">
        <label class="field-label">Стратегія обробки</label>
        <select class="select" id="vm-throttle">
          <option value="queue">Черга — обробляти всі по черзі</option>
          <option value="prefilter">Префільтр — embedding-скрінінг перед NLI (швидше)</option>
        </select>
      </div>

      <button class="btn btn-primary btn-lg btn-block" data-vm-toggle>
        ${f(b.play(16).value)}
        <span>Запустити моніторинг</span>
      </button>
    </div>
  `;_(i,l);const d=o(()=>{const g=l.querySelector("[data-vm-topic-field]"),N=l.querySelector("[data-vm-words-field]");g.style.display=s.mode==="topic"?"":"none",N.style.display=s.mode==="words"?"":"none"},"updateModeUi");d(),l.querySelectorAll('input[name="vm-mode"]').forEach(g=>{g.addEventListener("change",()=>{g.checked&&(s.mode=g.value,d())})}),l.querySelector("#vm-topic").addEventListener("input",g=>{s.topic=g.target.value}),l.querySelector("#vm-words").addEventListener("input",g=>{s.words=g.target.value}),l.querySelector("#vm-ignore").addEventListener("input",g=>{s.ignoreWords=g.target.value}),l.querySelector("#vm-require-all").addEventListener("change",g=>{s.requireAll=g.target.checked});const u=l.querySelector("#vm-accuracy"),c=l.querySelector("[data-vm-acc-name]"),m=l.querySelector("[data-vm-acc-desc]"),p=o(g=>{const N=he(g);c.textContent=N.label,m.textContent=N.description},"applyAccuracy");u.addEventListener("input",()=>{const g=Math.min(3,Math.max(1,parseInt(u.value,10)));s.accuracy=g,p(g),xe(g),q().settings.update({accuracy:g}).catch(()=>{})}),q().settings.get().then(g=>{const N=Math.min(3,Math.max(1,g.accuracy??2));s.accuracy=N,u.value=String(N),p(N),xe(N)}).catch(()=>{}),l.querySelector("#vm-history").addEventListener("change",g=>{s.historyHours=parseInt(g.target.value,10)}),l.querySelector("#vm-throttle").addEventListener("change",g=>{s.throttleMode=g.target.value});const v=l.querySelector("[data-vm-toggle]");v.addEventListener("click",async()=>{if(t.isRunning()){await t.stop();return}if(a.length===0){S.warning("Спочатку оберіть канали в Налаштуваннях");return}if(s.mode==="topic"&&!s.topic.trim()){S.warning("Введіть тему для моніторингу");return}if(s.mode==="words"&&!s.words.trim()){S.warning("Введіть ключові слова");return}try{S.info("Завантаження AI-моделей може зайняти кілька хвилин при першому запуску"),await t.start({channels:a,mode:s.mode,words:s.words,ignoreWords:s.ignoreWords,topic:s.topic,accuracy:s.accuracy,requireAll:s.requireAll,throttleMode:s.throttleMode,historyHours:s.historyHours>0?s.historyHours:void 0})}catch(g){S.error(`Не вдалося запустити: ${g.message}`)}});const h=e.querySelector("[data-vm-status-block]"),y=e.querySelector("[data-vm-status-badges]"),w=o(g=>{const N=g.status==="live"?"led-success":g.status==="scanning"||g.status==="starting"||g.status==="stopping"?"led-warning":"led-idle",Ge=g.status==="live"?"real-time":g.status==="scanning"?"скан історії":g.status==="starting"?"старт…":g.status==="stopping"?"зупинка…":"очікування";h.replaceChildren(k`
      <div class="col gap-3">
        <div class="text-eyebrow">Статус</div>
        <div class="row gap-3">
          <span class="led ${N}" style="width: 12px; height: 12px;"></span>
          <span class="text-mono" style="font-size: var(--fs-sm); letter-spacing: var(--tracking-wide); text-transform: uppercase;">${Ge}</span>
        </div>
        <div class="vm-status-grid">
          <div>
            <div class="text-muted text-mono" style="font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">Оброблено</div>
            <div class="text-mono" style="font-size: var(--fs-xl);">${g.processedCount}</div>
          </div>
          <div>
            <div class="text-muted text-mono" style="font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">Збігів</div>
            <div class="text-mono text-accent" style="font-size: var(--fs-xl);">${g.matchedCount}</div>
          </div>
          <div>
            <div class="text-muted text-mono" style="font-size: var(--fs-xs); letter-spacing: var(--tracking-widest); text-transform: uppercase;">У черзі</div>
            <div class="text-mono" style="font-size: var(--fs-xl);">${g.queueSize}</div>
          </div>
        </div>
      </div>
    `),y.replaceChildren(k`
      <span class="badge ${g.status==="live"?"badge-success":""}">
        ${f(b.radar(12).value)}
        <span>${Ge}</span>
      </span>
      ${g.matchedCount>0?f(`<span class="badge badge-accent"><strong>${g.matchedCount}</strong></span>`):""}
    `),v.innerHTML=g.status==="idle"||g.status==="stopping"?`${b.play(16).value}<span>Запустити моніторинг</span>`:`${b.stop(16).value}<span>Зупинити</span>`,v.classList.toggle("btn-danger",g.status!=="idle"&&g.status!=="stopping"),v.classList.toggle("btn-primary",g.status==="idle"||g.status==="stopping")},"updateStatus");w(t.snapshot());const $=e.querySelector("[data-vm-results]"),A=e.querySelector("[data-vm-results-count]"),L=e.querySelector("[data-vm-clear-results]"),x=[],T=o(()=>{if(A.textContent=String(x.length),x.length===0){$.replaceChildren(k`
        <div class="text-muted center" style="height: 100%; padding: 40px; text-align: center;">
          Поки що нічого не знайдено. Налаштуйте конфігурацію зліва й натисніть «Запустити моніторинг».
        </div>
      `);return}$.replaceChildren();for(const g of x)$.appendChild(Vs(g))},"renderPosts");T(),L.addEventListener("click",()=>{x.length=0,T()});const I=t.on("status",w),M=t.on("post",g=>{x.unshift(g),x.length>200&&(x.length=200),T()}),P=t.on("error",g=>S.error(`Engine: ${g.message}`));return(async()=>{try{const N=(await q().history.list()).slice(0,20);N.length&&x.length===0&&(x.push(...N),T())}catch{}})(),e.addEventListener("vm-unmount",()=>{I(),M(),P()}),e}o(Os,"buildMonitoringPage");function Vs(e){const t=new Date(e.postedAt).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"}),a=new Date(e.postedAt).toLocaleDateString("uk-UA");return k`
    <article class="vm-post">
      <header class="vm-post-head">
        <span class="vm-post-num">#${e.number}</span>
        <span class="vm-post-channel">${e.channelTitle}</span>
        ${e.hasMedia?f(`<span class="badge badge-info">${b.folder(10).value}<span>media</span></span>`):""}
        ${typeof e.score=="number"?f(`<span class="badge"><span class="text-mono">${e.score.toFixed(2)}</span></span>`):""}
        <span class="vm-post-time text-mono">${a} ${t}</span>
      </header>
      <div class="vm-post-body">${f(e.highlightedHtml)}</div>
      <footer class="vm-post-foot">
        <a href="${e.url}" target="_blank" rel="noreferrer" class="text-accent" style="font-family: var(--font-mono); font-size: var(--fs-xs);">
          ${e.url}
        </a>
      </footer>
    </article>
  `}o(Vs,"renderPostCard");let pt=!1;function Us(){if(pt)return;pt=!0;const e=document.createElement("style");e.textContent=`
    .vm-monitor-grid {
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: var(--space-6);
      flex: 1;
      min-height: 0;
    }
    .vm-monitor-left, .vm-monitor-right {
      display: flex; flex-direction: column;
      gap: var(--space-4);
      min-height: 0;
    }
    .vm-monitor-right { min-height: 600px; }

    .vm-segmented {
      display: flex; gap: 2px;
      background: var(--bg-base);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 3px;
    }
    .vm-seg {
      flex: 1; display: flex;
      align-items: center; justify-content: center;
      height: 32px; padding: 0 12px;
      cursor: pointer;
      font-size: var(--fs-sm);
      color: var(--fg-secondary);
      border-radius: var(--radius-xs);
      transition: background var(--t-fast);
    }
    .vm-seg input { position: absolute; opacity: 0; pointer-events: none; }
    .vm-seg:hover { color: var(--fg-primary); }
    .vm-seg:has(input:checked) {
      background: var(--accent-soft);
      color: var(--accent);
    }

    .vm-mini-channels {
      display: flex; flex-wrap: wrap; gap: 4px;
    }
    .vm-mini-channel {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      padding: 4px 8px;
      background: var(--bg-elevated);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xs);
      color: var(--fg-secondary);
      white-space: nowrap;
      overflow: hidden; text-overflow: ellipsis;
      max-width: 140px;
    }

    .vm-status-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-3);
    }

    .vm-results-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: var(--space-4) var(--space-5);
      border-bottom: 1px solid var(--border-subtle);
    }
    .vm-results-list {
      flex: 1;
      overflow-y: auto;
      padding: var(--space-3);
      display: flex; flex-direction: column; gap: var(--space-3);
    }

    .vm-post {
      background: var(--bg-elevated);
      border: 1px solid var(--border-subtle);
      border-left: 3px solid var(--accent);
      border-radius: var(--radius-sm);
      padding: var(--space-3) var(--space-4);
      animation: vm-fade-in var(--t-base);
    }
    .vm-post-head {
      display: flex; align-items: center; gap: var(--space-2);
      flex-wrap: wrap;
      margin-bottom: var(--space-2);
    }
    .vm-post-num {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      color: var(--fg-muted);
    }
    .vm-post-channel {
      font-size: var(--fs-sm);
      font-weight: 600;
      color: var(--fg-primary);
    }
    .vm-post-time {
      margin-left: auto;
      font-size: var(--fs-xs);
      color: var(--fg-muted);
    }
    .vm-post-body {
      font-size: var(--fs-base);
      color: var(--fg-primary);
      line-height: var(--lh-relaxed);
      white-space: pre-wrap;
      word-break: break-word;
    }
    .vm-post-foot {
      margin-top: var(--space-2);
      padding-top: var(--space-2);
      border-top: 1px dashed var(--border-subtle);
    }
    .vm-mark {
      background: var(--accent-soft);
      color: var(--accent);
      padding: 0 4px;
      border-radius: 2px;
      font-weight: 600;
    }

    @media (max-width: 1100px) {
      .vm-monitor-grid { grid-template-columns: 1fr; }
      .vm-monitor-right { min-height: 400px; }
    }
  `,document.head.appendChild(e)}o(Us,"injectStyles$3");async function js(e){const{url:t,onProgress:a,signal:s}=e;a?.({phase:"parsing"});const n=Ua(t);if(!n)throw new Error("Не вдалося розпарсити посилання");a?.({phase:"fetching-post"});const r=await Oa(n,v=>a?.({phase:"fetching-comments",fetchedComments:v.fetched}),s);if(s?.aborted)throw new Error("Скасовано");const i=await Dt();await i.preload();const l=[],d=r.comments.length,u=(await q().settings.get().catch(()=>null))?.accuracy??2;for(let v=0;v<r.comments.length&&!s?.aborted;v++){const h=r.comments[v];try{const y=await i.classifyStance(r.postText,h.text);if(l.push(mt(h,y.stance,y.scores)),Ve())try{await Ot({task:"stance",mode:i.effectiveMode,accuracy:u,threshold:0,text:h.text.slice(0,800),postText:r.postText.slice(0,400),score:Math.max(y.scores.support,y.scores.oppose,y.scores.unrelated),scores:y.scores,modelDecision:y.stance,channelId:String(h.id),messageId:h.id,url:e.url})}catch(w){console.warn("[labelling] stance addEntry failed:",w)}}catch(y){console.warn("[analyze] stance failed for comment",h.id,y),l.push(mt(h,"unrelated",{support:0,oppose:0,unrelated:1}))}((v+1)%5===0||v===r.comments.length-1)&&a?.({phase:"classifying",classifiedComments:v+1,totalComments:d})}const c=Ws(l),m=i.effectiveMode,p={postUrl:t,postText:r.postText,totalComments:l.length,comments:l,percentages:c,analyzedAt:Date.now(),aiMode:m};try{await q().reports.save(p)}catch(v){console.warn("[analyze] save report failed:",v)}return a?.({phase:"done",classifiedComments:l.length,totalComments:d}),p}o(js,"analyzePost");function mt(e,t,a){return{id:e.id,authorId:e.authorId,authorName:e.authorName,text:e.text,postedAt:e.postedAt,stance:t,scores:a}}o(mt,"mapToClassified");function Ws(e){if(e.length===0)return{support:0,oppose:0,unrelated:0};let t=0,a=0,s=0;for(const u of e)u.stance==="support"?t++:u.stance==="oppose"?a++:s++;const n=e.length,r=[{key:"support",exact:t/n*100},{key:"oppose",exact:a/n*100},{key:"unrelated",exact:s/n*100}],i={support:0,oppose:0,unrelated:0};for(const u of r)i[u.key]=Math.floor(u.exact);const l=100-(i.support+i.oppose+i.unrelated),d=[...r].sort((u,c)=>c.exact-Math.floor(c.exact)-(u.exact-Math.floor(u.exact)));for(let u=0;u<l;u++)i[d[u%3].key]++;return i}o(Ws,"computePercentages");function Ks(e){const t=new Date(e.analyzedAt).toLocaleString("uk-UA"),a={support:"Підтримує",oppose:"Не підтримує",unrelated:"Інше"},s=o(r=>r.replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i]),"esc"),n=e.comments.map((r,i)=>`
    <tr>
      <td style="color:#666;">${i+1}</td>
      <td><span style="color:${Gs(r.stance)}; font-weight:600;">${a[r.stance]}</span></td>
      <td>${s(r.authorName??"—")}</td>
      <td>${s(r.text)}</td>
    </tr>
  `).join("");return`<!doctype html>
<html lang="uk"><head>
  <meta charset="utf-8" />
  <title>Veles Monitor — звіт аналізу коментарів</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 980px; margin: 32px auto; padding: 0 16px; color: #111; }
    h1 { font-size: 22px; }
    .meta { color: #555; font-size: 14px; margin-bottom: 20px; }
    .bar { display: flex; height: 36px; border-radius: 4px; overflow: hidden; margin: 16px 0; }
    .bar > div { display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 600; font-size: 13px; min-width: 4%; }
    table { width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 13px; }
    th, td { padding: 8px 10px; border-bottom: 1px solid #eee; text-align: left; vertical-align: top; }
    th { background: #f6f6f6; font-weight: 600; }
    .post { background: #f6f6f6; border-left: 3px solid #38BDF8; padding: 12px; margin-bottom: 20px; white-space: pre-wrap; }
  </style>
</head><body>
  <h1>Аналіз коментарів</h1>
  <div class="meta">
    <div><strong>Пост:</strong> <a href="${s(e.postUrl)}">${s(e.postUrl)}</a></div>
    <div><strong>Проаналізовано коментарів:</strong> ${e.totalComments}</div>
    <div><strong>Дата:</strong> ${t}</div>
    <div><strong>AI режим:</strong> ${e.aiMode}</div>
  </div>
  <div class="post">${s(e.postText)}</div>
  <h2>Розподіл</h2>
  <div class="bar">
    <div style="width:${e.percentages.support}%; background:#34D399;">Підтримує ${e.percentages.support}%</div>
    <div style="width:${e.percentages.oppose}%; background:#F87171;">Не підтримує ${e.percentages.oppose}%</div>
    <div style="width:${e.percentages.unrelated}%; background:#9AB0C8;">Інше ${e.percentages.unrelated}%</div>
  </div>
  <h2>Деталі (${e.comments.length})</h2>
  <table>
    <thead><tr><th>#</th><th>Категорія</th><th>Автор</th><th>Коментар</th></tr></thead>
    <tbody>${n}</tbody>
  </table>
  <p style="color:#888; margin-top:32px; font-size:12px;">Згенеровано Veles Monitor Web</p>
</body></html>`}o(Ks,"buildHtmlReport");function Gs(e){return e==="support"?"#1B8F5B":e==="oppose"?"#C4504F":"#5B6E83"}o(Gs,"stanceColor");function Qs(e,t={}){const a=t.size??220,s=t.strokeWidth??28,n=(a-s)/2,r=2*Math.PI*n,i=a/2,l=a/2,{support:d,oppose:u,unrelated:c}=e.percentages,m=Math.max(1,d+u+c),p=d/m*100,v=u/m*100,h=c/m*100,y=o((w,$,A)=>{const L=$/100*r,x=r-L,T=-90+w/100*360;return`<circle
      cx="${i}" cy="${l}" r="${n}" fill="none"
      stroke="${A}" stroke-width="${s}"
      stroke-dasharray="${L} ${x}"
      transform="rotate(${T} ${i} ${l})"
    />`},"seg");return f(`
    <svg viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" aria-label="Stance розподіл">
      <circle cx="${i}" cy="${l}" r="${n}" fill="none" stroke="var(--bg-elevated)" stroke-width="${s}"/>
      ${y(0,p,"var(--stance-support)")}
      ${y(p,v,"var(--stance-oppose)")}
      ${y(p+v,h,"var(--stance-unrelated)")}
      <text x="${i}" y="${l-6}" text-anchor="middle" fill="var(--fg-primary)"
            font-family="var(--font-mono)" font-size="${a*.18}" font-weight="700">
        ${e.totalComments}
      </text>
      <text x="${i}" y="${l+a*.1}" text-anchor="middle" fill="var(--fg-muted)"
            font-family="var(--font-mono)" font-size="${a*.06}"
            letter-spacing="2" text-transform="uppercase">
        КОМЕНТАРІВ
      </text>
    </svg>
  `)}o(Qs,"buildStanceChart");function Ys(){en();const e=k`
    <section class="page" id="page-comments" role="tabpanel">
      <header class="page-header">
        <div>
          <div class="page-eyebrow">${E.comments.eyebrow}</div>
          <h1 class="page-title">${E.comments.pageTitle}</h1>
        </div>
        <div class="row gap-2">
          ${f(`<span class="badge">${b.comments(12).value}<span>stance · 3 buckets</span></span>`)}
        </div>
      </header>

      <div class="panel">
        <form class="row gap-3" data-vm-form style="align-items: flex-end;">
          <div class="field" style="flex: 1;">
            <label class="field-label" for="vm-post-url">URL поста</label>
            <input
              type="url"
              id="vm-post-url"
              class="input input-mono"
              placeholder="https://t.me/channel/123"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary btn-lg" data-vm-analyze>
            ${f(b.brain(16).value)}
            <span>Аналізувати</span>
          </button>
        </form>
      </div>

      <div data-vm-progress style="display:none;"></div>
      <div data-vm-result style="display:none;"></div>
    </section>
  `,t=e.querySelector("[data-vm-form]"),a=e.querySelector("#vm-post-url"),s=e.querySelector("[data-vm-analyze]"),n=e.querySelector("[data-vm-progress]"),r=e.querySelector("[data-vm-result]");let i=null;return t.addEventListener("submit",async l=>{l.preventDefault();const d=a.value.trim();if(!d)return;i?.abort(),i=new AbortController,s.disabled=!0,s.querySelector("span").textContent="Працюємо…",n.style.display="",r.style.display="none";const u=o(c=>{let m="",p=null;switch(c.phase){case"parsing":m="Розбираємо посилання…";break;case"fetching-post":m="Завантажуємо пост…";break;case"fetching-comments":m=`Тягнемо коментарі: ${c.fetchedComments??0}`;break;case"classifying":{const v=c.classifiedComments??0,h=c.totalComments??0;m=`Класифікуємо: ${v}/${h}`,h>0&&(p=Math.round(v/h*100));break}case"done":m="Готово",p=100;break}n.replaceChildren(k`
        <div class="panel">
          <div class="row gap-3">
            <span class="led led-warning" style="width: 12px; height: 12px;"></span>
            <span class="text-mono" style="font-size: var(--fs-sm); letter-spacing: var(--tracking-wide);">${m}</span>
            <div class="grow"></div>
            <button class="btn btn-ghost btn-sm" data-vm-cancel>${f(b.x(14).value)}<span>Скасувати</span></button>
          </div>
          ${p!==null?f(`<div class="vm-progressbar" style="margin-top: 12px;"><div class="vm-progressbar-fill" style="width: ${p}%"></div></div>`):""}
        </div>
      `),n.querySelector("[data-vm-cancel]")?.addEventListener("click",()=>i?.abort())},"renderProgress");try{const c=await js({url:d,signal:i.signal,onProgress:u});n.style.display="none",r.style.display="",_(r,Js(c))}catch(c){n.style.display="none",S.error(`Аналіз перервано: ${c.message}`)}finally{s.disabled=!1,s.querySelector("span").textContent="Аналізувати"}}),e}o(Ys,"buildCommentsPage");function Js(e){const t=e.totalComments,a=k`
    <div class="col gap-4">
      <div class="panel">
        <div class="text-eyebrow" style="margin-bottom: 8px;">Оригінальний пост</div>
        <div class="vm-post-text">${e.postText}</div>
        <div class="text-muted" style="font-size: var(--fs-xs); margin-top: 8px;">
          <a href="${e.postUrl}" target="_blank" rel="noreferrer" class="text-accent">${e.postUrl}</a>
        </div>
      </div>

      <div class="vm-result-grid">
        <div class="panel center">
          ${Qs(e,{size:220,strokeWidth:28})}
        </div>

        <div class="panel">
          <div class="text-eyebrow" style="margin-bottom: 12px;">Результати</div>
          <div class="col gap-3">
            ${Pe("support","Підтримує",e.percentages.support,Ne(e,"support"),t)}
            ${Pe("oppose","Не підтримує",e.percentages.oppose,Ne(e,"oppose"),t)}
            ${Pe("unrelated","Інше",e.percentages.unrelated,Ne(e,"unrelated"),t)}
          </div>
          <div class="row" style="margin-top: 20px; gap: 8px;">
            <button class="btn btn-secondary btn-sm" data-vm-export>
              ${f(b.download(14).value)}
              <span>Завантажити HTML-звіт</span>
            </button>
          </div>
        </div>
      </div>

      <div class="panel" style="padding: 0;">
        <div class="vm-results-header">
          <div class="text-eyebrow">Коментарі (${t})</div>
          <div class="row gap-1">
            <button class="btn btn-ghost btn-sm vm-filter active" data-vm-filter="all">Усі</button>
            <button class="btn btn-ghost btn-sm vm-filter" data-vm-filter="support">Підтримує</button>
            <button class="btn btn-ghost btn-sm vm-filter" data-vm-filter="oppose">Проти</button>
            <button class="btn btn-ghost btn-sm vm-filter" data-vm-filter="unrelated">Інше</button>
          </div>
        </div>
        <div data-vm-comments-list></div>
      </div>
    </div>
  `,s=a.querySelector("[data-vm-comments-list]");let n="all";const r=o(()=>{const i=n==="all"?e.comments:e.comments.filter(l=>l.stance===n);if(s.replaceChildren(),i.length===0){s.appendChild(k`<div class="text-muted center" style="padding: 32px;">Немає коментарів цієї категорії.</div>`);return}for(const l of i)s.appendChild(Zs(l))},"renderList");return r(),a.querySelectorAll("[data-vm-filter]").forEach(i=>{i.addEventListener("click",()=>{n=i.dataset.vmFilter,a.querySelectorAll(".vm-filter").forEach(l=>l.classList.remove("active")),i.classList.add("active"),r()})}),a.querySelector("[data-vm-export]")?.addEventListener("click",()=>{const i=new Blob([Ks(e)],{type:"text/html;charset=utf-8"}),l=URL.createObjectURL(i),d=document.createElement("a");d.href=l,d.download=`veles-stance-report-${new Date(e.analyzedAt).toISOString().slice(0,19).replace(/:/g,"-")}.html`,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(l)}),a}o(Js,"renderReport");function Pe(e,t,a,s,n){return k`
    <div class="vm-legend-row">
      <span class="vm-legend-dot" style="background:${e==="support"?"var(--stance-support)":e==="oppose"?"var(--stance-oppose)":"var(--stance-unrelated)"};"></span>
      <span class="text-secondary">${t}</span>
      <span class="grow"></span>
      <span class="text-mono text-primary" style="font-size: var(--fs-lg); font-weight: 600;">${a}%</span>
      <span class="text-muted text-mono" style="font-size: var(--fs-xs);">${s}/${n}</span>
    </div>
  `}o(Pe,"legendRow");function Ne(e,t){return e.comments.filter(a=>a.stance===t).length}o(Ne,"countByStance");function Zs(e){return Xs(e)}o(Zs,"renderComment");function Xs(e){const t=new Date(e.postedAt).toLocaleString("uk-UA"),a=e.stance==="support"?"var(--stance-support)":e.stance==="oppose"?"var(--stance-oppose)":"var(--stance-unrelated)",s=e.stance==="support"?"Підтримує":e.stance==="oppose"?"Не підтримує":"Інше";return k`
    <article class="vm-comment-row">
      <div class="vm-comment-stance" style="background:${a};" title="${s}"></div>
      <div class="vm-comment-body">
        <div class="row gap-2" style="margin-bottom: 4px;">
          <span class="text-secondary" style="font-weight: 600; font-size: var(--fs-sm);">${e.authorName??"—"}</span>
          <span class="text-muted text-mono" style="font-size: var(--fs-xs);">${t}</span>
          <span class="grow"></span>
          <span class="badge" style="color:${a}; border-color:transparent; background: ${a.replace("var(--","var(--").replace(")","-soft)")};">${s}</span>
        </div>
        <div class="text-primary" style="font-size: var(--fs-base); white-space: pre-wrap; word-break: break-word;">${e.text}</div>
      </div>
    </article>
  `}o(Xs,"renderCommentTyped");let vt=!1;function en(){if(vt)return;vt=!0;const e=document.createElement("style");e.textContent=`
    .vm-result-grid {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: var(--space-4);
    }
    .vm-post-text {
      white-space: pre-wrap;
      word-break: break-word;
      line-height: var(--lh-relaxed);
      color: var(--fg-primary);
    }

    .vm-legend-row {
      display: flex; align-items: center; gap: var(--space-2);
    }
    .vm-legend-dot {
      width: 14px; height: 14px; border-radius: 50%;
    }

    .vm-filter.active {
      background: var(--accent-soft) !important;
      color: var(--accent) !important;
    }

    .vm-progressbar {
      width: 100%; height: 6px;
      background: var(--bg-elevated);
      border-radius: var(--radius-pill);
      overflow: hidden;
    }
    .vm-progressbar-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent), var(--accent-hover));
      transition: width var(--t-base);
    }

    .vm-comment-row {
      display: flex; gap: 0;
      border-top: 1px solid var(--border-subtle);
      padding: var(--space-3) var(--space-4);
    }
    .vm-comment-stance {
      width: 3px; flex-shrink: 0;
      margin-right: var(--space-3);
      border-radius: var(--radius-pill);
    }
    .vm-comment-body { flex: 1; min-width: 0; }

    @media (max-width: 900px) {
      .vm-result-grid { grid-template-columns: 1fr; }
    }
  `,document.head.appendChild(e)}o(en,"injectStyles$2");function tn(){cn();const e=k`
    <section class="page" id="page-calibration" role="tabpanel">
      <header class="page-header">
        <div>
          <div class="page-eyebrow">${E.calibration.eyebrow}</div>
          <h1 class="page-title">${E.calibration.pageTitle}</h1>
        </div>
        <div class="row gap-2" data-vm-counts></div>
      </header>

      <div class="panel" data-vm-controls></div>
      <div class="panel" data-vm-sweep style="margin-top: var(--space-4); display:none;"></div>
      <div class="panel" data-vm-list style="margin-top: var(--space-4);"></div>
    </section>
  `,t={task:"all",mode:"all",accuracy:"all",showOnlyUnlabelled:!1};return an(e,t),U(e,t),je(e),e}o(tn,"buildCalibrationPage");async function an(e,t){const a=e.querySelector("[data-vm-controls]"),s=Ve(),n=k`
    <div class="col gap-4">
      <div class="vm-toggle-row">
        <div>
          <div class="text-eyebrow">Режим логування рішень моделі</div>
          <div class="text-muted" style="font-size: var(--fs-xs); margin-top: 4px;">
            Кожен виклик topic-/words-match і кожна stance-класифікація пишеться у локальну IDB.
            Вимикайте після збору даних — щоб не лити мегабайти у нормальному моніторингу.
          </div>
        </div>
        <label class="vm-switch">
          <input type="checkbox" data-vm-toggle ${s?"checked":""} />
          <span class="vm-switch-track"><span class="vm-switch-thumb"></span></span>
        </label>
      </div>

      <div class="vm-cal-filters">
        <label class="vm-cal-filter">
          <span>Задача</span>
          <select class="select select-sm" data-vm-flt-task>
            <option value="all">усі</option>
            <option value="topic">topic</option>
            <option value="words">words</option>
            <option value="stance">stance</option>
          </select>
        </label>
        <label class="vm-cal-filter">
          <span>Модель</span>
          <select class="select select-sm" data-vm-flt-mode>
            <option value="all">усі</option>
            <option value="hybrid">hybrid</option>
            <option value="qwen">qwen</option>
          </select>
        </label>
        <label class="vm-cal-filter">
          <span>Точність</span>
          <select class="select select-sm" data-vm-flt-acc>
            <option value="all">усі</option>
            <option value="1">1 — Швидко</option>
            <option value="2">2 — Збалансовано</option>
            <option value="3">3 — Максимальна</option>
          </select>
        </label>
        <label class="vm-cal-filter">
          <span>Тільки немічені</span>
          <input type="checkbox" data-vm-flt-unlab />
        </label>
      </div>

      <div class="row gap-2" style="flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm" data-vm-export>
          ${f(b.download(14).value)}
          <span>Експорт JSONL</span>
        </button>
        <button class="btn btn-secondary btn-sm" data-vm-sweep-btn>
          ${f(b.scope(14).value)}
          <span>Прогнати sweep</span>
        </button>
        <button class="btn btn-danger btn-sm" data-vm-clear>
          ${f(b.trash(14).value)}
          <span>Очистити всі мітки</span>
        </button>
      </div>
    </div>
  `;_(a,n),n.querySelector("[data-vm-toggle]").addEventListener("change",async r=>{const i=r.target.checked;Ht(i);try{await q().settings.update({labelling:{enabled:i}}),S.success(i?"Logging увімкнено":"Logging вимкнено")}catch(l){S.error(l.message)}}),n.querySelector("[data-vm-flt-task]").addEventListener("change",r=>{t.task=r.target.value,U(e,t)}),n.querySelector("[data-vm-flt-mode]").addEventListener("change",r=>{t.mode=r.target.value,U(e,t)}),n.querySelector("[data-vm-flt-acc]").addEventListener("change",r=>{const i=r.target.value;t.accuracy=i==="all"?"all":parseInt(i,10),U(e,t)}),n.querySelector("[data-vm-flt-unlab]").addEventListener("change",r=>{t.showOnlyUnlabelled=r.target.checked,U(e,t)}),n.querySelector("[data-vm-export]").addEventListener("click",async()=>{const r=await Ps({onlyLabelled:!1});if(!r){S.info("Нема що експортувати");return}ln(`veles-labels-${Date.now()}.jsonl`,r,"application/x-ndjson"),S.success("Експортовано")}),n.querySelector("[data-vm-clear]").addEventListener("click",async()=>{window.confirm("Видалити ВСІ зафіксовані рішення моделі та мітки?")&&(await Is(),S.success("Очищено"),await U(e,t),await je(e))}),n.querySelector("[data-vm-sweep-btn]").addEventListener("click",async()=>{const r=e.querySelector("[data-vm-sweep]");r.style.display="",r.innerHTML='<div class="text-muted">Обчислення sweep…</div>';try{const[i,l]=await Promise.all([dt("topic"),dt("words")]),d=`# topic
${ut(i)}

# words
${ut(l)}`;r.innerHTML=`
        <div class="text-eyebrow" style="margin-bottom: 8px;">Sweep — рекомендовані пороги</div>
        <pre class="vm-sweep-out">${j(d)}</pre>
        <div class="row gap-2" style="margin-top: 8px;">
          <button class="btn btn-secondary btn-sm" data-vm-copy-sweep>Скопіювати</button>
        </div>
      `,r.querySelector("[data-vm-copy-sweep]").addEventListener("click",()=>{navigator.clipboard.writeText(d).then(()=>S.success("Скопійовано"))})}catch(i){r.innerHTML=`<div class="text-danger">Sweep failed: ${j(i.message)}</div>`}})}o(an,"renderControls");async function U(e,t){const a=e.querySelector("[data-vm-list]");a.innerHTML='<div class="text-muted">Завантаження…</div>';let s=await Ue({task:t.task==="all"?void 0:t.task,limit:500});if(t.mode!=="all"&&(s=s.filter(n=>n.mode===t.mode)),t.accuracy!=="all"&&(s=s.filter(n=>n.accuracy===t.accuracy)),t.showOnlyUnlabelled&&(s=s.filter(n=>!n.userVerdict)),s.length===0){a.innerHTML=`
      <div class="text-muted center" style="padding: 24px;">
        Жодного рішення не зафіксовано за цими фільтрами. Увімкніть logging і запустіть моніторинг.
      </div>`;return}a.innerHTML="",a.appendChild(k`
    <div class="text-eyebrow" style="margin-bottom: 8px;">Рішення моделі (${s.length})</div>
  `);for(const n of s)a.appendChild(sn(n,()=>{U(e,t),je(e)}))}o(U,"renderList");function sn(e,t){const a=new Date(e.ts).toLocaleString("uk-UA"),s=e.task==="stance",n=k`
    <article class="vm-cal-entry ${e.userVerdict?"is-labelled":""}">
      <div class="vm-cal-head">
        <span class="badge">${e.task}</span>
        <span class="badge badge-info">${e.mode}</span>
        <span class="badge">a=${e.accuracy}</span>
        <span class="text-mono text-muted" style="font-size: var(--fs-xs);">
          score=${(e.score??0).toFixed(3)} ${e.threshold?`· th=${e.threshold.toFixed(2)}`:""}
        </span>
        <span class="text-mono badge ${on(e.modelDecision)}">${e.modelDecision}</span>
        ${e.userVerdict?f(`<span class="badge badge-success">${e.userVerdict}</span>`):""}
        <span class="text-mono text-muted" style="margin-left: auto; font-size: var(--fs-xs);">${a}</span>
      </div>

      ${e.topic?f(`<div class="text-secondary" style="font-size: var(--fs-xs); margin-top: 4px;">topic: <span class="text-mono">${j(e.topic)}</span></div>`):""}
      ${e.keywords?f(`<div class="text-secondary" style="font-size: var(--fs-xs);">keywords: <span class="text-mono">${j(e.keywords.join(", "))}</span></div>`):""}

      ${s&&e.postText?f(`<div class="vm-cal-snippet"><b>пост:</b> ${j(e.postText)}</div>`):""}
      <div class="vm-cal-snippet"><b>${s?"коментар":"текст"}:</b> ${j(e.text)}</div>

      <div class="row gap-2" style="margin-top: 8px; flex-wrap: wrap;">
        ${e.url?f(`<a class="btn btn-ghost btn-sm" href="${j(e.url)}" target="_blank" rel="noreferrer">${b.link(12).value}<span>відкрити</span></a>`):""}
        ${f(s?rn(e):nn(e))}
        <button class="btn btn-ghost btn-sm" data-vm-del title="Видалити запис">${f(b.trash(12).value)}</button>
      </div>
    </article>
  `;return n.querySelectorAll("[data-vm-verdict]").forEach(r=>{r.addEventListener("click",async()=>{const i=r.dataset.vmVerdict;await qs(e.id,i),t()})}),n.querySelector("[data-vm-del]")?.addEventListener("click",async()=>{await Ms(e.id),t()}),n}o(sn,"renderEntry");function nn(e){const t=e.userVerdict,a=o(s=>t===s?"btn-primary":"btn-secondary","cls");return`
    <button class="btn ${a("tp")} btn-sm" data-vm-verdict="tp" title="справді про тему">${b.check(12).value}<span>TP</span></button>
    <button class="btn ${a("fp")} btn-sm" data-vm-verdict="fp" title="модель помилилася">${b.x(12).value}<span>FP</span></button>
    <button class="btn ${a("fn")} btn-sm" data-vm-verdict="fn" title="модель пропустила (treat-as-positive)">${b.alert(12).value}<span>FN</span></button>
  `}o(nn,"renderTpFpButtons");function rn(e){const t=e.userVerdict,a=o(s=>t===s?"btn-primary":"btn-secondary","cls");return`
    <button class="btn ${a("support")} btn-sm" data-vm-verdict="support">support</button>
    <button class="btn ${a("oppose")} btn-sm" data-vm-verdict="oppose">oppose</button>
    <button class="btn ${a("unrelated")} btn-sm" data-vm-verdict="unrelated">unrelated</button>
  `}o(rn,"renderStanceButtons");function on(e){return e==="matched"||e==="support"?"badge-success":e==="oppose"?"badge-warning":""}o(on,"decisionBadge");async function je(e){const t=e.querySelector("[data-vm-counts]"),{total:a,labelled:s}=await _s();t.innerHTML=`
    <span class="badge">${a} <span class="text-muted">всього</span></span>
    <span class="badge badge-accent">${s} <span class="text-muted">мічено</span></span>
  `}o(je,"renderCounts");function ln(e,t,a){const s=new Blob([t],{type:a}),n=URL.createObjectURL(s),r=document.createElement("a");r.href=n,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}o(ln,"downloadFile");function j(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}o(j,"escapeHtml");let ht=!1;function cn(){if(ht)return;ht=!0;const e=document.createElement("style");e.textContent=`
    .vm-cal-filters {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-3);
    }
    @media (max-width: 700px) { .vm-cal-filters { grid-template-columns: 1fr 1fr; } }
    .vm-cal-filter {
      display: flex; flex-direction: column; gap: 4px;
      font-size: var(--fs-xs);
      color: var(--fg-muted);
      text-transform: uppercase;
      letter-spacing: var(--tracking-wide);
    }
    .vm-cal-filter select { width: 100%; }

    .vm-cal-entry {
      background: var(--bg-elevated);
      border: 1px solid var(--border-subtle);
      border-left: 3px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: var(--space-3) var(--space-4);
      margin-bottom: var(--space-3);
    }
    .vm-cal-entry.is-labelled { border-left-color: var(--accent); }
    .vm-cal-head {
      display: flex; align-items: center; gap: var(--space-2);
      flex-wrap: wrap;
    }
    .vm-cal-snippet {
      margin-top: 6px;
      font-size: var(--fs-sm);
      line-height: var(--lh-relaxed);
      color: var(--fg-primary);
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 6em;
      overflow: auto;
      padding: 4px 8px;
      background: var(--bg-base);
      border-radius: var(--radius-xs);
    }
    .vm-cal-snippet b { color: var(--fg-muted); }

    .vm-sweep-out {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      background: var(--bg-base);
      padding: var(--space-3);
      border-radius: var(--radius-xs);
      max-height: 400px; overflow: auto;
      white-space: pre;
    }

    .select-sm { height: 28px; padding: 0 8px; font-size: var(--fs-xs); }
  `,document.head.appendChild(e)}o(cn,"injectStyles$1");const We="meta",Ke="mediaFolderHandle";function ge(){return typeof window.showDirectoryPicker=="function"}o(ge,"isSupported");async function dn(){if(!ge())return null;try{const e=await window.showDirectoryPicker({id:"veles-media",mode:"readwrite",startIn:"documents"});return await(await ee()).put(We,e,Ke),e}catch(e){if(e.name==="AbortError")return null;throw e}}o(dn,"pickFolder");async function un(){const t=await(await ee()).get(We,Ke);if(!t)return null;try{const a=await t.queryPermission({mode:"readwrite"});if(a==="granted"||a==="prompt"&&await t.requestPermission({mode:"readwrite"})==="granted")return t}catch{}return null}o(un,"getSavedFolder");async function pn(){await(await ee()).delete(We,Ke)}o(pn,"forgetFolder");function mn(){bn();const e=k`
    <section class="page" id="page-settings" role="tabpanel">
      <header class="page-header">
        <div>
          <div class="page-eyebrow">${E.settings.eyebrow}</div>
          <h1 class="page-title">${E.settings.pageTitle}</h1>
        </div>
      </header>

      <div class="vm-settings-grid">
        <section class="panel" data-vm-section="account"></section>
        <section class="panel" data-vm-section="ai"></section>
        <section class="panel" data-vm-section="notifications"></section>
        <section class="panel" data-vm-section="data"></section>
      </div>
    </section>
  `;return Ut(e),e}o(mn,"buildSettingsPage");async function Ut(e){const t=q(),a=await t.settings.get();_(e.querySelector('[data-vm-section="account"]'),await vn(t)),_(e.querySelector('[data-vm-section="ai"]'),await hn(t,a,()=>Ut(e))),_(e.querySelector('[data-vm-section="notifications"]'),fn(t,a)),_(e.querySelector('[data-vm-section="data"]'),await gn())}o(Ut,"renderAll");async function vn(e,t){const a=await e.channels.list().catch(()=>[]),s=await Pt().catch(()=>null),n=s&&([s.firstName,s.lastName].filter(Boolean).join(" ")||s.username)||"—",r=k`
    <div>
      <div class="vm-section-head">
        <div>
          <div class="text-eyebrow">Акаунт Telegram</div>
          <h3>${n}</h3>
        </div>
        <span style="color: var(--accent);">${f(b.user(24).value)}</span>
      </div>

      <div class="vm-kv">
        <span>Телефон</span><span class="text-mono">${s?.phone??"—"}</span>
        <span>Username</span><span class="text-mono">${s?.username?"@"+s.username:"—"}</span>
        <span>Каналів моніторингу</span><span class="text-mono text-accent">${a.length}</span>
      </div>

      <div class="row gap-2" style="margin-top: 16px;">
        <button class="btn btn-secondary" data-vm-relogin>
          ${f(b.refresh(14).value)}
          <span>Перевибрати канали</span>
        </button>
        <button class="btn btn-danger" data-vm-logout>
          ${f(b.logout(14).value)}
          <span>Logout</span>
        </button>
      </div>
    </div>
  `;return r.querySelector("[data-vm-logout]")?.addEventListener("click",async()=>{if(await H({title:"Вийти з акаунту?",body:"Telegram-сесія, api_id/api_hash і список обраних каналів будуть видалені. Налаштування і історія залишаться. Доведеться пройти onboarding заново.",danger:!0,confirmLabel:"Так, вийти"}))try{await Na(),await e.channels.setMany([]),S.success("Вийшли з акаунту"),setTimeout(()=>location.reload(),500)}catch(l){S.error(l.message)}}),r.querySelector("[data-vm-relogin]")?.addEventListener("click",()=>{S.info("Re-вибір каналів — фіча Phase 10")}),r}o(vn,"renderAccount");async function hn(e,t,a){const s=await Nt(),n=k`
    <div>
      <div class="vm-section-head">
        <div>
          <div class="text-eyebrow">Режим ШІ</div>
          <h3>${t.aiMode==="qwen"?"Qwen 2.5 (experimental)":"Hybrid"}</h3>
        </div>
        <span style="color: var(--accent);">${f(b.brain(24).value)}</span>
      </div>

      <div class="vm-ai-options">
        <label class="vm-ai-option ${t.aiMode==="hybrid"?"selected":""}">
          <input type="radio" name="vm-ai" value="hybrid" ${t.aiMode==="hybrid"?"checked":""} />
          <div>
            <div class="vm-ai-title">Hybrid</div>
            <div class="vm-ai-sub">e5-small + mDeBERTa-NLI · ~400 МБ · CPU</div>
          </div>
        </label>
        <label class="vm-ai-option ${t.aiMode==="qwen"?"selected":""} ${s.available?"":"disabled"}">
          <input type="radio" name="vm-ai" value="qwen" ${t.aiMode==="qwen"?"checked":""} ${s.available?"":"disabled"} />
          <div>
            <div class="vm-ai-title">
              Qwen 2.5-1.5B
              <span class="badge badge-warning" style="margin-left: 6px;">experimental</span>
            </div>
            <div class="vm-ai-sub">~1 ГБ · потребує WebGPU</div>
          </div>
        </label>
      </div>

      <div class="vm-gpu-info">
        <div class="row gap-2">
          <span class="led ${s.available?"led-success":"led-danger"}" style="width: 10px; height: 10px;"></span>
          <span class="text-mono" style="font-size: var(--fs-xs); letter-spacing: var(--tracking-wide); text-transform: uppercase;">
            WebGPU: ${s.available?"доступний":"недоступний"}
          </span>
          ${s.adapter?f(`<span class="text-muted" style="font-size: var(--fs-xs);">· ${s.adapter.vendor} ${s.adapter.description??""}</span>`):""}
        </div>
        ${s.available?"":f(`<div class="text-muted" style="font-size: var(--fs-xs); margin-top: 4px;">${s.reason??""} · <a href="https://webgpureport.org/" target="_blank" rel="noreferrer">перевірити</a></div>`)}
      </div>

      ${t.aiMode==="qwen"&&s.available?f(`<div class="row gap-2" style="margin-top: 16px;">
            <button class="btn btn-secondary" data-vm-download-qwen>
              ${b.download(14).value}
              <span>Завантажити / переперевірити Qwen</span>
            </button>
          </div>`):""}
    </div>
  `;return n.querySelectorAll('input[name="vm-ai"]').forEach(r=>{r.addEventListener("change",async()=>{if(!r.checked)return;const i=r.value;if(i==="qwen"&&!s.available){S.warning("WebGPU недоступний — Qwen вибрати не можна"),r.checked=!1;return}await e.settings.update({aiMode:i}),ks(),S.success(`Активний режим: ${i==="qwen"?"Qwen":"Hybrid"}`),a()})}),n.querySelector("[data-vm-download-qwen]")?.addEventListener("click",async()=>{if(!await H({title:"Завантажити Qwen 2.5?",body:"Це одноразове завантаження ~1 ГБ у кеш браузера. Подальші запуски будуть миттєвими.",confirmLabel:"Завантажити"}))return;let i=null;try{const l=document.createElement("div");l.className="panel",l.style.marginTop="12px",n.appendChild(l),i=l;const d=o((u,c)=>{l.innerHTML=`
          <div class="text-eyebrow" style="margin-bottom: 8px;">Завантаження Qwen</div>
          <div class="text-secondary" style="font-size: var(--fs-sm); margin-bottom: 8px;">${c}</div>
          <div class="vm-progressbar"><div class="vm-progressbar-fill" style="width: ${u}%;"></div></div>
        `},"update");d(0,"Підготовка…"),await Ee(u=>{d(u.progress??0,u.file??u.status)}),d(100,"Готово"),S.success(`${vs} завантажено`)}catch(l){S.error(`Не вдалося: ${l.message}`),i?.remove()}}),n}o(hn,"renderAi");function fn(e,t){const a=typeof Notification<"u"?Notification.permission:"denied",s=a==="granted"?"success":a==="denied"?"danger":"warning",n=k`
    <div>
      <div class="vm-section-head">
        <div>
          <div class="text-eyebrow">Сповіщення</div>
          <h3>Push + Badge</h3>
        </div>
        <span style="color: var(--accent);">${f(b.bell(24).value)}</span>
      </div>

      <div class="col gap-3" style="margin-top: 12px;">
        <div class="vm-toggle-row">
          <div>
            <div>Системні нотифікації браузера</div>
            <div class="text-muted" style="font-size: var(--fs-xs);">
              Статус: <span class="text-${s}">${a}</span>
            </div>
          </div>
          <label class="vm-switch">
            <input type="checkbox" data-vm-browser ${t.notifications.browser?"checked":""} />
            <span class="vm-switch-track"><span class="vm-switch-thumb"></span></span>
          </label>
        </div>

        <div class="vm-toggle-row">
          <div>
            <div>Лічильник у favicon / title</div>
            <div class="text-muted" style="font-size: var(--fs-xs);">Кількість нових збігів</div>
          </div>
          <label class="vm-switch">
            <input type="checkbox" data-vm-favicon ${t.notifications.faviconBadge?"checked":""} />
            <span class="vm-switch-track"><span class="vm-switch-thumb"></span></span>
          </label>
        </div>

        ${a!=="granted"?f(`
          <button class="btn btn-secondary btn-sm" data-vm-request-permission style="align-self: flex-start;">
            <span>Запитати дозвіл браузера</span>
          </button>
        `):""}
      </div>
    </div>
  `;return n.querySelector("[data-vm-browser]")?.addEventListener("change",async r=>{const i=r.target.checked;await e.settings.update({notifications:{...t.notifications,browser:i}}),S.success(E.toast.settingsSaved)}),n.querySelector("[data-vm-favicon]")?.addEventListener("change",async r=>{const i=r.target.checked;await e.settings.update({notifications:{...t.notifications,faviconBadge:i}}),S.success(E.toast.settingsSaved)}),n.querySelector("[data-vm-request-permission]")?.addEventListener("click",async()=>{try{const r=await Notification.requestPermission();S.info(`Permission: ${r}`),setTimeout(()=>location.reload(),600)}catch(r){S.error(r.message)}}),n}o(fn,"renderNotifications");async function gn(){let e="—";try{if(navigator.storage?.estimate){const n=await navigator.storage.estimate(),r=(n.usage??0)/(1024*1024),i=(n.quota??0)/(1024*1024);e=`${r.toFixed(1)} МБ з ${i.toFixed(0)} МБ`}}catch{}const t=await un().catch(()=>null),a=t?t.name??"обрано":"не задано",s=k`
    <div>
      <div class="vm-section-head">
        <div>
          <div class="text-eyebrow">Дані</div>
          <h3>Зберігання та папки</h3>
        </div>
        <span style="color: var(--accent);">${f(b.folder(24).value)}</span>
      </div>

      <div class="vm-kv">
        <span>Зайнято в браузері</span><span class="text-mono">${e}</span>
        <span>Папка для медіа</span><span class="text-mono ${t?"text-accent":"text-muted"}">${a}</span>
        <span>File System API</span><span class="text-mono ${ge()?"text-success":"text-warning"}">${ge()?"доступний":"недоступний (буде fallback на завантаження)"}</span>
      </div>

      <div class="row gap-2" style="margin-top: 16px; flex-wrap: wrap;">
        ${ge()?f(`
          <button class="btn btn-secondary" data-vm-pick-folder>
            ${b.folder(14).value}
            <span>${t?"Змінити папку медіа":"Обрати папку медіа"}</span>
          </button>
          ${t?`<button class="btn btn-ghost" data-vm-forget-folder>${b.x(14).value}<span>Забути папку</span></button>`:""}
        `):""}
        <button class="btn btn-secondary" data-vm-clear-history>
          ${f(b.trash(14).value)}
          <span>Очистити історію знахідок</span>
        </button>
        <button class="btn btn-secondary" data-vm-clear-reports>
          ${f(b.trash(14).value)}
          <span>Очистити збережені звіти</span>
        </button>
        <button class="btn btn-danger" data-vm-wipe-all>
          ${f(b.alert(14).value)}
          <span>Видалити ВСЕ і пройти onboarding заново</span>
        </button>
      </div>
    </div>
  `;return s.querySelector("[data-vm-pick-folder]")?.addEventListener("click",async()=>{try{const n=await dn();n&&(S.success(`Обрано папку: ${n.name??"—"}`),await q().settings.update({media:{folderHandleSaved:!0}}))}catch(n){S.error(n.message)}}),s.querySelector("[data-vm-forget-folder]")?.addEventListener("click",async()=>{await pn(),await q().settings.update({media:{folderHandleSaved:!1}}),S.success("Папку забуто")}),s.querySelector("[data-vm-clear-history]")?.addEventListener("click",async()=>{if(await H({title:"Очистити історію?",body:"Видалити всі збережені знайдені публікації?",confirmLabel:"Так",danger:!0}))try{await q().history.clear(),S.success("Історію видалено")}catch(r){S.error(r.message)}}),s.querySelector("[data-vm-clear-reports]")?.addEventListener("click",async()=>{if(await H({title:"Очистити звіти?",body:"Видалити всі збережені звіти аналізу коментарів?",confirmLabel:"Так",danger:!0}))try{await q().reports.clear(),S.success("Звіти видалено")}catch(r){S.error(r.message)}}),s.querySelector("[data-vm-wipe-all]")?.addEventListener("click",async()=>{if(await H({title:"Видалити ВСІ дані?",body:"Vault, налаштування, історія, звіти, сесія Telegram — все буде стерто. Доведеться пройти onboarding з нуля.",confirmLabel:"Так, видалити",danger:!0}))try{await Tt(),S.success("Очищено"),setTimeout(()=>location.reload(),500)}catch(r){S.error(r.message)}}),s}o(gn,"renderData");let ft=!1;function bn(){if(ft)return;ft=!0;const e=document.createElement("style");e.textContent=`
    .vm-settings-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
    }
    @media (max-width: 900px) {
      .vm-settings-grid { grid-template-columns: 1fr; }
    }

    .vm-section-head {
      display: flex; align-items: flex-start; justify-content: space-between;
      gap: var(--space-3);
      margin-bottom: 16px;
    }
    .vm-section-head h3 { margin: 4px 0 0; font-size: var(--fs-lg); }

    .vm-kv {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 6px 16px;
      font-size: var(--fs-sm);
    }
    .vm-kv > span:nth-child(odd) { color: var(--fg-muted); }

    .vm-ai-options {
      display: flex; flex-direction: column; gap: 8px;
      margin-bottom: 12px;
    }
    .vm-ai-option {
      display: flex; align-items: center; gap: 12px;
      padding: 12px;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: all var(--t-fast);
    }
    .vm-ai-option:hover { background: var(--bg-elevated); }
    .vm-ai-option.selected {
      border-color: var(--accent);
      background: var(--accent-soft);
    }
    .vm-ai-option.disabled {
      opacity: 0.5; cursor: not-allowed;
    }
    .vm-ai-title { font-weight: 600; }
    .vm-ai-sub {
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      color: var(--fg-muted);
      letter-spacing: var(--tracking-wide);
    }
    .vm-ai-option input { margin: 0; }

    .vm-gpu-info {
      padding: 8px 12px;
      background: var(--bg-base);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
    }

    .vm-toggle-row {
      display: flex; align-items: center; justify-content: space-between;
      gap: 12px;
      padding: 8px 0;
    }

    .vm-switch {
      position: relative;
      width: 40px; height: 22px;
      flex-shrink: 0;
    }
    .vm-switch input { position: absolute; opacity: 0; pointer-events: none; }
    .vm-switch-track {
      position: absolute; inset: 0;
      background: var(--bg-elevated);
      border: 1px solid var(--border-base);
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: background var(--t-fast), border-color var(--t-fast);
    }
    .vm-switch-thumb {
      position: absolute;
      top: 2px; left: 2px;
      width: 16px; height: 16px;
      background: var(--fg-muted);
      border-radius: 50%;
      transition: left var(--t-fast), background var(--t-fast);
    }
    .vm-switch input:checked ~ .vm-switch-track {
      background: var(--accent-soft);
      border-color: var(--accent);
    }
    .vm-switch input:checked ~ .vm-switch-track .vm-switch-thumb {
      left: 20px;
      background: var(--accent);
    }
  `,document.head.appendChild(e)}o(bn,"injectStyles");function yn(e,t){if(!(typeof Notification>"u")&&Notification.permission==="granted"&&document.visibilityState!=="visible")try{const a=e.rawText.length>140?e.rawText.slice(0,137)+"…":e.rawText,s=new Notification(`Veles · ${e.channelTitle}`,{body:a,tag:`vm-post-${e.channelId}-${e.messageId}`,icon:"./favicon.svg",requireInteraction:!1,silent:!0});s.onclick=()=>{window.focus(),e.url&&e.url.startsWith("https://")&&window.open(e.url,"_blank","noreferrer"),s.close()}}catch(a){console.warn("[notif] failed:",a)}}o(yn,"notifyFoundPost");const jt="./favicon.svg",gt=document.title,G=64;let ze=null,Wt=0;async function wn(){if(ze)return ze;const e=new Image;return e.src=jt,await new Promise((t,a)=>{e.onload=()=>t(),e.onerror=()=>a(new Error("Не вдалося завантажити favicon"))}),ze=e,e}o(wn,"loadBaseImage");function bt(){let e=document.querySelector('link[rel="icon"]');return e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e}o(bt,"findOrCreateLink");async function Kt(e,t=!0){if(Wt=e,document.title=t&&e>0?`(${e>99?"99+":e}) ${gt}`:gt,!t||e===0){bt().href=jt;return}try{const a=await wn(),s=document.createElement("canvas");s.width=G,s.height=G;const n=s.getContext("2d");if(!n)return;n.drawImage(a,0,0,G,G);const r=20,i=G-r-2,l=G-r-2;n.beginPath(),n.arc(i,l,r,0,Math.PI*2),n.fillStyle="#F87171",n.fill(),n.strokeStyle="#0A1628",n.lineWidth=3,n.stroke(),n.fillStyle="#FFFFFF",n.textAlign="center",n.textBaseline="middle";const d=e>99?"99+":String(e);n.font=`bold ${d.length>2?16:22}px Inter, system-ui, sans-serif`,n.fillText(d,i,l+1),bt().href=s.toDataURL("image/png")}catch(a){console.warn("[favicon] update failed:",a)}}o(Kt,"setBadgeCount");function xn(e=!0){Kt(Wt+1,e)}o(xn,"incrementBadge");function yt(){Kt(0,!0)}o(yt,"resetBadge");let wt=!1;function Sn(){if(wt)return;wt=!0;const e=Vt();let t={browser:!0,faviconBadge:!0};const a=o(async()=>{const s=It();if(s)try{const n=await s.settings.get();t={browser:n.notifications.browser,faviconBadge:n.notifications.faviconBadge}}catch{}},"reload");a(),Mt(()=>void a()),e.on("post",s=>{t.browser&&yn(s),t.faviconBadge&&document.visibilityState!=="visible"&&xn(!0)}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&yt()}),yt()}o(Sn,"setupNotificationsBridge");class kn{static{o(this,"App")}root;state={page:"monitoring"};header;tabs;shellEl;mainEl;constructor(t){this.root=t}async start(){const t=Xt();_(this.root,t.el),await new Promise(a=>setTimeout(a,650)),await t.hide();try{await ba()==="empty"?this.renderWelcome():this.renderLockScreen()}catch(a){S.error(`Помилка ініціалізації: ${a.message}`),this.renderWelcome()}}renderWelcome(){const t=ea();t.onComplete(()=>this.renderSetPassword()),_(this.root,t.el)}renderSetPassword(){const t=La();t.onBack(()=>this.renderWelcome()),t.onCreated(a=>{Ze(a),this.renderOnboardingWizard(a)}),_(this.root,t.el)}renderOnboardingWizard(t){const a=es();a.onFinished(()=>{this.renderMain(t)}),_(this.root,a.el)}renderLockScreen(){const t=Ta();t.onUnlocked(async a=>{Ze(a);const s=await a.secure.getApiCreds(),n=await a.secure.getSession();s&&n?this.renderMain(a):(S.warning("Onboarding не був завершений — продовжуємо налаштування"),this.renderOnboardingWizard(a))}),t.onWiped(()=>this.renderWelcome()),_(this.root,t.el)}renderMain(t){this.header=Yt(),this.tabs=Zt(),this.mainEl=k`<main class="app-main"></main>`,this.shellEl=k`<div style="display:flex; flex-direction:column; height:100%;"></div>`,this.shellEl.appendChild(this.header.el),this.shellEl.appendChild(this.tabs.el),this.shellEl.appendChild(this.mainEl),_(this.root,this.shellEl),this.tabs.onChange(a=>this.goTo(a)),this.header.setStatus("online"),Sn(),t.settings.get().then(a=>{Ht(a.labelling?.enabled===!0)}).catch(()=>{}),Pt().then(a=>{if(a){const s=[a.firstName,a.lastName].filter(Boolean).join(" ")||(a.username??"Operator");this.header?.setUser({name:s,phone:a.phone})}}).catch(()=>{}),this.goTo(this.state.page),S.success(`${E.app.name} ${E.app.version} готовий`)}goTo(t){if(!this.mainEl||!this.tabs)return;this.state.page=t,this.tabs.setActive(t);let a;switch(t){case"monitoring":a=Os();break;case"comments":a=Ys();break;case"calibration":a=tn();break;case"settings":a=mn();break}_(this.mainEl,a)}}function $n(e){const t=new kn(e);return t.start(),t}o($n,"startApp");window.addEventListener("error",e=>{console.error("[VM] window error:",e.error??e.message),S.error(`Помилка: ${e.message}`,{duration:6e3})});window.addEventListener("unhandledrejection",e=>{console.error("[VM] unhandled rejection:",e.reason),S.error(`Помилка: ${String(e.reason?.message??e.reason)}`,{duration:6e3})});const Gt=document.getElementById("app");if(!Gt)throw new Error("#app root not found in index.html");const En=document.getElementById("prebootstrap");En?.remove();$n(Gt);
//# sourceMappingURL=index-Bajfh3Qo.js.map
