import './App.css'
import './assets/css/google-icons.css'
import { useEffect, useState } from 'react';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import SortableGroupedTable, {
	GROUPED_BY_MONTH, GROUPED_BY_YEAR, SORTED_BY_DATE
} from './components/SortableGroupedTable';

function App() {
	const [list, setList] = useState([])
	useEffect(() => {
		fetch(process.env.REACT_APP_URL_DATA).then((response) => {
			response.json().then((data) => {
				setList(data.list)
			})

		})
	}, [])
	return (
		<div id="app">
			{SortableGroupedTable(list, GROUPED_BY_MONTH)(MonthTable)}
			{SortableGroupedTable(list, GROUPED_BY_YEAR)(YearTable)}
			{SortableGroupedTable(list, SORTED_BY_DATE)(SortTable)}
		</div>
	);
}

export default App;
