import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required(`Sorry, we need to know your name.`)
    .min(2, `name must be at least 2 characters`),
    size: yup
    .string()
    .required(`Size is required to order a pizza.`),
    sauce: {
        marinara: yup
        .boolean()
        .oneOf([true]),
        alfredo: yup
        .boolean()
        .oneOf([true]),
        BBQ: yup
        .boolean()
        .oneOf([true]),
    },
    toppings: {
        pepperoni: yup
        .boolean()
        .oneOf([true]),
        bellPeppers: yup
        .boolean()
        .oneOf([true]),
        italianSausage: yup
        .boolean()
        .oneOf([true]),
        mushrooms: yup
        .boolean()
        .oneOf([true]),
        olives: yup
        .boolean()
        .oneOf([true]),
        chokes: yup
        .boolean()
        .oneOf([true]),
        chovies: yup
        .boolean()
        .oneOf([true]),
        bacon: yup
        .boolean()
        .oneOf([true]),
        canadianBacon: yup
        .boolean()
        .oneOf([true]),
        pineapple: yup
        .boolean()
        .oneOf([true]),
        chicken: yup
        .boolean()
        .oneOf([true]),
        basil: yup
        .boolean()
        .oneOf([true]),
        garlic: yup
        .boolean()
        .oneOf([true]),
        spinach: yup
        .boolean()
        .oneOf([true]),
        tomatoes: yup
        .boolean()
        .oneOf([true]),
        extraCheese: yup
        .boolean()
        .oneOf([true]),
    }
})