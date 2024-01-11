import {useEffect, useState} from "react";
import remoteConfig from '@react-native-firebase/remote-config';
import {API_URL, SERVER_ADDRESS} from "../config";
import App from "./App";
import {View} from "react-native";
import {Federated} from "@callstack/repack/client";
import * as Sentry from "@sentry/react-native";
import { CaptureConsole } from '@sentry/integrations';

export const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

const AppContainer  =() =>{
    const [ready, setReady] = useState(false);

    useEffect(() => {
        Sentry.init({
            dsn: "https://104deee3370257eb6ae5b5c281df7927@o4506545683562496.ingest.sentry.io/4506545685004288",
            // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
            // We recommend adjusting this value in production.
            tracesSampleRate: 1.0,
            integrations: [
                new Sentry.ReactNativeTracing({
                    // Pass instrumentation to be used as `routingInstrumentation`
                    routingInstrumentation,
                    // ...
                }),
                new CaptureConsole({
                    levels: ['error']
                })
            ],
        });
        initReducersAndConfig();
    }, []);
    const onRCFetchAndActivate = async () => {
        // Bugsnag.notify(new Error('Test error'))

        remoteConfig()
            .setDefaults({
                // main serverand
                API_URL: API_URL,
                SERVER_ADDRESS_DEV: SERVER_ADDRESS,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then(fetchedRemotely => {
                if (fetchedRemotely) {
                    __DEV__ && console.log('Configs were retrieved from the backend and activated.');
                } else {
                    __DEV__ &&
                    console.log(
                        'No configs were fetched from the backend, and the local configs were already activated',
                    );
                }
            })
            .catch(error => console.error(error));
    };  const addInitReducers = async () => {
        // add store
        const {configStore} = await Federated.importModule('state_management', './store');

    };

    const initReducersAndConfig = () => {
        Promise.all([onRCFetchAndActivate(), addInitReducers()]).then(() => {
            setReady(true);
        });
    };
    return ready ? <App /> : <View />
}
export default Sentry.wrap(AppContainer)
