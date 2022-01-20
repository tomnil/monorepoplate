console.log("Debug: Loading ValidateHelper/index");

export function ValidateUserName(name: string): boolean {
    return (name !== undefined && name.length > 10);
}
