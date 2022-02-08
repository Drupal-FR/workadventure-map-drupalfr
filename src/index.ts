/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

// Welcome.
WA.room.onEnterLayer('welcomeZone').subscribe(() => {
    currentPopup = WA.ui.openPopup("welcomeMessage","Bienvenu(e) sur la carte Workadventure de l'association Drupal France !",[]);
})
WA.room.onLeaveLayer('welcomeZone').subscribe(closePopUp)

// Clock.
WA.room.onEnterLayer('clockZone').subscribe(() => {
    const today = new Date();
    const time = today.getHours() + "h" + today.getMinutes();
    currentPopup = WA.ui.openPopup("clockPopup","Il est " + time,[]);
})
WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
