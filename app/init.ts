import { Router, SPAInitializer } from "@common-module/app";
import AppConfig, { IAppConfig } from "./AppConfig.js";
import IntroView from "./views/IntroView.js";
import Layout from "./views/Layout.js";

export default async function init(config: IAppConfig) {
  AppConfig.init(config);
  SPAInitializer.init();

  Router
    .add("/", IntroView);

  Layout.init();
}
