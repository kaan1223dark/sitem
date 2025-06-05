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
"[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ViewEventsDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$format$2d$date$2d$range$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/format-date-range.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function ViewEventsDialog({ events, onClose, lang, dictionary }) {
    if (!events) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        className: `modal modal-bottom sm:modal-middle ${events && events.length > 0 ? 'modal-open' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-lg font-bold",
                        children: [
                            new Intl.DateTimeFormat(lang, {
                                month: 'long',
                                year: 'numeric',
                                day: 'numeric'
                            }).format(events[0]?.start),
                            ' '
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    events && events.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "mb-4 block rounded-lg bg-background-50 p-4",
                                href: `/${lang}/events/${event.id}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold",
                                        children: event.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$format$2d$date$2d$range$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateRangeShort"])(event.start, event.end, lang),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "line-clamp-3 text-sm",
                                        children: event.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, event.id, true, {
                                fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this))
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-action",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            method: "dialog",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-sm",
                                onClick: onClose,
                                children: dictionary.general.close
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "modal-backdrop",
                onClick: onClose,
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/MobileCalendar/MobileCalendar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MobileCalendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$EventSelectorProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/EventSelectorProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileCalendar$2f$ViewEventsDialog$2f$ViewEventsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileCalendar/ViewEventsDialog/ViewEventsDialog.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const getDaysOfWeek = (locale)=>{
    const baseDate = new Date(Date.UTC(2021, 0, 10));
    const daysOfWeek = [];
    for(let i = 0; i < 7; i++){
        daysOfWeek.push(new Intl.DateTimeFormat(locale, {
            weekday: 'short'
        }).format(new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000)));
    }
    if (locale === 'fi') {
        daysOfWeek.push(daysOfWeek.shift());
    }
    return daysOfWeek;
};
const groupEventsByStartDate = (events)=>events.filter((e)=>e.start).reduce((acc, event)=>{
        const startDate = new Intl.DateTimeFormat('fi', {
            timeZone: 'Europe/Helsinki',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(new Date(event.start));
        const formattedDate = startDate.split('.').reverse().join('-').trim();
        if (!acc[formattedDate]) {
            acc[formattedDate] = [];
        }
        acc[formattedDate].push(event);
        return acc;
    }, {});
const generateMonthGrid = (year, month, locale)=>{
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = locale === 'fi' ? -1 : 0;
    let adjustedFirstDay = (firstDayOfMonth + offset) % 7;
    if (adjustedFirstDay < 0) adjustedFirstDay += 7;
    let grid = [];
    let dayCounter = 1;
    const rows = Math.ceil((adjustedFirstDay + daysInMonth) / 7);
    for(let i = 0; i < rows; i++){
        let week = [];
        for(let j = 0; j < 7; j++){
            if (i === 0 && j < adjustedFirstDay || dayCounter > daysInMonth) {
                week.push(null);
            } else {
                week.push(dayCounter++);
            }
        }
        grid.push(week);
    }
    return grid;
};
function MobileCalendar({ lang, events, dictionary }) {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$EventSelectorProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectedViewContext"]);
    const [selectedEvents, setSelectedEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const currentYear = ctx.activeCalendarMonth.getFullYear();
    const currentMonth = ctx.activeCalendarMonth.getMonth();
    const handlePreviousMonth = ()=>{
        ctx.setActiveCalendarMonth(new Date(currentYear, currentMonth - 1, 1));
    };
    const handleNextMonth = ()=>{
        ctx.setActiveCalendarMonth(new Date(currentYear, currentMonth + 1, 1));
    };
    const daysOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getDaysOfWeek(lang), [
        lang
    ]);
    const monthGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>generateMonthGrid(currentYear, currentMonth, lang), [
        currentYear,
        currentMonth,
        lang
    ]);
    const groupedEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>groupEventsByStartDate(events), [
        events
    ]);
    const openDayEventsDialog = (date)=>{
        const dayEvents = groupedEvents[date];
        setSelectedEvents(dayEvents);
    };
    const handleClose = ()=>{
        setSelectedEvents([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileCalendar$2f$ViewEventsDialog$2f$ViewEventsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                dictionary: dictionary,
                events: selectedEvents,
                lang: lang,
                onClose: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary btn-sm",
                        onClick: handlePreviousMonth,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiArrowToLeft"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold",
                        children: new Date(currentYear, currentMonth).toLocaleDateString(lang, {
                            month: 'long',
                            year: 'numeric'
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary btn-sm",
                        onClick: handleNextMonth,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiArrowToRight"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-4",
                children: [
                    daysOfWeek.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center font-bold",
                            children: day
                        }, day, false, {
                            fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)),
                    monthGrid.flat().map((day, idx)=>{
                        const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const dayEvents = groupedEvents[dateKey] || [];
                        const isToday = day === todayDate && currentMonth === todayMonth && currentYear === todayYear;
                        const yesterday = new Date(today);
                        yesterday.setDate(today.getDate() - 1);
                        yesterday.setHours(23, 59, 59, 999);
                        const isPast = new Date(dateKey) < yesterday;
                        const hasEvents = dayEvents.length > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex w-full flex-col items-center rounded-lg py-2 text-center transition-all duration-300 ease-in-out ${isToday ? 'bg-[#fffadf] font-bold' : 'bg-gray-50'} ${hasEvents && 'hover:bg-gray-200 focus:bg-gray-200'}`,
                            disabled: !hasEvents,
                            onClick: ()=>openDayEventsDialog(dateKey),
                            children: [
                                day || '',
                                hasEvents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `flex h-6 w-6 items-center justify-center rounded-full px-2 py-1 text-xs ${isPast ? 'bg-gray-400 text-white' : 'bg-secondary-400 text-white'}`,
                                    children: dayEvents.length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileCalendar/MobileCalendar.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/MobileCalendar/MobileCalendar.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MobileCalendar/MobileCalendar.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_249302fe._.js.map