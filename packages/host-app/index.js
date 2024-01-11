import {AppRegistry, Platform} from 'react-native';
import {name as appName} from './app.json';
import {ScriptManager, Federated} from "@callstack/repack/client";
import AppContainer from "./src/AppContainer";
import * as Sentry from "@sentry/react-native/dist/js";


ScriptManager.shared.addResolver(async (scriptId, caller) => {
    const resolveURL = Federated.createURLResolver({
        containers: {
            "MiniApp": "http://localhost:9000/[name][ext]",
            "state_management": "http://localhost:9001/[name][ext]"
        },
    });

    const url = resolveURL(scriptId, caller);
    if (!url) {
        return undefined;
    }
    return {
        url,
        cache: !__DEV__,
        query: {
            platform: Platform.OS,
        },
        timeout: 500000,
        verifyScriptSignature: 'off',
    };

});
ScriptManager.shared.on('error', (scriptIds) => {
    Sentry.captureException(new Error(JSON.stringify(scriptIds)), );
})
AppRegistry.registerComponent(appName, () => AppContainer);
