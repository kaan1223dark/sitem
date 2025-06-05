const CHUNK_PUBLIC_PATH = "server/instrumentation.js";
const runtime = require("./chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/_f2a21f31._.js");
runtime.getOrInstantiateRuntimeModule("[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
