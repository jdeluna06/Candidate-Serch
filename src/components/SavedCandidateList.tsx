import {useEffect, useState} from 'react';
import SavedCandidateCard from './SavedCandidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const SaveCandidateList = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const removeCandidate = (id: number) => {
  let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('candidates');
      if (savedCandidates) {
        parsedCandidates = JSON.parse(savedCandidates);
        parsedCandidates = parsedCandidates.filter((candidate) => candidate.id !== id);
        localStorage.setItem('candidates', JSON.stringify(parsedCandidates));
        setSavedCandidates(parsedCandidates);
      }
  }
  useEffect(() => {
    const savedCandidates = localStorage.getItem('candidates');
    if (savedCandidates) {
      setSavedCandidates(JSON.parse(savedCandidates));
    }
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {savedCandidates.map((savedCandidate) => (
          <SavedCandidateCard key={savedCandidate.id} savedCandidate={savedCandidate} removeCandidate={removeCandidate} />
        ))}
      </tbody>
    </table>
  )

};
export default SaveCandidateList;