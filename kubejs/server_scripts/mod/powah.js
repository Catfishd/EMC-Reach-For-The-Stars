ServerEvents.recipes((event) => {
    event.remove({ output: 'powah:dielectric_paste'})
    event.shaped(Item.of('powah:dielectric_paste', 24), ['AAA', 'BBC', '   '], {
        A: '#minecraft:coals',
        B: 'kubejs:mars_clay',
        C: 'minecraft:lava_bucket'
    })
    event.recipes.powah.energizing(['ad_astra:mars_globe', Item.of('powah:niotic_crystal_block', 3)], 'kubejs:mars_core', 10000000)
})