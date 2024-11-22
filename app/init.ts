import { SPAInitializer } from "@common-module/app";
import AppConfig, { IAppConfig } from "./AppConfig.js";
import { AlertDialog } from "@common-module/app-components";
import { ComingSoonIcon } from "@gaiaprotocol/svg-icons";

export default async function init(config: IAppConfig) {
  AppConfig.init(config);
  SPAInitializer.init();

  const comingSoonElements = document.querySelectorAll(
    "[onclick=\"alert('Coming soon!')\"]",
  );

  comingSoonElements.forEach((element) => {
    element.removeAttribute("onclick");
    element.addEventListener("click", (e) => {
      e.preventDefault();
      new AlertDialog({
        icon: new ComingSoonIcon(),
        title: "Coming soon",
        message: "This feature is coming soon.",
      });
    });
  });
}
