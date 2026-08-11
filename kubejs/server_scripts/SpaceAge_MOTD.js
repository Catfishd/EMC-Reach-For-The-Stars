PlayerEvents.loggedIn(event => {
    event.player.tell(["TEST Welcome to ", Text.gold("EMC: Reach For The Stars!"), " on 1.20.1"]);
    event.player.tell(["Report pack issues to ", Text.blue("the Discord").underlined().clickOpenUrl("https://discord.com/sm7YwM57cR").hover("Click to open"), "."]);
})
