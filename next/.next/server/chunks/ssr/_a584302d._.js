module.exports = {

"[project]/src/actions/email-send-feedback.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"605840c85de13a9a15e91471ffd6088bfd7dcba429":"emailSendFeedback"} */ __turbopack_context__.s({
    "emailSendFeedback": (()=>emailSendFeedback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
;
var emailSendFeedback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("605840c85de13a9a15e91471ffd6088bfd7dcba429", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "emailSendFeedback");
}}),
"[project]/src/libs/constants/emails.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "luuppiEmails": (()=>luuppiEmails)
});
const luuppiEmails = [
    {
        email: 'hallitus-sisainen@luuppi.fi',
        translation: 'entire_board'
    },
    {
        email: 'pj@luuppi.fi',
        translation: 'chairperson'
    },
    {
        email: 'vpj@luuppi.fi',
        translation: 'vice_chairperson'
    },
    {
        email: 'webmaster@luuppi.fi',
        translation: 'www_it_representative'
    },
    {
        email: 'yritys@luuppi.fi',
        translation: 'business'
    },
    {
        email: 'rahasto@luuppi.fi',
        translation: 'treasurer'
    },
    {
        email: 'kopo@luuppi.fi',
        translation: 'education_representative'
    },
    {
        email: 'viestinta@luuppi.fi',
        translation: 'communications_representative'
    },
    {
        email: 'kolmio@luuppi.fi',
        translation: 'kolmio_representative'
    },
    {
        email: 'tutor@luuppi.fi',
        translation: 'tutoring_representative'
    },
    {
        email: 'kv@luuppi.fi',
        translation: 'international_representative'
    },
    {
        email: 'liikunta@luuppi.fi',
        translation: 'sports_representative'
    },
    {
        email: 'tapahtuma@luuppi.fi',
        translation: 'event_representative'
    },
    {
        email: 'kestavakehitys@luuppi.fi',
        translation: 'sustainable_development_representive'
    },
    {
        email: 'toimitila@luuppi.fi',
        translation: 'premises_representative'
    },
    {
        email: 'sopo@luuppi.fi',
        translation: 'social_policy_representative'
    },
    {
        email: 'yhdenvertaisuus@luuppi.fi',
        translation: 'equality_representative'
    },
    {
        email: 'sanomat@luuppi.fi',
        translation: 'editor_in_chief_of_luuppisanomat'
    },
    {
        email: 'sihteeri@luuppi.fi',
        translation: 'secretary'
    }
];
}}),
"[project]/src/components/FormInput/FormInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FormInput({ title, error, placeholder, id, required = true, labelTopRight, value, type, disabled = false, marginTop = true, marginBottom = true, minLength, maxLength, readonly, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `form-control ${marginTop && 'mt-4'} ${marginBottom && 'mb-4'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `label ${!marginTop && 'pt-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label-text",
                        children: [
                            title,
                            " ",
                            required && '*'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FormInput/FormInput.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    labelTopRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label-text-alt",
                        children: labelTopRight
                    }, void 0, false, {
                        fileName: "[project]/src/components/FormInput/FormInput.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormInput/FormInput.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `input input-bordered ${Boolean(error) && 'input-error'}`,
                defaultValue: value ?? '',
                disabled: disabled,
                id: id,
                maxLength: maxLength,
                minLength: minLength,
                name: id,
                placeholder: placeholder,
                readOnly: readonly,
                required: required,
                type: type ?? 'text',
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/src/components/FormInput/FormInput.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            Boolean(error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "label",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "label-text text-xs text-red-400",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/FormInput/FormInput.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FormInput/FormInput.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormInput/FormInput.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/FormSelect/FormSelect.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FormSelect({ title, id, options, value, required = true, marginTop = true, marginBottom = true, labelTopRight, disabled = false, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `form-control ${marginTop && 'mt-4'} ${marginBottom && 'mb-4'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `label ${!marginTop && 'pt-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label-text",
                        children: [
                            title,
                            " ",
                            required && '*'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FormSelect/FormSelect.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    labelTopRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label-text-alt",
                        children: labelTopRight
                    }, void 0, false, {
                        fileName: "[project]/src/components/FormSelect/FormSelect.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormSelect/FormSelect.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "select select-bordered w-full",
                defaultValue: value,
                disabled: disabled,
                id: id,
                name: id,
                required: required,
                onChange: onChange,
                children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, index, false, {
                        fileName: "[project]/src/components/FormSelect/FormSelect.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FormSelect/FormSelect.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormSelect/FormSelect.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/FormTextArea/FormTextArea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormTextArea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FormTextArea({ title, error, placeholder, id, required = true, labelTopRight, value, rows = 5, maxLength = 500, disabled = false, marginTop = true, marginBottom = true, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `form-control ${marginTop && 'mt-4'} ${marginBottom && 'mb-4'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `label ${!marginTop && 'pt-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label-text",
                        children: [
                            title,
                            " ",
                            required && '*'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    labelTopRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label-text-alt",
                        children: labelTopRight
                    }, void 0, false, {
                        fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: `textarea textarea-bordered ${Boolean(error) && 'textarea-error'}`,
                defaultValue: value ?? '',
                disabled: disabled,
                id: id,
                maxLength: maxLength,
                name: id,
                placeholder: placeholder,
                required: required,
                rows: rows,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            Boolean(error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "label",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "label-text text-xs text-red-400",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormTextArea/FormTextArea.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/SubmitButton/SubmitButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SubmitButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
'use client';
;
;
function SubmitButton({ text, variant = 'primary', size = 'sm', className, children, disabled = false }) {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `btn-${variant} btn btn-${size} ${className}`,
        disabled: pending || disabled,
        type: "submit",
        children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "loading loading-spinner loading-md"
            }, void 0, false, {
                fileName: "[project]/src/components/SubmitButton/SubmitButton.tsx",
                lineNumber: 31,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SubmitButton/SubmitButton.tsx",
            lineNumber: 30,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                children,
                " ",
                text
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/SubmitButton/SubmitButton.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/FeedbackForm/FeedbackForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FeedbackForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$email$2d$send$2d$feedback$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/email-send-feedback.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$emails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/constants/emails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$marsidev$2f$react$2d$turnstile$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@marsidev/react-turnstile/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormInput$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormInput/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormSelect$2f$FormSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormSelect/FormSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormTextArea$2f$FormTextArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormTextArea/FormTextArea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubmitButton$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubmitButton/SubmitButton.tsx [app-ssr] (ecmascript)");
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
;
const initialState = {
    message: '',
    isError: false,
    field: ''
};
function FeedbackForm({ lang, dictionary }) {
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const turnstileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formResponse, setFormResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [turnstileToken, setTurnstileToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const updateFeedback = async (formData)=>{
        formData.append('turnstileToken', turnstileToken);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$email$2d$send$2d$feedback$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSendFeedback"])(lang, formData);
        setFormResponse(response);
        turnstileRef.current?.reset();
        if (!response.isError) {
            formRef.current?.reset();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: formRef,
        action: updateFeedback,
        className: "card card-body",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-lg font-semibold",
                children: dictionary.pages_feedback.send_feedback
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            Boolean(formResponse.isError && formResponse.message && !formResponse.field) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert mb-4 rounded-lg bg-red-200 text-sm text-red-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiErrorCircle"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    formResponse.message
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            Boolean(!formResponse.isError && formResponse.message && !formResponse.field) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert mb-4 rounded-lg bg-green-200 text-sm text-green-800",
                children: formResponse.message
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormInput$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                error: formResponse.field === 'name' ? formResponse.message : '',
                id: "name",
                marginTop: false,
                placeholder: dictionary.pages_feedback.name,
                required: false,
                title: dictionary.pages_feedback.name
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormInput$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                error: formResponse.field === 'email' ? formResponse.message : '',
                id: "email",
                marginTop: false,
                placeholder: dictionary.pages_feedback.email,
                required: false,
                title: dictionary.pages_feedback.email,
                type: "email"
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormSelect$2f$FormSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "receiver",
                marginTop: false,
                options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$emails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["luuppiEmails"].map((email)=>({
                        label: dictionary.roles[email.translation],
                        value: email.email
                    })),
                title: dictionary.pages_feedback.receiver,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$emails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["luuppiEmails"][0].email,
                onChange: ()=>setFormResponse(initialState)
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormInput$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                error: formResponse.field === 'subject' ? formResponse.message : '',
                id: "subject",
                marginTop: false,
                placeholder: dictionary.pages_feedback.subject,
                title: dictionary.pages_feedback.subject
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormTextArea$2f$FormTextArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                error: formResponse.field === 'message' ? formResponse.message : '',
                id: "message",
                marginTop: false,
                maxLength: 5000,
                placeholder: dictionary.pages_feedback.message,
                title: dictionary.pages_feedback.message
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$marsidev$2f$react$2d$turnstile$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Turnstile"], {
                ref: turnstileRef,
                className: "mb-4",
                siteKey: ("TURBOPACK compile-time value", "Example-1234-1234-1234-123456789012"),
                onSuccess: setTurnstileToken
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubmitButton$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    text: dictionary.pages_feedback.send
                }, void 0, false, {
                    fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeedbackForm/FeedbackForm.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/@marsidev/react-turnstile/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_CONTAINER_ID": (()=>A),
    "DEFAULT_ONLOAD_NAME": (()=>S),
    "DEFAULT_SCRIPT_ID": (()=>w),
    "SCRIPT_URL": (()=>Y),
    "Turnstile": (()=>Te)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
var se = ({ as: r = "div", ...c }, o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(r, {
        ...c,
        ref: o
    }), V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(se);
;
var Y = "https://challenges.cloudflare.com/turnstile/v0/api.js", w = "cf-turnstile-script", A = "cf-turnstile", S = "onloadTurnstileCallback", D = (r)=>!!document.getElementById(r), q = ({ render: r = "explicit", onLoadCallbackName: c = S, scriptOptions: { nonce: o = "", defer: e = !0, async: p = !0, id: x = "", appendTo: C, onError: v, crossOrigin: I = "" } = {} })=>{
    let R = x || w;
    if (D(R)) return;
    let i = document.createElement("script");
    if (i.id = R, i.src = `${Y}?onload=${c}&render=${r}`, document.querySelector(`script[src="${i.src}"]`)) return;
    i.defer = !!e, i.async = !!p, o && (i.nonce = o), I && (i.crossOrigin = I), v && (i.onerror = v, delete window[c]), (C === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(i);
}, l = {
    normal: {
        width: 300,
        height: 65
    },
    compact: {
        width: 150,
        height: 140
    },
    invisible: {
        width: 0,
        height: 0,
        overflow: "hidden"
    },
    flexible: {
        minWidth: 300,
        width: "100%",
        height: 65
    },
    interactionOnly: {
        width: "fit-content",
        height: "auto",
        display: "flex"
    }
};
function J(r) {
    if (r !== "invisible" && r !== "interactionOnly") return r;
}
function O(r = w) {
    let [c, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let e = ()=>{
            D(r) && o(!0);
        }, p = new MutationObserver(e);
        return p.observe(document, {
            childList: !0,
            subtree: !0
        }), e(), ()=>{
            p.disconnect();
        };
    }, [
        r
    ]), c;
}
;
var b = "unloaded", G, fe = new Promise((r, c)=>{
    G = {
        resolve: r,
        reject: c
    }, b === "ready" && r(void 0);
}), me = (r = S)=>(b === "unloaded" && (b = "loading", window[r] = ()=>{
        G.resolve(), b = "ready", delete window[r];
    }), fe), Te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((r, c)=>{
    let { scriptOptions: o, options: e = {}, siteKey: p, onWidgetLoad: x, onSuccess: C, onExpire: v, onError: I, onBeforeInteractive: R, onAfterInteractive: i, onUnsupported: N, onTimeout: Q, onLoadScript: U, id: Z, style: ee, as: te = "div", injectScript: M = !0, ...re } = r, s = e.size, z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>typeof s > "u" ? {} : e.execution === "execute" ? l.invisible : e.appearance === "interaction-only" ? l.interactionOnly : l[s], [
        e.execution,
        s,
        e.appearance
    ]), [ne, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(z()), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), [f, W] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), $ = Z || A, P = o?.id || w, L = O(P), j = o?.onLoadCallbackName || S, oe = e.appearance || "always", g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            sitekey: p,
            action: e.action,
            cData: e.cData,
            callback: (n)=>{
                h.current = !0, C?.(n);
            },
            "error-callback": I,
            "expired-callback": v,
            "before-interactive-callback": R,
            "after-interactive-callback": i,
            "unsupported-callback": N,
            theme: e.theme || "auto",
            language: e.language || "auto",
            tabindex: e.tabIndex,
            "response-field": e.responseField,
            "response-field-name": e.responseFieldName,
            size: J(s),
            retry: e.retry || "auto",
            "retry-interval": e.retryInterval || 8e3,
            "refresh-expired": e.refreshExpired || "auto",
            "refresh-timeout": e.refreshTimeout || "auto",
            execution: e.execution || "render",
            appearance: e.appearance || "always",
            "feedback-enabled": e.feedbackEnabled || !0,
            "timeout-callback": Q
        }), [
        e.action,
        e.appearance,
        e.cData,
        e.execution,
        e.language,
        e.refreshExpired,
        e.responseField,
        e.responseFieldName,
        e.retry,
        e.retryInterval,
        e.tabIndex,
        e.theme,
        e.feedbackEnabled,
        e.refreshTimeout,
        p,
        s
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>typeof window < "u" && !!window.turnstile, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        M && !f && q({
            onLoadCallbackName: j,
            scriptOptions: {
                ...o,
                id: P
            }
        });
    }, [
        M,
        f,
        o,
        P
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        b !== "ready" && me(j).then(()=>W(!0)).catch(console.error);
    }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!a.current || !f) return;
        let u = !1;
        return (async ()=>{
            if (u || !a.current) return;
            let _ = window.turnstile.render(a.current, g);
            t.current = _, t.current && x?.(t.current);
        })(), ()=>{
            u = !0, t.current && (window.turnstile.remove(t.current), h.current = !1);
        };
    }, [
        $,
        f,
        g
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(c, ()=>{
        let { turnstile: n } = window;
        return {
            getResponse () {
                if (!n?.getResponse || !t.current || !m()) {
                    console.warn("Turnstile has not been loaded");
                    return;
                }
                return n.getResponse(t.current);
            },
            async getResponsePromise (u = 3e4, B = 100) {
                return new Promise((_, k)=>{
                    let d, H = async ()=>{
                        if (h.current && window.turnstile && t.current) try {
                            let T = window.turnstile.getResponse(t.current);
                            return d && clearTimeout(d), T ? _(T) : k(new Error("No response received"));
                        } catch (T) {
                            return d && clearTimeout(d), console.warn("Failed to get response", T), k(new Error("Failed to get response"));
                        }
                        d || (d = setTimeout(()=>{
                            d && clearTimeout(d), k(new Error("Timeout"));
                        }, u)), await new Promise((T)=>setTimeout(T, B)), await H();
                    };
                    H();
                });
            },
            reset () {
                if (!n?.reset || !t.current || !m()) {
                    console.warn("Turnstile has not been loaded");
                    return;
                }
                e.execution === "execute" && y(l.invisible);
                try {
                    h.current = !1, n.reset(t.current);
                } catch (u) {
                    console.warn(`Failed to reset Turnstile widget ${t}`, u);
                }
            },
            remove () {
                if (!n?.remove || !t.current || !m()) {
                    console.warn("Turnstile has not been loaded");
                    return;
                }
                y(l.invisible), h.current = !1, n.remove(t.current), t.current = null;
            },
            render () {
                if (!n?.render || !a.current || !m() || t.current) {
                    console.warn("Turnstile has not been loaded or container not found");
                    return;
                }
                let u = n.render(a.current, g);
                return t.current = u, t.current && x?.(t.current), e.execution !== "execute" && y(s ? l[s] : {}), u;
            },
            execute () {
                if (e.execution !== "execute") {
                    console.warn('Execution mode is not set to "execute"');
                    return;
                }
                if (!n?.execute || !a.current || !t.current || !m()) {
                    console.warn("Turnstile has not been loaded or container not found");
                    return;
                }
                n.execute(a.current, g), y(s ? l[s] : {});
            },
            isExpired () {
                return !n?.isExpired || !t.current || !m() ? (console.warn("Turnstile has not been loaded"), !1) : n.isExpired(t.current);
            }
        };
    }, [
        t,
        e.execution,
        s,
        g,
        a,
        m,
        f,
        x
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        L && !f && window.turnstile && W(!0);
    }, [
        f,
        L
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        y(z());
    }, [
        e.execution,
        s,
        oe
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        !L || typeof U != "function" || U();
    }, [
        L
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(V, {
        ref: a,
        as: te,
        id: $,
        style: {
            ...ne,
            ...ee
        },
        ...re
    });
});
Te.displayName = "Turnstile";
;
}}),

};

//# sourceMappingURL=_a584302d._.js.map