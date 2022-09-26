export const debounce = (func, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const TICKET_ENDPOINT = '/api/ticket';

const STATUSES = [
  { id: 1, name: 'To Do' },
  { id: 2, name: 'In Progress' },
  { id: 3, name: 'In Review' },
  { id: 4, name: 'Done' },
  { id: 5, name: 'Archived' },
];

export const getStatusNameById = (id: number) =>
  STATUSES.find((status) => status.id === id)?.name;
