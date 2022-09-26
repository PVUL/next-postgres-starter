import React, { useEffect, useState, useRef } from 'react';

import styles from '../styles/Header.module.css';
import { ITicket } from '../types';
import { TICKET_ENDPOINT } from '../util';
import { Filters } from './Filters';
import { Search } from './Search';

interface Props {
  setTickets: (tickets: ITicket[]) => void;
}

export const Header = ({ setTickets }: Props) => {
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<string[]>([]);
  const queryInput = useRef<HTMLInputElement>(null);
  const statusFilters = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let searchString = '?';

    if (query.length)
      searchString += `assignee=${query}${filters.length ? '&' : ''}`;

    if (filters.length) searchString += `statusId=${filters.toString()}`;

    const getMatchingTickets = async () => {
      const res = await fetch(TICKET_ENDPOINT + searchString);
      const { matchingTickets } = await res.json();
      setTickets(matchingTickets);
    };

    getMatchingTickets();
  }, [query, filters]);

  const resetView = () => {
    setQuery('');
    setFilters([]);
    if (queryInput.current) queryInput.current.value = '';

    if (statusFilters.current) {
      const checkboxes = statusFilters.current.querySelectorAll(
        'input[type="checkbox"]'
      );

      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  };

  const updateFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const newFilters = checked
      ? [...filters, value]
      : filters.filter((s) => s !== value);

    setFilters(newFilters);
  };

  return (
    <section className={styles.header}>
      <div className={styles.headerTitle}>Ticket Tracker</div>
      <Search setQuery={setQuery} />
      <Filters onChange={updateFilters} />
      <button className={styles.resetButton} onClick={resetView}>
        Reset View
      </button>
    </section>
  );
};
