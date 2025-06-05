(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__323f3817._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/i18n-config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "i18n": (()=>i18n)
});
const i18n = {
    defaultLocale: 'tr',
    locales: [
        'en',
        'tr'
    ]
};
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$negotiator$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/negotiator/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n-config.ts [middleware-edge] (ecmascript)");
;
;
;
;
function getLocale(request) {
    // Use cookie if it exists and is valid
    const langCookie = request.cookies.get('lang');
    if (langCookie && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales.includes(langCookie.value)) {
        return langCookie.value;
    }
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders = {};
    request.headers.forEach((value, key)=>negotiatorHeaders[key] = value);
    // Validate negotiator headers
    if (!negotiatorHeaders?.['accept-language']) {
        return 'en';
    }
    // Use negotiator and intl-localematcher to get best locale
    let languages = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$negotiator$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]({
        headers: negotiatorHeaders
    }).languages().filter((lang)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales.includes(lang));
    // @ts-ignore locales are readonly
    const locales = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["match"])(languages, locales, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].defaultLocale);
}
function middleware(request) {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith('/api')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Public paths that should not be redirected
    if ([
        '/logo.png',
        '/telegram.svg',
        '/manifest.webmanifest',
        '/sitemap.xml',
        '/robots.txt',
        '/favicon.ico',
        '/apple-icon.png',
        '/icon1.png',
        '/icon2.png',
        '/images/news.jpg',
        '/images/collaboration.jpg',
        '/images/contact.jpg',
        '/images/events.jpg',
        '/images/new_students.jpg',
        '/images/organization.jpg',
        '/images/event_placeholder.png',
        '/banner.png',
        '/banner_mobile.png',
        '/partners_pattern.svg',
        '/robo_404.svg',
        '/robo.500.svg',
        '/binary.svg',
        '/ccchaos.svg',
        '/blob.svg',
        '/luuppi_banner_text_fi.svg',
        '/luuppi_banner_text_en.svg',
        '/kolmiot.svg',
        '/luuppi-cards.svg',
        '/luuppi.svg',
        '/locale-icons/us.svg',
        '/locale-icons/fi.svg'
    ].includes(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales.every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        const newUrl = new URL(request.url);
        newUrl.pathname = `/${locale}${pathname}`;
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(newUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        '/((?!_next).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__323f3817._.js.map