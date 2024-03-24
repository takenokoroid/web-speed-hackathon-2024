export const getDayOfWeekStr = (date: Date) => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;
  const dayOfWeek = date.getDay(); // 0 (Sunday) から 6 (Saturday) までの整数を返す
  const dayStr = days[dayOfWeek];
  if (dayStr == null) {
    throw new Error('dayOfWeek is invalid');
  }
  return dayStr;
};