(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_e799097c._.js", {

"[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LanguageSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LanguageSwitcher() {
    _s();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const redirectedPathName = (locale)=>{
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };
    const currentLocale = pathName?.split('/')[1];
    const switchLocale = (locale)=>{
        router.push(redirectedPathName(locale));
        document.cookie = `lang=${locale}; path=/; max-age=31536000`;
        document.activeElement?.blur();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dropdown dropdown-end",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "btn btn-circle btn-ghost m-1 bg-primary-600 max-lg:bg-secondary-400",
                    role: "button",
                    tabIndex: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsGlobe"], {
                        color: "white",
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "menu dropdown-content z-[1] w-52 gap-2 rounded-box bg-base-100 p-2 font-bold text-base-content shadow",
                    tabIndex: 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: currentLocale === 'en' ? 'rounded-lg bg-base-300' : '',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>switchLocale('en'),
                                children: "English"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: currentLocale === 'tr' ? 'rounded-lg bg-base-300' : '',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>switchLocale('tr'),
                                children: "Türkçe"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSwitcher/LanguageSwitcher.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(LanguageSwitcher, "1actL8tojp3oiOmh8ACmi5SPb2E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header/HideableLinks/HideableLink.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HideableLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function HideableLink({ sublink, dictionary, lang }) {
    // TODO: Improve
    const hideAfterClick = (e)=>{
        const group = e.currentTarget.parentElement;
        if (group) {
            group.style.display = 'none';
            setTimeout(()=>{
                group.style.display = 'flex';
            }, 50);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: `${sublink.href === '/' ? 'disabled cursor-not-allowed opacity-50' : ''} truncate rounded-lg p-2 font-bold hover:bg-gray-200`,
        href: sublink.href.startsWith('/') ? `/${lang}${sublink.href}` : sublink.href,
        onClick: hideAfterClick,
        children: dictionary.navigation[sublink.translation]
    }, sublink.translation, false, {
        fileName: "[project]/src/components/Header/HideableLinks/HideableLink.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = HideableLink;
var _c;
__turbopack_context__.k.register(_c, "HideableLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header/ScrollListener/ScrollListener.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScrollListener)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollListener() {
    _s();
    const handleScroll = ()=>{
        const position = window.scrollY;
        const textElements = document.getElementsByClassName('custom-scroll-text');
        const navElement = document.getElementsByClassName('custom-scroll-nav');
        const navLogoElement = document.getElementsByClassName('custom-scroll-nav-image');
        if (position > 100) {
            for(let i = 0; i < textElements.length; i++){
                if (textElements[i].classList.contains('text-lg')) {
                    textElements[i].classList.replace('text-lg', 'text-base');
                }
            }
            navElement[0].classList.replace('h-24', 'h-16');
            navLogoElement[0].classList.replace('w-36', 'w-24');
        } else {
            for(let i = 0; i < textElements.length; i++){
                if (textElements[i].classList.contains('text-base')) {
                    textElements[i].classList.replace('text-base', 'text-lg');
                }
            }
            navElement[0].classList.replace('h-16', 'h-24');
            navLogoElement[0].classList.replace('w-24', 'w-36');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollListener.useEffect": ()=>{
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "ScrollListener.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["ScrollListener.useEffect"];
        }
    }["ScrollListener.useEffect"], []);
    return null;
}
_s(ScrollListener, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScrollListener;
var _c;
__turbopack_context__.k.register(_c, "ScrollListener");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BlockRendererClient/BlockRendererClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlockRendererClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strapi$2f$blocks$2d$react$2d$renderer$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@strapi/blocks-react-renderer/dist/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strapi$2f$blocks$2d$react$2d$renderer$2f$dist$2f$BlocksRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const isEmptyBlock = (block)=>block.type === 'paragraph' && block.children?.length === 1 && block.children?.[0]?.type === 'text' && block.children?.[0]?.text === '';
/**
 * Sometimes editors make mistakes and leave empty rows at the end of the content.
 * This function trims those empty rows for a better UX.
 */ const trimEmptyBlocks = (content)=>{
    if (!Array.isArray(content)) return content;
    let lastIndex = content.length - 1;
    while(lastIndex >= 0 && isEmptyBlock(content[lastIndex])){
        lastIndex--;
    }
    return content.slice(0, lastIndex + 1);
};
function BlockRendererClient({ content }) {
    if (!content) return null;
    const trimmedContent = trimEmptyBlocks(content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strapi$2f$blocks$2d$react$2d$renderer$2f$dist$2f$BlocksRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlocksRenderer"], {
        blocks: {
            heading: ({ level, children })=>{
                const uuid = (children?.[0]?.props.text + '-' + level).replace(/[^a-zA-Z0-9]/g, '-');
                switch(level){
                    case 1:
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            id: uuid,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                            lineNumber: 56,
                            columnNumber: 22
                        }, void 0);
                    case 2:
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: uuid,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                            lineNumber: 58,
                            columnNumber: 22
                        }, void 0);
                    case 3:
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            id: uuid,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                            lineNumber: 60,
                            columnNumber: 22
                        }, void 0);
                    case 4:
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            id: uuid,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                            lineNumber: 62,
                            columnNumber: 22
                        }, void 0);
                    case 5:
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            id: uuid,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                            lineNumber: 64,
                            columnNumber: 22
                        }, void 0);
                    case 6:
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            id: uuid,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                            lineNumber: 66,
                            columnNumber: 22
                        }, void 0);
                }
            },
            link: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: props.url,
                    children: props.children
                }, void 0, false, {
                    fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                    lineNumber: 69,
                    columnNumber: 26
                }, void 0),
            image: ({ image })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    alt: image.alternativeText || 'Embedded image',
                    className: "rounded-lg",
                    height: image.height,
                    src: image.url,
                    width: image.width
                }, void 0, false, {
                    fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, void 0)
        },
        content: trimmedContent
    }, void 0, false, {
        fileName: "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = BlockRendererClient;
var _c;
__turbopack_context__.k.register(_c, "BlockRendererClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/NotificationBar/NotificationBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotificationBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockRendererClient/BlockRendererClient.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NotificationBar({ notification, lang }) {
    _s();
    const [showNotification, setShowNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBar.useEffect": ()=>{
            if (!notification?.data?.attributes?.notification) return;
            const isEmpty = notification?.data?.attributes.notification?.map({
                "NotificationBar.useEffect": (n)=>n.children.map({
                        "NotificationBar.useEffect": (c)=>c.type === 'text' && c.text.trim()
                    }["NotificationBar.useEffect"]).join('')
            }["NotificationBar.useEffect"])?.join('')?.trim() === '';
            const showUntil = notification?.data?.attributes.showUntil ?? null;
            const id = `notification-${lang}`;
            const prevUpdatedAt = new Date(localStorage.getItem(id) ?? 0);
            const updatedAt = new Date(notification?.data?.attributes.updatedAt);
            const isShowed = prevUpdatedAt.toISOString() === updatedAt.toISOString();
            const isExpired = showUntil ? new Date(showUntil) < new Date() : false;
            if (!isShowed && !isExpired && !isEmpty) {
                setShowNotification(true);
            }
        }
    }["NotificationBar.useEffect"], [
        lang,
        notification
    ]);
    const closeNotification = ()=>{
        setShowNotification(false);
        const updatedAt = notification?.data?.attributes.updatedAt;
        const id = `notification-${lang}`;
        localStorage.setItem(id, new Date(updatedAt).toISOString());
    };
    if (!showNotification || !notification?.data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notification-area fixed bottom-0 left-0 z-40 flex min-h-12 w-full flex-col items-center justify-center bg-accent-400 px-12 py-4 text-center text-white max-md:min-h-10 max-md:text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: notification.data.attributes.notification
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationBar/NotificationBar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 flex h-full items-center justify-center pr-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-circle btn-ghost btn-xs text-white",
                    onClick: closeNotification,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdClose"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotificationBar/NotificationBar.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/NotificationBar/NotificationBar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationBar/NotificationBar.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotificationBar/NotificationBar.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(NotificationBar, "dtWb82bT/HR86rWZO5vsMFvqCM0=");
_c = NotificationBar;
var _c;
__turbopack_context__.k.register(_c, "NotificationBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/providers/EventSelectorProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SelectedViewContext": (()=>SelectedViewContext),
    "default": (()=>EventSelectorProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const initialState = {
    selectedView: 'calendar',
    activeCalendarMonth: new Date(),
    desktopCalendarFullSize: false,
    // eslint-disable-next-line no-unused-vars
    setView: (_)=>{},
    // eslint-disable-next-line no-unused-vars
    setActiveCalendarMonth: (_)=>{},
    // eslint-disable-next-line no-unused-vars
    setDesktopCalendarFullSize: (_)=>{},
    showPastEvents: false,
    toggleShowPastEvents: ()=>{}
};
const SelectedViewContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(initialState);
function EventSelectorProvider({ children }) {
    _s();
    const [selectedView, setSelectedView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('calendar');
    const [showPastEvents, setShowPastEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCalendarMonth, setActiveCalendarMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [desktopCalendarFullSize, setDesktopCalendarFullSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const setView = (view)=>{
        setSelectedView(view);
    };
    const toggleShowPastEvents = ()=>{
        setShowPastEvents(!showPastEvents);
    };
    const value = {
        selectedView,
        setView,
        showPastEvents,
        toggleShowPastEvents,
        activeCalendarMonth,
        setActiveCalendarMonth,
        desktopCalendarFullSize,
        setDesktopCalendarFullSize
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedViewContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/EventSelectorProvider.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(EventSelectorProvider, "2C7nL07obCAlgdmp3W7fKPmDFGk=");
_c = EventSelectorProvider;
var _c;
__turbopack_context__.k.register(_c, "EventSelectorProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e799097c._.js.map