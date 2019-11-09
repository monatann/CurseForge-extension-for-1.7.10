// ==UserScript==
// @name         CurseForge for 1.7.10 mods
// @namespace    https://monatann.azurewebsites.net/index.php
// @version      1.0
// @description  Automatically show 1.7.10 files
// @author       Monatann
// @match        https://www.curseforge.com/minecraft/mc-mods/*
// @require      https://monatann.azurewebsites.net/files/nicoaddon/script/jquery-3.2.1.js
// @grant        none
// ==/UserScript==

(function() {
    jQuery("#nav-files > a").attr("href", jQuery("#nav-files > a").attr("href") + "/all");

    jQuery("#filter-game-version > option:nth-child(1)").attr("selected","");

    jQuery('#filter-game-version > option').each(function() {
        if(jQuery(this).text().indexOf("Minecraft 1.7") != -1 && location.href.indexOf("?filter-game-version") == -1){
            window.location.href = location.href + "?filter-game-version=2020709689%3A4449";
        }
    });
})();