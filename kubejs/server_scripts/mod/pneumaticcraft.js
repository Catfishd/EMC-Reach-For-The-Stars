ServerEvents.recipes((event) => {
  event.remove({ output: "pneumaticcraft:reinforced_stone" });
  event.shaped(
    Item.of("pneumaticcraft:reinforced_stone", 8),
    ["SSS", "SAS", "SSS"],
    { S: "ad_astra:moon_stone", A: "pneumaticcraft:ingot_iron_compressed" },
  );
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:dirt",
        count: 128,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:stone",
        count: 128,
      },
    ],
    pressure: 4.0,
    results: [Item.of("kubejs:earth_element", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:lava_bucket",
        count: 32,
      },
    ],
    pressure: 4.0,
    results: [Item.of("kubejs:fire_element", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:water_bucket",
        count: 32,
      },
    ],
    pressure: 4.0,
    results: [Item.of("kubejs:water_element", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:oak_sapling",
        count: 256,
      },
    ],
    pressure: 4.0,
    results: [Item.of("kubejs:air_element", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:earth_element",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:fire_element",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:water_element",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:air_element",
        count: 1,
      },
    ],
    pressure: 4.0,
    results: [Item.of("kubejs:earth_core", 1)],
  });
});
