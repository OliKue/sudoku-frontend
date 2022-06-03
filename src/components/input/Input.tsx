import "./Input.css";

export interface InputProps {
  onInputButton: (index: number) => void;
}

export const Input: React.FC<InputProps> = ({ onInputButton }) => {
  const render = (): React.ReactElement => {
    return (
      <div className="inputContainer">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
          return (
            <button
              key={index}
              className="numberInputButton"
              onClick={() => onInputButton(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    );
  };

  return render();
};
