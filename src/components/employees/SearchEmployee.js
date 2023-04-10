import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Select from 'react-select/creatable';

export default function SearchEmployee() {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/employees`)
      .then((response) => {
          console.log(response.data)
          let options = response.data.map(employee => ({ value: employee.id, label: employee.name }));
          setSelectedOption(options);
      })
  }, []);

  return (
    <>
      <h2>Search employee</h2>
      <Select  isClearable options={selectedOption} />
    </>
  )
}