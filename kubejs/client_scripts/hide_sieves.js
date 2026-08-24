JEIEvents.hideItems(event => {
    event.hide(Ingredient.of(/exdeorum:.*sieve/))  // sieve blocks + mechanical sieve
    event.hide('#exdeorum:sieve_meshes')           // all meshes
    event.hide('#exdeorum:ore_chunks')             // all 18 ore chunks
})