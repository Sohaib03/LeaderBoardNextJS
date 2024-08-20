import Image from "next/image";
import Link from "next/link";
import {
	File,
	Home,
	LineChart,
	ListFilter,
	MoreHorizontal,
	Package,
	Package2,
	PanelLeft,
	PlusCircle,
	Search,
	Settings,
	ShoppingCart,
	Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Activity from "./Activity";
import UserRow from "./UserRow";
import { getContestList, getLeaderboard } from "./FetchLeaderboard";


export default async function RankingTable() {
	const userList = await getLeaderboard()
	const contestList = await getContestList()

	userList.forEach(user => {
		user.position = []
		user.contest_rank.forEach((rank, idx) => {
            if (rank > 0) {  // Check if the rank is positive
                const contestName = contestList[idx]?.name || 'Unknown Contest';
                user.position.push([contestName, rank]);
            }
        });
	});

	// console.l

	const active_users = userList.filter(user => user.status === "Active");
	const inactive_users = userList.filter(user => user.status === "Inactive");
	return (
		<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<Tabs defaultValue="all">
				<div className="flex items-center">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="active">Active</TabsTrigger>
						<TabsTrigger value="Inactive">Inactive</TabsTrigger>
						{/* <TabsTrigger
										value="archived"
										className="hidden sm:flex"
									>
										Archived
									</TabsTrigger> */}
					</TabsList>
					<div className="ml-auto flex items-center gap-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									size="sm"
									className="h-8 gap-1"
								>
									<ListFilter className="h-3.5 w-3.5" />
									<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
										Filter
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Filter by</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuCheckboxItem checked>
									Active
								</DropdownMenuCheckboxItem>
								<DropdownMenuCheckboxItem>
									Draft
								</DropdownMenuCheckboxItem>
								<DropdownMenuCheckboxItem>
									Archived
								</DropdownMenuCheckboxItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<Button
							size="sm"
							variant="outline"
							className="h-8 gap-1"
						>
							<File className="h-3.5 w-3.5" />
							<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
								Export
							</span>
						</Button>
					</div>
				</div>
				<TabsContent value="all">
					<Card x-chunk="dashboard-06-chunk-0">
						<CardHeader>
							<CardTitle>Codeforces</CardTitle>
							<CardDescription>
								<Badge className="mr-2">
									Total Users : {active_users.length + inactive_users.length}
								</Badge>
								<Badge className="mr-2">
									Active Users : {active_users.length}
								</Badge>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Name</TableHead>
										<TableHead>Handle</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Rating</TableHead>
										<TableHead>Max Rating</TableHead>
										<TableHead>Rank</TableHead>
										<TableHead>Last 10 contest</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{userList.map((user, index) => (
										<UserRow userData={user} key={index}/>
									))}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<div className="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of{" "}
								<strong>32</strong> products
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</main>
	);
}
