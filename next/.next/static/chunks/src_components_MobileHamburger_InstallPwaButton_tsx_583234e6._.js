(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_MobileHamburger_InstallPwaButton_tsx_583234e6._.js", {

"[project]/src/components/MobileHamburger/InstallPwaButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstallPwaButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function InstallPwaButton({ dictionary }) {
    _s();
    const [deferredPrompt, setDeferredPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstallPwaButton.useEffect": ()=>{
            window.addEventListener('beforeinstallprompt', {
                "InstallPwaButton.useEffect": (e)=>{
                    e.preventDefault();
                    setDeferredPrompt(e);
                }
            }["InstallPwaButton.useEffect"]);
            return ({
                "InstallPwaButton.useEffect": ()=>{
                    window.removeEventListener('beforeinstallprompt', {
                        "InstallPwaButton.useEffect": (e)=>{
                            e.preventDefault();
                            setDeferredPrompt(e);
                        }
                    }["InstallPwaButton.useEffect"]);
                }
            })["InstallPwaButton.useEffect"];
        }
    }["InstallPwaButton.useEffect"], []);
    const installPwa = async ()=>{
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };
    const isPwa = ()=>window.matchMedia('(display-mode: standalone)')?.matches;
    const supportsPwa = ()=>typeof window.matchMedia('(display-mode: standalone)') !== 'undefined';
    const useragent = navigator.userAgent;
    const isAndroid = useragent.indexOf('Android') > -1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `btn btn-primary w-full ${isPwa() || !supportsPwa() || !isAndroid ? 'hidden' : ''}`,
        onClick: installPwa,
        children: dictionary.general.install_pwa
    }, void 0, false, {
        fileName: "[project]/src/components/MobileHamburger/InstallPwaButton.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(InstallPwaButton, "LpexKJFLaK0hNbcurEP7XCxulAs=");
_c = InstallPwaButton;
var _c;
__turbopack_context__.k.register(_c, "InstallPwaButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MobileHamburger/InstallPwaButton.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MobileHamburger/InstallPwaButton.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_MobileHamburger_InstallPwaButton_tsx_583234e6._.js.map