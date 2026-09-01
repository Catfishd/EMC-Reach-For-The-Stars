ServerEvents.recipes((event) => {
    event.remove({ output: 'powah:dielectric_paste'})
    event.shaped(Item.of('powah:dielectric_paste', 24), ['AAA', 'BBC', '   '], {
        A: '#minecraft:coals',
        B: 'ad_astra:mars_sand',
        C: 'minecraft:lava_bucket'
    })
})