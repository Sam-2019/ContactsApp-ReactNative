import React, { useState } from "react";

export const FilterItem = (data, id) => {
  return data.filter((result) => result.id === id);
};

export const FilterData = (data) => {
  return data.filter((result) => result.favorite === true);
};

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text) => {
    setValue(text);
  };

  return {
    value: value,
    onChangeText: handleChange
  };
};

export default useInput;
