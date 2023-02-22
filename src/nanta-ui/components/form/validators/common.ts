
import type { Rule } from "ant-design-vue/lib/form/interface";
import { t } from '../../../locales/useI18n';
declare type Validator = (rule: Rule, value: any, callback: (error?: string) => void) => Promise<void> | void;

export const VAL_EMAIL: Validator = (rule, value, callback) => {
    if (!value) {
        return Promise.reject(t('validate.notEmpty'));
    }

    if (!validateEmail(value)) {
        return Promise.reject(t('validate.emailAddressInvalid'));
    }
    return Promise.resolve();
}

export const NOT_NEGATIVE: Validator = (rule, value, callback) => {
    if (!value) {
        return Promise.reject(t('validate.notEmpty'));
    }

    if (typeof value !== 'number') {
        return Promise.reject(t('validate.notNumber'));
    }

    if (value < 0) {
        return Promise.reject(t('validate.nonNegative'));
    }
    return Promise.resolve();
}

// included
export const INVALIDATE_LENGTH: Function = (minLen: number, maxLen: number) => {
    return ((rule, value, callback) => {
        if (!value) {
            return minLen == 0 ? Promise.resolve() : Promise.reject(t('validate.notEmpty'));
        } else {
            if (maxLen == minLen && value.length !== minLen) {
                return Promise.reject(t('validate.lenNotEqual', [minLen]));
            } else if (value.length < minLen) {
                return Promise.reject(t('validate.lessThen', [minLen]));
            } else if (value.length > maxLen) {
                return Promise.reject(t('validate.greaterThen', [maxLen]));
            } else {
                return Promise.resolve();
            }

        }
    }) as Validator
}

export const NOT_BLANK: Validator = (rule, value, callback) => {
    if (!value || value.length == 0) {
        return Promise.reject(t('validate.notEmpty'));
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
        return Promise.reject(t('validate.urlInvalid'));
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
