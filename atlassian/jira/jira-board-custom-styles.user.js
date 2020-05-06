// ==UserScript==
// @name        Jira Board Custom Styles
// @namespace   de.kmoegle.atlassian.jira
// @author      Kristoffer Moegle
// @description This script will change the styles of Jira Boards to be (what I think is) more useful.
// @include     /^https?:\/\/jira.[^\/]+\/secure\/RapidBoard.jspa.*/
// @include     /^https?:\/\/[^\/]+?\.atlassian\.net\/secure\/RapidBoard.jspa.*/
// @downloadURL https://raw.githubusercontent.com/kmoegle/userscripts/master/atlassian/jira/jira-board-custom-styles.user.js
// @updateURL   https://raw.githubusercontent.com/kmoegle/userscripts/master/atlassian/jira/jira-board-custom-styles.user.js
// @version     1.0.1
// @grant       none
// ==/UserScript==

// this script is inspired by and based on https://gist.github.com/nemoinho/70a176e73e2cbf14315772cc4e618516

// the boards title is often not recognized - let's resize it to show up more obviously
applyStyles(`
  h1 span.subnav-page-header { font-size: 24px; font-weight: none; color: #172b4d; }
  h1 span.subnavigator-title  { font-size: 18px; font-weight: none; color: #aaa; }
`)

function applyStyles(styles) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styles;
    document.head.appendChild(style);
}
