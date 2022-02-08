/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

// Welcome.
let welcomePopup: any = undefined;
WA.room.onEnterLayer('welcomeZone').subscribe(() => {
    welcomePopup = WA.ui.openPopup("welcomeMessage","Bienvenu(e) sur la carte Workadventure de l'association Drupal France !",[]);
})
WA.room.onLeaveLayer('welcomeZone').subscribe(closeAllPopUps)

// Clock.
let clockPopup: any = undefined;
WA.room.onEnterLayer('clockZone').subscribe(() => {
    const today = new Date();
    const time = today.getHours() + "h" + today.getMinutes();
    clockPopup = WA.ui.openPopup("clockPopup","Il est " + time,[]);
})
WA.room.onLeaveLayer('clockZone').subscribe(closeAllPopUps)

function closeAllPopUps(){
    if (welcomePopup !== undefined) {
        welcomePopup.close();
        welcomePopup = undefined;
    }
    if (clockPopup !== undefined) {
        clockPopup.close();
        clockPopup = undefined;
    }
}
