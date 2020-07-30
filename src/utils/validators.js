export const required = value => value? '' : 'Заполните это поле'
export const email = value => value && value.includes('@') && (value.includes('.ru') || (value.includes('.com')))? '' : 'Введите валидный email';
export const minLength = min => value => value && value.length < min? `Длина не должна быть меньше ${min} символов` : '';
export const maxLength = max => value => value && value.length <= max? '' : `Длина не должна превышать ${max} символов`;
export const minLength8 = minLength(8);
export const maxLength12 = maxLength(12);
export const minLength3 = minLength(3);
export const maxLength3 = maxLength(3);