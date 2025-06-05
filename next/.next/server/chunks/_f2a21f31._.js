module.exports = {

"[project]/src/libs/utils/logger.ts [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logger": (()=>logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [instrumentation-edge] (ecmascript)");
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
"[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/logger.ts [instrumentation-edge] (ecmascript)");
;
function register() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
}
}}),
"[project]/node_modules/next/dist/compiled/server-only/empty.js [instrumentation-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_f2a21f31._.js.map