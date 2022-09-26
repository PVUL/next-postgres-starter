import styles from '../styles/TicketCreator.module.css';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const TicketCreator = ({ onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles.creator} id="ticketCreator">
      <div className={styles.title}>Add a ticket</div>
      <label htmlFor="title" className={styles.field}>
        Title: <input type="text" id="title" name="title" required />
      </label>
      <label className={styles.field}>
        Description: <input type="text" id="description" name="description" />
      </label>
      <label className={styles.field}>
        Assignee: <input type="text" id="assignee" name="assignee" required />
      </label>
      <label className={styles.field}>
        Status:{' '}
        <select name="status" id="status" className={styles.statusSelect}>
          <option value="1">To do</option>
          <option value="2">In Progress</option>
          <option value="3">In Review</option>
          <option value="4">Done</option>
          <option value="5">Archived</option>
        </select>
      </label>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};
