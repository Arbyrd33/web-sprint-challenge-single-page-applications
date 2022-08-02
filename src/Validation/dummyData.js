import {v4 as uuid} from "uuid";

const fakeData = [
    {
        id: uuid(),
        name: `Arbor`,
        size: "personal",
        pepperoni: false,
        bellPeppers: false,
        italianSausage: false,
        mushrooms: true,
        olives: false,
        chokes: true,
        chovies: false,
        bacon: false,
        canadianBacon: false,
        pineapple: false,
        chicken: false,
        basil: true,
        garlic: false,
        spinach: false,
        tomatoes: false,
        extraCheese: false,
      
        specialInstructions: "Easy on the red sauce please!"
    },
    {
        id: uuid(),
        name: `Chance`,
        size: `small`,
        pepperoni: false,
        bellPeppers: true,
        italianSausage: true,
        mushrooms: false,
        olives: false,
        chokes: false,
        chovies: false,
        bacon: false,
        canadianBacon: false,
        pineapple: false,
        chicken: false,
        basil: false,
        garlic: true,
        spinach: false,
        tomatoes: false,
        extraCheese: false,
    
        specialInstructions: "Pet any dog you see today."
    },
    {
        id: uuid(),
        name: `Nathan`,
        size: `medium`,

        pepperoni: false,
        bellPeppers: false,
        italianSausage: false,
        mushrooms: false,
        olives: false,
        chokes: false,
        chovies: false,
        bacon: false,
        canadianBacon: false,
        pineapple: true,
        chicken: true,
        basil: false,
        garlic: false,
        spinach: false,
        tomatoes: false,
        extraCheese: true,
        specialInstructions: "Can I have a pepper on the side? Thanks."
    }

]

export default fakeData;