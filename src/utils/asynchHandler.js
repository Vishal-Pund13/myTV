const asynchHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}



export {asynchHandler}

// const asynchHandler = () => {}
// const asynchHandler = (fn) => { () => {} } 
// const asynchHandler = (fn) => async () => {} 

// fn =============== requestHandler(don't include this in code)
// const asynchHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }