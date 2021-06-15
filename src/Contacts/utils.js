export const FilterItem = (data, id) => {
  return data.filter((result) => result.id === id);
};

export const FilterData = (data) => {
  return data.filter((result) => result.favorite === true);
};
