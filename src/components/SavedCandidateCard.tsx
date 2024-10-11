import type Candidate from '../interfaces/Candidate.interface';
import { IoRemoveCircle } from "react-icons/io5";
type SavedCandidateCardProps = {
    savedCandidate: Candidate;
    removeCandidate: (id: number) => void;
};
const SavedCandidateCard = ({ savedCandidate, removeCandidate }: SavedCandidateCardProps) => {
    return (
      <tr>
        {savedCandidate ? (
          <>
            <td>
              {savedCandidate?.avatar_url ? (
                <img src={savedCandidate.avatar_url} alt="avatar" />
              ) : (
                <img src={"https://placehold.co/600x400"} alt="place holder" />
              )}
            </td>
            <td>
              <a href={savedCandidate.html_url || ""} target="_blank" rel="noreferrer">
                <h3>{savedCandidate.name}</h3>
                <p>{savedCandidate.login}</p>


              </a>
            </td>
            <td>
              <p>{savedCandidate.location}</p>
            </td>
            <td>
              <a href={`mailto:${savedCandidate.email}`}>{savedCandidate.email}</a>
            </td>
            <td>
              <p>{savedCandidate.company}</p>
            </td>
            <td style={{maxHeight:"100px", overflowY: "scroll"}}>
              <p>{savedCandidate.bio}</p>
            </td>
            <IoRemoveCircle
              style={{
                color: "red",
                fontSize: "80px",
                cursor: "pointer",
              }}
              onClick={() => removeCandidate(savedCandidate.id || 0)}
            />
          </>
        ) : (
          <h2>No Candidate at this time</h2>
        )}
      </tr>
    );
}

export default SavedCandidateCard;