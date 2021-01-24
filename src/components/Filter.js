import { useSelector, useDispatch } from 'react-redux';
import { getStateFilter } from 'redux/phonebook/phonebookSelectors';
import { changeFilter } from 'redux/phonebook/phonebookActions';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getStateFilter);
  const onFilterChange = ({ target }) => {
    dispatch(changeFilter(target.value));
  };
  return (
    <label>
      Фильтр по имени:
      <input
        type="text"
        value={value}
        onChange={onFilterChange}
        style={{ marginLeft: '1em', marginBottom: '1em' }}
      />
    </label>
  );
};

export default Filter;
