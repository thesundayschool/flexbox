let flexContainer = document.querySelector(".flex-container");
let controlPanel = document.querySelector(".control-panel");

controlPanel.addEventListener("input", routeControlPanelEvents)

function routeControlPanelEvents(event){
  switch (event.target.id) {
    case "flex-direction" :
      handleFlexDirection(event.target);
      break;
    case "flex-wrap" :
      handleFlexWrap(event.target);
      break;
    case "justify-content" :
      handleJustifyContent(event.target);
      break;
    case "align-items" :
      handleAlignItems(event.target);
      break;
  }
  
}

const handleFlexDirection = (flexDirectionOption) => {
  flexContainer.style.flexDirection = flexDirectionOption.value;
}

const handleFlexWrap = (flexWrapOption) => {
  flexContainer.style.flexWrap = flexWrapOption.value;
}

const handleJustifyContent = (justifyContentOption) => {
  flexContainer.style.justifyContent = justifyContentOption.value;
}

const handleAlignItems = (alignItemsOption) => {
  flexContainer.style.alignItems = alignItemsOption.value;
}