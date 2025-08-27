export function StringToObject(data: string): Date {
  // Convert formatted date string back to a Date object
  const dateObject = new Date(data);
  return dateObject;
}