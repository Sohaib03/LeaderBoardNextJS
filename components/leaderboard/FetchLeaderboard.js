export async function getLeaderboard() {
    const apiPath = "http://127.0.0.1:8000/leaderboard";
    try {
        const response = await fetch(apiPath, { next: { revalidate: 300 } });
        const data = await response.json();

        const formattedData = data.map((user) => {
            // Generate activity based on contest_rank (negative -> false, positive -> true)
            const activity = user.contest_rank.map(rank => rank > 0);

            // Determine the status based on the number of `true` values in the activity array
            const status = activity.filter(isActive => isActive).length >= 3 ? "Active" : "Inactive";

            return {
                name: "Default",  // Name can be filled in with actual data if available
                username: user.handle,
                status: status,
                rating: user.rating,
                maxRating: user.max_rating,
                rank: user.rank,
                activity: activity,
                contest_rank: user.contest_rank,
            };
        });

        console.log(formattedData);
        return formattedData;
    } catch (error) {
        console.error("Error fetching leaderboard data: ", error);
        return userList;  // Return the default userList on error
    }
}

export async function getContestList() {
    const apiPath = "http://127.0.0.1:8000/contest-info" 
    try {
        const response = await fetch(apiPath, { next: { revalidate: 300 } });
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error("Error fetching leaderboard data: ", error);
        return contestList;  // Return the default userList on error
    }
}
const contestList = [
	{
		id: 2004,
		name: "Educational Codeforces Round 169 (Rated for Div. 2)",
		start_time: 1723732500,
		duration_seconds: 7200
	},
	{
		id: 2000,
		name: "Codeforces Round 966 (Div. 3)",
		start_time: 1723560000,
		duration_seconds: 8100
	},
	{
		id: 2002,
		name: "EPIC Institute of Technology Round August 2024 (Div. 1 + Div. 2)",
		start_time: 1723386900,
		duration_seconds: 10800
	},
	{
		id: 1998,
		name: "Codeforces Round 965 (Div. 2)",
		start_time: 1723300500,
		duration_seconds: 7200
	},
	{
		id: 1999,
		name: "Codeforces Round 964 (Div. 4)",
		start_time: 1722954900,
		duration_seconds: 8700
	},
	{
		id: 1993,
		name: "Codeforces Round 963 (Div. 2)",
		start_time: 1722782100,
		duration_seconds: 7200
	},
	{
		id: 1997,
		name: "Educational Codeforces Round 168 (Rated for Div. 2)",
		start_time: 1722350100,
		duration_seconds: 7200
	},
	{
		id: 1991,
		name: "Pinely Round 4 (Div. 1 + Div. 2)",
		start_time: 1722177300,
		duration_seconds: 10800
	},
	{
		id: 1996,
		name: "Codeforces Round 962 (Div. 3)",
		start_time: 1722004500,
		duration_seconds: 9000
	},
	{
		id: 1995,
		name: "Codeforces Round 961 (Div. 2)",
		start_time: 1721745300,
		duration_seconds: 7200
	}
];

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
