MMEvents.createProcesses((event) => {
  event
    .create("mm:steel_drill_process")
    .structureId("mm:steel_drill_structure")
    .ticks(50)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:fluid",
        fluid: "kubejs:steel_drill_fluid",
        amount: 1000,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:energy", amount: 1000 },
    })
    .output({
      type: "mm:output/simple",
      ingredient: { type: "mm:item", item: "ad_astra:moon_globe", count: 1 },
    });
});
