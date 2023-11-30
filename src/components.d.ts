/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
export namespace Components {
    interface AppAbout {
    }
    interface AppAnimatedIcon {
        "icon": string;
        "icons": string[];
        "in": string;
        "out": string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {
    }
    var HTMLAppAboutElement: {
        prototype: HTMLAppAboutElement;
        new (): HTMLAppAboutElement;
    };
    interface HTMLAppAnimatedIconElement extends Components.AppAnimatedIcon, HTMLStencilElement {
    }
    var HTMLAppAnimatedIconElement: {
        prototype: HTMLAppAnimatedIconElement;
        new (): HTMLAppAnimatedIconElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-about": HTMLAppAboutElement;
        "app-animated-icon": HTMLAppAnimatedIconElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppAbout {
    }
    interface AppAnimatedIcon {
        "icon"?: string;
        "icons"?: string[];
        "in"?: string;
        "out"?: string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-about": AppAbout;
        "app-animated-icon": AppAnimatedIcon;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-about": LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
            "app-animated-icon": LocalJSX.AppAnimatedIcon & JSXBase.HTMLAttributes<HTMLAppAnimatedIconElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
