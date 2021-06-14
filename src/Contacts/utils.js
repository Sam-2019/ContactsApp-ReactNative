export const FilterData = (data, id) => {
  return data.filter((result) => result.city === id);
};
