/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

WA.room.onEnterLayer('welcomeZone').subscribe(() => {
    currentPopup =  WA.ui.openPopup("welcomeMessage","Bienvenu(e) sur la carte Workadventure de l'association Drupal France !",[]);
})

WA.room.onLeaveLayer('welcomeZone').subscribe(closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
