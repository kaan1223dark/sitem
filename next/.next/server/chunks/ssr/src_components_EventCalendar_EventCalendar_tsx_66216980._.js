module.exports = {

"[project]/src/components/EventCalendar/EventCalendar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventCalendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$EventSelectorProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/EventSelectorProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$core$2f$locales$2f$tr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/core/locales/tr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/daygrid/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$timegrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/timegrid/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function EventCalendar({ events, lang, dictionary }) {
    const [isSmallDesktop, setIsSmallDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$EventSelectorProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectedViewContext"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const currentYear = ctx.activeCalendarMonth.getFullYear();
    const currentMonth = ctx.activeCalendarMonth.getMonth();
    // Hacky solution to fix overlapping events styling
    const calendarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleEventClick = (e)=>{
        const eventId = e.event.id;
        router.push(`/${lang}/events/${eventId}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsSmallDesktop(window.innerWidth < 1280);
            calendarRef?.current?.getApi().updateSize();
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${ctx.desktopCalendarFullSize ? 'fixed left-0 top-0 z-50 h-screen w-screen' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${ctx.desktopCalendarFullSize ? 'flex h-full w-full bg-white p-6' : ''}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: calendarRef,
                aspectRatio: isSmallDesktop ? 0.8 : 1.35,
                buttonText: lang === 'tr' ? {
                    today: 'bugün',
                    month: 'ay',
                    week: 'hafta'
                } : {
                    today: 'today',
                    month: 'month',
                    week: 'week'
                },
                customButtons: {
                    toggleSize: {
                        text: ctx.desktopCalendarFullSize ? dictionary.general.zoom_calendar_off : dictionary.general.zoom_calendar_on,
                        click: ()=>ctx.setDesktopCalendarFullSize(!ctx.desktopCalendarFullSize)
                    }
                },
                datesSet: (args)=>{
                    const visibleStart = new Date(args.start);
                    if (visibleStart.getDate() === 1) {
                        ctx.setActiveCalendarMonth(new Date(visibleStart.getFullYear(), visibleStart.getMonth(), 1));
                    } else {
                        ctx.setActiveCalendarMonth(new Date(visibleStart.getFullYear(), visibleStart.getMonth() + 1, 1));
                    }
                },
                dayHeaderFormat: isSmallDesktop ? {
                    weekday: 'short',
                    day: 'numeric',
                    omitCommas: true
                } : {
                    weekday: 'long',
                    day: 'numeric'
                },
                dayMaxEventRows: 4,
                dayMaxEvents: 4,
                eventClick: handleEventClick,
                eventContent: function(arg) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tooltip block w-full",
                        "data-tip": arg.event.title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "overflow-hidden pl-[2px] text-left text-xs",
                            children: [
                                arg.timeText,
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: arg.event.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EventCalendar/EventCalendar.tsx",
                                    lineNumber: 124,
                                    columnNumber: 19
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EventCalendar/EventCalendar.tsx",
                            lineNumber: 122,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCalendar/EventCalendar.tsx",
                        lineNumber: 121,
                        columnNumber: 15
                    }, void 0);
                },
                eventOrderStrict: true,
                eventTimeFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: false,
                    hour12: false
                },
                events: events,
                headerToolbar: !isSmallDesktop ? {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek toggleSize'
                } : {
                    left: 'title',
                    center: 'prev,next today',
                    right: 'dayGridMonth toggleSize'
                },
                height: ctx.desktopCalendarFullSize ? '100%' : undefined,
                initialDate: new Date(currentYear, currentMonth, 1),
                initialView: 'dayGridMonth',
                locale: lang === 'tr' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$core$2f$locales$2f$tr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : '',
                plugins: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$timegrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                ],
                slotLabelFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: false,
                    hour12: false
                },
                titleFormat: {
                    year: 'numeric',
                    month: 'long'
                },
                weekends: true
            }, void 0, false, {
                fileName: "[project]/src/components/EventCalendar/EventCalendar.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/EventCalendar/EventCalendar.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/EventCalendar/EventCalendar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/EventCalendar/EventCalendar.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/EventCalendar/EventCalendar.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_components_EventCalendar_EventCalendar_tsx_66216980._.js.map