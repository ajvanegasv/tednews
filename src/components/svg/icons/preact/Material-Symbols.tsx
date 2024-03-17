import type { MaterialSymbolsProps } from "../../../../interfaces/Icons.d.ts";

export function Close({
	width = "1em",
	height = "1em"
}: MaterialSymbolsProps) {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path></svg>;
}

export function Menu({
	width = "1em",
	height = "1em"
}: MaterialSymbolsProps) {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>;
}