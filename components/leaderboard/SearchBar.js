import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
	return (
		<div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
			<div className="text-2xl font-semibold tracking-tight">
				Leaderboard
			</div>
			<div className="relative ml-auto flex-1 md:grow-0">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
				/>
			</div>
		</div >
	);
}
