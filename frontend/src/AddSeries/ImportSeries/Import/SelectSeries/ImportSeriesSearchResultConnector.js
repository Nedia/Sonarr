import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ImportSeriesSearchResult from './ImportSeriesSearchResult';

function createMapStateToProps() {
  return createSelector(
    (state, { id }) => id,
    (id) => {
      return {
        isExistingSeries: !!id
      };
    }
  );
}

export default connect(createMapStateToProps)(ImportSeriesSearchResult);
