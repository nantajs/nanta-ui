
import type { Rule } from "ant-design-vue/lib/form/interface";
declare type Validator = (rule: Rule, value: any, callback: (error?: string) => void) => Promise<void> | void;

export const VAL_EMAIL: Validator = (rule, value, callback) => {
    if (!value) {
        return Promise.reject('Value cannot be empty.');
    }

    if (!validateEmail(value)) {
        return Promise.reject('The email address is invalid.');
    }
    return Promise.resolve();
}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const VAL_URL: Validator = (rule, value, callback) => {
    if (!isValidHttpUrl(value)) {
        return Promise.reject('Illgal value as url.');
    }
    return Promise.resolve();
}

function isValidHttpUrl(urlV: string) {
    let url;
    try {
        url = new URL(urlV);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export interface ValidateParams {
    value: any;
    field: string;
    extra: object;
}

export const remoteValidate = (req: (params: ValidateParams) => Promise<void>, field: string, extra: object): Validator => {
    return (_, value) => {
        return new Promise((resolve, reject) => {
            req({ value, field, extra })
                .then(() => resolve())
                .catch(err => {
                    reject(err.message || 'remote validate failed.');
                });
        });
    };
};
