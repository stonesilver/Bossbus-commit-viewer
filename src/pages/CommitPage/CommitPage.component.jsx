import NavbarCommits from '../../components/NavBarCommits/NavbarCommits.component';
import DisplayCommits from '../../components/DisplayCommit/DisplayCommit.component';
// import { Redirect } from 'react-router-dom';

const CommitPage = ({ searchInput, handleChange, onSubmit }) => {
  return (
    <div>
      <NavbarCommits
        searchInput={searchInput}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      <DisplayCommits searchInput={searchInput} />
    </div>
  );
};

export default CommitPage;

// !searchInput ? (
//   <Redirect to='/' />
// ) : (

// );
