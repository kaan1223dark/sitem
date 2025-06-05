module.exports = {

"[project]/src/dictionaries.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDictionary": (()=>getDictionary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
const dictionaries = {
    en: ()=>__turbopack_context__.r("[project]/src/locales/en.json (json, async loader)")(__turbopack_context__.i).then((module)=>module.default),
    fi: ()=>__turbopack_context__.r("[project]/src/locales/fi.json (json, async loader)")(__turbopack_context__.i).then((module)=>module.default)
};
const getDictionary = async (locale)=>{
    const supportedLocales = [
        'fi',
        'en'
    ];
    if (!supportedLocales.includes(locale)) {
        locale = 'fi';
    }
    return dictionaries[locale]();
};
}}),
"[project]/src/libs/utils/logger.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logger": (()=>logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
/* eslint-disable no-console */ const LOGS_ENABLED = process.env.LOGS_ENABLED ?? true;
const getFormattedDate = ()=>{
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
const formatMessage = (message)=>message.map((m)=>{
        if (m instanceof Error) {
            return m.stack;
        }
        if (typeof m === 'object') {
            return JSON.stringify(m, null, 2);
        }
        return m;
    }).join(', ');
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};
const getPath = ()=>{
    const path = __filename;
    const pathSplit = path.split('/');
    return pathSplit.slice(-2).join('/').replace('.js', '.ts');
};
const logger = {
    info: (...message)=>{
        if (!LOGS_ENABLED) return;
        console.log(` ${colors.bold}${colors.green}✓${colors.reset} ${getFormattedDate()} ${colors.green}INFO ${colors.yellow}[${getPath()}]${colors.green} ${formatMessage(message)}`);
    },
    error: (...message)=>{
        if (!LOGS_ENABLED) return;
        console.log(` ${colors.bold}${colors.red}✖${colors.reset} ${getFormattedDate()} ${colors.red}ERROR ${colors.yellow}[${getPath()}]${colors.red} ${formatMessage(message)}`);
    }
};
}}),
"[project]/src/libs/strapi/get-strapi-url.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStrapiUrl": (()=>getStrapiUrl)
});
const getStrapiUrl = (path = '')=>`${"TURBOPACK compile-time value", "http://localhost:1337"}${path}`;
}}),
"[project]/src/libs/strapi/get-strapi-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable no-unused-vars */ __turbopack_context__.s({
    "getStrapiData": (()=>getStrapiData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-url.ts [app-rsc] (ecmascript)");
;
;
;
async function getStrapiData(lang, url, revalidateTags, ignoreError) {
    try {
        let res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(`${url}${url.includes('?') ? '&' : '?'}locale=${lang}&publicationState=${("TURBOPACK compile-time value", "http://localhost:3000")?.includes('beta.luuppi.fi') || ("TURBOPACK compile-time value", "http://localhost:3000")?.includes('localhost') ? 'preview' : 'live'}`), {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_KEY}`
            },
            next: {
                tags: revalidateTags
            }
        });
        /**
     * Strapi does not have any feature to fallback language? (or does it?)
     * This is a workaround to fetch data from default language if the current
     * language does not have any data.
     * TODO: Remove this when Strapi has an automatic fallback
     */ if (!res.ok && res.status === 404 && !ignoreError) {
            res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(`${url}${url.includes('?') ? '&' : '?'}locale=fi`), {
                headers: {
                    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`
                },
                next: {
                    tags: revalidateTags
                }
            });
        }
        const data = await res.json();
        if (!data?.data) {
            if (ignoreError) return null;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(`Failed to fetch data from ${url}`, data);
            throw new Error(`Failed to fetch data from ${url}`);
        }
        return data;
    } catch (error) {
        if (ignoreError) return null;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error fetching data from Strapi', error);
        throw new Error('Failed to fetch data from Strapi');
    }
}
}}),
"[next]/internal/font/google/poppins_6efabc9a.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "poppins_6efabc9a-module__CYSySW__className",
});
}}),
"[next]/internal/font/google/poppins_6efabc9a.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_6efabc9a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_6efabc9a.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_6efabc9a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_6efabc9a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_6efabc9a$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/i18n-config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "i18n": (()=>i18n)
});
const i18n = {
    defaultLocale: 'fi',
    locales: [
        'en',
        'fi'
    ]
};
}}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "experimental_ppr": (()=>experimental_ppr),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams),
    "viewport": (()=>viewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$plausible$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-plausible/dist/index.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_6efabc9a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_6efabc9a.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n-config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const experimental_ppr = true;
async function RootLayout(props) {
    const params = await props.params;
    const { children } = props;
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(params.lang);
    const notification = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])(params.lang, '/api/notification', [
        'notification'
    ], true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        "data-theme": "light",
        lang: params.lang,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$plausible$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    customDomain: ("TURBOPACK compile-time value", "http://localhost:3000"),
                    domain: ("TURBOPACK compile-time value", "http://localhost:3000")?.replace('https://', ''),
                    enabled: ("TURBOPACK compile-time value", "http://localhost:3000") === 'https://luuppi.fi',
                    scriptProps: {
                        src: `${("TURBOPACK compile-time value", "http://localhost:3000")}/js/nuuhkija.js`,
                        // https://github.com/4lejandrito/next-plausible/issues/113
                        // @ts-expect-error missing types
                        'data-api': `${("TURBOPACK compile-time value", "http://localhost:3000")}/api/event`
                    },
                    selfHosted: true
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/layout.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/layout.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_6efabc9a$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/layout.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/layout.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i18n"].locales.map((locale)=>({
            lang: locale
        }));
}
async function generateMetadata(props) {
    const params = await props.params;
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(params.lang);
    return {
        title: dictionary.seo.title,
        description: dictionary.seo.description,
        metadataBase: new URL(("TURBOPACK compile-time value", "http://localhost:3000")),
        alternates: {
            canonical: `/${params.lang}`,
            languages: {
                en: '/en',
                fi: '/fi'
            }
        }
    };
}
const viewport = {
    themeColor: '#787eba'
};
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/client/script.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js <module evaluation>"));
}}),
"[project]/node_modules/next/dist/client/script.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js"));
}}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/node_modules/next/script.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/next-plausible/dist/index.esm.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PlausibleProvider),
    "usePlausible": (()=>usePlausible),
    "withPlausibleProxy": (()=>withPlausibleProxy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
;
;
function usePlausible() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(eventName, ...rest) {
        var _a, _b;
        return (_b = (_a = window).plausible) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, rest[0]);
    }, []);
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function getCombinations(elements) {
    const combinations = [];
    for(let i = 0; i < elements.length; i++){
        combinations.push([
            elements[i]
        ]);
        if (i < elements.length - 1) {
            getCombinations(elements.slice(i + 1)).forEach((combination)=>{
                combinations.push([
                    elements[i],
                    ...combination
                ]);
            });
        }
    }
    return combinations;
}
const allModifiers = [
    'exclusions',
    'local',
    'manual',
    'outbound-links',
    'file-downloads',
    'tagged-events',
    'pageview-props',
    'revenue',
    'hash'
];
const getScriptPath = (options, ...modifiers)=>{
    var _a, _b;
    let basePath = (_a = options.basePath) !== null && _a !== void 0 ? _a : '';
    if (options.subdirectory) {
        basePath += `/${options.subdirectory}`;
    }
    return `${basePath}/js/${[
        (_b = options.scriptName) !== null && _b !== void 0 ? _b : 'script',
        ...modifiers.sort().filter((modifier)=>modifier !== null)
    ].join('.')}.js`;
};
const plausibleDomain = 'https://plausible.io';
const getRemoteScriptName = (selfHosted)=>selfHosted ? 'plausible' : 'script';
const getDomain = (options)=>{
    var _a;
    return (_a = options.customDomain) !== null && _a !== void 0 ? _a : plausibleDomain;
};
const getApiEndpoint = (options)=>{
    var _a, _b;
    return `${(_a = options.basePath) !== null && _a !== void 0 ? _a : ''}/${(_b = options.subdirectory) !== null && _b !== void 0 ? _b : 'proxy'}/api/event${options.trailingSlash ? '/' : ''}`;
};
function withPlausibleProxy(options = {}) {
    return (nextConfig)=>{
        const nextPlausiblePublicProxyOptions = Object.assign(Object.assign({}, options), {
            trailingSlash: !!nextConfig.trailingSlash,
            basePath: nextConfig.basePath
        });
        const nextPlausibleEnv = {
            next_plausible_proxy: 'true',
            next_plausible_trailingSlash: nextPlausiblePublicProxyOptions.trailingSlash ? 'true' : undefined,
            next_plausible_basePath: nextPlausiblePublicProxyOptions.basePath,
            next_plausible_customDomain: nextPlausiblePublicProxyOptions.customDomain,
            next_plausible_scriptName: nextPlausiblePublicProxyOptions.scriptName,
            next_plausible_subdirectory: nextPlausiblePublicProxyOptions.subdirectory
        };
        return Object.assign(Object.assign({}, nextConfig), {
            env: Object.assign(Object.assign({}, nextConfig.env), Object.fromEntries(Object.entries(nextPlausibleEnv).filter(([_, value])=>value !== undefined))),
            rewrites: ()=>__awaiter(this, void 0, void 0, function*() {
                    var _a;
                    const domain = getDomain(options);
                    const getRemoteScript = (...modifiers)=>{
                        var _a;
                        return ((_a = process.env.NEXT_PLAUSIBLE_TEST_DOMAIN) !== null && _a !== void 0 ? _a : domain) + getScriptPath({
                            scriptName: getRemoteScriptName(domain !== plausibleDomain)
                        }, ...modifiers);
                    };
                    const plausibleRewrites = [
                        {
                            source: getScriptPath(options),
                            destination: getRemoteScript()
                        },
                        ...getCombinations(allModifiers).map((modifiers)=>({
                                source: getScriptPath(options, ...modifiers),
                                destination: getRemoteScript(...modifiers)
                            })),
                        {
                            source: getApiEndpoint(Object.assign(Object.assign({}, nextPlausiblePublicProxyOptions), {
                                basePath: ''
                            })),
                            destination: `${domain}/api/event`
                        }
                    ];
                    if (process.env.NEXT_PLAUSIBLE_DEBUG) {
                        console.log('plausibleRewrites = ', plausibleRewrites);
                    }
                    const rewrites = yield (_a = nextConfig.rewrites) === null || _a === void 0 ? void 0 : _a.call(nextConfig);
                    if (!rewrites) {
                        return plausibleRewrites;
                    } else if (Array.isArray(rewrites)) {
                        return rewrites.concat(plausibleRewrites);
                    } else if (rewrites.afterFiles) {
                        rewrites.afterFiles = rewrites.afterFiles.concat(plausibleRewrites);
                        return rewrites;
                    } else {
                        rewrites.afterFiles = plausibleRewrites;
                        return rewrites;
                    }
                })
        });
    };
}
function PlausibleProvider(props) {
    var _a;
    const { enabled = ("TURBOPACK compile-time value", "development") === 'production' && (!process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') } = props;
    const proxyOptions = process.env.next_plausible_proxy ? {
        trailingSlash: process.env.next_plausible_trailingSlash === 'true',
        basePath: process.env.next_plausible_basePath,
        customDomain: process.env.next_plausible_customDomain,
        scriptName: process.env.next_plausible_scriptName,
        subdirectory: process.env.next_plausible_subdirectory
    } : undefined;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], Object.assign({
        async: true,
        defer: true,
        "data-api": proxyOptions ? getApiEndpoint(proxyOptions) : undefined,
        "data-domain": props.domain,
        "data-exclude": props.exclude,
        src: (proxyOptions ? '' : getDomain(props)) + getScriptPath(Object.assign(Object.assign({}, proxyOptions), {
            scriptName: proxyOptions ? proxyOptions.scriptName : getRemoteScriptName(props.selfHosted)
        }), props.trackLocalhost ? 'local' : null, props.manualPageviews ? 'manual' : null, props.pageviewProps ? 'pageview-props' : null, props.trackOutboundLinks ? 'outbound-links' : null, props.exclude ? 'exclusions' : null, props.revenue ? 'revenue' : null, props.trackFileDownloads ? 'file-downloads' : null, props.taggedEvents ? 'tagged-events' : null, props.hash ? 'hash' : null),
        integrity: props.integrity,
        crossOrigin: props.integrity ? 'anonymous' : undefined
    }, typeof props.pageviewProps === 'object' ? Object.fromEntries(Object.entries(props.pageviewProps).map(([k, v])=>[
            `event-${k}`,
            v
        ])) : undefined, props.scriptProps)), enabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        id: "next-plausible-init",
        dangerouslySetInnerHTML: {
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
        },
        nonce: (_a = props.scriptProps) === null || _a === void 0 ? void 0 : _a.nonce
    }), props.children);
}
;
 //# sourceMappingURL=index.esm.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__daa52acc._.js.map