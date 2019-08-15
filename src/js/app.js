import {tooltipHover, tooltip} from './dom-loader';
import '../css/main.css';


tooltipHover.addEventListener('mouseover', showToolTip);
tooltipHover.addEventListener('mouseout', hideToolTip);

function showToolTip() {
    tooltip.style.visibility = "visible";
}

function hideToolTip(){
    tooltip.style.visibility = "hidden";
}

