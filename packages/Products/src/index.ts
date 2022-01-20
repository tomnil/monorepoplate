console.log("Debug: Loading Products/index");

export function List(): { Name: string, Price: number, Currency: "$" | "€" }[] {
    return [
        { Name: "Laptop", Price: 1000, Currency: "€" },
        { Name: "Monitor", Price: 400, Currency: "€" },
        { Name: "Mouse", Price: 20, Currency: "€" },
        { Name: "Keyboard", Price: 40, Currency: "€" }
    ];
}
