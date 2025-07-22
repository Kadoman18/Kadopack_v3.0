import {system} from "@minecraft/server";
/** @type {import("@minecraft/server").BlockCustomComponent} */
const trapdoorBlockComponent = {
    onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("kado:open");
        const sound = isOpen ? "close.wooden_trapdoor" : "open.wooden_trapdoor";
        block.setPermutation(block.permutation.withState("kado:open", !isOpen));
        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    },
};
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "kado:trapdoor",
        trapdoorBlockComponent
    );
});