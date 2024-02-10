import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

function History({ rows }: History.Props) {
	return (
		<div style={{ minHeight: 400 }}>
			<TableContainer
				sx={{ borderRadius: '30px', padding: '15px', maxHeight: 250 }}
				component={Paper}
			>
				<Table>
					<TableBody>
						{rows.length ? (
							rows
								.sort((a, b) => b.time - a.time)
								.map((row, i) => (
									<TableRow
										key={i}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell>{row.amount}</TableCell>
										<TableCell>{row.name}</TableCell>
										<TableCell>
											{new Date(row.time).toLocaleTimeString()}
										</TableCell>
										<TableCell>{row.increace}</TableCell>
									</TableRow>
								))
						) : (
							<TableRow className='flex justify-center'>
								<TableCell style={{ fontSize: 40 }}>No Data</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

declare namespace History {
	type Props = {
		rows: Row[]
	}

	type Row = {
		amount: string
		name: string
		time: number
		increace: string
	}
}

export default History
