export const GROUPED_BY_MONTH = 0
export const GROUPED_BY_YEAR = 1
export const SORTED_BY_DATE = 2

export default function SortableGroupedTable(list, type) {
	switch (type) {
		case GROUPED_BY_MONTH:
			const formatter = new Intl.DateTimeFormat('en-US', {
				month: 'short'
			})
			const gropedByMonthList = list.map(item => ({
				month: formatter.format(new Date(item.date)),
				amount: item.amount
			}))
			return Component => <Component list={gropedByMonthList}/>
		case GROUPED_BY_YEAR:
			const gropedByYearList = list.map(item => ({
				year: new Date(item.date).getFullYear(),
				amount: item.amount
			}))
			return Component => <Component list={gropedByYearList}/>
		case SORTED_BY_DATE:
			const sortedByDate = list.sort((a, b) => (
				Date.parse(a.date) - Date.parse(b.date)
			))
			return Component => <Component list={sortedByDate}/>
		default:
			console.warn('Передан не известный тип')

	}
}
