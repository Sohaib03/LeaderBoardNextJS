import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Activity from "./Activity";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function UserRow({ userData }) {
	const clist = userData.position.map((contest, i) => (
	<p key={i}>
		{contest[0]} : <span style={{ color: 'cyan' }}>{contest[1]}</span>
		<hr />
	</p>
));
    const boolArray = [true, true, true, true, true, false, false, false, false, false];
	return (
		<TableRow>
			<TableCell className="font-medium"> {userData.name} </TableCell>
			<TableCell className="font-medium"> {userData.username} </TableCell>
			<TableCell>
				<Badge variant="outline">{userData.status}</Badge>
			</TableCell>
			<TableCell className="hidden md:table-cell">{userData.rating}</TableCell>
			<TableCell className="hidden md:table-cell">{userData.maxRating}</TableCell>
			<TableCell className="hidden md:table-cell">{userData.rank}</TableCell>
			<TableCell>
				<TooltipProvider>
					<Tooltip >
						<TooltipTrigger>
							<Activity boolArray={userData.activity} />
						</TooltipTrigger>
						<TooltipContent>
							{clist}
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				
			</TableCell>
		</TableRow>
	);
}
