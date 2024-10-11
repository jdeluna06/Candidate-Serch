import type Candidate from '../interfaces/Candidate.interface';
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";

type CandidateCardProps = {
  currentCandidate: Candidate;
  selectCandidate: (selected: boolean) => void;
};
const CandidateCard = ({ currentCandidate, selectCandidate }: CandidateCardProps) => {
  return (
    <div>
      {currentCandidate?.login ? (
        <>
          {currentCandidate?.avatar_url ? (
            <img src={currentCandidate.avatar_url} alt="avatar" />
          ) : (
            <img src={"https://placehold.co/600x400"} alt="place holder" />
          )}

          <h1>{currentCandidate.name}</h1>
          <h2>{currentCandidate.login}</h2>
          <p>{currentCandidate.bio}</p>
          <p>{currentCandidate.company}</p>
          <p>{currentCandidate.location}</p>
          <IoRemoveCircle
            style={{
              color: "red",
              fontSize: "80px",
              cursor: "pointer",
            }}
            onClick={() => selectCandidate(false)}

          />
          <IoAddCircle
            style={{
              fontSize: "80px",
              color: "green",
              cursor: "pointer",
            }}
            onClick={() => selectCandidate(true)}
          />
        </>
      ) : (
        <h2>No Candidate at this time</h2>
      )}
    </div>
  );
}
export default CandidateCard;