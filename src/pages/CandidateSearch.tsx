import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    avatar_url: null,
    html_url: null,
    bio: null,
    company: null,
    location: null,
    name: null,
  });
  const[currentIndex, setCurrentIndex] = useState<number>(0);
  const searchForCandidates = async () => {
    const data = await searchGithub();
    setCandidates(data);
    await searchForCandidateDetails(data[currentIndex].login);
  }
  const searchForCandidateDetails = async (username: string) => {
    const data = await searchGithubUser(username);
    setCurrentCandidate(data);
  }
  const selectCandidate = async (selected: boolean) => {
    if (selected) {
      console.log('Selected:', currentCandidate);
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('candidates');
      if (savedCandidates) {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates = [...parsedCandidates, currentCandidate];
      localStorage.setItem('candidates', JSON.stringify(parsedCandidates));


    }
    if (currentIndex < candidates.length - 1) {
     setCurrentIndex(currentIndex + 1);
     await searchForCandidateDetails(candidates[currentIndex + 1].login || '');
    }
    else {
      setCurrentIndex(0);
      await searchForCandidates();
  }}
  useEffect(() => {
    searchForCandidates();
  }, []);
  console.log(candidates, currentCandidate);
  return (<div><h1>CandidateSearch</h1>
    <CandidateCard currentCandidate={currentCandidate} selectCandidate={selectCandidate} />
  </div>
  );
};

export default CandidateSearch;
