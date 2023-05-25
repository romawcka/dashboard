import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/positions-selectors';
import { JobPosition } from './JobPosition';
import { addFilter } from 'store/filters/filters-actions';
import { selectFitlers } from 'store/filters/filters-selectors';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFitlers);
  const positions = useSelector(state => selectVisiblePositions(state, currentFilters));
  
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item} />
      ))}
    </div>
  )
}

export {JobList};