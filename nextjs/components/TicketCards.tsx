import styles from '../styles/TicketCards.module.css';
import { getStatusNameById } from '../util';
import { ITicket } from '../types';

interface Props {
  tickets: ITicket[];
}

export const TicketCards = ({ tickets }: Props) => (
  <div className={styles.ticketCards}>
    {tickets.length ? (
      tickets.map((ticket, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.status}>
            {getStatusNameById(ticket.statusId)}
          </div>
          <div className={styles.title}>{ticket.title}</div>
          <div className={styles.description}>{ticket.description}</div>
          <div className={styles.assignee}>{ticket.assignee}</div>
        </div>
      ))
    ) : (
      <div className={styles.empty}>no tickets to show</div>
    )}
  </div>
);
