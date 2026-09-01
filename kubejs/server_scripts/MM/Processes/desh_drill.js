MMEvents.createProcesses((event) => {
  event
    .create("mm:desh_drill_process")
    .structureId("mm:desh_drill_structure")
    .ticks(500)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:fluid",
        fluid: "kubejs:desh_drill_fluid",
        amount: 1000,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:energy", amount: 1000 },
    })
    .output({
      type: "mm:output/simple",
      ingredient: { type: "mm:item", item: "ad_astra:mars_globe", count: 1 },
    });
});
