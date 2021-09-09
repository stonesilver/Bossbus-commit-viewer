import NavBar from '../../components/NavBar/NavBar.component';
import WelcomeToCode from '../../components/WelcomeToCode/WelcomeToCode.component';
import ExploreOpenSource from '../../components/ExploreOpenSource/ExploreOpenSource.component';
import SearchForm from '../../components/SearchForm/SearchForm.component';
import SuggestedRepos from '../../components/SuggestedRepos/SuggestedRepos.component';

const Homepage = ({ searchInput, handleChange, onSubmit }) => {
  return (
    <div>
      <NavBar />
      <WelcomeToCode />
      <ExploreOpenSource />
      <SearchForm
        searchInput={searchInput}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      <SuggestedRepos />
    </div>
  );
};

export default Homepage;
