import styles from '../styles/Filters.module.css';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forwardRef: React.ForwardedRef<HTMLDivElement>;
}

export const Filters = ({ onChange, forwardRef }: Props) => (
  <div className={styles.filters} ref={forwardRef}>
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
