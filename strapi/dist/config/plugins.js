"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => {
    return {
        upload: {
            config: {
                sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
            },
        },
        "upload-plugin-cache": {
            enabled: true,
            config: {
                maxAge: 86400000,
            },
        },
        email: {
            config: {
                provider: "nodemailer",
                providerOptions: {
                    host: "postfix",
                    port: 25,
                    secure: false,
                    ignoreTLS: true,
                },
                settings: {
                    defaultFrom: "cms@luuppi.fi",
                    defaultReplyTo: "cms@luuppi.fi",
                },
            },
        },
    };
};
