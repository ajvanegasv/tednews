import type { MaterialSymbolsProps } from "../../../../interfaces/Icons";

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

export function Search({
	width = "1em",
	height = "1em"
}: MaterialSymbolsProps) { 

	return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
}