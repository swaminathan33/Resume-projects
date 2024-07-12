export const boxVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.7,
            when:"beforeChildren",
            staggerChildren:0.3
        }
    }
}

export const listVariant = {
    hidden:{
        x:-200,
        opacity:0,

    },
    visible:{
        x:0,
        opacity:1,
    }
}