export const unsolvedGame = "4,6,5,9,0,0,0,0,1,0,9,0,7,0,8,6,0,0,0,0,8,0,0,0,0,3,0,6,5,4,3,9,2,0,1,0,0,0,0,5,0,0,3,2,9,0,3,0,8,0,1,5,0,0,0,4,0,0,0,9,1,0,8,8,1,0,0,0,6,2,0,3,3,0,0,1,8,0,0,6,0"
export const solvedGame = "4,6,5,9,2,3,7,8,1,2,9,3,7,1,8,6,5,4,1,7,8,6,4,5,9,3,2,6,5,4,3,9,2,8,1,7,7,8,1,5,6,4,3,2,9,9,3,2,8,7,1,5,4,6,5,4,6,2,3,9,1,7,8,8,1,7,4,5,6,2,9,3,3,2,9,1,8,7,4,6,5"

const getGame=async()=>{
    
    const result = {
        "unsolvedGame" : "4,6,5,9,0,0,0,0,1,0,9,0,7,0,8,6,0,0,0,0,8,0,0,0,0,3,0,6,5,4,3,9,2,0,1,0,0,0,0,5,0,0,3,2,9,0,3,0,8,0,1,5,0,0,0,4,0,0,0,9,1,0,8,8,1,0,0,0,6,2,0,3,3,0,0,1,8,0,0,6,0",
        "solvedGame" : "4,6,5,9,2,3,7,8,1,2,9,3,7,1,8,6,5,4,1,7,8,6,4,5,9,3,2,6,5,4,3,9,2,8,1,7,7,8,1,5,6,4,3,2,9,9,3,2,8,7,1,5,4,6,5,4,6,2,3,9,1,7,8,8,1,7,4,5,6,2,9,3,3,2,9,1,8,7,4,6,5"
    }
    return Promise.resolve(result)
}