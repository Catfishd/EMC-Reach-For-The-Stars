priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:fuel_distillery_structure')
    .controllerId('mm:fuel_distillery')
    .name('Fuel Distillery')
    .layout((a) => {
      a.layer([
        'AAA',
        'ABA',
        'AAA'
      ] )
      a.layer([
        'ADA',
        'DED',
        'ADA'
      ] )
      a.layer([
        'ADA',
        'DED',
        'ADA'
      ] )
      a.layer([
        'AAA',
        'FBG',
        'ACA'
      ] )
              .key('A', {
          block: 'immersiveengineering:steel_scaffolding_standard',
        })
        .key('B', {
          block: 'immersiveengineering:rs_engineering',
        })
        .key('D', {
          block: 'minecraft:glass',
        })
        .key('E', {
          block: 'immersiveengineering:fluid_pipe',
        })
        .key('F', {
          block: 'mm:fluid_port_input',
        })
        .key('G', {
          block: 'mm:fluid_port_output',
        })
    });
});
