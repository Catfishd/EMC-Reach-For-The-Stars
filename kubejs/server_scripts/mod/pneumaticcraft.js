ServerEvents.recipes((event) => {
  event.remove({ output: "pneumaticcraft:reinforced_stone" });
  event.shaped(
    Item.of("pneumaticcraft:reinforced_stone", 8),
    ["SSS", "SAS", "SSS"],
    { S: "ad_astra:moon_stone", A: "pneumaticcraft:ingot_iron_compressed" },
  );
});
