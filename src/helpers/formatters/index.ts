import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatCurrency(amount: number | string) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(amount));
}

export function formatDate(date: Date | string) {
  return format(new Date(date), 'dd/MM/yyyy');
}

export function formatISODate(dateToFormato: Date | string) {
  const date = new Date(dateToFormato);
  date.setHours(date.getHours() + 3);
  return date;
}

export function formatToNow(date: Date | string) {
  return formatDistanceToNow(formatISODate(date), {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatFormDate(date: string) {
  return date.split('/').reverse().join('-');
}
