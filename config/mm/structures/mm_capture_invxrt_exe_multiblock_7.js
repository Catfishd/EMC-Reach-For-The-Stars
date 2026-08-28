priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:t2_rocket_assembly_structure')
    .controllerId('mm:t2_rocket_assembly_controller')
    .name('T2 Rocket Assembly')
    .layout((a) => {
      a.layer([
        'ABBBA',
        'BDEDB',
        'BEDEB',
        'BDEDB',
        'ABBBA'
      ] )
      a.layer([
        'FEDEF',
        'E   E',
        'D H D',
        'E   E',
        'FGGGF'
      ] )
      a.layer([
        'FDEDF',
        'D H D',
        'EH HE',
        'D   D',
        'FGGGF'
      ] )
      a.layer([
        'FEDEF',
        'E   E',
        'D H D',
        'E   E',
        'FGGGF'
      ] )
      a.layer([
        'FBJBF',
        'BDEDB',
        'IEDEK',
        'BDEDB',
        'ABCBA'
      ] )
              .key('A', {
          block: 'ad_astra:desh_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_desh_pillar',
        })
        .key('D', {
          block: 'pneumaticcraft:pressure_chamber_wall',
        })
        .key('E', {
          block: 'ars_nouveau:sourcestone',
        })
        .key('F', {
          block: 'ad_astra:desh_pillar',
        })
        .key('G', {
          block: 'tconstruct:clear_glass',
        })
        .key('H', {
          block: 'ars_nouveau:arcane_platform',
        })
        .key('I', {
          block: 'mm:item_port_input',
        })
        .key('J', {
          block: 'mm:energy_port_input',
        })
        .key('K', {
          block: 'mm:item_port_output',
        })
    });
});
