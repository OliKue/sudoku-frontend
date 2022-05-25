import axios from "axios";

export interface ResponseData {
    unsolvedGame: string;
    solvedGame: string;
}

export class SudokuApi {
    public static async getSudoku(diff: string){
        const {data} = await axios.get<ResponseData>("https://my5ud0ku.herokuapp.com/sudoku/get/"+diff)
        return data
    }
}