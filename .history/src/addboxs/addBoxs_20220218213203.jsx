import React, { useState } from 'react';

const AddBoxs = (props) => {
  const [boxList, setBoxList] = useState([
    {
			date: '',
			kind: '',
			sender: '',
			receiver: '',
			receivedDate: '',
			position: '',
			name:''
    },
  ]);

	return (
		<form action="">
			{
				boxList.map((box, index) => (
					
				));
			}
		</form>
	)
};

export default AddBoxs;
