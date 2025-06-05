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
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/string_decoder [external] (string_decoder, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}}),
"[project]/src/libs/db/redis.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "redisClient": (()=>redisClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ioredis$2f$built$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ioredis/built/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/logger.ts [app-rsc] (ecmascript)");
;
;
const redisClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ioredis$2f$built$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
    lazyConnect: true
});
redisClient.on('error', (err)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Redis error', err));
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Connecting to Redis');
redisClient.connect();
;
}}),
"[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7cdc4514200fb188d8a4a97a0df77f2d827bd77f31":"reservationCreate"} */ __turbopack_context__.s({
    "reservationCreate": (()=>reservationCreate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/redis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const options = {
    noRoleId: process.env.NEXT_PUBLIC_NO_ROLE_ID
};
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ reservationCreate(eventId, amount, lang, selectedQuota, userProvidedTargetedRole) {
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            message: dictionary.api.unauthorized,
            isError: true
        };
    }
    // User provided targeted role cannot be trusted (can be manipulated by user), but this
    // prevents unnecessary database queries most of the time
    if (userProvidedTargetedRole && typeof userProvidedTargetedRole === 'string') {
        // Check if the event is sold out for the user's role
        const isSoldOut = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redisClient"].get(`event-sold-out:${eventId}:${userProvidedTargetedRole}`);
        if (isSoldOut) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info(`Cache hit: Event ${eventId} is sold out for role ${userProvidedTargetedRole}`);
            return {
                message: dictionary.api.sold_out,
                isError: true
            };
        }
    }
    if (!amount || isNaN(amount) || amount < 1) {
        return {
            message: dictionary.api.invalid_amount,
            isError: true
        };
    }
    if (!eventId || isNaN(eventId) || eventId < 1) {
        return {
            message: dictionary.api.invalid_event,
            isError: true
        };
    }
    const strapiUrl = `/api/events/${eventId}?populate=Registration.TicketTypes.Role&populate=Registration.RoleToGive`;
    const strapiEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])(lang, strapiUrl, [
        `event-${eventId}`
    ], true);
    if (!strapiEvent) {
        return {
            message: dictionary.api.invalid_event,
            isError: true
        };
    }
    // Preload user data outside transaction
    const localUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
        where: {
            entraUserUuid: session.user.entraUserUuid
        },
        include: {
            roles: {
                select: {
                    role: {
                        select: {
                            strapiRoleUuid: true
                        }
                    },
                    expiresAt: true
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
    if (!localUser) {
        return {
            message: dictionary.api.unauthorized,
            isError: true
        };
    }
    const strapiRoleUuids = localUser.roles.map((role)=>role.role.strapiRoleUuid) ?? [];
    const ticketTypes = strapiEvent.data.attributes.Registration?.TicketTypes;
    const eventRolesWithWeights = ticketTypes?.map((ticketType)=>({
            strapiRoleUuid: ticketType.Role?.data?.attributes?.RoleId,
            weight: ticketType.Weight
        })) ?? [];
    const hasDefaultRoleWeight = eventRolesWithWeights.find((role)=>role.strapiRoleUuid === options.noRoleId);
    const targetedRole = strapiRoleUuids.reduce((acc, strapiRoleUuid)=>{
        const roleWeight = eventRolesWithWeights.find((role)=>role.strapiRoleUuid === strapiRoleUuid)?.weight ?? 0;
        return roleWeight > acc.weight ? {
            strapiRoleUuid,
            weight: roleWeight
        } : acc;
    }, {
        strapiRoleUuid: options.noRoleId,
        weight: hasDefaultRoleWeight?.weight ?? 0
    });
    // This might happen if somehow user is sending stale data
    if (targetedRole.strapiRoleUuid !== selectedQuota) {
        return {
            message: dictionary.api.server_error,
            isError: true,
            reloadCache: true
        };
    }
    const ownQuota = ticketTypes?.find((type)=>type.Role?.data?.attributes?.RoleId === targetedRole.strapiRoleUuid);
    // Validate that the user has a role that can reserve tickets
    if (!ownQuota) {
        return {
            message: dictionary.api.unauthorized,
            isError: true
        };
    }
    // Validate that the registration is still open
    if (new Date(ownQuota.RegistrationEndsAt) < new Date()) {
        return {
            message: dictionary.api.registration_closed,
            isError: true
        };
    }
    // Validate that registration is open
    if (new Date(ownQuota.RegistrationStartsAt) > new Date()) {
        return {
            message: dictionary.api.registration_not_open,
            isError: true
        };
    }
    const strapiRoleUuid = targetedRole.strapiRoleUuid;
    const entraUserUuid = localUser.entraUserUuid;
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (prisma)=>{
        await prisma.$executeRaw`LOCK TABLE "EventRegistration" IN ACCESS EXCLUSIVE MODE`;
        const [eventRegistrations, currentUserReservations] = await Promise.all([
            prisma.eventRegistration.findMany({
                where: {
                    eventId,
                    deletedAt: null,
                    OR: [
                        {
                            reservedUntil: {
                                gte: new Date()
                            }
                        },
                        {
                            paymentCompleted: true
                        },
                        {
                            paymentCompleted: false,
                            payments: {
                                some: {
                                    status: 'PENDING'
                                }
                            }
                        }
                    ]
                },
                select: {
                    purchaseRole: {
                        select: {
                            strapiRoleUuid: true
                        }
                    }
                }
            }),
            prisma.eventRegistration.count({
                where: {
                    eventId,
                    entraUserUuid: localUser.entraUserUuid,
                    purchaseRole: {
                        strapiRoleUuid: targetedRole.strapiRoleUuid
                    },
                    deletedAt: null,
                    OR: [
                        {
                            reservedUntil: {
                                gte: new Date()
                            }
                        },
                        {
                            paymentCompleted: true
                        },
                        {
                            paymentCompleted: false,
                            payments: {
                                some: {
                                    status: 'PENDING'
                                }
                            }
                        }
                    ]
                }
            })
        ]);
        const totalRegistrationWithRole = eventRegistrations.filter((registration)=>registration.purchaseRole.strapiRoleUuid === targetedRole.strapiRoleUuid).length;
        // Validate that the event is not sold out for the user's role
        if (totalRegistrationWithRole >= ownQuota.TicketsTotal) {
            return {
                message: dictionary.api.sold_out,
                isError: true
            };
        }
        const ticketsAvailable = ownQuota.TicketsTotal - totalRegistrationWithRole;
        const ticketsAllowedToBuy = ownQuota.TicketsAllowedToBuy;
        // Validate that the user has not already reserved the maximum amount of tickets
        if (currentUserReservations >= ticketsAllowedToBuy) {
            return {
                message: dictionary.api.maximum_tickets_reached,
                isError: true
            };
        }
        // Validate per user limit still allows the user to reserve the amount
        const canReserveAmount = amount + currentUserReservations <= ticketsAllowedToBuy;
        if (!canReserveAmount) {
            return {
                message: dictionary.api.no_room_own_limit,
                isError: true
            };
        }
        // Validate that there are still enough tickets available
        const isAvailable = amount <= ticketsAvailable;
        if (!isAvailable) {
            return {
                message: dictionary.api.not_enough_tickets,
                isError: true
            };
        }
        // Buys the last tickets
        if (amount + totalRegistrationWithRole >= ownQuota.TicketsTotal) {
            // Set event as sold out for this role in redis for 3 minutes
            // to prevent unnecessary database locks & backend calculations
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info(`Event ${eventId} is sold out for role ${strapiRoleUuid}. Setting sold out in redis for 3 minutes.`);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redisClient"].set(`event-sold-out:${eventId}:${strapiRoleUuid}`, 'true', 'EX', 180);
            // Revalidates cache for event registrations so that the sold out status is updated
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(`get-cached-event-registrations:${eventId}`);
        }
        const hasDefaultRole = localUser.roles.find((role)=>role.role.strapiRoleUuid === options.noRoleId);
        if (!hasDefaultRole) {
            // User should always have a default role
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('User doesnt have a default role. This should never happen.', localUser.entraUserUuid);
            throw new Error(dictionary.api.server_error);
        }
        // Create event registrations. This is the actual reservation.
        const eventRegistrationsFormatted = Array.from({
            length: amount
        }).map(()=>({
                eventId,
                entraUserUuid,
                strapiRoleUuid,
                price: ownQuota.Price
            }));
        await prisma.eventRegistration.createMany({
            data: eventRegistrationsFormatted
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info(`User ${localUser.entraUserUuid} reserved ${amount} tickets for event ${eventId}. User's total count of tickets for this event is now ${currentUserReservations + amount}`);
        return {
            message: dictionary.general.success,
            isError: false
        };
    }).catch((error)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error creating reservation', error);
        return {
            message: dictionary.api.server_error,
            isError: true
        };
    });
    if (result.isError) {
        return result;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(`get-cached-user:${localUser.entraUserUuid}`);
    return {
        message: dictionary.general.success,
        isError: false
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    reservationCreate
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reservationCreate, "7cdc4514200fb188d8a4a97a0df77f2d827bd77f31", null);
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7cdc4514200fb188d8a4a97a0df77f2d827bd77f31": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reservationCreate"]),
    "7fa0376e0378ee12c6beff709c4be66701a9b243e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"]),
    "7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7cdc4514200fb188d8a4a97a0df77f2d827bd77f31": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7cdc4514200fb188d8a4a97a0df77f2d827bd77f31"]),
    "7fa0376e0378ee12c6beff709c4be66701a9b243e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa0376e0378ee12c6beff709c4be66701a9b243e6"]),
    "7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fd2bf55fea4e4faef504338e5c9aa4e0e644cf712"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f28$content$2d$pages$292f$events$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$reservation$2d$create$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/(content-pages)/events/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/reservation-create.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/[lang]/(content-pages)/events/[slug]/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/(content-pages)/events/[slug]/loading.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/libs/db/queries/get-cached-event-participants.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCachedEventParticipants": (()=>getCachedEventParticipants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
'server-only';
;
;
const getCachedEventParticipants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (eventId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].eventRegistration.findMany({
        where: {
            eventId,
            deletedAt: null,
            paymentCompleted: true,
            event: {
                endDate: {
                    gte: new Date()
                }
            }
        },
        include: {
            user: true
        },
        orderBy: {
            createdAt: 'asc'
        },
        distinct: [
            'entraUserUuid'
        ]
    });
    return res;
}, [
    'get-cached-event-participants'
], {
    revalidate: 60
});
}}),
"[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx <module evaluation>", "default");
}}),
"[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx", "default");
}}),
"[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipantsDialog$2f$ShowParticipantsDialog$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipantsDialog$2f$ShowParticipantsDialog$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipantsDialog$2f$ShowParticipantsDialog$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/ShowParticipants/ShowParticipants.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ShowParticipants),
    "revalidate": (()=>revalidate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$queries$2f$get$2d$cached$2d$event$2d$participants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/queries/get-cached-event-participants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipantsDialog$2f$ShowParticipantsDialog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ShowParticipants/ShowParticipantsDialog/ShowParticipantsDialog.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const revalidate = 60; // revalidate the data at most every 60 seconds
async function ShowParticipants({ eventId, lang }) {
    // FIXME: Somewhat hacky way to not require database connection during build
    if (process.env.NEXT_PHASE === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHASE_PRODUCTION_BUILD"]) {
        return;
    }
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    const registrations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$queries$2f$get$2d$cached$2d$event$2d$participants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCachedEventParticipants"])(eventId);
    const participants = registrations.map((registration)=>registration.user.username ?? '???');
    return Boolean(registrations.length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipantsDialog$2f$ShowParticipantsDialog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        dictionary: dictionary,
        participants: participants
    }, void 0, false, {
        fileName: "[project]/src/components/ShowParticipants/ShowParticipants.tsx",
        lineNumber: 31,
        columnNumber: 7
    }, this);
}
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
"[project]/src/libs/db/queries/get-cached-event-registrations.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCachedEventRegistrations": (()=>getCachedEventRegistrations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
'server-only';
;
;
const getCachedEventRegistrations = (eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (eventId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].eventRegistration.findMany({
            where: {
                eventId,
                deletedAt: null,
                OR: [
                    {
                        reservedUntil: {
                            gte: new Date()
                        }
                    },
                    {
                        paymentCompleted: true
                    },
                    {
                        paymentCompleted: false,
                        payments: {
                            some: {
                                status: 'PENDING'
                            }
                        }
                    }
                ]
            },
            select: {
                entraUserUuid: true,
                paymentCompleted: true,
                purchaseRole: {
                    select: {
                        strapiRoleUuid: true
                    }
                }
            }
        });
        return res;
    }, [
        'get-cached-event-registrations'
    ], {
        revalidate: 60,
        tags: [
            `get-cached-event-registrations:${eventId}`
        ]
    })(eventId);
}}),
"[project]/src/libs/db/queries/get-cached-user.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCachedUser": (()=>getCachedUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
'server-only';
;
;
const getCachedUser = (entraUserUuid)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (entraUserUuid)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findFirst({
            where: {
                entraUserUuid
            },
            select: {
                entraUserUuid: true,
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
                },
                registrations: {
                    where: {
                        deletedAt: null,
                        OR: [
                            {
                                paymentCompleted: true
                            },
                            {
                                reservedUntil: {
                                    gte: new Date()
                                }
                            }
                        ]
                    }
                }
            }
        });
        return res;
    }, [
        'get-cached-user'
    ], {
        revalidate: 60,
        tags: [
            `get-cached-user:${entraUserUuid}`
        ]
    })(entraUserUuid);
}}),
"[project]/src/components/Ticket/Ticket.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Ticket/Ticket.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Ticket/Ticket.tsx <module evaluation>", "default");
}}),
"[project]/src/components/Ticket/Ticket.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Ticket/Ticket.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Ticket/Ticket.tsx", "default");
}}),
"[project]/src/components/Ticket/Ticket.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$Ticket$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Ticket/Ticket.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$Ticket$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/Ticket/Ticket.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$Ticket$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/Ticket/TicketArea.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TicketArea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$queries$2f$get$2d$cached$2d$event$2d$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/queries/get-cached-event-registrations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$queries$2f$get$2d$cached$2d$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/db/queries/get-cached-user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$Ticket$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Ticket/Ticket.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function TicketArea({ lang, event }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    const ticketTypes = event.data.attributes.Registration?.TicketTypes;
    const localUserPromise = session?.user?.entraUserUuid ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$queries$2f$get$2d$cached$2d$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCachedUser"])(session.user.entraUserUuid) : null;
    const eventRegistrationsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$db$2f$queries$2f$get$2d$cached$2d$event$2d$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCachedEventRegistrations"])(event.data.id);
    const [localUser, eventRegistrations] = await Promise.all([
        localUserPromise,
        eventRegistrationsPromise
    ]);
    const strapiRoleUuids = localUser?.roles.map((role)=>role.role.strapiRoleUuid) ?? [];
    const eventRolesWithWeights = ticketTypes?.map((ticketType)=>({
            strapiRoleUuid: ticketType.Role?.data?.attributes?.RoleId,
            weight: ticketType.Weight
        })) ?? [];
    const hasDefaultRoleWeight = eventRolesWithWeights.find((role)=>role.strapiRoleUuid === process.env.NEXT_PUBLIC_NO_ROLE_ID);
    const targetedRole = strapiRoleUuids.reduce((acc, strapiRoleUuid)=>{
        const roleWeight = eventRolesWithWeights.find((role)=>role.strapiRoleUuid === strapiRoleUuid)?.weight ?? 0;
        return roleWeight > acc.weight ? {
            strapiRoleUuid: strapiRoleUuid,
            weight: roleWeight
        } : acc;
    }, {
        strapiRoleUuid: process.env.NEXT_PUBLIC_NO_ROLE_ID,
        weight: hasDefaultRoleWeight?.weight ?? 0
    });
    const isOwnQuota = (role)=>{
        if (!session?.user) return false;
        return targetedRole.strapiRoleUuid === role;
    };
    const isSoldOut = (total, roleUuid)=>{
        if (!eventRegistrations) return false;
        const totalRegistrationWithRole = eventRegistrations.filter((registration)=>registration.purchaseRole.strapiRoleUuid === roleUuid).length;
        return totalRegistrationWithRole >= total;
    };
    const isRegistrationOpen = (registrationEndsAt)=>new Date() < new Date(registrationEndsAt);
    const hasBoughtMaxTickets = (roleUuid, maxAmount)=>{
        if (!eventRegistrations || !localUser) return false;
        const userPurchases = localUser.registrations.filter((registration)=>registration.eventId === event.data.id);
        const userPurchasesWithRole = userPurchases.filter((registration)=>registration.strapiRoleUuid === roleUuid);
        return userPurchasesWithRole.length >= maxAmount;
    };
    const hasUnpaidReservations = (roleUuid)=>{
        if (!eventRegistrations || !localUser) return false;
        const userPurchases = localUser.registrations.filter((registration)=>registration.eventId === event.data.id);
        const userPurchasesWithRole = userPurchases.filter((registration)=>registration.strapiRoleUuid === roleUuid);
        return userPurchasesWithRole.some((registration)=>!registration.paymentCompleted);
    };
    const ownQuota = ticketTypes?.find((type)=>type.Role?.data?.attributes?.RoleId === targetedRole.strapiRoleUuid);
    const isSoldOutOwnQuota = ownQuota ? isSoldOut(ownQuota.TicketsTotal, ownQuota.Role?.data?.attributes?.RoleId) : false;
    const hasUnpaidReservationsOwnQuota = ownQuota ? hasUnpaidReservations(ownQuota.Role?.data?.attributes?.RoleId) : false;
    const hasBoughtMaxTicketsOwnQuota = ownQuota ? hasBoughtMaxTickets(ownQuota.Role?.data?.attributes?.RoleId, ownQuota.TicketsAllowedToBuy) : false;
    const isRegistrationOpenOwnQuota = ownQuota ? isRegistrationOpen(new Date(ownQuota.RegistrationEndsAt)) : false;
    const ticketTypesFormatted = ticketTypes?.filter((type)=>Boolean(type.Role?.data?.attributes?.RoleId))?.map((ticketType)=>({
            name: ticketType[lang === 'en' ? 'NameEn' : 'NameFi'],
            location: event.data.attributes[lang === 'en' ? 'LocationEn' : 'LocationFi'],
            price: ticketType.Price,
            role: ticketType.Role?.data?.attributes?.RoleId,
            registrationStartsAt: new Date(ticketType.RegistrationStartsAt),
            registrationEndsAt: new Date(ticketType.RegistrationEndsAt),
            isOwnQuota: isOwnQuota(ticketType.Role?.data?.attributes?.RoleId),
            maxTicketsPerUser: ticketType.TicketsAllowedToBuy
        })).sort((a, b)=>a.isOwnQuota === b.isOwnQuota ? 0 : a.isOwnQuota ? -1 : 1);
    // Add configuration validation
    const getConfigurationErrors = ()=>{
        const errors = [];
        // Check for missing roles
        const quotasWithoutRoles = ticketTypes?.filter((type)=>!type.Role?.data?.attributes?.RoleId);
        if (quotasWithoutRoles?.length) {
            errors.push(`${quotasWithoutRoles.length} quota(s) missing role configuration`);
        }
        // Check for invalid registration dates
        ticketTypes?.forEach((type)=>{
            const startsAt = new Date(type.RegistrationStartsAt);
            const endsAt = new Date(type.RegistrationEndsAt);
            if (startsAt >= endsAt) {
                errors.push(`Invalid registration dates for ${type[lang === 'en' ? 'NameEn' : 'NameFi']}: registration ends before it starts`);
            }
        });
        // Check for duplicate roles
        const roleIds = ticketTypes?.map((type)=>type.Role?.data?.attributes?.RoleId).filter(Boolean);
        const duplicateRoles = roleIds?.filter((id, index)=>roleIds.indexOf(id) !== index);
        if (duplicateRoles?.length) {
            errors.push(`Multiple quotas configured for same role(s): ${duplicateRoles.join(', ')}`);
        }
        // Check for duplicate weights
        const weights = ticketTypes?.map((type)=>type.Weight);
        const duplicateWeights = weights?.filter((weight, index)=>weights.indexOf(weight) !== index);
        if (duplicateWeights?.length) {
            errors.push(`Multiple quotas have same weight(s): ${duplicateWeights.join(', ')}`);
        }
        // Check question edit deadline
        const questionEditUntil = event.data.attributes.Registration?.AllowQuestionEditUntil;
        const registrationEndDates = ticketTypes?.map((type)=>new Date(type.RegistrationEndsAt));
        if (questionEditUntil && registrationEndDates?.some((date)=>new Date(questionEditUntil) < date)) {
            errors.push('Question edit deadline is set before registration ends');
        }
        return errors;
    };
    const configErrors = getConfigurationErrors();
    if (configErrors.length || !ticketTypesFormatted?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "alert rounded-lg bg-red-200 text-sm text-red-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BiErrorCircle"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: configErrors.length > 0 ? 'Configuration Error(s)' : dictionary.pages_events.no_tickets
                        }, void 0, false, {
                            fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        configErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "ml-4 mt-1 list-disc",
                            children: configErrors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: error
                                }, index, false, {
                                    fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Ticket/TicketArea.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    const getErrors = ()=>{
        const errors = [];
        if (!session?.user) errors.push({
            message: dictionary.pages_events.login_required,
            level: 'error'
        });
        if (session?.user && !ownQuota) {
            errors.push({
                message: dictionary.pages_events.no_quota,
                level: 'error'
            });
        }
        if (isSoldOutOwnQuota && ownQuota) errors.push({
            message: dictionary.pages_events.sold_out_info,
            level: 'warn'
        });
        if (hasBoughtMaxTicketsOwnQuota && ownQuota) errors.push({
            message: dictionary.pages_events.max_tickets_bought,
            level: 'info'
        });
        if (!isRegistrationOpenOwnQuota && ownQuota) errors.push({
            message: dictionary.pages_events.registration_closed,
            level: 'info'
        });
        if (hasUnpaidReservationsOwnQuota && ownQuota) errors.push({
            message: dictionary.pages_events.unpaid_reservations,
            level: 'warn'
        });
        return errors;
    };
    const errors = getErrors();
    return ticketTypesFormatted.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            errors.map((error, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `alert rounded-lg text-sm ${error.level === 'warn' ? 'bg-yellow-200/50 text-yellow-800' : error.level === 'info' ? 'bg-blue-200 text-blue-800' : 'bg-red-200 text-sm text-red-800'} ${i === errors.length - 1 ? 'mb-8' : 'mb-4'}`,
                    children: [
                        error.level === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BiErrorCircle"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                            lineNumber: 283,
                            columnNumber: 39
                        }, this),
                        error.level === 'warn' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoWarningOutline"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                            lineNumber: 284,
                            columnNumber: 38
                        }, this),
                        error.level === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoIosInformationCircleOutline"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        error.message
                    ]
                }, error.message, true, {
                    fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: ticketTypesFormatted?.map((ticket, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$Ticket$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        dictionary: dictionary,
                        disabled: !ticket.isOwnQuota || isSoldOutOwnQuota || hasBoughtMaxTicketsOwnQuota || !isRegistrationOpenOwnQuota,
                        eventId: event.data.id,
                        eventStartsAt: new Date(event.data.attributes.StartDate),
                        isOwnQuota: isOwnQuota(ticket.role),
                        lang: lang,
                        targetedRole: targetedRole.strapiRoleUuid,
                        ticket: ticket
                    }, `${ticket.name}-${index}`, false, {
                        fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "alert rounded-lg bg-blue-200 text-blue-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BiErrorCircle"], {
                size: 24
            }, void 0, false, {
                fileName: "[project]/src/components/Ticket/TicketArea.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            dictionary.pages_events.no_tickets
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Ticket/TicketArea.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/libs/utils/first-letter-uppercase.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/libs/utils/format-date-range.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDateRangeLong": (()=>formatDateRangeLong),
    "formatDateRangeShort": (()=>formatDateRangeShort)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/constants/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/constants/time-constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/first-letter-uppercase.ts [app-rsc] (ecmascript)");
;
;
const formatDateRangeLong = (start, end, lang)=>{
    const startUTC = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
    const endUTC = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
    const isMultipleDays = startUTC.toDateString() !== endUTC.toDateString();
    if (!isMultipleDays) {
        if (start.toISOString() === end.toISOString()) {
            return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(new Intl.DateTimeFormat(lang, {
                hour: 'numeric',
                minute: 'numeric',
                day: 'numeric',
                month: 'short',
                weekday: 'long',
                timeZone: 'Europe/Helsinki'
            }).format(start))}`;
        }
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(start.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["longDateFormat"]))} - ${start.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shortTimeFormat"])}-${end.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shortTimeFormat"])}`;
    }
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(start.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shortDateFormat"]))} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$first$2d$letter$2d$uppercase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firstLetterToUpperCase"])(end.toLocaleString(lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shortDateFormat"]))}`;
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
"[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Event)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockRendererClient/BlockRendererClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipants$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ShowParticipants/ShowParticipants.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SidePartners/SidePartners.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$TicketArea$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Ticket/TicketArea.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/constants/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/constants/time-constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/strapi/get-strapi-url.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$format$2d$date$2d$range$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/format-date-range.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$json$2d$ld$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/utils/json-ld.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-rsc] (ecmascript)");
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
async function Event(props) {
    const params = await props.params;
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(params.lang);
    const id = parseInt(params.slug, 10);
    if (isNaN(id)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Etkinlik bulunamadi"
        }, void 0, false, {
            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    /* eslint-disable */ // ... diğer importlar ve kodlar
    console.log('yazdir sayfası render edildi!' + params.slug);
    // ... diğer kodlar
    /* eslint-enable */ const url = `/api/events/${params.slug}?populate=Seo.twitter.twitterImage&populate=Seo.openGraph.openGraphImage&populate=Image&populate=Registration.TicketTypes.Role`;
    const event = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])(params.lang, url, [
        `event-${params.slug}`
    ], true);
    if (!event) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Etkinlik bulunamadi"
        }, void 0, false, {
            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    const partnersData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiData"])(params.lang, '/api/companies?populate=*', [
        'company'
    ]);
    if (!event || !partnersData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Etkinlik bulunamadi"
        }, void 0, false, {
            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    const imageUrlLocalized = params.lang === 'en' && event.data.attributes.ImageEn?.data?.attributes?.url ? event.data.attributes.ImageEn?.data?.attributes?.url : event.data.attributes.Image?.data?.attributes?.url;
    const imageUrl = imageUrlLocalized ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$strapi$2f$get$2d$strapi$2d$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiUrl"])(imageUrlLocalized) : null;
    const hasRegistration = event.data.attributes?.Registration?.TicketTypes?.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$json$2d$ld$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventJsonLd"])(event, params.lang))
                },
                id: "event-jsonld",
                type: "application/ld+json"
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-full gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-12 h-64 rounded-lg bg-gradient-to-r from-secondary-400 to-primary-300 max-md:h-44",
                                children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    alt: "Page banner image",
                                    className: "rounded-lg object-cover",
                                    src: imageUrl,
                                    fill: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PiImageBroken"], {
                                        className: "text-8xl text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "break-words",
                                        children: event.data.attributes[params.lang === 'en' ? 'NameEn' : 'NameFi']
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 95,
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
                                                new Date(event.data.attributes.updatedAt).toLocaleString(params.lang, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$constants$2f$time$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dateFormat"])
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "luuppi-pattern absolute -left-28 -top-28 -z-50 h-[401px] w-[601px] max-md:left-0 max-md:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12 mt-4 flex gap-4 rounded-lg bg-background-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 shrink-0 rounded-l-lg bg-secondary-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex max-w-full flex-col gap-2 rounded-lg py-4 pr-4 font-semibold max-sm:text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mr-2 flex items-center justify-center rounded-full bg-primary-400 p-2 text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoCalendarOutline"], {
                                                            className: "shrink-0 text-2xl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "line-clamp-2",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$utils$2f$format$2d$date$2d$range$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateRangeLong"])(new Date(event.data.attributes.StartDate), new Date(event.data.attributes.EndDate), params.lang)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mr-2 flex items-center justify-center rounded-full bg-primary-400 p-2 text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoLocationOutline"], {
                                                            className: "shrink-0 text-2xl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "line-clamp-2",
                                                        children: event.data.attributes[params.lang === 'en' ? 'LocationEn' : 'LocationFi']
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            hasRegistration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-4 text-2xl font-bold",
                                        children: dictionary.pages_events.tickets
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "skeleton h-24 w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "skeleton h-24 w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticket$2f$TicketArea$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            event: event,
                                            lang: params.lang
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "skeleton h-8 w-48"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShowParticipants$2f$ShowParticipants$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            eventId: id,
                                            lang: params.lang
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "organization-page prose prose-custom max-w-full break-words decoration-secondary-400 transition-all duration-300 ease-in-out",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockRendererClient$2f$BlockRendererClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    content: event.data.attributes[params.lang === 'en' ? 'DescriptionEn' : 'DescriptionFi']
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-36 h-full w-full max-w-80 max-lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidePartners$2f$SidePartners$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                dictionary: dictionary,
                                partnersData: partnersData.data
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
} // TODO: Remove when partial pre-rendering is available in Nextjs 15
 // export async function generateStaticParams() {
 //   const url = '/api/events';
 //   const data = await getStrapiData<APIResponseCollection<'api::event.event'>>(
 //     'fi',
 //     url,
 //     ['event'],
 //     true,
 //   );
 //   if (!data) return [];
 //   const events = data.data
 //     .filter((e) => e.id)
 //     .map((event) => event.id.toString());
 //   return events.map((eventId) => ({
 //     slug: eventId,
 //   }));
 // }
}}),
"[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/(content-pages)/events/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__99dd2f19._.js.map