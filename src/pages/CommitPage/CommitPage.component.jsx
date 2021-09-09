import NavbarCommits from '../../components/NavBarCommits/NavbarCommits.component';
import DisplayCommits from '../../components/DisplayCommit/DisplayCommit.component';

const CommitPage = ({ searchInput, handleChange, onSubmit }) => {
  return (
    <div>
      <NavbarCommits
        searchInput={searchInput}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      <DisplayCommits />
    </div>
  );
};

export default CommitPage;
