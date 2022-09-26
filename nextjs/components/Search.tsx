import React, { useRef } from 'react';
import styles from '../styles/Search.module.css';
import { debounce } from '../util';

interface Props {
  setQuery: (query: string) => void;
}

export const Search = ({ setQuery }: Props) => {
  const queryInput = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.search}>
      <input
        type="text"
        id="searchAssignee"
        name="searchAssignee"
        onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        )}
        ref={queryInput}
        placeholder="Search tickets by Assignee"
      />
    </div>
  );
};
