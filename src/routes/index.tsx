import { createReconnectingWS } from "@solid-primitives/websocket";
import { createSignal, onMount } from "solid-js";

export default function Home() {
	const ws = createReconnectingWS(
		typeof window !== "undefined"
			? `ws://${window.location.hostname}:3000/ws`
			: "ws://localhost:3000/ws",
	);
	const [activeButtons, setActiveButtons] = createSignal(new Set<string>());

	onMount(() => {
		document.addEventListener("touchstart", (e) => e.preventDefault(), {
			passive: false,
		});
		document.addEventListener("touchmove", (e) => e.preventDefault(), {
			passive: false,
		});
		document.addEventListener("touchend", (e) => e.preventDefault(), {
			passive: false,
		});
	});

	const press = (letter: string) => {
		setActiveButtons((prev) => new Set(prev).add(letter));
		ws.send(letter);
	};

	const release = (letter: string) => {
		setActiveButtons((prev) => {
			const newSet = new Set(prev);
			newSet.delete(letter);
			return newSet;
		});
	};

	const Button = (props: { letter: string; class: string }) => (
		<div
			class={`${props.class} cursor-pointer transition-all duration-150 flex items-center justify-center font-bold select-none ${
				activeButtons().has(props.letter) ? "scale-95" : ""
			}`}
			onTouchStart={() => press(props.letter)}
			onTouchEnd={() => release(props.letter)}
			onMouseDown={() => press(props.letter)}
			onMouseUp={() => release(props.letter)}
			onMouseLeave={() => release(props.letter)}
		/>
	);

	return (
		<main class="text-center mx-auto text-gray-700 h-screen flex items-start justify-center bg-gray-300">
			<div class="flex flex-col gap-6 lg:gap-8 items-center justify-between w-screen h-screen p-8">
				<div class="flex justify-between items-center w-full">
					<Button
						letter="w"
						class={`w-60 h-60 sm:w-64 sm:h-64 md:w-68 md:h-68 lg:w-72 lg:h-72 rounded-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
							activeButtons().has("w")
								? "bg-blue-700"
								: "bg-blue-500 hover:bg-blue-600"
						}`}
					/>
					<Button
						letter="y"
						class={`w-60 h-60 sm:w-64 sm:h-64 md:w-68 md:h-68 lg:w-72 lg:h-72 border-4 border-gray-400 rounded-full text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
							activeButtons().has("y")
								? "bg-gray-200"
								: "bg-white hover:bg-gray-100"
						}`}
					/>
					<Button
						letter="o"
						class={`w-60 h-60 sm:w-64 sm:h-64 md:w-68 md:h-68 lg:w-72 lg:h-72 rounded-full text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
							activeButtons().has("o")
								? "bg-yellow-600"
								: "bg-yellow-400 hover:bg-yellow-500"
						}`}
					/>
				</div>
				<div class="flex flex-col gap-2 items-center w-full">
					<div class="flex justify-center items-center w-full px-8">
						<Button
							letter="h"
							class={`w-60 h-24 sm:w-72 sm:h-28 md:w-80 md:h-32 lg:w-96 lg:h-36 border-4 border-gray-300 rounded-xl text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl ${
								activeButtons().has("h")
									? "bg-gray-600"
									: "bg-gray-400 hover:bg-gray-500"
							}`}
						/>
					</div>
					<div class="flex justify-evenly items-center w-full">
						<Button
							letter="c"
							class={`w-60 h-60 sm:w-64 sm:h-64 md:w-68 md:h-68 lg:w-72 lg:h-72 rounded-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
								activeButtons().has("c")
									? "bg-red-700"
									: "bg-red-500 hover:bg-red-600"
							}`}
						/>
						<Button
							letter="b"
							class={`w-60 h-24 sm:w-72 sm:h-28 md:w-80 md:h-32 lg:w-96 lg:h-36 rounded-xl text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl ${
								activeButtons().has("b")
									? "bg-gray-900"
									: "bg-black hover:bg-gray-800"
							}`}
						/>
						<Button
							letter="m"
							class={`w-60 h-60 sm:w-64 sm:h-64 md:w-68 md:h-68 lg:w-72 lg:h-72 rounded-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
								activeButtons().has("m")
									? "bg-green-700"
									: "bg-green-500 hover:bg-green-600"
							}`}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
