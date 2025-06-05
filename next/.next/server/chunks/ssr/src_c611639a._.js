module.exports = {

"[project]/src/libs/utils/first-letter-uppercase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Converts first letter of a string to uppercase. Useful for
 * finnish month names.
 * @param str string to be converted
 * @returns string with first letter in uppercase
 */ __turbopack_context__.s({
    "firstLetterToUpperCase": (()=>firstLetterToUpperCase)
});
const firstLetterToUpperCase = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
}}),
"[project]/src/libs/utils/format-date-range.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDateRangeLong": (()=>formatDateRangeLong),
    "formatDateRangeShort": (()=>formatDateRangeShort)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/constants/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/constants/time-constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/first-letter-uppercase.ts [app-ssr] (ecmascript)");
;
;
const formatDateRangeLong = (start, end, lang)=>{
    const startUTC = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
    /* eslint-disable */ // ... diğer importlar ve kodlar
    console.log('desteklenen dilleri yazdir' + lang);
    // ... diğer kodlar
    /* eslint-enable */ const endUTC = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
    const isMultipleDays = startUTC.toDateString() !== endUTC.toDateString();
    if (!isMultipleDays) {
        if (start.toISOString() === end.toISOString()) {
            return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(new Intl.DateTimeFormat(lang, {
                hour: 'numeric',
                minute: 'numeric',
                day: 'numeric',
                month: 'short',
                weekday: 'long',
                timeZone: 'Europe/Helsinki'
            }).format(start))}`;
        }
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(start.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longDateFormat"]))} - ${start.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortTimeFormat"])}-${end.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortTimeFormat"])}`;
    }
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(start.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortDateFormat"]))} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(end.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortDateFormat"]))}`;
};
const formatDateRangeShort = (start, end, lang)=>{
    const startUTC = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
    const endUTC = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
    if (start.toISOString() === end.toISOString()) {
        return `${new Intl.DateTimeFormat(lang, {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/Helsinki'
        }).format(start)}`;
    }
    if (startUTC.toDateString() === endUTC.toDateString()) {
        return `${new Intl.DateTimeFormat(lang, {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/Helsinki'
        }).format(start)} - ${new Intl.DateTimeFormat(lang, {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/Helsinki'
        }).format(end)}`;
    } else {
        return `${new Intl.DateTimeFormat(lang, {
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/Helsinki'
        }).format(start)} - ${new Intl.DateTimeFormat(lang, {
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/Helsinki'
        }).format(end)}`;
    }
};
}}),
"[project]/src/components/EventsList/EventsList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventsList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/constants/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/constants/time-constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/first-letter-uppercase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$format$2d$date$2d$range$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/format-date-range.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
function EventsList({ events, showPastEvents, lang }) {
    const groupEventsByDate = (events)=>{
        const groupedEvents = events.reduce((acc, event)=>{
            if (!event.start) return acc;
            const dateStr = event.start.toDateString();
            if (!acc[dateStr]) {
                acc[dateStr] = {
                    date: event.start,
                    events: []
                };
            }
            acc[dateStr].events.push(event);
            return acc;
        }, {});
        return groupedEvents;
    };
    const getEvents = (showAll)=>{
        const sortedEvents = events.filter((e)=>e.end && e.start).sort((a, b)=>a.start.getTime() - b.start.getTime());
        if (showAll) {
            return groupEventsByDate(sortedEvents);
        }
        const filtered = sortedEvents.filter((event)=>event.end > new Date());
        return groupEventsByDate(filtered);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-12",
        children: Object.values(getEvents(showPastEvents)).map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(group.date.toLocaleDateString(lang, showPastEvents ? {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longDateFormat"],
                            year: 'numeric'
                        } : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longDateFormat"]))
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventsList/EventsList.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: group.events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "flex gap-4 rounded-lg bg-background-50 transition-all delay-300 ease-in-out",
                                href: `/${lang}/events/${event.id}`,
                                id: event.start.toDateString() + event.title,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 shrink-0 rounded-l-lg bg-secondary-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold max-md:text-base",
                                                        children: event.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this),
                                                    event.hasTickets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoTicketSharp"], {
                                                        className: "inline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$format$2d$date$2d$range$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateRangeLong"])(new Date(event.start), new Date(event.end), lang)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "line-clamp-3 max-w-xl pr-4 text-sm text-gray-500 max-md:text-xs max-sm:break-all",
                                                children: event.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, event.start.toISOString() + event.end.toISOString() + event.title, true, {
                                fileName: "[project]/src/components/EventsList/EventsList.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventsList/EventsList.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, group.date.toDateString(), true, {
                fileName: "[project]/src/components/EventsList/EventsList.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/EventsList/EventsList.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/EventsList/EventsList.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/EventsList/EventsList.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_c611639a._.js.map