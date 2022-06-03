import "./Cell.css";

export interface CellProps {
  value: string;
  isClicked: boolean;
  isSolved: boolean;
  onClick: () => void;
}

export const Cell: React.FC<CellProps> = ({
  value,
  isClicked,
  isSolved,
  onClick,
}) => {
  const render = (): React.ReactElement => {
    var className: string = "cell";
    if (isClicked) {
      className = "cell clicked";
    }
    if (isSolved) {
      className = "cell";
    }
    return (
      <div className={className} onClick={onClick}>
        {value === "0" ? "" : value}
      </div>
    );
  };

  return render();
};
