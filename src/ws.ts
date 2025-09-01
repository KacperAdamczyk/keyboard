import r from "robotjs";
import { eventHandler } from "vinxi/http";

export default eventHandler({
	handler() {},
	websocket: {
		open(peer) {
			console.log("Connected", peer.id);
		},
		async message(peer, msg) {
			const message = msg.text();
			console.log("Clicking:", message);
			r.keyTap(message);
		},
		close(peer) {
			console.log("Disconnected", peer.id);
		},
	},
});
