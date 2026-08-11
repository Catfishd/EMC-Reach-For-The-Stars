priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_4_structure')
    .controllerId('')
    .name('Captured Structure')
    .layout((a) => {
      a.layer([
        'A'
      ] )
              .key('A', {
          block: 'immersiveengineering:sheetmetal_steel',
        })
    });
});
