export function required(value) {
    return !value ? 'Поле должно быть заполнено' : undefined
}

export function maxLength20(value) {
    return value && value.length <= 20 ? undefined : 'Не более 20 символов'
}