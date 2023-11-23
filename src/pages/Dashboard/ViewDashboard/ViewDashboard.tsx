import React from 'react';
import styled from 'styled-components';

interface ViewDashboardProps {
	children:JSX.Element | JSX.Element[]
}

const ViewDashboard: React.FC<ViewDashboardProps>  = ({children}) => {
	return <ViewDashboardStl>
		{children}
	</ViewDashboardStl>;
};

export const ViewDashboardStl = styled.div`
/* border: 1px solid #fff; */

width: 100%;
`;

export default ViewDashboard;
