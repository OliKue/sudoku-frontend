import { Cell } from "../cell/Cell";
import "./Grid.css";

export interface GridProps {
  values: string[];
  solutionValues: string[];
  onChange: (index: number, newValue: string) => void;
  onFalseInput: () => void;
}

export const Grid: React.FC<GridProps> = ({
  values,
  solutionValues,
  onChange,
  onFalseInput,
}) => {
  const render = (): React.ReactElement => {
    return (
      <div className="grid">
        <table>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, rIndex) => {
              return (
                <tr key={rIndex} className={row % 3 === 0 ? "bBorder" : ""}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((col, cIndex) => {
                    return (
                      <td
                        key={rIndex * 9 + cIndex}
                        className={col % 3 === 0 ? "rBorder" : ""}
                      >
                        <Cell
                          key={rIndex * 9 + cIndex}
                          solvedValue={solutionValues[rIndex * 9 + cIndex]}
                          currentValue={values[rIndex * 9 + cIndex]}
                          onChange={(newValue) =>
                            onChange(rIndex * 9 + cIndex, newValue)
                          }
                          onFalseInput={() => onFalseInput()}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return render();
};
