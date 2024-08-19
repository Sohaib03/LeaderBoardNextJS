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

const userList = [
	{
		name: "Sohaib",
		username: "Bruteforcer101",
		status: "Active",
		rating: 2101,
		maxRating: 2101,
		rank: "Master",
		activity: [
			true,
			false,
			true,
			true,
			false,
			false,
			true,
			false,
			true,
			false,
		],
	},
	{
		name: "Aisha",
		username: "CodeMaster",
		status: "Inactive",
		rating: 1987,
		maxRating: 1987,
		rank: "Expert",
		activity: [
			false,
			true,
			true,
			false,
			true,
			false,
			false,
			true,
			true,
			false,
		],
	},
	{
		name: "Zain",
		username: "TheDebugger",
		status: "Active",
		rating: 2050,
		maxRating: 2050,
		rank: "Master",
		activity: [
			true,
			true,
			true,
			true,
			false,
			false,
			true,
			false,
			true,
			true,
		],
	},
	{
		name: "Sara",
		username: "QuickSortQueen",
		status: "Active",
		rating: 1900,
		maxRating: 1900,
		rank: "Advanced",
		activity: [
			true,
			false,
			false,
			true,
			true,
			false,
			true,
			true,
			false,
			false,
		],
	},
	{
		name: "Omar",
		username: "BinarySearchPro",
		status: "Active",
		rating: 2250,
		maxRating: 2250,
		rank: "Grandmaster",
		activity: [
			true,
			true,
			true,
			true,
			true,
			true,
			false,
			false,
			true,
			true,
		],
	},
];

export default function RankingTable() {
	const boolArray = [
		true,
		false,
		true,
		true,
		false,
		false,
		true,
		false,
		true,
		false,
	];
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
									Total Users : 100
								</Badge>
								<Badge className="mr-2">
									Active Users : 50
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
										<UserRow userData={user} />
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
