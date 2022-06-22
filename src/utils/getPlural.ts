export const getPlural = (num: number): string => {
    if (num % 10 === 1 && num !== 11) {
        return "мышь";
    }
    if (num % 10 > 1 && num % 10 < 5 && ![12, 13, 14].includes(num)) {
        return "мыши";
    }
    return "мышей";
};
