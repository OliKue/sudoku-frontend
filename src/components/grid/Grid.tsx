import { Cell } from "../cell/Cell";
import "./Grid.css";

export interface GridProps {
  values: string[];
  clickedCell: number;
  onClick: (index: number) => void;
}

export const Grid: React.FC<GridProps> = ({ values, onClick, clickedCell }) => {
  const render = (): React.ReactElement => {
    return (
      <div className="grid grid-cols-9">
        {values.map((value, index) => {
          return (
            <Cell
              isClicked={clickedCell === index ? true : false}
              isSolved={values[index] === "0" ? false : true}
              key={index}
              value={values[index]}
              onClick={() => onClick(index)}
            />
          );
        })}
      </div>
    );
  };

  return render();
};
