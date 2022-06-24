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

// Meeting rooms.
let room1Popup: any = undefined;
WA.room.onEnterLayer('meetingRoom1').subscribe(() => {
    room1Popup = WA.ui.openPopup("room1Popup","Salle 1",[]);
})
WA.room.onLeaveLayer('meetingRoom1').subscribe(closeAllPopUps)

let room2Popup: any = undefined;
WA.room.onEnterLayer('meetingRoom2').subscribe(() => {
    room2Popup = WA.ui.openPopup("room2Popup","Salle 2",[]);
})
WA.room.onLeaveLayer('meetingRoom2').subscribe(closeAllPopUps)

let room3Popup: any = undefined;
WA.room.onEnterLayer('meetingRoom3').subscribe(() => {
    room3Popup = WA.ui.openPopup("room3Popup","Salle 3",[]);
})
WA.room.onLeaveLayer('meetingRoom3').subscribe(closeAllPopUps)

let room4Popup: any = undefined;
WA.room.onEnterLayer('meetingRoom4').subscribe(() => {
    room4Popup = WA.ui.openPopup("room4Popup","Salle 4",[]);
})
WA.room.onLeaveLayer('meetingRoom4').subscribe(closeAllPopUps)

function closeAllPopUps(){
    if (welcomePopup !== undefined) {
        welcomePopup.close();
        welcomePopup = undefined;
    }
    if (clockPopup !== undefined) {
        clockPopup.close();
        clockPopup = undefined;
    }
    if (room1Popup !== undefined) {
        room1Popup.close();
        room1Popup = undefined;
    }
    if (room2Popup !== undefined) {
        room2Popup.close();
        room2Popup = undefined;
    }
    if (room3Popup !== undefined) {
        room3Popup.close();
        room3Popup = undefined;
    }
    if (room4Popup !== undefined) {
        room4Popup.close();
        room4Popup = undefined;
    }
}
