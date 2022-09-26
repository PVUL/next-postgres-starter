import React, { useRef } from 'react';
import styles from '../styles/Filters.module.css';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filters = ({ onChange }: Props) => {
  const statusFilters = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.filters} ref={statusFilters}>
      <label className={styles.filter}>
        <input type="checkbox" value="1" onChange={onChange} />
        To Do
      </label>
      <label className={styles.filter}>
        <input type="checkbox" value="2" onChange={onChange} />
        In Progress
      </label>

      <label className={styles.filter}>
        <input type="checkbox" value="3" onChange={onChange} />
        In Review
      </label>

      <label className={styles.filter}>
        <input type="checkbox" value="4" onChange={onChange} />
        Done
      </label>

      <label className={styles.filter}>
        <input type="checkbox" value="5" onChange={onChange} />
        Archived
      </label>
    </div>
  );
};
