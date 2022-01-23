export function getId(url: string): string {
    const arr = url.split("/");
    return arr[arr.length - 2];
}
