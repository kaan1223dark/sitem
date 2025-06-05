(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_951f5e1b._.js", {

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

//# sourceMappingURL=src_951f5e1b._.js.map