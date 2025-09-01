import { createReconnectingWS } from "@solid-primitives/websocket";

export default function Home() {
	const wsUrl =
		typeof window !== "undefined"
			? `ws://${window.location.hostname}:3000/ws`
			: "ws://localhost:3000/ws";
	const ws = createReconnectingWS(wsUrl);

	const sendLetter = (letter: string) => {
		ws.send(letter);
	};

	return (
		<main class="text-center mx-auto text-gray-700 h-screen flex items-start justify-center bg-gray-300">
			<div class="flex flex-col gap-6 lg:gap-8 items-center justify-between w-screen h-screen p-8">
				{/* First row: Blue, White, Yellow */}
				<div class="flex justify-between items-center w-full">
					<div
						class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition-all duration-150 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl touch-manipulation select-none"
						onClick={() => sendLetter("w")}
						onTouchStart={() => {}}
					></div>
					<div
						class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-white border-4 border-gray-400 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-150 flex items-center justify-center text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl touch-manipulation select-none"
						onClick={() => sendLetter("y")}
						onTouchStart={() => {}}
					></div>
					<div
						class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500 active:bg-yellow-600 active:scale-95 transition-all duration-150 flex items-center justify-center text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl touch-manipulation select-none"
						onClick={() => sendLetter("o")}
						onTouchStart={() => {}}
					></div>
				</div>

				{/* Middle and Bottom section */}
				<div class="flex flex-col gap-2 items-center w-full">
					{/* Gray rectangular button */}
					<div class="flex justify-center items-center w-full px-8">
						<div
							class="w-40 h-16 sm:w-48 sm:h-20 md:w-56 md:h-24 lg:w-64 lg:h-28 bg-gray-400 border-4 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-500 active:bg-gray-600 active:scale-95 transition-all duration-150 flex items-center justify-center text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl touch-manipulation select-none"
							onClick={() => sendLetter("h")}
							onTouchStart={() => {}}
						></div>
					</div>

					{/* Bottom row: Red, Black, Green */}
					<div class="flex justify-evenly items-center w-full">
						<div
							class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 active:bg-red-700 active:scale-95 transition-all duration-150 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl touch-manipulation select-none"
							onClick={() => sendLetter("c")}
							onTouchStart={() => {}}
						></div>
						<div
							class="w-40 h-16 sm:w-48 sm:h-20 md:w-56 md:h-24 lg:w-64 lg:h-28 bg-black rounded-xl cursor-pointer hover:bg-gray-800 active:bg-gray-900 active:scale-95 transition-all duration-150 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl touch-manipulation select-none"
							onClick={() => sendLetter("b")}
							onTouchStart={() => {}}
						></div>
						<div
							class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 active:bg-green-700 active:scale-95 transition-all duration-150 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl touch-manipulation select-none"
							onClick={() => sendLetter("m")}
							onTouchStart={() => {}}
						></div>
					</div>
				</div>
			</div>
		</main>
	);
}
