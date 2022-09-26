import React, { useEffect, useState, useRef } from 'react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { TicketCreator } from '../components/TicketCreator';
import styles from '../styles/Home.module.css';
import { Ticket } from '../models/ticket';
import { ITicket } from '../types';
import { TicketCards } from '../components/TicketCards';
import { Header } from '../components/Header';
import { TICKET_ENDPOINT } from '../util';

interface Props {
  tickets: ITicket[];
}

const Home = (props: Props) => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    setTickets(props.tickets);
  }, [props.tickets]);

  const createTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      assignee: e.target.assignee.value,
      statusId: e.target.status.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(TICKET_ENDPOINT, options);
    const { ticket: newTicket } = await res.json();

    if (res.ok) {
      const form = document.getElementById('ticketCreator');
      form?.querySelectorAll('input').forEach((input) => {
        input.value = '';
      });
    }

    setTickets([...tickets, newTicket]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ticket Tracker</title>
      </Head>
      <main className={styles.main}>
        <Header setTickets={setTickets} />
        <TicketCards tickets={tickets} />
        <TicketCreator onSubmit={createTicket} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const tickets = await Ticket.findAll();

  return {
    props: {
      tickets: JSON.parse(JSON.stringify(tickets)),
    },
  };
};

export default Home;
