module.exports = {

"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs) <export randomFillSync as default>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/libs/db/prisma.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable no-unused-vars */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) global.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}}),
"[project]/src/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST),
    "auth": (()=>auth),
    "signIn": (()=>signIn),
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$azure$2d$ad$2d$b2c$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/azure-ad-b2c.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$azure$2d$ad$2d$b2c$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/azure-ad-b2c.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/logger.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const { handlers: { GET, POST }, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$azure$2d$ad$2d$b2c$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AZURE_P_CLIENT_ID,
            clientSecret: process.env.AZURE_P_CLIENT_SECRET,
            authorization: {
                url: `https://${process.env.AZURE_TENANT_ID}.ciamlogin.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/authorize`,
                params: {
                    code_challenge_method: undefined,
                    code_challenge: undefined
                }
            },
            issuer: `https://${process.env.AZURE_TENANT_ID}.ciamlogin.com/${process.env.AZURE_TENANT_ID}/v2.0`,
            token: {
                url: `https://${process.env.AZURE_TENANT_ID}.ciamlogin.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
                grant_type: 'authorization_code'
            }
        })
    ],
    pages: {
        error: '/auth/error'
    },
    trustHost: true,
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session ({ session, token }) {
            if (token) {
                session.user.entraUserUuid = token.id;
                session.user.isLuuppiHato = token.isLuuppiHato;
                session.user.isLuuppiMember = token.isLuuppiMember;
                session.user.name = token.username;
            }
            // Forces user to sign in again if token version is outdated.
            // Useful for forcing users to sign in again after updating token version if
            // major changes have been made to the token structure.
            if (!token.version || token.version !== process.env.TOKEN_VERSION) {
                throw new Error('Token version mismatch');
            }
            // This should never happen, but just in case
            if (!session.user.entraUserUuid) {
                throw new Error('Malformed token');
            }
            return session;
        },
        async jwt ({ token, account }) {
            if (account) {
                const idToken = account.id_token;
                if (!idToken) return token;
                let decoded = null;
                try {
                    decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].decode(idToken);
                } catch (e) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error decoding JWT', e);
                }
                if (!decoded) return token;
                token.email = decoded.email;
                token.id = decoded.oid;
                // Update user to local database
                const localUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.upsert({
                    where: {
                        entraUserUuid: decoded.oid
                    },
                    update: {
                        email: decoded.email,
                        roles: {
                            connectOrCreate: {
                                where: {
                                    strapiRoleUuid_entraUserUuid: {
                                        entraUserUuid: decoded.oid,
                                        strapiRoleUuid: process.env.NEXT_PUBLIC_NO_ROLE_ID
                                    }
                                },
                                create: {
                                    role: {
                                        connect: {
                                            strapiRoleUuid: process.env.NEXT_PUBLIC_NO_ROLE_ID
                                        }
                                    }
                                }
                            }
                        }
                    },
                    create: {
                        entraUserUuid: decoded.oid,
                        email: decoded.email,
                        roles: {
                            create: {
                                role: {
                                    connect: {
                                        strapiRoleUuid: process.env.NEXT_PUBLIC_NO_ROLE_ID
                                    }
                                }
                            }
                        }
                    },
                    include: {
                        roles: {
                            include: {
                                role: true
                            },
                            where: {
                                OR: [
                                    {
                                        expiresAt: {
                                            gte: new Date()
                                        }
                                    },
                                    {
                                        expiresAt: null
                                    }
                                ]
                            }
                        }
                    }
                });
                const hasRole = (roleUuid)=>localUser.roles.some((role)=>role.role.strapiRoleUuid === roleUuid);
                token.isLuuppiHato = hasRole(process.env.NEXT_PUBLIC_LUUPPI_HATO_ID);
                token.isLuuppiMember = hasRole(process.env.NEXT_PUBLIC_LUUPPI_MEMBER_ID);
                token.username = localUser.username;
                token.version = process.env.TOKEN_VERSION;
            }
            return token;
        }
    }
});
}}),
"[project]/src/actions/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7fa0376e0378ee12c6beff709c4be66701a9b243e6":"signIn","7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712":"signOut"} */ __turbopack_context__.s({
    "signIn": (()=>signIn),
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ signIn = async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])('azure-ad-b2c');
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ signOut = async ()=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
        redirect: false
    });
    const logoutUrl = `https://${process.env.AZURE_TENANT_ID}.ciamlogin.com/${process.env.AZURE_TENANT_ID}/oauth2/logout?client_id=${process.env.AZURE_P_CLIENT_ID}&post_logout_redirect_uri=${("TURBOPACK compile-time value", "http://localhost:3000")}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(logoutUrl);
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signIn,
    signOut
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signIn, "7fa0376e0378ee12c6beff709c4be66701a9b243e6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712", null);
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$news$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7fa0376e0378ee12c6beff709c4be66701a9b243e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"]),
    "7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$news$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7fa0376e0378ee12c6beff709c4be66701a9b243e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$news$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa0376e0378ee12c6beff709c4be66701a9b243e6"]),
    "7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$news$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$news$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$news$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/news/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/icon1.png.mjs { IMAGE => \"[project]/src/app/icon1.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon1.png.mjs { IMAGE => \"[project]/src/app/icon1.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/icon2.png.mjs { IMAGE => \"[project]/src/app/icon2.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon2.png.mjs { IMAGE => \"[project]/src/app/icon2.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/apple-icon.png.mjs { IMAGE => \"[project]/src/app/apple-icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/apple-icon.png.mjs { IMAGE => \"[project]/src/app/apple-icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/[lang]/(content-pages)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/(content-pages)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/[lang]/(content-pages)/error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/(content-pages)/error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/BlockRendererClient/BlockRendererClient.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/BlockRendererClient/BlockRendererClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx <module evaluation>", "default");
}}),
"[project]/src/components/BlockRendererClient/BlockRendererClient.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/BlockRendererClient/BlockRendererClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/BlockRendererClient/BlockRendererClient.tsx", "default");
}}),
"[project]/src/components/BlockRendererClient/BlockRendererClient.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/BlockRendererClient/BlockRendererClient.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/BlockRendererClient/BlockRendererClient.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/SideNavigator/SideNavigator.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SideNavigator/SideNavigator.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SideNavigator/SideNavigator.tsx <module evaluation>", "default");
}}),
"[project]/src/components/SideNavigator/SideNavigator.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SideNavigator/SideNavigator.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SideNavigator/SideNavigator.tsx", "default");
}}),
"[project]/src/components/SideNavigator/SideNavigator.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNavigator$2f$SideNavigator$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/SideNavigator/SideNavigator.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNavigator$2f$SideNavigator$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/SideNavigator/SideNavigator.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNavigator$2f$SideNavigator$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/SidePartners/SidePartners.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SidePartners/SidePartners.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SidePartners/SidePartners.tsx <module evaluation>", "default");
}}),
"[project]/src/components/SidePartners/SidePartners.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SidePartners/SidePartners.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SidePartners/SidePartners.tsx", "default");
}}),
"[project]/src/components/SidePartners/SidePartners.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/SidePartners/SidePartners.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/SidePartners/SidePartners.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/libs/strapi/flip-locale.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "flipBoardLocale": (()=>flipBoardLocale),
    "flipNewsLocale": (()=>flipNewsLocale),
    "flipSanomatLocale": (()=>flipSanomatLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
const flipBoardLocale = (lang, data)=>lang === 'en' ? data.attributes.boardMembers?.data.map((member)=>{
        const flippedLocales = member.attributes.boardRoles?.data.map((role)=>{
            const localeEn = role.attributes.localizations.data[0];
            return {
                ...role,
                attributes: localeEn.attributes
            };
        });
        return {
            ...member,
            attributes: {
                ...member.attributes,
                boardRoles: {
                    data: flippedLocales
                }
            }
        };
    }) : data.attributes.boardMembers?.data;
const flipNewsLocale = (lang, data)=>lang === 'en' ? data.map((news)=>{
        const localeEn = news.attributes.localizations?.data[0];
        if (!localeEn) return null;
        return {
            ...news,
            attributes: {
                ...localeEn?.attributes,
                banner: news.attributes.banner,
                authorImage: news.attributes.authorImage,
                slug: news.attributes.slug,
                Seo: {
                    ...localeEn?.attributes.Seo
                }
            }
        };
    })?.filter((news)=>news) : data;
const flipSanomatLocale = (lang, data)=>lang === 'en' ? data.map((publication)=>{
        const localeEn = publication.attributes.localizations?.data[0];
        if (!localeEn) return null;
        return {
            ...publication,
            attributes: {
                ...localeEn?.attributes,
                id: publication.id,
                image: publication.attributes.image,
                pdf: publication.attributes.pdf,
                Seo: {
                    ...localeEn?.attributes.Seo
                }
            }
        };
    })?.filter((publication)=>publication) : data;
}}),
"[project]/src/libs/strapi/format-metadata.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatMetadata": (()=>formatMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
const formatMetadata = (content, pathname, isNews = false)=>{
    const seo = content.data.attributes.Seo;
    if (!seo) throw new Error('No SEO data found');
    const cmsUrl = ("TURBOPACK compile-time value", "http://localhost:1337");
    let twitterImage = null;
    if (seo.twitter?.twitterImage?.data?.attributes?.url) {
        twitterImage = `${cmsUrl}${seo.twitter.twitterImage.data.attributes.url}`;
    }
    let openGraphImage = null;
    if (seo.openGraph?.openGraphImage?.data?.attributes?.url) {
        openGraphImage = `${cmsUrl}${seo.openGraph.openGraphImage.data.attributes.url}`;
    }
    if (isNews && !openGraphImage) {
        const ogUrl = new URL('https://luuppi-opengraph.vercel.app/api/og');
        ogUrl.searchParams.append('author', seo.metaAuthor ?? 'Luuppi ry');
        ogUrl.searchParams.append('title', seo.metaTitle);
        ogUrl.searchParams.append('published', seo.publishedAt ?? new Date().toISOString());
        ogUrl.searchParams.append('image', 'https://i.pravatar.cc/300');
    }
    return {
        title: `${seo.metaTitle} | Luuppi ry`,
        description: seo.metaDescription,
        authors: {
            name: seo.metaAuthor
        },
        keywords: seo.metaKeywords,
        alternates: {
            canonical: pathname,
            languages: {
                tr: `/tr${pathname.slice(3)}`,
                en: `/en${pathname.slice(3)}`
            }
        },
        openGraph: {
            title: seo.openGraph.openGraphTitle,
            description: seo.openGraph.openGraphDescription,
            url: pathname,
            images: openGraphImage ? [
                openGraphImage
            ] : undefined,
            siteName: 'Luuppi ry'
        },
        twitter: {
            title: seo.twitter.twitterTitle,
            description: seo.twitter.twitterDescription,
            card: 'summary_large_image',
            images: twitterImage ? [
                twitterImage
            ] : undefined
        }
    };
};
}}),
"[project]/src/libs/strapi/blocks-converter.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPlainText": (()=>getPlainText)
});
function getPlainText(block) {
    return block.map((node)=>{
        switch(node.type){
            case 'heading':
                return node.children.map((child)=>child.type === 'text' ? child.text : child.url);
            case 'code':
                return node.children.map((child)=>child.type === 'text' ? child.text : child.url);
            case 'quote':
                return node.children.map((child)=>child.type === 'text' ? child.text : child.url);
            case 'list':
                return node.children.map((child)=>recursiveListRenderer(child)).flatMap((x)=>x);
            case 'paragraph':
                {
                    return node.children.map((child)=>child.type === 'text' ? child.text : child.url);
                }
            default:
                return [];
        }
    }).flatMap((x)=>x).join(' ');
}
function recursiveListRenderer(node) {
    if (node.type === 'list-item') {
        return node.children.map((child)=>child.type === 'text' ? child.text : child.url);
    }
    return node.children.map((child)=>recursiveListRenderer(child));
}
}}),
"[project]/src/libs/utils/json-ld.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBoardMemberJsonLd": (()=>getBoardMemberJsonLd),
    "getEventJsonLd": (()=>getEventJsonLd),
    "getNewsJsonLd": (()=>getNewsJsonLd),
    "getOrganizationJsonLd": (()=>getOrganizationJsonLd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$blocks$2d$converter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/blocks-converter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-url.ts [app-rsc] (ecmascript)");
;
;
const getOrganizationJsonLd = (dictionary)=>{
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Luuppi ry',
        description: dictionary.pages_home.hero.description,
        openingHours: 'Mo,Tu,We,Th 09:00-15:00',
        foundingDate: '1969-01-01',
        url: 'https://luuppi.fi',
        keywords: 'Luuppi, Luuppi ry, Tampere, Tampereen yliopisto, Ainejärjestö',
        logo: 'https://luuppi.fi/logo.png',
        address: {
            '@type': 'PostalAddress',
            postalCode: '33100',
            streetAddress: 'Yliopistonkatu 58b',
            addressCountry: 'FI',
            addressLocality: 'Tampere'
        },
        vatID: 'FI05123472',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: dictionary.navigation.board,
            email: 'hallitus@luuppi.fi',
            availableLanguage: [
                'Finnish',
                'English'
            ]
        },
        sameAs: [
            'https://www.facebook.com/luuppiry',
            'https://www.tiktok.com/@luuppiry',
            'https://www.instagram.com/luuppiry/',
            'https://www.linkedin.com/company/luuppi-ry',
            'https://fi.wikipedia.org/wiki/Luuppi_(ainej%C3%A4rjest%C3%B6)',
            'https://www.linkedin.com/company/luuppi-ry'
        ],
        hasMap: 'https://www.google.com/maps/d/viewer?mid=1udxC-9jUfnpF5-bZyxiT3SlEcPMRnAh9'
    };
    return jsonLd;
};
const getEventJsonLd = (event, lang)=>{
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$blocks$2d$converter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPlainText"])(event.data.attributes[lang === 'en' ? 'DescriptionEn' : 'DescriptionFi']).slice(0, 300);
    const imageUrlLocalized = lang === 'en' && event.data.attributes.ImageEn?.data?.attributes?.url ? event.data.attributes.ImageEn?.data?.attributes?.url : event.data.attributes.Image?.data?.attributes?.url;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.data.attributes[lang === 'en' ? 'NameEn' : 'NameFi'],
        url: `https://luuppi.fi/${lang}/events/${event.data.id}`,
        startDate: new Date(event.data.attributes.StartDate).toISOString(),
        endDate: new Date(event.data.attributes.EndDate).toISOString(),
        description: description.slice(0, 300),
        image: imageUrlLocalized ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(imageUrlLocalized) : undefined,
        location: {
            '@type': 'Place',
            name: event.data.attributes[lang === 'en' ? 'LocationEn' : 'LocationFi']
        },
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        offers: event.data.attributes.Registration?.TicketTypes.map((ticket)=>({
                '@type': 'Offer',
                name: lang === 'en' ? ticket.NameEn : ticket.NameFi,
                price: ticket.Price,
                priceCurrency: 'EUR',
                url: `https://luuppi.fi/${lang}/events/${event.data.id}`,
                validFrom: new Date(event.data.attributes.StartDate).toISOString(),
                seller: {
                    '@type': 'Organization',
                    name: 'Luuppi ry',
                    url: 'https://luuppi.fi'
                }
            })),
        organizer: {
            '@type': 'Organization',
            name: 'Luuppi ry',
            url: 'https://luuppi.fi',
            logo: {
                '@type': 'ImageObject',
                url: 'https://luuppi.fi/logo.png'
            }
        },
        inLanguage: {
            '@type': 'Language',
            name: lang === 'en' ? 'English' : 'Finnish',
            alternateName: lang === 'en' ? 'en' : 'fi'
        }
    };
    return jsonLd;
};
const getNewsJsonLd = (news, lang)=>{
    // eslint-disable-next-line no-console
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: news.attributes.title,
        description: news.attributes.description,
        image: news.attributes.banner?.data?.attributes?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(news.attributes.banner.data.attributes.url) : undefined,
        datePublished: new Date(news.attributes.createdAt).toISOString(),
        dateModified: new Date(news.attributes.updatedAt).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: 'Luuppi ry',
            logo: {
                '@type': 'ImageObject',
                url: 'https://luuppi.fi/logo.png'
            }
        },
        author: {
            '@type': 'Person',
            name: news.attributes.authorName,
            image: news.attributes.authorImage?.data?.attributes?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(news.attributes.authorImage.data.attributes.url) : undefined
        },
        inLanguage: {
            '@type': 'Language',
            name: lang === 'en' ? 'English' : 'Finnish',
            alternateName: lang === 'en' ? 'en' : 'fi'
        }
    };
    return jsonLd;
};
const getBoardMemberJsonLd = (member)=>{
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: member.attributes?.fullName,
        email: member.attributes.boardRoles?.data.map((role)=>role.attributes.email),
        image: member?.attributes?.image?.data?.attributes?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(member.attributes?.image.data.attributes.url) : undefined,
        jobTitle: member.attributes.boardRoles?.data?.map((role)=>role.attributes.title),
        worksFor: {
            '@type': 'Organization',
            name: 'Luuppi ry',
            url: 'https://luuppi.fi'
        }
    };
    return jsonLd;
};
}}),
"[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsPost),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockRendererClient/BlockRendererClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNavigator$2f$SideNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SideNavigator/SideNavigator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SidePartners/SidePartners.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/constants/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/constants/time-constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$flip$2d$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/flip-locale.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$format$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/format-metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-url.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$json$2d$ld$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/json-ld.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
const baseUrl = '/api/news?populate[0]=banner&populate[1]=authorImage&populate[2]=Seo.openGraph.openGraphImage&populate[3]=Seo.twitter.twitterImage&populate[4]=localizations&populate=localizations.Seo.twitter.twitterImage&populate=localizations.Seo.openGraph.openGraphImage&filters[slug][$eq]=';
async function NewsPost(props) {
    const params = await props.params;
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(params.lang);
    const pageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])('tr', `${baseUrl}${params.slug}`, [
        'news-single'
    ]);
    const newsLocaleFlipped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$flip$2d$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flipNewsLocale"])(params.lang, pageData.data);
    const partnersData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])(params.lang, '/api/companies?populate=*', [
        'company'
    ]);
    if (!pageData.data.length) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${params.lang}/404`);
    }
    const selectedNews = newsLocaleFlipped[0];
    // No version of the content exists in the requested language
    if (!selectedNews?.attributes?.content) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${params.lang}/404`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$json$2d$ld$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsJsonLd"])(selectedNews, params.lang))
                },
                id: "news-jsonld",
                type: "application/ld+json"
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[2/1] w-full rounded-lg bg-gradient-to-r from-secondary-400 to-primary-300",
                                children: selectedNews.attributes.banner?.data?.attributes?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    alt: "News banner",
                                    className: 'rounded-lg object-cover',
                                    quality: 100,
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(selectedNews.attributes.banner?.data.attributes.url),
                                    fill: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PiImageBroken"], {
                                        className: "text-8xl text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            selectedNews.attributes.authorImage?.data?.attributes?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                alt: "News author avatar",
                                                className: "h-[50px] w-[50px] rounded-full bg-gradient-to-r from-secondary-400 to-primary-300 object-cover",
                                                height: 50,
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(selectedNews.attributes.authorImage.data?.attributes.url),
                                                width: 50
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-secondary-400 to-primary-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaUserAlt"], {
                                                    color: "white",
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            selectedNews.attributes.authorName,
                                                            ' ',
                                                            Boolean(selectedNews.attributes?.authorTitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal",
                                                                children: [
                                                                    "| ",
                                                                    selectedNews.attributes?.authorTitle
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm opacity-75",
                                                        children: new Date(selectedNews.attributes?.publishedAt || selectedNews.attributes.createdAt).toLocaleString(params.lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dateFormat"])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-extrabold max-md:text-3xl",
                                            children: selectedNews.attributes.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col opacity-40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: [
                                                dictionary.general.content_updated,
                                                ":",
                                                ' ',
                                                new Date(selectedNews.attributes.updatedAt).toLocaleString(params.lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dateFormat"])
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "luuppi-pattern absolute -left-28 -top-28 -z-50 h-[401px] w-[601px] max-md:left-0 max-md:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "organization-page prose prose-custom max-w-full decoration-secondary-400 transition-all duration-300 ease-in-out",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    content: selectedNews.attributes.content
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-36 h-full w-full max-w-80 max-lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNavigator$2f$SideNavigator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    dictionary: dictionary,
                                    targetClass: "organization-page"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    dictionary: dictionary,
                                    partnersData: partnersData.data
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
async function generateMetadata(props) {
    const params = await props.params;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])('tr', `${baseUrl}${params.slug}`, [
        'news-single'
    ]);
    const newsLocaleFlipped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$flip$2d$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flipNewsLocale"])(params.lang, data.data);
    const selectedNews = newsLocaleFlipped[0];
    const pathname = `/${params.lang}/news/${params.slug}`;
    // No version of the content exists in the requested language
    if (!selectedNews?.attributes?.content) {
        return {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$format$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMetadata"])({
        data: selectedNews
    }, pathname);
}
async function generateStaticParams() {
    const pageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])('tr', '/api/news?pagination[pageSize]=100', [
        'news-single'
    ]);
    return pageData.data.map((news)=>({
            slug: news.attributes.slug
        }));
}
}}),
"[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/(content-pages)/news/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b98d5a85._.js.map