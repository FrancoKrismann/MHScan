import React from 'react';
import styled from 'styled-components';

interface FormAddProps {
}

const FormAdd: React.FC<FormAddProps>  = ({}) => {

	const handleTitle = () => {

	}

	const handleFile = () => {
		
	}
	return <FormAddStl>
		<form>
			<input type='text' placeholder='Titulo' onChange={handleTitle}/>
			<input type="file" onChange={handleFile} />
		</form>
        
	</FormAddStl>;
};

const FormAddStl = styled.div``;

export default FormAdd;
