import { Router, SPAInitializer } from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import { MaterialLoadingSpinner } from "@common-module/material-loading-spinner";
import AppConfig, { IAppConfig } from "./AppConfig.js";
import IntroView from "./views/IntroView.js";
import Layout from "./views/Layout.js";

export default async function init(config: IAppConfig) {
  AppConfig.init(config);
  AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
  SPAInitializer.init();

  Router
    .add("/", IntroView);

  Layout.init();
}
