import { VAL_EMAIL, remoteValidate, VAL_URL, NOT_BLANK, NOT_NEGATIVE, INVALIDATE_LENGTH } from "./common";


export const VALIDATORS = {
    email: VAL_EMAIL,
    remote: remoteValidate,
    url: VAL_URL,
    notBlank: NOT_BLANK,
    notNegative: NOT_NEGATIVE,
    len: INVALIDATE_LENGTH,
}