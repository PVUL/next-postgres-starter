import styles from '../styles/Search.module.css';
import { debounce } from '../util';

interface Props {
  setQuery: (query: string) => void;
  forwardRef: React.ForwardedRef<HTMLInputElement>;
}

export const Search = ({ setQuery, forwardRef }: Props) => (
  <div className={styles.search}>
    <input
      type="text"
      id="searchAssignee"
      name="searchAssignee"
      onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value)
      )}
      ref={forwardRef}
      placeholder="Search tickets by Assignee"
    />
  </div>
);
