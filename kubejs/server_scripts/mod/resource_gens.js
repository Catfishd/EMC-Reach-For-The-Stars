ServerEvents.recipes((event) => {
    event.shaped(Item.of("minecraft:iron_ingot", 1), ["SSS", "S  ", "   "], {
        S: "kubejs:earth_shard"
    });
    event.shaped(Item.of("minecraft:copper_ingot", 1), ["SSS", "   ", "   "], {
        S: "kubejs:earth_shard"
    });
    event.shaped(Item.of("create:zinc_ingot", 1), ["S S", " S ", "   "], {
        S: "kubejs:earth_shard"
    });
    event.shaped(Item.of("minecraft:coal", 1), ["S S", "   ", " S "], {
        S: "kubejs:earth_shard"
    });
    event.shaped(Item.of("minecraft:redstone", 1), ["S S", "   ", "   "], {
        S: "kubejs:earth_shard"
    });
    event.shaped(Item.of("minecraft:glowstone_dust", 1), ["SS ", "   ", "   "], {
        S: "kubejs:earth_shard"
    });
    event.shaped(Item.of("minecraft:bone_meal", 1), ["S  ", "   ", "   "], {
        S: "kubejs:earth_shard"
    });
});