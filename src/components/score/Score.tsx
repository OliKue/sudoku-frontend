import "./Score.css";

export interface ScoreProps {
  mistakes: number;
  seconds: number;
}

export const Score: React.FC<ScoreProps> = ({ mistakes, seconds }) => {
  const render = (): React.ReactElement => {
    return (
      <div className="scoreContainer">
        <span>Mistakes: {mistakes}</span>
        <span> - </span>
        <span>Time: </span>
        <span>{("0" + Math.floor((seconds / 3600) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((seconds / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + (seconds % 60)).slice(-2)}</span>
      </div>
    );
  };

  return render();
};
