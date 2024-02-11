function History({ rows }: History.Props) {
	console.log(	new Date(rows[0].time).getTime()
	);

	return (
		<div className='grid gap-4 bg-white px-8 py-5 rounded-3xl'>
			{rows.length ? (rows
				// .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
				.map((row, i) => (
					<tr className={`grid grid-cols-[1fr_1.5fr_1.2fr_1fr]
					${i === 0 && 'font-bold'}`}>
						<td>{row.amount} $</td>
						<td>{row.name} {row.surname}</td>
						<td className='text-gray-500 font-normal'>{new Date(row.time).toLocaleTimeString()}</td>
						<td>+ {row.increase} $</td>
					</tr>
					))
			) : (
				<h3>No history</h3>
			)}
		</div>
	)
}

declare namespace History {
	type Props = {
		rows: Row[]
	}

	type Row = {
		amount:   number;
		name:     string;
		surname:  string;
		time:     string;
		increase: number;
	}
}

export default History
