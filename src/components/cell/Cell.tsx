import "./Cell.css";

export interface CellProps {
  currentValue: string;
  solvedValue: string;
  onChange: (newValue: string) => void;
  onFalseInput: () => void;
}

export const Cell: React.FC<CellProps> = ({
  currentValue,
  solvedValue,
  onChange,
  onFalseInput,
}) => {
  const checkInput = (input: string) => {
    if (input === solvedValue) {
      onChange(input);
    } else {
      onFalseInput();
    }
  };

  const render = (): React.ReactElement => {
    return (
      <input
        className="cellInput"
        type="text"
        value={currentValue === "0" ? "" : currentValue}
        onChange={(event) => checkInput(event.currentTarget.value)}
        disabled={currentValue !== "0"}
      ></input>
    );
  };

  return render();
};
