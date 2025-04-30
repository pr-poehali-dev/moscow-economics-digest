
/**
 * Форматирует дату в российском формате (например, "30 апреля 2025")
 */
export const formatDateRu = (): string => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return today.toLocaleDateString('ru-RU', options);
};
