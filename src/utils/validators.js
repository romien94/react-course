export const required = value => value? '': 'Заполните это поле';
export const numeric = value => value && parseInt(value)? '':'В поле должны содержаться только цифры';
export const date = value => {
    if (value) {
        const [date, month] = value.split('/');
        return date > 0 && date <= 31 && month > 0 && month <= 12? '' : 'Введите дату в формате dd/mm'
    }
    return value? '' : 'Заполните поле'    
}
export const name = value => {
    if (value) {
        const length = value.split(' ').length;
        const [name, surname] = value.split(' ')
        return length === 2 && name.length >= 2 && surname.length >= 2? '' : 'Заполните поле в формате NAME SURNAME'
    }
    return value? '' : 'Заполните поле'
}
export const email = value => value && value.includes('@') && (value.includes('.ru') || (value.includes('.com')))? '' : 'Введите валидный email';
export const minLength = min => value => value && value.length < min? `Длина не должна быть меньше ${min} символов` : '';
export const maxLength = max => value => value && value.length <= max? '' : `Длина не должна превышать ${max} символов`;
export const minLength8 = minLength(8);
export const maxLength12 = maxLength(12);
export const minLength3 = minLength(3);
export const maxLength3 = maxLength(3);
export const minLenegth16 = minLength(16);
export const maxLength16 = maxLength(16);