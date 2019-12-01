export const REGEX = {
    MAIL: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    NIF: /([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/,
    PHONE: /^[+].*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{5,}$/,
    NUMBER: /^[0-9]*$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*.?&]{8,}$/,
};

export const ONBOARDING_COMPLETED_LS = 'blockchain.onboarding-completed';
