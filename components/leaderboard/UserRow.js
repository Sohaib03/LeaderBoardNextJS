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

export default function UserRow({ userData }) {
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
				<Activity boolArray={userData.activity} />
			</TableCell>
		</TableRow>
	);
}
